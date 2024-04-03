import React, { useState, useEffect, useMemo } from "react";
import * as fs from "fs";
import { Connection, Keypair, PublicKey, clusterApiUrl,ComputeBudgetProgram,TransactionExpiredBlockheightExceededError, TransactionExpiredTimeoutError } from "@solana/web3.js";
import { useMetaplex } from "./useMetaplex";
import {
  useLocalStorage,
  useConnection,
  useWallet,
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import {
  PhantomWalletAdapter,
  HuobiWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
  SolongWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { MetaplexProvider } from "./MetaplexProvider";
import "./Loading.css";
import loadingIcon from "./images/loading.png";

import successIcon from "../assets/images/success.png";
import errorIcon from "../assets/images/error.png";
import closeIcon from "../assets/images/close.png";
import msgIcon from "../assets/images/msg.png";
import { getCharacterDetail, postMintInfo } from "../api/url";
import {percentAmount, generateSigner, createGenericFile } from '@metaplex-foundation/umi';
import { createNft } from '@metaplex-foundation/mpl-token-metadata';
import {createSignerFromWalletAdapter} from '@metaplex-foundation/umi-signer-wallet-adapters'
import {fromWeb3JsInstruction} from '@metaplex-foundation/umi-web3js-adapters';
import { endPoint } from "./constant";
export default function (props) {
  const [network, setNetwork] = useState(WalletAdapterNetwork.Devnet);

  // const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new HuobiWalletAdapter(),
      new SolongWalletAdapter(),
      new SolflareWalletAdapter({ network }),
      new TorusWalletAdapter(),
    ],
    [network]
  );
  // console.log(props);

  return (
    <>
      <ConnectionProvider endpoint={endPoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <MetaplexProvider>
              {/* <TestMint id={props.id}/> */}
              <MintModal onCloseModal={props.onCloseModal} id={props.id} item={props.item}/>
            </MetaplexProvider>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  );
}

const MintButton = (props) => {
  // console.log(props, "mintProps");
  const [loading, setLoading] = useState(false);
  const [imgUri, setImgUri] = useState("");
  const [imgType, setImgType] = useState("image/png");
  const [metadataUri, setMetadataUri] = useState("");
  // const [wallet, setWallet] = useLocalStorage('wallet')
  const { connection } = useConnection();
  const { metaplex, wallet } = useMetaplex();

  useEffect(() => {
    // console.log(imgUri, "====imgUri");
    if (imgUri) {
      uploadMetaData();
    }
  }, [imgUri]);

  async function uploadImage() {
    props.onShowLoading({ loading: true, msg: "" });
    // const imageUrl = 'https://cdn.solanaspaces.com/cdn-cgi/image/height=400,anim=false/https://arweave.net/E8JuuQMo3P7lAzcahqNCaQcjshYDwssM_y1wl0DrP_E?ext=png'
    // const imageUrl = props.formData.image_url;
    const imageUrl  = props.formData.is_3d ?  props.formData.glb_url : props.formData.image_url
    // const imageUrl = 'https://hai-public.oss-cn-beijing.aliyuncs.com/a0860433-0a73-4916-9ead-1f73989063e8_0.glb'
    // console.log(imageUrl, "====imageUrl");
    // console.log(`Step 1 - Uploading Image`);
    fetch(imageUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.arrayBuffer();
      })
      .then(async (arrayBuffer) => {
        const imgMetaplexFile = createGenericFile(
          arrayBuffer,
          imageUrl.split("/").pop()
        );
        // console.log(imgMetaplexFile);
        try {
          const [imgUri] = await metaplex.uploader.upload([imgMetaplexFile]);
          // console.log(`Image URI:`, imgUri);
          setImgUri(imgUri);
          setImgType(imgMetaplexFile.contentType);
        } catch (err) {
          // console.log(err, "====uplooadErr");
          props.onShowLoading({ loading: false, msg: "error" });
        }
      });
    // const imgBuffer = fs.readFileSync(props.imageUrl);
    // console.log(imgBuffer, 'imageBuffer, ======')
  }
  async function uploadMetaData() {
    const data = !props.formData.is_3d ? {
      name: props.formData.name,
      description: props.formData.description,
      image: imgUri,
      animation_url: null,
      attributes: props.formData.tags,
      properties: {
        files: [
          {
            type: imgType,
            uri: imgUri,
          },
        ],
      },
    } : {
      name: props.formData.name,
      description: props.formData.description,
      image: null,
      animation_url: imgUri,
      attributes: props.formData.tags,
      properties: {
        files: [
          {
            type: 'image/png',
            uri: null,
          },
          {
            type: 'vr/glb',
            uri: imgUri,
          },
        ],
      },
    }
    // console.log(data, '======data')
    try {
      const uri  = await metaplex.uploader.uploadJson(data);
      // console.log(uri, '======metadatUri')
      setMetadataUri(uri);
      handleMint(uri);
    } catch {
      props.onShowLoading({ loading: false, msg: "error" });
    }
  }
  function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async function CheckTransactionStatusConfirmed(transactionId: string): Promise<boolean> {
    const connection = new Connection(endPoint, 'confirmed');
    let retryAttempts = 5;
    while(retryAttempts > 0) {
        try {    
            retryAttempts--;
            const transaction = await connection.getParsedTransaction(transactionId, {
              maxSupportedTransactionVersion: 0,
            });
            
            // 检查交易是否已确认
            if (transaction) {
              // console.log('Transaction has been confirmed and details:', transaction);
              return true;
            } else {
              // console.log('Transaction is still unconfirmed or does not exist and wait 15s to retry:');
              await sleep(15000);
            }
        } catch (error) {
            console.error('Error fetching transaction and wait 15s to retry:', error);
            await sleep(15000);
        }
    }
    return false;
        
}



  async function handleMint(uri) {
    // console.log(wallet)
    // console.log(uri, '=====uri')
    const mint = generateSigner(metaplex)
    const creators = [{ address: wallet.publicKey, share: 100 }];
    const PRIORITY_RATE = 2000; 
    const PRIORITY_FEE_INSTRUCTIONS = ComputeBudgetProgram.setComputeUnitPrice({microLamports: PRIORITY_RATE});
    // const userWalletSigner = createSignerFromKeypair(umi, fromWeb3JsKeypair(wallet));
    const userWalletSigner = createSignerFromWalletAdapter(wallet);
    const priorityFeeWrappedInstruction = {
        instruction: fromWeb3JsInstruction(PRIORITY_FEE_INSTRUCTIONS),
        signers: [userWalletSigner],
        bytesCreatedOnChain: 0
    };


    const createNFTBuilder = createNft(metaplex, {
      mint,
      name: props.formData.name,
      uri,
      sellerFeeBasisPoints: percentAmount(props.formData.sellerFeeBasisPoints),
      symbol: 'STARLAND',
      creators: creators,
      isMutable: false,
      tokenOwner: metaplex.identity.publicKey, 
      authority: metaplex.identity,   
      isCollection: false,
  })
  .prepend(priorityFeeWrappedInstruction)
  .setFeePayer(userWalletSigner);

  createNFTBuilder.buildAndSign(metaplex);

  try {
    const {result} = await createNFTBuilder.sendAndConfirm(metaplex, {
        send: {
            maxRetries: 5,
        },
    })
    props.onShowLoading({ loading: false, msg: "success" });
    // console.log(`Success! The nft address is`, mint.publicKey);
    const address = `https://explorer.solana.com/address/${mint.publicKey}`
    await postMintInfo(props.formData.id, { address });
    // console.log(result)
} catch (error) {
    if (error instanceof TransactionExpiredBlockheightExceededError) {
        // console.error('TransactionExpiredBlockheightExceededError occurred:', error.message);
        const flag = await CheckTransactionStatusConfirmed(error.signature);
        if(flag) {
            // console.log(`Success! The nft address is`, mint.publicKey);
            const address = `https://explorer.solana.com/address/${mint.publicKey}`
            await postMintInfo(props.formData.id, { address });
            props.onShowLoading({ loading: false, msg: "success" });
        }else {
            props.onShowLoading({ loading: false, msg: "error" });
        }
    } else if (error instanceof TransactionExpiredTimeoutError) {
        // console.error('TransactionExpiredTimeoutError occurred:', error.message);
        const flag = await CheckTransactionStatusConfirmed(error.signature);
        if(flag) {
            // console.log(`Success! The nft address is`, mint.publicKey);
            const address = `https://explorer.solana.com/address/${mint.publicKey}`
            await postMintInfo(props.formData.id, { address });
            props.onShowLoading({ loading: false, msg: "success" });
        }else {
            props.onShowLoading({ loading: false, msg: "error" });
        }
    }  
    else {
        console.error('An error occurred, transaction send failed:', error);
        props.onShowLoading({ loading: false, msg: "error" });
    }

}




    // console.log(uri, '----metadataUri')


    // try {
    //   const { nft } = await metaplex.nfts().create(
    //     {
    //       uri,
    //       name: props.formData.name,
    //       sellerFeeBasisPoints: props.formData.sellerFeeBasisPoints,
    //       symbol: "STARLAND",
    //       creators: creators,
    //       isMutable: false,
    //     },
    //     { commitment: "finalized" }
    //   );
    //   console.log(nft, "=====nft");
    //   console.log(`Success!🎉`);
    //   console.log(
    //     `Minted NFT: https://explorer.solana.com/address/${nft.address}?cluster=devnet`
    //   );
    //   const mint = `https://explorer.solana.com/address/${nft.address}?cluster=devnet`;
    //   await postMintInfo(props.formData.id, { mint });
    //   props.onShowLoading({ loading: false, msg: "success" });
    // } catch (err) {
    //   props.onShowLoading({ loading: false, msg: "error" });
    // }
  }
  return (
    <>
      <div
        className="w-full h-10 lg:w-2/5 lg:h-14 bg-gradient-to-r from-left-gradient to-right-gradient shadow-custom  flex items-center justify-center mx-auto rounded-full mt-8 lg:mt-[65px] cursor-pointer"
        onClick={uploadImage}
      >
        MINT
      </div>
    </>
  );
};

