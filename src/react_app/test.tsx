
import React,{ useMemo, useState, useEffect } from 'react';

import './App.css'
import UploadMint from './uploadMint';
export default function Test(props) {
  //   console.log(props, '=====TestProps')
  // const [network, setNetwork] = useState(WalletAdapterNetwork.Testnet);

  // const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  // const wallets = useMemo(
  //   () => [
  //       new PhantomWalletAdapter(),
  //       new HuobiWalletAdapter(),
  //       new SolongWalletAdapter(),
  //       new SolflareWalletAdapter({ network }),
  //       new TorusWalletAdapter(),
  //   ],
  //   [network]
  // );
  const [show, setShow] = useState(false)
  function handleClick() {
    setShow(true)
  }
  function handleCloseModal () {
    setShow(false)
  }
    return (
        <>
            <button
                        className="bg-button absolute right-3 top-3  rounded-full m-auto text-center  w-16 h-7 text-sm  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..."
                        onClick={handleClick}
                      >
                        Mint
                      </button>
                {
        show && 
        <UploadMint id={props.id} item={props.item} onCloseModal={handleCloseModal}/>
      }
        </>
    )
}