import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from "../asset/logo.png"
import home1 from "../asset/icon1.png"
import home2 from "../asset/icon2.png"
import home3 from "../asset/avatar.png"
import { ChevronRight } from 'lucide-react'

export default function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {

    const location = useLocation();

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };



    return (
        <>
            {isSidebarOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden" onClick={() => setIsSidebarOpen(false)} />
            )}

            {/* Sidebar */}
            <aside
                className={`
        fixed top-0 left-0 h-full w-[212px] bg-white border-r p-6 z-30
        flex flex-col
        transform transition-transform duration-300 ease-in-out
        md:relative md:transform-none
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}
            >
                {/* Top Section */}
                <div>
                    <div className="flex items-center justify-between  ">



                        <button
                            button className="md:hidden text-gray-500 hover:text-gray-700" onClick={() => setIsSidebarOpen(false)}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>


                        </button>
                    </div>

                    {/* Main Navigation */}

                    <nav className="space-y-4 flex-1">
                        <Link
                            to="/"
                            className={`flex items-center gap-2 p-2 rounded-lg ${location.pathname === "/" ? "text-black font-medium bg-gray-100 w-full" : "text-gray-600"}`}
                        >
                            <ChevronRight className="text-gray-400 w-4" />
                            <img src={home2} alt="home1" />
                            <span className="text-sm font-semibold">Home</span>
                        </Link>

                        <div>
                            <Link
                                to="/strategy-btc"
                                className={`flex items-center gap-2 p-2 rounded-lg `}
                                onClick={toggleDropdown}
                            >
                                <ChevronRight className="text-gray-400 w-4" />
                                <img src={home1} alt="home1" />
                                <span className="text-sm font-semibold">Farms</span>
                            </Link>

                            {/* Dropdown */}
                            {isDropdownOpen && (
                                <div className="mt-2 space-y-2  ">

                                    <Link
                                        to="/strategy-btc"
                                        className={`flex items-center justify-center gap-2 p-2 text-sm rounded-lg ${location.pathname === "/strategy-btc" ? "text-black font-medium bg-gray-100 w-full" : "text-gray-600"}`}
                                    >
                                        Strategy BTC
                                    </Link>
                                    <Link
                                        to="/strategy-eth"
                                        className={`flex items-center justify-center gap-2 p-2 text-sm rounded-lg ${location.pathname === "/strategy-eth" ? "text-black font-medium bg-gray-100 w-full" : "text-gray-600"}`}
                                    >
                                        Strategy ETH
                                    </Link>




                                </div>
                            )}
                        </div>
                    </nav>


                </div>

                {/* Bottom Section */}
                <div className="mt-auto space-y-4 font-semibold">
                    <Link to="#" className="flex items-center gap-2   ">
                        <span className='text-sm font-semibold '>Audits</span>
                    </Link>
                    <Link to="#" className="flex items-center gap-2 text-black hover:text-gray-600">
                        <span className='text-sm font-semibold '>FAQ</span>
                    </Link>
                    <Link to="#" className="flex items-center gap-2  text-black hover:text-gray-600">
                        <span className='text-sm font-semibold '>Support</span>
                    </Link>

                    {/* Logo */}
                    <div className='flex justify-center'>
                        <img
                            src={logo}
                            alt="BitYields Logo"
                            className='mt-10'
                        />
                    </div>


                </div>


            </aside>
        </>
    )
}
