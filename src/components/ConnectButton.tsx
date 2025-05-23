import { useAccount, useConnect, useDisconnect } from 'wagmi'

export function ConnectButton() {
  const { address, isConnected } = useAccount()
  const { connectors, connect, status, error } = useConnect()
  const { disconnect } = useDisconnect()

  if (isConnected && address) {
    return (
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium">
          {`${address.slice(0, 6)}...${address.slice(-4)}`}
        </span>
        <button 
          className='pr-8 font-extrabold text-sm bg-[#d5f70a] px-6 py-2 rounded-full cursor-pointer hover:bg-[#a4ca66] transition-colors duration-200 
          shadow-md hover:shadow-lg
          transform hover:scale-105
          active:scale-95
          focus:outline-none focus:ring-2 focus:ring-[#d5f70a] focus:ring-opacity-50'
          onClick={() => disconnect()}
        >
          {address}
        </button>
      </div>
    )
  }

  return (
    <>
      <button 
        className='pr-8 font-extrabold font-5xl bg-[#d5f70a] px-6 py-4 rounded-full cursor-pointer hover:bg-[#a4ca66] transition-colors duration-200 
        shadow-md hover:shadow-lg
        transform hover:scale-105
        active:scale-95
        focus:outline-none focus:ring-2 focus:ring-[#d5f70a] focus:ring-opacity-50'
        onClick={() => connect({ connector: connectors[0] })}
        disabled={status === 'pending'}
      >
        {status === 'pending' ? 'Connecting...' : 'Connect Wallet'}
      </button>
      {error && (
        <div className="mt-2 text-red-500 text-sm">
          {error.message}
        </div>
      )}
    </>
  )
}