
import { createAppKit } from '@reown/appkit/react'
import { EthersAdapter } from '@reown/appkit-adapter-ethers'

// 1. Get projectId from https://cloud.reown.com
const projectId = '3c0e28ee15f49b20eebc46f23df5aa8e'

// 2. Set the networks - Define Sepolia testnet properly
const networks = [{
  id: 11155111,
  name: 'Sepolia',
  nativeCurrency: {
    name: 'Sepolia Ether',
    symbol: 'ETH',
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ['https://sepolia.infura.io/v3/', 'https://rpc.sepolia.org']
    }
  },
  blockExplorers: {
    default: {
      name: 'Etherscan',
      url: 'https://sepolia.etherscan.io'
    }
  },
  testnet: true
}]

// 3. Create a metadata object - optional
const metadata = {
  name: 'XMRT Protocol',
  description: 'Privacy-First DeFi Protocol',
  url: 'https://xmrt.app', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

// 4. Create Ethers config with new keyword
const ethersConfig = new EthersAdapter()

// 5. Create a AppKit instance
createAppKit({
  adapters: [ethersConfig],
  networks,
  metadata,
  projectId,
  features: {
    analytics: true // Optional - defaults to your Cloud configuration
  }
})

export { projectId }
