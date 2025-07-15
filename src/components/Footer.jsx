import React from 'react';
import Logo from '../assets/Logo.png';

const Footer = () => {
    return (
        <footer className="bg-white pt-16 pb-8 px-6 sm:px-10 lg:px-24 text-[#004B37]">
            <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-20">

                {/* Logo and Heading */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <h2 className="text-[20px] sm:text-[22px] lg:text-[24px] font-fustat font-extrabold mb-4">
                        Put your home equity to work.
                    </h2>
                    <img src={Logo} alt="Logo" className="w-[135px] h-[68px]" />
                </div>

                {/* Footer Links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 text-[16px] font-fustat font-medium w-full">

                    {/* Column 1 */}
                    <div className="flex flex-col gap-4 text-[#03330A]">
                        <a className="font-bold text-[#004B37]" href="#">Leverage your EQTY</a>
                        <a href="#">About Us</a>
                        <a href="#">What is Home Equity?</a>
                        <a href="#">What do we do</a>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-4 text-[#03330A]">
                        <a className="font-bold text-[#004B37]" href="#">Why EQTY LYFE?</a>
                        <a href="#">Our Impact</a>
                        <a href="#">Case Studies</a>
                        <a href="#">Testimonials</a>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col gap-4 text-[#03330A]">
                        <a className="font-bold text-[#004B37]" href="#">Solutions</a>
                        <a href="#">Lump Sum</a>
                        <a href="#">HE Application</a>
                        <a href="#">Crypto</a>
                    </div>

                    {/* Column 4 */}
                    <div className="flex flex-col gap-4 text-[#03330A]">
                        <a className="font-bold text-[#004B37]" href="#">About Us</a>
                        <a href="#">Our Story</a>
                        <a href="#">Our Team</a>
                        <a href="#">Careers</a>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
