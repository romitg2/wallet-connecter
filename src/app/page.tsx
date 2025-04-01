'use client';

import { useWeb3 } from "../../hooks/useWeb3";

export default function Home() {

  const { connectWallet, account, isConnected } = useWeb3();

  return (
    <div>
      {isConnected && <p>Connected to {account}</p>}
      {!isConnected && (<button onClick={connectWallet} className="bg-black text-white font-bold text-lg rounded-md w-40 text-white p-2"> connect wallet </button>)}
    </div>
  )
}
