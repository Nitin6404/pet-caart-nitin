import React, { useState, useEffect } from "react"
import { Search, Menu, MapPin } from "lucide-react" // <-- Added MapPin
import cartIcon from "../assets/cart.png"
import truckIcon from "../assets/truck.png"
import petLogo from "../assets/pet.png"
import loginLogo from "../assets/login.png"

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const suggestions = ["Dog Food", "Cat Food", "Helno", "Royal Canin"]
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % suggestions.length)
        }, 2000)
        return () => clearInterval(interval)
    }, [])

    const animatedPlaceholder = `Search "${suggestions[index]}"`

    return (
        <div className="bg-[#FEF5E7] text-[#333] shadow px-4 py-4">
            {/* Mobile Layout */}
            <div className="md:hidden">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)} 
                            className="p-2 hover:bg-gray-100 rounded"
                        >
                            <Menu size={24} />
                        </button>
                        <img src={petLogo} alt="PetCaart Logo" className="h-8 md:w-auto w-[130px]" />
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="fixed top-16 right-4 bg-white shadow-lg rounded-lg p-4 z-50">
                        <div className="flex flex-col space-y-4">
                            <div className="flex items-center space-x-2">
                                <img src={truckIcon} alt="Delivery" className="h-6" />
                                <span>Track Order</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <img src={cartIcon} alt="Cart" className="h-6" />
                                <span>Cart</span>
                            </div>
                            <button className="bg-[#00a3ff] text-white px-4 py-2 rounded text-sm font-medium flex items-center">
                                <img src={loginLogo} alt="loginlogo" className="h-4 w-auto mr-2" />
                                Login
                            </button>
                        </div>
                    </div>
                )}

                <div className="flex w-full mb-4">
                    <input
                        type="text"
                        placeholder={animatedPlaceholder}
                        className="bg-white w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none text-sm"
                    />
                    <button className="bg-white px-4 py-2 border border-l-0 border-gray-300 rounded-r-md text-blue-500 flex items-center justify-center">
                        <Search size={18} />
                    </button>
                </div>

                <div className="w-full relative">
                    <MapPin size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-600" />
                    <input
                        type="text"
                        placeholder="Enter PINCODE to check delivery date"
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm bg-white"
                    />
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:flex flex-wrap items-center justify-between gap-y-4">
                <div className="flex items-center flex-shrink-0">
                    <img src={petLogo} alt="PetCaart Logo" className="h-10 w-auto" />
                </div>

                <div className="flex flex-row flex-1 items-center justify-center gap-4 mx-8">
                    <div className="flex w-[500px]">
                        <input
                            type="text"
                            placeholder={animatedPlaceholder}
                            className="bg-white w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none text-sm"
                        />
                        <button className="bg-white px-4 py-2 border border-l-0 border-gray-300 rounded-r-md text-blue-500 flex items-center justify-center">
                            <Search size={18} />
                        </button>
                    </div>

                    <div className="w-[420px] relative">
                        <MapPin size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-600" />
                        <input
                            type="text"
                            placeholder="Enter PINCODE to check delivery date"
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm bg-white"
                        />
                    </div>
                </div>

                <div className="flex items-center space-x-4 flex-shrink-0">
                    <img src={truckIcon} alt="Delivery" className="h-6" />
                    <img src={cartIcon} alt="Cart" className="h-6" />
                    <button className="bg-[#0888B1] uppercase text-white px-3 py-2 rounded text-sm font-medium flex items-center">
                        <img src={loginLogo} alt="loginlogo" className="h-4 w-auto mr-2" />
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header
