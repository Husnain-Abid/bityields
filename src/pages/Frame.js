import React from 'react'
import { Link } from 'react-router-dom'

export default function Frame() {
    return (
        <>

            <div className='p-2 md:p-8'>

                <div className="bg-white rounded-lg border p-6">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h1 className="text-xl font-medium mb-2">Details Pools</h1>
                            <p className="text-gray-600 text-sm">
                                Descriptif de la stratégie sur 1<br />
                                ou 2-3
                                <br />
                                lignes
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <button className="px-4 py-2 bg-black text-white rounded-full text-sm">Stratégie BTC</button>
                            <button className="px-4 py-2 border rounded-full text-sm">Strategie ETH</button>
                        </div>
                    </div>

                    {/* Pool Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-left text-sm text-gray-600">
                                    <th className="pb-4">Name</th>
                                    <th className="pb-4">Earned</th>
                                    <th className="pb-4">APY</th>
                                    <th className="pb-4">Liquidity</th>
                                    <th className="pb-4">Collateral</th>
                                    <th className="pb-4">See more</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-gray-50">
                                    <td className="py-4 px-2">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-black rounded-full"></div>
                                            USDT - WBTC
                                        </div>
                                    </td>
                                    <td className="py-4">12</td>
                                    <td className="py-4">12</td>
                                    <td className="py-4">12</td>
                                    <td className="py-4">12</td>
                                    <td className="py-4">
                                        <div className="flex items-center gap-4">
                                            <button className="px-3 py-1 bg-gray-200 rounded text-sm">Details</button>
                                            <button className="text-sm text-gray-600 flex items-center gap-1">
                                                See Pair Info
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-4 px-2">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-black rounded-full"></div>
                                            Lending USDT
                                        </div>
                                    </td>
                                    <td className="py-4">0</td>
                                    <td className="py-4">0</td>
                                    <td className="py-4">0</td>
                                    <td className="py-4">0</td>
                                    <td className="py-4">
                                        <div className="flex items-center gap-4">
                                            <button className="px-3 py-1 bg-gray-200 rounded text-sm">Details</button>
                                            <button className="text-sm text-gray-600 flex items-center gap-1">
                                                See Pair Info
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>



                <div className="mt-6">
                    <button className="text-sm text-gray-600 flex items-center gap-1">
                        View contract
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </div>

                <div className="bg-white rounded-lg border p-6">

                    {/* Earned and Deposit Section */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h2 className="font-medium mb-4">X Earned</h2>
                            <div className="flex items-center justify-between">
                                <p className="text-xl font-bold text-orange-500">XXXX BTC</p>
                                <button className="px-4 py-2 bg-black text-white rounded-md text-sm">Harvest</button>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h2 className="font-medium mb-4">Deposit</h2>
                            <button className="w-full px-4 py-2 bg-black text-white rounded-md text-sm">Unlock the wallet</button>
                        </div>
                    </div>
                </div>



                {/* Footer Links */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-8">
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
