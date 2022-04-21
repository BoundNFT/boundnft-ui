import WalletConnectProvider from '@walletconnect/web3-provider'
import MULTICALL_ABI from './abis/multicall.json'

export const INFURA_ID = process.env.NEXT_PUBLIC_INFURA_ID || 'b49c0bdd7b474ccd9b0ac4ab7ae4820c'
export const NETWORK = process.env.NEXT_PUBLIC_NETWORK || 'rinkeby'
export const DEFAULT_CHAIN_ID = process.env.NEXT_PUBLIC_CHAIN_ID || '4'

export const providerOptions = {
  metamask: {
    id: 'injected',
    name: 'MetaMask',
    type: 'injected',
    check: 'isMetaMask',
    package: null
  },
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: INFURA_ID, // Required
      network: NETWORK,
      qrcodeModalOptions: {
        mobileLinks: ['rainbow', 'metamask', 'argent', 'trust', 'imtoken', 'pillar']
      }
    }
  }
}

type ApiEndpoint = 'BOUND_BNFT' | 'BOUND_NFTAPI'

export const API_ENDPOINTS: {
  [chainId: string]: {
    [key in ApiEndpoint]: string
  }
} = {
  '1': {
    BOUND_BNFT: 'https://bend-subgraph-mainnet.benddao.xyz/subgraphs/name/bend/bnft-protocol',
    BOUND_NFTAPI: 'https://bend-goservice-mainnet.benddao.xyz/graphql/query'
  },
  '4': {
    BOUND_BNFT: 'https://bend-subgraph-rinkeby.benddao.xyz/subgraphs/name/bend/bnft-protocol',
    BOUND_NFTAPI: 'https://bend-goservice-rinkeby.benddao.xyz/graphql/query'
  }
}

const MULTICALL_NETWORKS: { [key: number]: string; }  = {
  1: '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441',
  4: '0x42Ad527de7d4e9d9d011aC45B31D8551f8Fe9821',
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }

export const NEVER_RELOAD = {
  blocksPerFetch: Infinity
}
