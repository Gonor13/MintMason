"use client";

import React from "react";
import { WagmiConfig, createConfig, configureChains } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { base } from "wagmi/chains";
import { publicClient } from "viem";
import "@rainbow-me/rainbowkit/styles.css";
import { useAccount } from "wagmi";
import { TransactionButton } from "@coinbase/onchainkit/transaction";

const { chains, publicClient: client } = configureChains(
  [base],
  [jsonRpcProvider({ rpc: () => ({ http: "https://mainnet.base.org" }) })]
);

const { connectors } = getDefaultWallets({
  appName: "MintMason",
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient: client
});

export default function Home() {
  const { address } = useAccount();
  const contractAddress = "0xYourContractAddressHere"; // replace after deploy

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <main style={{
          minHeight: '100vh',
          padding: 40,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#0f172a',
          color: '#fff'
        }}>
          <h1 style={{ fontSize: '2.2rem', marginBottom: 10 }}>🛠️ MintMason</h1>
          <p style={{ marginBottom: 20 }}>{address ? `Connected: ${address}` : 'Connect your wallet'}</p>

          <div style={{ marginTop: 20 }}>
            <TransactionButton
              contractAddress={contractAddress}
              method="mint"
              title="Mint NFT"
            />
          </div>

          <p style={{ marginTop: 40, color: '#9ca3af' }}>Built for Base Mainnet</p>
        </main>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}