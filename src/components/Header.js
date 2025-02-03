import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom';
// import WalletModal from './WalletModal';
import coinbase from '../asset/coinbase.png';
import metaverse from '../asset/metaverse.png';
import Wallet from '../asset/wallet.png';
import { X } from 'lucide-react';

export default function Header({ toggleSidebar }) {

    const location = useLocation(); // Get current route



    // Set header title based on route
    const getTitle = () => {
        if (location.pathname === '/') return 'Home';
        if (location.pathname === '/strategy-btc') return 'Farms - Strategy BTC';
        if (location.pathname === '/strategy-eth') return 'Farms - Strategy ETH';
        return 'Dashboard'; // Default title for other routes
    };






    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const wallets = [
        { id: "coinbase", name: "Coinbase", icon: coinbase },
        { id: "metamask", name: "MetaMask", icon: metaverse },
        { id: "smart-wallet", name: "Smart Wallet", icon: Wallet },
    ];

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);



    return (
        <>
            <header className="bg-white border-b px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <button className="md:hidden text-gray-500 hover:text-gray-700" onClick={toggleSidebar}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <span className="font-semibold text-sm  md:text-xl">{getTitle()}</span>
                </div>

                {/* Connect Wallet Button */}
                <div className="relative inline-block" ref={dropdownRef}>
                    <button
                        className=" p-1 md:px-4 md:py-2 bg-black text-white rounded-[4px] text-xs md:text-sm sm:text-base"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        Connect my wallet
                    </button>

                    {isOpen && (
                        <div className="absolute right-2 mt-2 w-64 bg-white border border-gray-200 shadow-lg rounded-md z-10">

                            <button
                                className="flex items-center gap-2 px-4 py-4 w-full text-left border-b hover:bg-gray-100"
                                onClick={() => {
                                    setIsOpen(false);
                                }}
                            >
                                <span className="mr-2 text-lg"><X  className='w-6'/></span>
                                <span className='text-base'> Connect my Wallet </span>
                            </button>


                            {wallets.map((wallet) => (

                                <>
                                    <button
                                        key={wallet.id}
                                        className="flex items-center gap-5 p-4  w-full text-left hover:bg-gray-100"
                                        onClick={() => {
                                            setIsOpen(false);
                                            console.log(`Selected Wallet: ${wallet.name}`);
                                        }}
                                    >
                                        <img src={wallet.icon} alt={wallet.name} className='w-10 ' />

                                        <span className="text-sm font-medium">  {wallet.name}  </span>
                                        
                                    </button>
                                </>

                            ))}
                        </div>
                    )}
                </div>
            </header>




        </>
    )
}
