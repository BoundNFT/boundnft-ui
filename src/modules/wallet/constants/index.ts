import WalletConnectProvider from '@walletconnect/web3-provider'

export const INFURA_ID = process.env.NEXT_PUBLIC_INFURA_ID || 'b49c0bdd7b474ccd9b0ac4ab7ae4820c'
export const NETWORK = process.env.NEXT_PUBLIC_NETWORK || 'rinkeby'

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
