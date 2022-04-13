import React, { useCallback, useEffect } from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { useState } from "react";
import { NETWORK, providerOptions } from "../constants";
import { Web3Provider } from "@ethersproject/providers";

/**
 * Interfaces & types
 */
export interface IState {
  account: string;
  connectWallet: () => void;
  library: Web3Provider | undefined;
}

/** @constant {IState} */
const initialState: IState = {
  account: "",
  connectWallet: () => {},
  library: undefined,
};

/**
 * Wallet context init
 * @param initialState
 */
export const WalletContext = React.createContext<IState>(initialState);

/**
 * WalletContextProvider
 * @param {ReactElement} children
 * @return {ReactElement}
 */
const WalletContextProvider: React.FC = ({ children }): React.ReactElement => {
  const [provider, setProvider] = useState<any>();
  const [library, setLibrary] = useState<Web3Provider>();
  const [web3Modal, setWeb3Modal] = useState<Web3Modal>();
  const [account, setAccount] = useState("");
  const [error, setError] = useState<any>("");

  useEffect(() => {
    if (typeof window !== "undefined" && "ethereum" in window) {
      setWeb3Modal(
        new Web3Modal({
          network: NETWORK,
          cacheProvider: true,
          providerOptions,
        })
      );
    }
  }, []);

  const refreshState = useCallback(() => {
    setAccount("");
  }, []);

  const disconnect = async () => {
    console.log("disconnect");
    await web3Modal?.clearCachedProvider();
    refreshState();
  };

  useEffect(() => {
    if (web3Modal?.cachedProvider) {
      connectWallet();
    }
  }, [web3Modal]);

  useEffect(() => {
    if (!provider) return;
    if (provider?.on) {
      const handleAccountsChanged = (accounts: any) => {
        console.log("accountsChanged", accounts);
        if (accounts[0]) setAccount(accounts[0]);
        else {
          setAccount("");
          web3Modal?.clearCachedProvider();
        }
      };

      const handleChainChanged = (_hexChainId: number) => {
        console.log("handleChainChanged", _hexChainId);
      };

      const handleDisconnect = () => {
        console.log("disconnect", error);
        disconnect();
      };

      provider.on("accountsChanged", handleAccountsChanged);
      provider.on("chainChanged", handleChainChanged);
      provider.on("disconnect", handleDisconnect);

      return () => {
        if (provider.removeListener) {
          provider.removeListener("accountsChanged", handleAccountsChanged);
          provider.removeListener("chainChanged", handleChainChanged);
          provider.removeListener("disconnect", handleDisconnect);
        }
      };
    }
  }, [provider]);

  const connectWallet = useCallback(async () => {
    try {
      const provider = await web3Modal?.connect();
      const library = new ethers.providers.Web3Provider(provider);
      const accounts = await library.listAccounts();
      //const network = await library.getNetwork()
      setProvider(provider);
      setLibrary(library);
      if (accounts) setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
      setError(error);
    }
  }, [web3Modal]);

  return (
    <WalletContext.Provider
      value={{
        account,
        connectWallet,
        library,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export default WalletContextProvider;
