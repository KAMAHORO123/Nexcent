import React, { useState } from "react";
import logo from "../assets/images/Logo.png";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header>
            <nav className="flex items-center justify-between py-5 px-5 md:px-10 lg:px-20">
                <div className="flex gap-2 items-center">
                    <img src={logo} alt="NexCent Logo" className="w-10 h-6" />
                    <p className="text-[#263238] font-bold text-xl md:text-2xl lg:text-3xl">NexCent</p>
                </div>
                <div className="md:hidden">
                    <button
                        className="text-gray-600 focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
                <div className={`md:flex md:items-center space-x-4 md:space-x-5 md:relative md:top-1 left-[340px ] right-[340px]${showMenu ? 'left-0': 'left-[-500px]'} top-[60px] absolute top ${showMenu ? "block" : "hidden"}`} style={{ transition: "all 0.3s ease-in-out" }}>
                    <ul className={`flex flex-col md:flex-row gap-4 md:gap-5 bg-green-100 text-black p-4 md:p-0 md:bg-transparent md:text-gray-600 md:flex`}>
                        <li className="font-semibold text-sm md:text-lg"><a href="#">Home</a></li>
                        <li className="font-normal text-sm md:text-lg"><a href="#">Service</a></li>
                        <li className="font-normal text-sm md:text-lg"><a href="#">Feature</a></li>
                        <li className="font-normal text-sm md:text-lg"><a href="#">Product</a></li>
                        <li className="font-normal text-sm md:text-lg"><a href="#">Testimonial</a></li>
                        <li className="font-normal text-sm md:text-lg"><a href="#">FAQ</a></li>
                    </ul>
                </div>
                <div className="hidden md:flex items-center">
                    <button className="text-green-600 bg-transparent px-4 py-2 text-sm md:text-base">Login</button>
                    <button className="bg-green-600 text-white px-4 py-2 rounded text-sm md:text-base">Sign up</button>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
