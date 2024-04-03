import {
    WalletAdapterNetwork,
    WalletNotConnectedError,
  } from "@solana/wallet-adapter-base";
  import {
    ConnectionProvider,
    WalletProvider,
    useConnection,
    useWallet,
  } from "@solana/wallet-adapter-react";
  import {
    WalletModalProvider,
    WalletMultiButton,
  } from "@solana/wallet-adapter-react-ui";
  import { Button } from "@solana/wallet-adapter-react-ui/lib/types/Button";
  import {
    Metaplex,
    keypairIdentity,
    bundlrStorage,
    toMetaplexFile,
    walletAdapterIdentity,
  } from "@metaplex-foundation/js";
  import reportWebVitals from "./reportWebVitals.ts";
  import {
    PhantomWalletAdapter,
    SolflareWalletAdapter,
    HuobiWalletAdapter,
    SolongWalletAdapter,
    TorusWalletAdapter,
  } from "@solana/wallet-adapter-wallets";
  import fs from "fs";
  
  import {
    clusterApiUrl,
    Transaction,
    SystemProgram,
    Keypair,
    LAMPORTS_PER_SOL,
    PublicKey,
  } from "@solana/web3.js";
  import React, {
    FC,
    ReactNode,
    useMemo,
    useCallback,
    useState,
    useEffect,
  } from "react";
  import { Buffer } from "buffer";
  // import { actions, utils, programs, NodeWallet} from '@metaplex/js';
  
  import "./App.css";
  import { resolve } from "path";
  import {MetaplexProvider} from './MetaplexProvider.jsx'
  import  {useMetaplex} from './useMetaplex.js'
  import {login} from '@/api/url.js'
  import {getToken} from '@/utils/tool.js'
  import _ from 'loadsh'
  import walletTextMap from './language.json'
  reportWebVitals();
  window.Buffer = window.Buffer || Buffer;
  
  // require('./App.css');
  // require('@solana/wallet-adapter-react-ui/styles.css');
  const thelamports = 0;
  const theWallet = "9m5kFDqgpf7Ckzbox91RYcADqcmvxW4MmuNvroD5H2r9";
  
  function getWallet() {}
  const App = (props) => {
    function triggerVue (type){
      props.onClick(type)
    }
    return (
      <Context>
        <Content language={props.language} triggerVue={triggerVue}/>
      </Context>
      // <div>11</div>
    );
  };
  
  export default App;
  
  const Context: FC<{ children: ReactNode }> = ({ children }) => {
    // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
    // console.log(children, "====children");
    const network = WalletAdapterNetwork.Devnet;
  
    // You can also provide a custom RPC endpoint.
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  
    // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
    // Only the wallets you configure here will be compiled into your application, and only the dependencies
    // of wallets that your users connect to will be loaded.
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
    return (
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <MetaplexProvider>
              {children}
            </MetaplexProvider>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    );
  };
  
  const Content: FC = (props) => {
    const [walletText, setWalletText] = useState("");
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();
    const [loading, setLoading] = useState(false);
    const wallet = useWallet();
    const {metaplex} = useMetaplex ()
    let [count, setCount] = useState(0)
    // console.log(metaplex.storage, '======storgemetaplex')
    // console.log(metaplex, '===APPMetaplex')
    function getUserInfo(type) {
      props.triggerVue(type)
    }
    async function handleLogin(data) {
      // if(loading) return
      const token = localStorage.getItem('token')
      if (token) {
        getUserInfo('get')
      }else {
        setLoading(true)
        try{
          const res = await login(data)
          // console.log(res)
          if(res.code === '0') {
            localStorage.setItem('token', res.data)
            getUserInfo('get')
          }
        }catch(err) {
          // console.log(err)
        }finally{
          setLoading(false)
        }
      }
    
    }
    useMemo(() => {
      const lang = props.language || 'en';
      if(wallet.publicKey) {
          const base58 = wallet.publicKey.toBase58();
          setWalletText(base58.slice(0, 4) + '..' + base58.slice(-4));
          setCount(count++)
          handleLogin({id: base58})
          localStorage.setItem('address', base58)
      }else if (!wallet.connected && !wallet.connecting) {
        localStorage.removeItem('token')
        localStorage.removeItem('address')
        getUserInfo('clear')
        setWalletText(walletTextMap[lang]["Connect Wallet"]);
      } else if (!wallet.connected && wallet.connecting) {
        setWalletText(walletTextMap[lang].Connecting);
      } else if (wallet.connected && !wallet.connecting) {
        setWalletText(walletTextMap[lang].Connect);
      } else if (wallet.disconnecting) {
        setWalletText("Connect");
      }
    }, [wallet, props.language]);
    useEffect(() => {
      // console.log(loading, "====loading");
    }, [loading]);
  

    return (
      <>
        <WalletMultiButton>{walletText}</WalletMultiButton>
      </>
    
    );
  };