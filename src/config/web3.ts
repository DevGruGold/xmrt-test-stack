
import { createAppKit } from '@reown/appkit/react'
import { EthersAdapter } from '@reown/appkit-adapter-ethers'
import { sepolia } from '@reown/appkit/networks'

// 1. Get projectId from https://cloud.reown.com
const projectId = '3c0e28ee15f49b20eebc46f23df5aa8e'

// 2. Set the networks
const networks = [sepolia]

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
