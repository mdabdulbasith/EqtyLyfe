import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="w-full border-b border-[#E8E8E8] shadow-figma sticky top-0 z-10 backdrop-blur-md bg-white/70">
            <div className="flex justify-between items-center px-4 sm:px-8 md:px-[87px] py-[14px] h-[94px]">
                {/* Logo */}
                <Link to="/">
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-[120px] sm:w-[135px] h-auto"
                    />
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden lg:flex gap-6 xl:gap-[37px] font-fustat text-[16px] font-bold">
                    <li><Link to="/leverage-eqty" className="text-gray-700 hover:text-blue-500">Leverage your EQTY</Link></li>
                    <li><Link to="/why-eqty-lyfe" className="text-gray-700 hover:text-blue-500">Why EQTY LYFE?</Link></li>
                    <li><Link to="/tech-solutions" className="text-gray-700 hover:text-blue-500">Tech Solutions</Link></li>
                    <li><Link to="/case-studies" className="text-gray-700 hover:text-blue-500">Case Studies</Link></li>
                    <li><Link to="/about" className="text-gray-700 hover:text-blue-500">About Us</Link></li>
                </ul>

                {/* Desktop Button */}
                <div className="hidden lg:flex">
                    <button className="w-[167px] h-[44px] rounded-[4px] px-4 bg-[#004B37] text-white flex items-center justify-center gap-[4px] cursor-pointer">
                        GET AN ESTIMATE
                    </button>
                </div>

                {/* Hamburger Icon for Mobile */}
                <div className="lg:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="lg:hidden bg-white px-4 pt-4 pb-6 shadow-md font-fustat text-[16px] font-bold space-y-4">
                    <Link to="/leverage-eqty" className="block text-gray-700 hover:text-blue-500" onClick={toggleMenu}>Leverage your EQTY</Link>
                    <Link to="/why-eqty-lyfe" className="block text-gray-700 hover:text-blue-500" onClick={toggleMenu}>Why EQTY LYFE?</Link>
                    <Link to="/tech-solutions" className="block text-gray-700 hover:text-blue-500" onClick={toggleMenu}>Tech Solutions</Link>
                    <Link to="/case-studies" className="block text-gray-700 hover:text-blue-500" onClick={toggleMenu}>Case Studies</Link>
                    <Link to="/about" className="block text-gray-700 hover:text-blue-500" onClick={toggleMenu}>About Us</Link>
                    <button className="w-full mt-4 h-[44px] rounded-[4px] px-4 bg-[#004B37] text-white flex items-center justify-center gap-[4px] cursor-pointer">
                        GET AN ESTIMATE
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
