import { createConfig, http } from 'wagmi'
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains'
import { metaMask, walletConnect, injected } from 'wagmi/connectors'

export const config = createConfig({
  chains: [mainnet, polygon], // Add your preferred chains
  connectors: [
    metaMask(),
    walletConnect({
      projectId: 'YOUR_WALLETCONNECT_PROJECT_ID', // Get from walletconnect.com
    }),
    injected(),
  ],
  transports: {
    [mainnet.id]: http(),
    [polygon.id]: http(),
  },
})