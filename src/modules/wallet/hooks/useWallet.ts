import React from 'react'
import { IState, WalletContext } from '../context/wallet'

const useWallet = (): IState => React.useContext(WalletContext)
export default useWallet
