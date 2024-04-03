// import { Metaplex, walletAdapterIdentity,bundlrStorage } from '@metaplex-foundation/js';
import { MetaplexContext } from './useMetaplex';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import React, { useMemo } from 'react';
import { ComputeBudgetProgram, Keypair, Connection, TransactionExpiredBlockheightExceededError, TransactionExpiredTimeoutError} from "@solana/web3.js";
import {percentAmount, generateSigner, keypairIdentity, createGenericFile,createSignerFromKeypair } from '@metaplex-foundation/umi';
import { mplTokenMetadata,createNft }  from '@metaplex-foundation/mpl-token-metadata';
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import {irysUploader} from '@metaplex-foundation/umi-uploader-irys';
import { walletAdapterIdentity } from '@metaplex-foundation/umi-signer-wallet-adapters';
import {endPoint, address} from './constant'
export const MetaplexProvider = ({ children }) => {
  // const { connection } = useConnection();
  const wallet = useWallet();
  // console.log(wallet, '====wallet')
  const metaplex = useMemo(() => 
        createUmi(endPoint)
        .use(mplTokenMetadata())
        .use(walletAdapterIdentity(wallet))
        .use(irysUploader(
        {  
          address,
          providerUrl: endPoint,
          timeout: 60000,
        }
  )),[wallet])
// console.log(metaplex, '====metaplex');
  return (
    <MetaplexContext.Provider value={{ metaplex, wallet }}>
      {children}
    </MetaplexContext.Provider>
  )
}