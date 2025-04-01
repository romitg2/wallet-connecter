"use client";
import { ethers } from "ethers";
import { useState } from "react";

declare global {
  interface Window {
    ethereum?: any
  }
}

export function useWeb3() {
  const [account, setAccount] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);

  const connectWallet = async () => {
    if (window.ethereum == undefined) {
      alert("Please install MetaMask");
      return;
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    const accounts = await provider.send('eth_requestAccounts', []);
    setAccount(accounts[0]);
    setIsConnected(true);
  };

  return {
    connectWallet,
    account,
    isConnected,
  };
}
