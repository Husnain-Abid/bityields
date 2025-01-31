"use client"

export default function WalletModal({ isOpen, onClose }) {
  const wallets = [
    {
      id: "coinbase",
      name: "Coinbase",
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
          <rect width="40" height="40" rx="8" fill="#0052FF" />
          <path d="M20 32c6.627 0 12-5.373 12-12S26.627 8 20 8 8 13.373 8 20s5.373 12 12 12z" fill="#fff" />
          <path
            d="M19.98 24.431c-2.44 0-4.417-1.978-4.417-4.417 0-2.44 1.977-4.417 4.417-4.417 2.134 0 3.918 1.518 4.324 3.534h4.493c-.432-4.487-4.213-8-8.817-8-4.883 0-8.841 3.959-8.841 8.841 0 4.883 3.958 8.841 8.841 8.841 4.604 0 8.385-3.513 8.817-8h-4.493c-.406 2.058-2.19 3.576-4.324 3.576v.042z"
            fill="#0052FF"
          />
        </svg>
      ),
    },
    {
      id: "metamask",
      name: "MetaMask",
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
          <rect width="40" height="40" rx="8" fill="#FFF6EA" />
          <path d="M31.91 8l-9.67 7.185 1.8-4.242L31.91 8z" fill="#E17726" />
          <path
            d="M8.09 8l9.59 7.242-1.72-4.299L8.09 8zm20.138 16.802l-2.712 4.146 5.803 1.597 1.666-5.657-4.757-.086zm-20.893.086l1.657 5.657 5.803-1.597-2.712-4.146-4.748.086z"
            fill="#E27625"
          />
          <path
            d="M14.614 18.517l-1.532 2.31 5.457.248-.181-5.862-3.744 3.304zm10.772 0l-3.801-3.362-.124 5.92 5.457-.248-1.532-2.31zM14.795 28.948l3.296-1.597-2.845-2.215-.451 3.812zm7.114-1.597l3.296 1.597-.451-3.812-2.845 2.215z"
            fill="#E27625"
          />
          <path
            d="M25.205 28.948l-3.296-1.597.267 2.139-.029.9 3.058-1.442zm-10.41 0l3.058 1.442-.019-.9.248-2.139-3.287 1.597z"
            fill="#D5BFB2"
          />
          <path d="M17.911 24.707l-2.74-.8 1.932-.886.808 1.686zm4.178 0l.808-1.686 1.942.886-2.75.8z" fill="#233447" />
          <path
            d="M14.795 28.948l.47-3.965-3.182.095 2.712 3.87zm9.94-3.965l.47 3.965 2.712-3.87-3.182-.095zm2.426-4.565l-5.457.248.505 2.806.808-1.686 1.942.886 2.202-2.254zm-12.99 2.254l1.932-.886.808 1.686.515-2.806-5.457-.248 2.202 2.254z"
            fill="#CC6228"
          />
          <path
            d="M12.593 20.418l2.292 4.47-.076-2.215-2.216-2.254zm12.799 2.254l-.086 2.215 2.292-4.47-2.206 2.254zm-7.342-2.006l-.515 2.806.638 3.304.143-4.356-.266-1.754zm3.42 0l-.257 1.744.124 4.366.648-3.304-.515-2.806z"
            fill="#E27525"
          />
          <path
            d="M21.47 20.666l-.648 3.304.467.333 2.845-2.215.086-2.215-2.75.793zm-5.967-.793l.076 2.215 2.845 2.215.467-.333-.638-3.304-2.75-.793z"
            fill="#F5841F"
          />
          <path
            d="M21.851 30.39l.029-.9-.248-.219h-3.264l-.229.219.019.9-3.058-1.442 1.067.876 2.169 1.502h3.325l2.178-1.502 1.067-.876-3.058 1.442z"
            fill="#C0AC9D"
          />
          <path
            d="M21.909 27.351l-.467-.333h-2.883l-.467.333-.248 2.139.229-.219h3.264l.248.219.324-2.139z"
            fill="#161616"
          />
          <path
            d="M30.157 16.149l.781-3.793-1.485-4.356-7.542 5.595 2.902 2.453 4.101 1.197.905-1.054-.391-.286.629-.571-.486-.38.629-.476-.443-.329zM9.062 12.356l.781 3.793-.495.371.629.476-.477.38.629.571-.391.286.895 1.054 4.101-1.197 2.902-2.453-7.542-5.595-1.485 4.356z"
            fill="#763E1A"
          />
          <path
            d="M29.449 21.294l-4.101-1.197 1.237 1.868-1.847 3.584 2.445-.029h3.649l-1.383-4.226zm-14.797-1.197l-4.101 1.197-1.37 4.226h3.639l2.435.029-1.837-3.584 1.237-1.868zm5.565 2.082l.267-4.574 1.2-3.241h-5.327l1.2 3.241.257 4.574.124 1.407.01 3.47h1.932l.01-3.47.124-1.407z"
            fill="#F5841F"
          />
        </svg>
      ),
    },
    {
      id: "smart-wallet",
      name: "Smart Wallet",
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
          <rect width="40" height="40" rx="8" fill="#0F6FFF" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M28 14.5c0-.829-.672-1.5-1.5-1.5h-13c-.828 0-1.5.671-1.5 1.5v11c0 .829.672 1.5 1.5 1.5h13c.828 0 1.5-.671 1.5-1.5v-11zm-14.5-3h13c1.933 0 3.5 1.567 3.5 3.5v11c0 1.933-1.567 3.5-3.5 3.5h-13c-1.933 0-3.5-1.567-3.5-3.5v-11c0-1.933 1.567-3.5 3.5-3.5z"
            fill="#fff"
          />
          <path d="M27 19h-4c-1.1 0-2 .9-2 2s.9 2 2 2h4v-4z" fill="#fff" />
        </svg>
      ),
    },
  ]

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-sm rounded-2xl bg-white shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="text-lg font-medium">Connect my wallet</h2>
          <button onClick={onClose} className="rounded-lg p-1 hover:bg-gray-100">
            <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Wallet List */}
        <div className="p-2">
          {wallets.map((wallet) => (
            <button
              key={wallet.id}
              className="flex w-full items-center gap-3 rounded-lg p-3 transition-colors hover:bg-gray-50"
              onClick={() => {
                console.log(`Connecting to ${wallet.name}...`)
                onClose()
              }}
            >
              {wallet.icon}
              <span className="text-sm font-medium">{wallet.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

