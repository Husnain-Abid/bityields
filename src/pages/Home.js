import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import landing from "../asset/Landing.png"
import coin1 from "../asset/Ethereum.png"
import coin2 from "../asset/bitcoin.png"
import coin3 from "../asset/bitvoin.png"
import coin4 from "../asset/Etherum.png"


export default function Home() {

  const [activeStrategy, setActiveStrategy] = useState('BTC');

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);



  const [amount, setAmount] = useState("")
  const availableBalance = "1.3310e-8"
  const percentages = [25, 50, 75, 100]

  const handlePercentageClick = (percentage) => {
    const maxAmount = Number.parseFloat(availableBalance)
    const calculatedAmount = (maxAmount * percentage) / 100
    setAmount(calculatedAmount.toString())
  }


  const navigate = useNavigate();



  return (
    <>
      {/* Hero Section */}
      <div className="text-center relative overflow-hidden">
        <div className="">
          <img
            src={landing}
            alt="BitYields Logo"

            className="w-full"
          />
        </div>
      </div>

      {/* Strategy Cards */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <h2 className="text-sm font-bold mb-6">Overview <button className='ml-2 rounded-full text-xs py-1 px-3 bg-[#FFA900]/10   text-[#FFA900]  border border-[#FFA900]'>LIVE</button></h2>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {/* BTC Strategy */}
          <div className="bg-[#FFF6E5] rounded-2xl p-4 sm:p-6">
            <div className="flex items-center gap-4 mb-4">
              {/* bitcoin  */}
              <div >
                <img src={coin2} alt="" className="w-9 h-9 object-contain" />
              </div>
              <div>
                <h3 className="font-medium">Strategy BTC</h3>
                <p className="text-xs text-gray-600">Uniswap & Aave</p>
              </div>
            </div>

            <p className="text-sm text-black font-medium mb-2">API Projected VS Hold BTC</p>
            <p className="text-3xl sm:text-4xl font-bold mb-6">20%</p>

            <div className="flex gap-4">
              <button className="flex-1 bg-black text-white py-2 rounded text-sm sm:text-base">Invest</button>
              <button className="flex-1 border border-black py-2 rounded text-sm sm:text-base" onClick={() => navigate("/strategy-btc")}>Details</button>
            </div>
          </div>

          {/* ETH Strategy */}
          <div className="bg-[#F9F9FA] rounded-2xl p-4 sm:p-6 border">
            <div className="flex items-center gap-4 mb-4">

              <div >
                <img src={coin1} alt="" className="w-10 h-10  object-contain" />
              </div>


              <div>
                <h3 className="font-medium">Strategy ETH</h3>
                <p className="text-xs  text-gray-600">Uniswap & Aave</p>
              </div>
            </div>

            <p className="text-sm font-medium text-black mb-2">API Projected VS Hold ETH</p>
            <p className="text-3xl sm:text-4xl font-bold mb-6">35%</p>

            <div className="flex gap-4">
              <button className="flex-1 bg-black text-white py-2 rounded text-sm sm:text-base">Invest</button>
              <button className="flex-1 border border-black py-2 rounded text-sm sm:text-base" onClick={() => navigate("/strategy-eth")}>Details</button>
            </div>
          </div>
        </div>



        {/* Investment & Stats Section */}

        <div className="mt-8 sm:mt-12 grid sm:grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Investment Section */}
          <div className="sm:col-span-1 lg:col-span-2  rounded-2xl p-6 bg-[#F9F9FA]">
            <div className="flex justify-between gap-4 mb-6 overflow-x-auto">
              <div>
                <span className='text-black text-sm font-semibold'> My Invest </span>
              </div>

              <div className='hidden md:block'>
                {/* Strategy Buttons */}
                <button
                  onClick={() => setActiveStrategy('BTC')}
                  className={`px-4 py-1 rounded-full whitespace-nowrap mr-2 ${activeStrategy === 'BTC' ? 'bg-black text-white' : 'bg-white text-black'}`}
                >
                  Stratégie BTC
                </button>
                <button
                  onClick={() => setActiveStrategy('ETH')}
                  className={`px-4 py-1 rounded-full whitespace-nowrap ${activeStrategy === 'ETH' ? 'bg-black text-white' : 'bg-white text-black'}`}
                >
                  Stratégie ETH
                </button>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Conditionally Render Deposit Box */}
              {activeStrategy === 'BTC' ? (
                <div className="bg-white p-4 sm:p-6 rounded-xl border relative">
                  <h3 className="font-medium text-xl mb-4">Deposit (BTC)</h3>
                  <p className="text-sm font-normal mb-2">BTC deposited in the strategy</p>
                  <p className="text-xl sm:text-2xl font-bold mb-6 text-[#FFA900]">XXXX BTC</p>

                  <div className="flex gap-4">
                    <button className="flex-1 bg-black text-white py-2 rounded text-sm sm:text-base relative" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                      Invest
                    </button>
                    <button className="flex-1 border py-2 rounded text-sm sm:text-base">Close</button>
                  </div>


                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute left-0 mt-2 w-[350px] md:w-[450px] bg-white border rounded-lg shadow-md z-10">



                      {/* Modal */}


                      <div className="w-full  rounded-xl bg-white p-4">
                        {/* Header */}
                        <div >

                          <div className="">
                            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="rounded-lg hover:bg-gray-100">
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M12 4L4 12M4 4L12 12"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </button>
                          </div>

                          <div className='flex  justify-between border-b pb-1'>
                            <h2 className="text-base font-semibold">Deposits assets</h2>
                            <button className="text-sm underline ">Swap</button>

                          </div>

                        </div>

                        {/* Content */}
                        <div className="mt-3 space-y-4">
                          <div className='flex justify-between items-center'>

                            <div className="text-sm">
                              Available: <span className="font-medium">{availableBalance}</span>
                            </div>

                            {/* Percentage buttons */}
                            <div className="flex gap-2">
                              {percentages.map((percentage) => (
                                <button
                                  key={percentage}
                                  onClick={() => handlePercentageClick(percentage)}
                                  className="flex-1 rounded-full border border-gray-500 text-blank px-3 py-1.5 text-sm  hover:bg-gray-50"
                                >
                                  {percentage}%
                                </button>
                              ))}
                            </div>

                          </div>




                          {/* Input and currency selector */}
                          <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-[#F2F3F7] px-3 py-2 ">
                            <div className="relative flex-1">
                              <span className="absolute left-1 top-1/2 -translate-y-1/2 text-sm px-3 py-1 rounded-full bg-gray-200">max</span>

                              <input
                                type="text"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                placeholder="0.00"
                                className="w-full px-3 py-2 text-lg text-right bg-[#F2F3F7] "
                              />
                            </div>

                            {/* Custom dropdown */}
                            <div className="relative">
                              <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="flex w-[100px] items-center justify-between gap-2 rounded-lg border bg-white border-gray-200 px-3 py-2 hover:bg-gray-50"
                              >
                                <div className="flex items-center gap-2">
                                  <div className="relative h-5 w-5">
                                    <img
                                      src={coin4}
                                      alt="ETH"
                                      fill
                                      className="rounded-full"
                                    />
                                  </div>
                                  <span>ETH</span>
                                </div>
                                <svg
                                  width="12"
                                  height="12"
                                  viewBox="0 0 12 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                                >
                                  <path
                                    d="M2.5 4.5L6 8L9.5 4.5"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </button>

                              {isOpen && (
                                <div className="absolute right-0 top-full z-10 mt-1 w-[100px] rounded-lg border border-gray-200 bg-white py-1 shadow-lg">
                                  <button
                                    onClick={() => setIsOpen(false)}
                                    className="flex w-full items-center gap-2 px-3 py-2 hover:bg-gray-50"
                                  >
                                    <div className="relative h-5 w-5">
                                      <img
                                        src={coin3}
                                        alt="ETH"
                                        fill
                                        className="rounded-full"
                                      />
                                    </div>
                                    <span>BTC</span>

                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>





                    </div>

                  )}
















                </div>
              ) : (
                <div className="bg-white p-4 sm:p-6 rounded-xl border relative">
                  <h3 className="font-medium text-xl mb-4">Deposit (ETH)</h3>
                  <p className="text-sm font-normal mb-2">ETH deposited in the strategy</p>
                  <p className="text-xl sm:text-2xl font-bold mb-6 text-[#FFA900]">XXXX ETH</p>

                  <div className="flex gap-4">
                    <button className="flex-1 bg-black text-white py-2 rounded text-sm sm:text-base"  onClick={() => setIsDropdownOpen(!isDropdownOpen)}>Invest</button>
                    <button className="flex-1 border py-2 rounded text-sm sm:text-base">Close</button>
                  </div>
                  
                                    {/* Dropdown Menu */}
                                    {isDropdownOpen && (
                                      <div className="absolute left-0 mt-2 w-[350px] md:w-[450px] bg-white border rounded-lg shadow-md z-10">
                  
                  
                  
                                        {/* Modal */}
                  
                  
                                        <div className="w-full  rounded-xl bg-white p-4">
                                          {/* Header */}
                                          <div >
                  
                                            <div className="">
                                              <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="rounded-lg hover:bg-gray-100">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <path
                                                    d="M12 4L4 12M4 4L12 12"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                  />
                                                </svg>
                                              </button>
                                            </div>
                  
                                            <div className='flex  justify-between border-b pb-1'>
                                              <h2 className="text-base font-semibold">Deposits assets</h2>
                                              <button className="text-sm underline ">Swap</button>
                  
                                            </div>
                  
                                          </div>
                  
                                          {/* Content */}
                                          <div className="mt-3 space-y-4">
                                            <div className='flex justify-between items-center'>
                  
                                              <div className="text-sm">
                                                Available: <span className="font-medium">{availableBalance}</span>
                                              </div>
                  
                                              {/* Percentage buttons */}
                                              <div className="flex gap-2">
                                                {percentages.map((percentage) => (
                                                  <button
                                                    key={percentage}
                                                    onClick={() => handlePercentageClick(percentage)}
                                                    className="flex-1 rounded-full border border-gray-500 text-blank px-3 py-1.5 text-sm  hover:bg-gray-50"
                                                  >
                                                    {percentage}%
                                                  </button>
                                                ))}
                                              </div>
                  
                                            </div>
                  
                  
                  
                  
                                            {/* Input and currency selector */}
                                            <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-[#F2F3F7] px-3 py-2 ">
                                              <div className="relative flex-1">
                                                <span className="absolute left-1 top-1/2 -translate-y-1/2 text-sm px-3 py-1 rounded-full bg-gray-200">max</span>
                  
                                                <input
                                                  type="text"
                                                  value={amount}
                                                  onChange={(e) => setAmount(e.target.value)}
                                                  placeholder="0.00"
                                                  className="w-full px-3 py-2 text-lg text-right bg-[#F2F3F7] "
                                                />
                                              </div>
                  
                                              {/* Custom dropdown */}
                                              <div className="relative">
                                                <button
                                                  onClick={() => setIsOpen(!isOpen)}
                                                  className="flex w-[100px] items-center justify-between gap-2 rounded-lg border bg-white border-gray-200 px-3 py-2 hover:bg-gray-50"
                                                >
                                                  <div className="flex items-center gap-2">
                                                    <div className="relative h-5 w-5">
                                                      <img
                                                        src={coin4}
                                                        alt="ETH"
                                                        fill
                                                        className="rounded-full"
                                                      />
                                                    </div>
                                                    <span>ETH</span>
                                                  </div>
                                                  <svg
                                                    width="12"
                                                    height="12"
                                                    viewBox="0 0 12 12"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                                                  >
                                                    <path
                                                      d="M2.5 4.5L6 8L9.5 4.5"
                                                      stroke="currentColor"
                                                      strokeWidth="1.5"
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                    />
                                                  </svg>
                                                </button>
                  
                                                {isOpen && (
                                                  <div className="absolute right-0 top-full z-10 mt-1 w-[100px] rounded-lg border border-gray-200 bg-white py-1 shadow-lg">
                                                    <button
                                                      onClick={() => setIsOpen(false)}
                                                      className="flex w-full items-center gap-2 px-3 py-2 hover:bg-gray-50"
                                                    >
                                                      <div className="relative h-5 w-5">
                                                        <img
                                                          src={coin3}
                                                          alt="ETH"
                                                          fill
                                                          className="rounded-full"
                                                        />
                                                      </div>
                                                      <span>BTC</span>
                  
                                                    </button>
                                                  </div>
                                                )}
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                  
                  
                  
                  
                  
                                      </div>
                  
                                    )}
                </div>






















              )}

              {/* Yields Section */}





              {activeStrategy === 'BTC' ? (
                <>

<div className="bg-white p-4 sm:p-6 rounded-xl border">
                <h3 className="font-medium text-xl mb-4">Yields</h3>
                <p className="text-sm font-normal mb-2">BTC generated by strategy</p>
                <p className="text-xl sm:text-2xl font-bold mb-6 text-[#FFA900]">XXXX BTC</p>
                <div className="flex gap-4">
                  <button className="flex-1 bg-black text-white py-2 rounded text-sm sm:text-base">Reinvest</button>
                  <button className="flex-1 border py-2 rounded text-sm sm:text-base">Close</button>
                </div>
              </div>

                </>
              ) : activeStrategy === 'ETH' ? (
                <>




                  <div className="bg-white p-4 sm:p-6 rounded-xl border">
                <h3 className="font-medium text-xl mb-4">Yields</h3>
                <p className="text-sm font-normal mb-2">ETH generated by strategy</p>
                <p className="text-xl sm:text-2xl font-bold mb-6 text-[#FFA900]">XXXX ETH</p>
                <div className="flex gap-4">
                  <button className="flex-1 bg-black text-white py-2 rounded text-sm sm:text-base">Reinvest</button>
                  <button className="flex-1 border py-2 rounded text-sm sm:text-base">Close</button>
                </div>
              </div>


                </>
              ) : null}























            </div>
          </div>

          {/* Stats Section */}
          <div className="p-4 sm:p-6 rounded-2xl border bg-[#F9F9FA] flex flex-col justify-between">
            <div>
              <h2 className="text-sm font-medium mb-6">Stats</h2>

              {/* Conditionally render stats based on activeStrategy */}
              {activeStrategy === 'BTC' ? (
                <>
                  <div className="grid grid-cols-2 gap-4 mb-2">
                    <p className="text-xs text-black font-medium">Index</p>
                    <p className="text-[12px]">BTC</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-2">
                    <p className="text-xs text-black font-medium">TVL</p>
                    <p className="text-[12px]">246,647</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-2">
                    <p className="text-xs text-black font-medium">API</p>
                    <p className="text-[12px]">20%</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-2">
                    <p className="text-xs text-black font-medium">Protocol</p>
                    <p className="text-[12px]">Uniswap & Aave</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-2">
                    <p className="text-xs text-black font-medium">Delta Neutral</p>
                    <p className="text-[12px]">BTC</p>
                  </div>
                </>
              ) : activeStrategy === 'ETH' ? (
                <>
                  <div className="grid grid-cols-2 gap-4 mb-2">
                    <p className="text-xs text-black font-medium">Index</p>
                    <p className="text-[12px]">ETH</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-2">
                    <p className="text-xs text-black font-medium">TVL</p>
                    <p className="text-[12px]">1,245,678</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-2">
                    <p className="text-xs text-black font-medium">API</p>
                    <p className="text-[12px]">35%</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-2">
                    <p className="text-xs text-black font-medium">Protocol</p>
                    <p className="text-[12px]">Uniswap & Aave</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-2">
                    <p className="text-xs text-black font-medium">Delta Neutral</p>
                    <p className="text-[12px]">ETH</p>
                  </div>
                </>
              ) : null}

            </div>

            <div>
              <h1 className="text-xs font-semibold">Non custodial</h1>
            </div>
          </div>








        </div>






        {/* Footer Links */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
          <Link href="#" className="bg-[#F9F9FA] flex justify-between p-4 sm:p-6 rounded-2xl group hover:border-black">
            <h3 className="font-semibold group-hover:text-black">How it works ?</h3>
            <span className="font-semibold  group-hover:text-black">→</span>
          </Link>
          <Link href="#" className="bg-[#F9F9FA] flex justify-between p-4 sm:p-6 rounded-2xl group hover:border-black">
            <h3 className="font-medium group-hover:text-black">Our past performances</h3>
            <span className="font-semibold  group-hover:text-black">→</span>
          </Link>
          <Link href="#" className="bg-[#F9F9FA] flex justify-between p-4 sm:p-6 rounded-2xl group hover:border-black">
            <h3 className="font-medium  group-hover:text-black">Our team</h3>
            <span className="font-semibold group-hover:text-black">→</span>
          </Link>
        </div>


      </div>

    </>
  )
}
