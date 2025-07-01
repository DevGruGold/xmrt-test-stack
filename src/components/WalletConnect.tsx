
import { useAppKit } from '@reown/appkit/react'
import { Button } from "@/components/ui/button"
import { Wallet } from "lucide-react"

const WalletConnect = () => {
  const { open } = useAppKit()

  return (
    <Button 
      onClick={() => open()}
      className="xmrt-gradient text-black font-semibold hover:opacity-90"
    >
      <Wallet className="mr-2 h-4 w-4" />
      Connect Wallet
    </Button>
  )
}

export default WalletConnect