const MintModal = (props) => {
  const [loading, setLoading] = useState();
  const [type, setType] = useState("modal");
  // console.log(props, "====mintProps");
  function handleClickClose() {
    props.onCloseModal();
  }
  
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    sellerFeeBasisPoints: 0,
  });
  const [name, setName] = useState('')
  async function getFormData() {
    setType("modal");
    setLoading(true);

    const res = await getCharacterDetail(props.id);
    const externalUrl = `${window.location.origin}/v1/character/${props.id}/home`;
    //    const attributes = JSON.stringify(res.data.tags)
    const data = {
      ...formData,
      ...res.data,
      externalUrl,
      collection: "Starland Avatar",
    };

    setFormData(data);
    setLoading(false);
    setName(res.data.name)
  }
  useEffect(() => {
    getFormData();
  }, []);

  const [msg, setMsg] = useState("");
  function showLoading({ loading, msg }) {
    setLoading(loading);
    setMsg(msg);
    setType("button");
  }
  function closeMsgModal() {
    setMsg("");
  }

  function handleChangeInput(key: string, e: object) {
    let value = e.target.value;
    if (key === "sellerFeeBasisPoints" && value > 100) {
      value = 100;
    }
    const newData = {};
    for (const oriKey in formData) {
      if (oriKey === key) {
        newData[oriKey] = value;
      } else {
        newData[oriKey] = formData[oriKey];
      }
    }
    setFormData(newData);
  }
  return (
    // fixed top-0 left-0 right-0 bottom-0 bg-model-bg z-30 bg-[#08091B] opacity-75
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-model-bg bg-modal-bg zIndex999">
      <div className="absolute bg-[#16192E] left-1/2 top-1/2 w-3/4 lg:w-2/3 -translate-x-2/4 h-3/4 overflow-y-auto lg:h-7/10 -translate-y-2/4 rounded-xl px-5 lg:px-24  z-40 2xl:w-1/2 overflow pb-2">
        <div className="cursor-pointer text-right flex justify-end absolute right-7 top-8">
          <img src={closeIcon} className="w-6 h-6" onClick={handleClickClose} />
        </div>
        <div className="lg:flex h-3/4 text-sm font-bold text-[#ccc] pt-20 mb-20 items-center">
          <div className="relative rounded-[10px] border border-slate-700 p-3 bg-[#16192E] w-2/3 mx-auto lg:w-1/3">
            <div className="relative flex h-full">
              <div className="text-white flex flex-1 flex-col text-left relative w-full">
                <div className="relative rounded-[4px] overflow-hidden">
                  <div className="w-full relative">
                    <div className="pt-[100%]">
                      <img
                        src={formData.image_url}
                        className="overflow-hidden absolute inset-0 object-contain object-center w-full bg-base-bg rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col pt-3 lg:pb-[18px] relative">
                  <div className="rounded-br-[4px] rounded-bl-[4px] absolute inset-0 opacity-40"></div>
                  <div className="relative cursor-pointer">
                    <div className="flex items-center justify-between font-inter leading-[18px] font-medium">
                      <h4 className="sm:text-xl text-2xl truncate text-ellipsis">{name}</h4>
                    </div>
                    <div className="h4 text-xl truncate mt-2 text-[#cccccc] sm:text-base">
                      By @ {formData.account_name}
                    </div>
                  </div>
                  <div className="flex justify-end items-center text-l text-[#9F38CC]">
                    <img src={msgIcon} className="w-[19px] h-[17px] mr-2" />
                    {formData.chat_count}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:ml-20 lg:flex-1">
            <div className="mb-4 lg:flex lg:items-center">
              <label class="block text-sm font-medium text-white sm:text-sm mr-4 w-28 lg:text-right mb-2 lg:mb-0 sm:w-full">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(value) => {
                  handleChangeInput("name", value);
                }}
                maxLength={20}
                className="flex-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm bg-transparent border-white focus:ring-[#9F38CC] focus:border-[#9F38CC]"
              />
            </div>
            <div className="mb-4 lg:flex items-center">
              <label
                for="description"
                className=" block text-sm font-medium text-white sm:text-sm mr-4 w-28 lg:text-right mb-2 lg:mb-0 sm:w-full"
              >
                Description
              </label>
              <input
                type="text"
                id="description"
                name="description"
                value={formData.description}
                onChange={(value) => {
                  handleChangeInput("description", value);
                }}
                className="flex-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm bg-transparent border-white focus:ring-[#9F38CC] focus:border-[#9F38CC]"
              />
            </div>
            <div className="mb-4 lg:flex items-center">
              <label
                for="sellerFeeBasisPoints"
                class="block text-sm font-medium text-white sm:text-sm mr-4 w-28 break-words lg:text-right mb-2 lg:mb-0 sm:w-full"
              >
                Seller_fee_basis_points
              </label>
              <input
                type="number"
                id="sellerFeeBasisPoints"
                name="sellerFeeBasisPoints"
                max="100"
                maxLength="3"
                value={formData.sellerFeeBasisPoints}
                onChange={(value) => {
                  handleChangeInput("sellerFeeBasisPoints", value);
                }}
                placeholder="Please input a number between 0 and 1000."
                className="flex-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm bg-transparent border-white focus:ring-[#9F38CC] focus:border-[#9F38CC]"
              />
            </div>

            <div className="mb-4 lg:flex items-center">
              <label
                for="externalUrl"
                class="block text-sm font-medium text-[#ccc] sm:text-sm mr-4 w-28 lg:text-right mb-2 lg:mb-0 sm:w-full"
              >
                External_url
              </label>
              <input
                type="text"
                id="externalUrl"
                name="externalUrl"
                value={formData.externalUrl}
                className="flex-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm bg-transparent border-[#999] cursor-not-allowed"
                disabled
              />
            </div>
            <div className="mb-4 lg:flex items-center">
              <label
                for="attributes"
                class="block text-sm font-medium  text-[#ccc] sm:text-sm mr-4 w-28 lg:text-right mb-2 lg:mb-0 sm:w-full"
              >
                Attributes
              </label>
              <div className="border border-[#999] cursor-not-allowed rounded-md px-3 py-2 shadow-sm flex-1 h-[200px] overflow-y-auto overflow relative">
                {formData.tags &&
                  formData.tags.length > 0 &&
                  formData.tags.map((items) => {
                    return (
                      <>
                       <div className="mb-2 leading-[1.5rem]">
                        {items.key}: {items.value}
                        </div>
                      </>
                     
                    );
                  })}
              </div>
            </div>
            <div className="mb-4 lg:flex items-center">
              <label
                for="collection"
                class="block text-sm font-medium text-[#ccc] sm:text-sm mr-4 w-28 lg:text-right mb-2 lg:mb-0 sm:w-full"
              >
                Collection
              </label>
              <input
                type="text"
                id="collection"
                name="collection"
                value={formData.collection}
                className="flex-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm bg-transparent border-[#999] cursor-not-allowed"
                disabled
              />
            </div>
            <div className="block lg:hidden">
             <MintButton onShowLoading={showLoading} formData={formData} item={props.item}/>
             <div className="mt-4 h-1"></div>
            </div>
         
          </div>
        </div>
        <div className="hidden lg:block">
            <MintButton onShowLoading={showLoading} formData={formData} item={props.item}/>
          
        </div>
       
      </div>
      {loading && <Loading type={type} />}
      {!loading && msg && <MsgModal msg={msg} closeMsgModal={closeMsgModal} />}
    </div>
  );
};

