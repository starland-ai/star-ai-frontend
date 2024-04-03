import React, { useState,useEffect,useMemo } from 'react'
import * as fs from 'fs';
import * as web3 from "@solana/web3.js";
import {
    PublicKey,
    clusterApiUrl,
    Connection,
    ComputeBudgetProgram,
    TransactionExpiredBlockheightExceededError,
    TransactionExpiredTimeoutError
  } from '@solana/web3.js'
import { Metaplex, keypairIdentity, bundlrStorage, toMetaplexFile, walletAdapterIdentity } from "@metaplex-foundation/js";
import { useMetaplex } from "./useMetaplex";
import { useLocalStorage, useConnection, useWallet , ConnectionProvider, WalletProvider,useAnchorWallet } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import * as anchor from "@coral-xyz/anchor";
import {AnchorProvider, Program, BN} from "@coral-xyz/anchor";
import idl from './idl.json'
import {
    WalletModalProvider,
    WalletMultiButton,
  } from "@solana/wallet-adapter-react-ui";
import {
    PhantomWalletAdapter,
    HuobiWalletAdapter,
    SolflareWalletAdapter,
    TorusWalletAdapter,
    SolongWalletAdapter
  } from '@solana/wallet-adapter-wallets';
import { MetaplexProvider } from './MetaplexProvider';
import {getClaimPoints, getUserInfo, postPoints} from '@/api/url'
import { endPoint, pointProgramID } from "./constant";
export default function (props) {
    // console.log(props)
    // console.log(props.onClick)
    const [network, setNetwork] = useState(WalletAdapterNetwork.Devnet);

//   const endpoint = useMemo(() => clusterApiUrl(network), [network]);

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
    function triggerVue (val){
        props.onClick(val)
    }
  return (
   <>
    <ConnectionProvider endpoint={endPoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <ClaimButton triggerVue={triggerVue} points={props.points}/>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
     
   </>
  );
}


const MintButton =  (props) => {
    const { connection } = useConnection();
    const wallet1 = useWallet()
    const [pointAddress, setPointAddress] = useState('')
    const [signautre, setSignautre] = useState('')
    const [program, setProgram] = useState(null)
    const [loading, setLoading] = useState(false)
    const [systemProgram, setSystemProgram] = useState(null)
    const PRIORITY_FEE_INSTRUCTIONS = ComputeBudgetProgram.setComputeUnitPrice({microLamports: 3000});
    async function handleGetUserInfo(address:string) {
        const res = await getUserInfo(address)
        // console.log(res)
        setPointAddress(res.data.solana_addr)
        // console.log('handleGetUserInfo')
    }
    useEffect(() => {
        const address = localStorage.getItem('address') || ''
        handleGetUserInfo(address)
        handleGetClaimPoints()
    },[])
    async function handleGetClaimPoints(isOk= false) {
        const res = await getClaimPoints({claim_points: props.points, is_ok: isOk})
        if(res.code === '0') {
            // console.log(res)
            const data = res.data
            setSignautre(data)
        }
    }

    function handleLoading(val) {
        props.triggerVue(val)
    }
    async function CheckTransactionStatusConfirmed(transactionId: string): Promise<boolean> {
        let retryAttempts = 5;
        const connection = new Connection(endPoint, 'confirmed');
        while(retryAttempts > 0) {
            try {    
                retryAttempts--;
                const transaction = await connection.getParsedTransaction(transactionId, {
                  maxSupportedTransactionVersion: 0,
                });
                
           
                if (transaction) {
              
                  return true;
                } else {
              
                  await sleep(15000);
                }
            } catch (error) {
             
                await sleep(15000);
            }
        }
        return false;
      }
      
      function sleep(ms: number): Promise<void> {
          return new Promise(resolve => setTimeout(resolve, ms));
      }
      
      
    async function handleInit(signautre) {
        handleLoading({loading: true, msg: ''})
        const user_points = anchor.web3.Keypair.generate();
 
        const publicKeyOrAddress = user_points.publicKey.toBase58();
        // console.log("The user points publickey:", publicKeyOrAddress);
        const user_points_publicKey = new anchor.web3.PublicKey(publicKeyOrAddress);
        // console.log(user_points_publicKey.toBase58());
       
        // await 
        try {
            const txHash = await program.methods
            .initialize(program.provider.publicKey)
                .accounts({
                    userPoints: user_points.publicKey,
                    authority: program.provider.publicKey,
                    systemProgram: systemProgram.systemProgram.programId,
                })
                .preInstructions([PRIORITY_FEE_INSTRUCTIONS])
                .signers([user_points])
                .rpc(
                    {
                        commitment: 'confirmed',
                        maxRetries: 5,
                        skipPreflight: true, 
                    }
                );
            // console.log(txHash);
            // console.log(user_points.publicKey);
            setPointAddress(publicKeyOrAddress)
            setProgram(program)
            const address = localStorage.getItem('address') || ''
            const res = await postPoints(address, {solana_addr: publicKeyOrAddress})
            getPoints(signautre, publicKeyOrAddress)
        }catch(error) {
            // console.log(error)

            if (error instanceof TransactionExpiredBlockheightExceededError) {
                // console.error('TransactionExpiredBlockheightExceededError occurred:', error.message);
                const flag = await CheckTransactionStatusConfirmed(error.signature);
                if(flag) {
                    getPoints(signautre, publicKeyOrAddress)
                }else {
                    handleLoading({loading: false, msg: 'error'})

                }
              } else if (error instanceof TransactionExpiredTimeoutError) {
                //   console.error('TransactionExpiredTimeoutError occurred:', error.message);
                  const flag = await CheckTransactionStatusConfirmed(error.signature);
                  if(flag) {
                    getPoints(signautre, publicKeyOrAddress)
                  }else {
                    handleLoading({loading: false, msg: 'error'})
                  }
              }
              else {
                //   console.error('An error occurred, transaction send failed:', error);
                  handleLoading({loading: false, msg: 'error'})
              }
        }
       
    }
    async function handleWallet(wallet) {
        const  { publicKey, signTransaction, signAllTransactions } = wallet
        // console.log(publicKey, signTransaction, signAllTransactions )
        let anchorWallet
        if(publicKey && signTransaction && signAllTransactions) {
            anchorWallet = {publicKey, signTransaction, signAllTransactions}
            
            const provider = new AnchorProvider(connection, anchorWallet, {
            preflightCommitment: 'confirmed',
            });
            
            const programID = new PublicKey(pointProgramID);
            const program = new Program(idl, programID, provider);
            const { SystemProgram } = anchor.web3;
          
            setProgram(program)
            setSystemProgram({systemProgram: SystemProgram})
        }
       
    }

    async function getPoints(signautre,pointAddress) {
        handleLoading({loading: true, msg: ''})
        const user_points_publicKey_initialized = new anchor.web3.PublicKey(pointAddress);
        const string = signautre
        const uint8Array = new Uint8Array(string.length);
        for (let i = 0; i < string.length; i++) {
            uint8Array[i] = string.charCodeAt(i);
        }

        const numberArray = [];
        for (let i = 0; i < uint8Array.length; i++) {
            numberArray.push(uint8Array[i]);
        }

        const signatureArray = numberArray;
        // console.log(props.points)
        const amount1 = new anchor.BN(props.points);


        try {
            const txHash2 = await program.methods
            .claimPoints(amount1, signatureArray)
            .accounts({
                userPoints: user_points_publicKey_initialized,
                authority: program.provider.publicKey,
            })
            .preInstructions([PRIORITY_FEE_INSTRUCTIONS])
            .signers([])
            .rpc(
                {
                    commitment: 'confirmed',
                    maxRetries: 5,
                    skipPreflight: true, 
                }
            );
          
        const dataOnChain = await program.account.userPoints.fetch(
            user_points_publicKey_initialized
        );
      

        const sigString = String.fromCharCode(...dataOnChain.lastSignature);
       
        await handleGetClaimPoints(true)
        handleLoading({loading: false, msg: 'success'})
        }catch(error) {
            if (error instanceof TransactionExpiredBlockheightExceededError) {
               
                const flag = await CheckTransactionStatusConfirmed(error.signature);
                if(flag) {
                    await handleGetClaimPoints(true)
                    handleLoading({loading: false, msg: 'success'})
                }else {
                    await handleGetClaimPoints(false)
                    handleLoading({loading: false, msg: 'error'})

                }
              } else if (error instanceof TransactionExpiredTimeoutError) {
                  console.error('TransactionExpiredTimeoutError occurred:', error.message);
                  const flag = await CheckTransactionStatusConfirmed(error.signature);
                  if(flag) {

                    await handleGetClaimPoints(true)
                    handleLoading({loading: false, msg: 'success'})
                  }else {
                    await handleGetClaimPoints(false)
                    handleLoading({loading: false, msg: 'error'})
                  }
              }
              else {
                  console.error('An error occurred, transaction send failed:', error);
                  await handleGetClaimPoints(false)
                  handleLoading({loading: false, msg: 'error'})
              }
          
            
        }

       
    }
    async function handleConfirm() {
        if(pointAddress && signautre) {
            getPoints(signautre,pointAddress)
        }else {
            handleInit(signautre)
           
        }
    }
    useEffect(() => {
        const { publicKey, signTransaction, signAllTransactions } = wallet1
        if(publicKey && signTransaction && signAllTransactions) {
            handleWallet(wallet1)
        }
       
    },[wallet1])
    
 
    return  (
        <div className='w-4/5 h-10 md:w-2/5 md:h-14 bg-gradient-to-r from-left-gradient to-right-gradient shadow-custom  flex items-center justify-center mx-auto rounded-56 mt-[36px] md:mt-[65px] cursor-pointer' onClick={handleConfirm}>
            CONFIRM
        </div>
    )
}



const ClaimButton = (props) =>{
    return (
        <div>
            <MintButton triggerVue={props.triggerVue} points={props.points}/>
        </div>
    )
}
