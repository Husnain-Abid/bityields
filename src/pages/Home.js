import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import landing from "../asset/Landing.png"
import coin1 from "../asset/Ethereum.png"
import coin2 from "../asset/bitcoin.png"


export default function Home() {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  var availableBalance = "1.3310e-8"


  const [amount, setAmount] = useState("")
  const [selectedPercentage, setSelectedPercentage] = useState(null)
  const percentages = [25, 50, 75, 100]

  const handlePercentageClick = (percentage) => {
    setSelectedPercentage(percentage)
    // Calculate amount based on percentage of available balance
    const value = (Number.parseFloat(availableBalance) * percentage) / 100
    setAmount(value.toFixed(8))
  }




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
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-sm font-bold mb-6">Overview</h2>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {/* BTC Strategy */}
          <div className="bg-[#FFF6E5] rounded-2xl p-4 sm:p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center overflow-hidden">
                <img src={coin2} alt="" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="font-medium">Strategy BTC</h3>
                <p className="text-xs text-gray-600">Uniswap & Aave</p>
              </div>
            </div>

            <p className="text-sm text-black mb-2">API Projected VS Hold BTC</p>
            <p className="text-3xl sm:text-4xl font-bold mb-6">30%</p>

            <div className="flex gap-4">
              <button className="flex-1 bg-black text-white py-2 rounded text-sm sm:text-base">Invest</button>
              <button className="flex-1 border border-black py-2 rounded text-sm sm:text-base">Details</button>
            </div>
          </div>

          {/* ETH Strategy */}
          <div className="bg-[#F9F9FA] rounded-2xl p-4 sm:p-6 border">
            <div className="flex items-center gap-4 mb-4">

              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                <img src={coin1} alt="" className="w-full h-full object-contain" />
              </div>


              <div>
                <h3 className="font-medium">Strategy ETH</h3>
                <p className="text-xs text-gray-600">Uniswap & Aave</p>
              </div>
            </div>

            <p className="text-sm text-black mb-2">API Projected VS Hold ETH</p>
            <p className="text-3xl sm:text-4xl font-bold mb-6">45%</p>

            <div className="flex gap-4">
              <button className="flex-1 bg-black text-white py-2 rounded text-sm sm:text-base">Invest</button>
              <button className="flex-1 border border-black py-2 rounded text-sm sm:text-base">Details</button>
            </div>
          </div>
        </div>



        {/* Investment & Stats Section */}
        <div className="mt-8 sm:mt-12 grid sm:grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Investment Section - Takes 2 Columns */}
          <div className="sm:col-span-1 lg:col-span-2 border rounded-2xl p-6 bg-[#F9F9FA]">
            <div className="flex justify-between gap-4 mb-6 overflow-x-auto">
              <div>
                <span className='text-black'> My Invest </span>
              </div>

              <div>
                <button className="bg-black text-white px-4 py-2 rounded-full whitespace-nowrap mr-2">Stratégie BTC</button>
                <button className="border px-4 py-2 rounded-full whitespace-nowrap">Strategie ETH</button>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">


              {/* Deposit */}
              {/* <div className="bg-white p-4 sm:p-6 rounded-lg border">
                <h3 className="font-medium mb-4">Deposit</h3>
                <p className="text-sm text-gray-600 mb-2">Money deposited in the strategy</p>
                <p className="text-xl sm:text-2xl font-bold mb-6 text-[#FFA900]">XXXX BTC</p>
                <div className="flex gap-4">
                  <button className="flex-1 bg-black text-white py-2 rounded text-sm sm:text-base">Invest</button>
                  <button className="flex-1 border py-2 rounded text-sm sm:text-base">Close</button>
                </div>
              </div> */}


              <div className="bg-white p-4 sm:p-6 rounded-lg border relative">
                <h3 className="font-medium mb-4">Deposit</h3>
                <p className="text-sm text-gray-600 mb-2">Money deposited in the strategy</p>
                <p className="text-xl sm:text-2xl font-bold mb-6 text-[#FFA900]">XXXX BTC</p>

                <div className="flex gap-4">
                  {/* Invest Button */}
                  <button
                    className="flex-1 bg-black text-white py-2 rounded text-sm sm:text-base relative"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    Invest
                  </button>

                  {/* Close Button */}
                  <button className="flex-1 border py-2 rounded text-sm sm:text-base">Close</button>
                </div>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-72 bg-white border rounded-lg shadow-md z-10">






                    {/* Modal */}
                    <div className="relative w-[250px] md:w-[500px] rounded-2xl bg-white shadow-xl">
                      {/* Header */}
                      <div className="flex items-center justify-between p-4">
                        <div className="flex items-center gap-4">
                          <button onClick={() => setIsDropdownOpen(false)} className="rounded-lg p-1 hover:bg-gray-100">
                            <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                          <h2 className="text-lg font-medium">Deposits assets</h2>
                        </div>
                        <button className="text-sm font-medium text-blue-600 hover:text-blue-700">Swap</button>
                      </div>

                      {/* Available Balance */}
                      <div className="px-4 pb-2">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <span>Available : {availableBalance}</span>
                        </div>
                      </div>

                      {/* Percentage Buttons */}
                      <div className="flex gap-2 px-4">
                        {percentages.map((percentage) => (
                          <button
                            key={percentage}
                            onClick={() => handlePercentageClick(percentage)}
                            className={`
          flex-1 rounded-full border px-3 py-1 text-sm transition-colors
          ${selectedPercentage === percentage
                                ? "border-blue-600 bg-blue-50 text-blue-600"
                                : "border-gray-200 hover:border-gray-300"
                              }
        `}
                          >
                            {percentage}%
                          </button>
                        ))}
                      </div>

                      {/* Amount Input */}
                      <div className="p-4">
                        <div className="flex items-center gap-2 rounded-2xl bg-gray-50 p-4">
                          <span className="text-sm text-gray-500">max</span>
                          <input
                            type="text"
                            value={amount}
                            onChange={(e) => {
                              setAmount(e.target.value)
                              setSelectedPercentage(null)
                            }}
                            placeholder="0.00"
                            className="flex-1 bg-transparent text-2xl outline-none placeholder:text-gray-300"
                          />
                          <button className="hidden  md:flex items-center gap-2 rounded-full border bg-white px-3 py-1.5 text-sm">
                            <div className="h-5 w-5 rounded-full bg-blue-500" />
                            <span>ETH</span>
                            <svg className="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>

                  </div>
                )}


              </div>





              {/* Yields */}
              <div className="bg-white p-4 sm:p-6 rounded-lg border">
                <h3 className="font-medium mb-4">Yields</h3>
                <p className="text-sm text-gray-600 mb-2">Generated by strategy</p>
                <p className="text-xl sm:text-2xl font-bold mb-6 text-[#FFA900]">XXXX BTC</p>
                <div className="flex gap-4">
                  <button className="flex-1 bg-black text-white py-2 rounded text-sm sm:text-base">Reinvest</button>
                  <button className="flex-1 border py-2 rounded text-sm sm:text-base">Close</button>
                </div>

              </div>



            </div>
          </div>

          {/* Stats Section - Takes 1 Column */}
          <div className="bg-white p-4 sm:p-6 rounded-2xl border bg-[#F9F9FA]">
            <h2 className="text-sm font-medium mb-6">Stats</h2>



            <div className='grid grid-cols-2 gap-4 mb-2 flex justify-between'>
              <p className="text-gray-600">Index</p>
              <p className="font-medium">BTC</p>
            </div>




            <div className='grid grid-cols-2 gap-4 mb-2 flex justify-between'>
              <p className="text-gray-600">TVL</p>
              <p className="font-medium">246,647</p>
            </div>


            <div className='grid grid-cols-2 gap-4 mb-2 flex justify-between'>
              <p className="text-gray-600">API</p>
              <p className="font-medium">30%</p>
            </div>

            <div className='grid grid-cols-2 gap-4 mb-2 flex justify-between'>
              <p className="text-gray-600">Protocol</p>
              <p className="font-medium">Uniswap & Aave</p>
            </div>



          </div>
        </div>





        {/* Footer Links */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
          <Link href="#" className="bg-[#F9F9FA] flex justify-between p-4 sm:p-6 rounded-lg border group hover:border-black">
            <h3 className="font-medium mb-2 group-hover:text-black">How it works ?</h3>
            <span className="text-gray-400 group-hover:text-black">→</span>
          </Link>
          <Link href="#" className="bg-[#F9F9FA] flex justify-between p-4 sm:p-6 rounded-lg border group hover:border-black">
            <h3 className="font-medium mb-2 group-hover:text-black">Our past performances</h3>
            <span className="text-gray-400 group-hover:text-black">→</span>
          </Link>
          <Link href="#" className="bg-[#F9F9FA] flex justify-between p-4 sm:p-6 rounded-lg border group hover:border-black">
            <h3 className="font-medium mb-2 group-hover:text-black">Our team</h3>
            <span className="text-gray-400 group-hover:text-black">→</span>
          </Link>
        </div>
      </div>

    </>
  )
}