const Loading = (props) => {
  return (
    <div className="fixed bg-modal-bg  flex items-center justify-center z-50 left-0 right-0 top-0 bottom-0 zIndex999">
      <div className="flex-col justify-center text-[#ccc]">
        <div className="flex justify-center">
          <img src={loadingIcon} className="loading w-[72px] h-[65px]" />
        </div>
        {props.type === "button" ? (
          <>
            <div className="mt-[24px]">
              Creating an AI Avatar NFT requires three steps:
            </div>
            <div className="mt-[12px]">
              <span className="inline-block w-2 h-2 rounded-full mr-2 bg-fuchsia-700"></span>
              Upload the Avatar's photo to decentralized storage.
            </div>
            <div className="mt-[12px]">
              <span className="inline-block w-2 h-2 rounded-full mr-2 bg-fuchsia-700"></span>
              Upload NFT Metadata.
            </div>
            <div className="mt-[12px]">
              <span className="inline-block w-2 h-2 rounded-full mr-2 bg-fuchsia-700"></span>
              Mint the NFT on Solana.
            </div>
            <div className="mt-[12px]">Please be patient.</div>
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};
const MsgModal = (props) => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-[#08091B]/70  flex items-center justify-center zIndex999">
      <div className="bg-[#16192E] rounded-xl pb-24 w-1/2">
        <div className="cursor-pointer mt-8 pr-8 text-right flex justify-end">
          <img
            src={closeIcon}
            className="w-6 h-6"
            onClick={props.closeMsgModal}
          />
        </div>
        <div className="text-[#ccc] text-2xl mt-20 mb-20 text-center font-bold">
          {props.msg === "success"
            ? "NFT Minted Successfully"
            : "Failed to mint NFT, please try again"}
        </div>
        <div className="mb-10 flex justify-center">
          {props.msg === "success" ? (
            <img src={successIcon} className="w-2/5 h-auto" />
          ) : (
            <img src={errorIcon} className="w-2/5 h-auto" />
          )}
        </div>
        <div
          className="w-2/5 h-14 bg-gradient-to-r from-left-gradient to-right-gradient shadow-custom  flex items-center justify-center mx-auto rounded-56 mt-[65px] cursor-pointer"
          onClick={props.closeMsgModal}
        >
          OK
        </div>
      </div>
    </div>
  );
};
