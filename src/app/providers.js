"use client";

import * as React from "react";
import {
    RainbowKitProvider,
    getDefaultWallets,
    getDefaultConfig,
    darkTheme,
    trustWallet,
    ledgerWallet,
} from "@rainbow-me/rainbowkit/wallets";

//importing the chains we need
import {
    sepolia
} from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";

const { wallets } = getDefaultWallets();

export const config = getDefaultConfig({
    appName: "ENS dapp",
    projectId: "YOUR_PROJECT_ID",
    wallets: [
        ...wallets,
        {
            groupName: "Other",
            wallets: [argentWallet, trustWallet, ledgerWallet],
        },
    ],
    chains: [
        sepolia
    ],
    ssr: true,
});

export const queryClient = new QueryClient();

export function Providers({ children }) {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider theme={darkTheme}>{children}</RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    )
}