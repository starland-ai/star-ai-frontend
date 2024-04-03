import { createContext, useContext } from 'react';

const DEFAULT_CONTEXT = {
  metaplex: null,
  wallet:null
};

export const MetaplexContext = createContext(DEFAULT_CONTEXT);
// console.log('MetaplexContext', MetaplexContext)
export function useMetaplex() {
  return useContext(MetaplexContext);
}