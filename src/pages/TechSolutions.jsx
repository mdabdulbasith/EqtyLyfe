import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import image1 from '../assets/Tech_Solutions2.png';
import image2 from '../assets/Tech_Solutions1.png';
import techimg1 from '../assets/TechImg1.png';
import techimg1overlay from '../assets/TechImg1overlay.png';
import techimg2 from '../assets/Techimg2.png';
import techimg2overlay from '../assets/TechImg2overlay.png';
import techimg3 from '../assets/TechImg3.png';
import { FaLink, FaCalculator } from 'react-icons/fa';
import { GiMoneyStack } from 'react-icons/gi';

const TechSolutions = () => {
    return (
        <div className="min-h-screen w-full">
            <Navbar />

            {/* Section 1 */}
            <div className="mt-4 sm:mt-6 px-5 sm:px-8 lg:px-[80px]">
                <div className="bg-[#004B37] rounded-[12px] shadow-lg py-6 px-5 sm:px-8 text-white mb-10 w-full max-w-[1320px] mx-auto">
                    <div className="flex flex-col lg:flex-row lg:gap-x-16 xl:gap-x-20 items-start">
                        {/* Left Text */}
                        <div className="lg:w-[40%] w-full text-center lg:text-left pt-6 px-2 sm:px-0 lg:pl-4 xl:pl-6">
                            <h4 className="font-reddit-mono text-[18px] tracking-[0.02em] text-[#FFD782] uppercase mb-4 sm:mb-6">
                                EXCLUSIVE TECHNOLOGY
                            </h4>
                            <h3 className="font-fustat font-extrabold text-[28px] sm:text-[32px] md:text-[36px] leading-tight mb-6 sm:mb-8">
                                The simplest way to visualize your home equity investments
                            </h3>
                            <p className="font-fustat text-[16px] sm:text-[18px] text-[#F1FFEF] mb-8 sm:mb-10">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                            </p>
                            <button className="px-4 py-2 rounded-[4px] bg-white text-[#004B37] font-reddit-mono font-medium text-[12px] tracking-[0.02em]">
                                VISUALIZE MY HOME VALUE
                            </button>
                        </div>

                        {/* Right Images */}
                        <div className="lg:w-[60%] w-full relative mt-10 lg:mt-0 flex justify-center items-start pl-4 sm:pl-6 md:pl-8 lg:pl-0">
                            <div className="relative w-full max-w-[600px] mx-auto">
                                <img
                                    src={image1}
                                    alt="Tech Visual 1"
                                    className="w-full h-auto rounded-[8px] object-cover"
                                />
                                <img
                                    src={image2}
                                    alt="Tech Visual 2"
                                    className="absolute bottom-[20px] left-[-30px] sm:left-[-60px] w-[150px] sm:w-[180px] md:w-[200px] rounded-[8px] object-cover"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Section 2 */}
            <section className="bg-white py-16 px-5 sm:px-10 lg:px-20 overflow-hidden">
                <div className="max-w-[1320px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
                    {/* Left Image */}
                    <div className="relative w-full lg:w-[60%] max-w-md">
                        <div className="absolute w-full h-full bg-[#E9FBC7] z-0 rounded-[8px] translate-x-4 translate-y-4" />
                        <img
                            src={techimg1}
                            alt="Main Visual"
                            className="relative z-5 rounded-[8px] w-full h-auto"
                        />
                        <img
                            src={techimg1overlay}
                            alt="Overlay"
                            className="absolute bottom-[20px] right-[-60px] sm:right-[-100px] md:right-[-140px] w-[160px] sm:w-[220px] md:w-[280px] max-w-[65vw] z-8 rounded-[30px]"
                        />
                    </div>

                    {/* Right Text */}
                    <div className="w-full lg:w-[40%] text-center lg:text-left lg:ml-6 xl:ml-[120px]">
                        <h2 className="font-fustat font-extrabold text-[28px] sm:text-[32px] md:text-[36px] leading-tight text-[#004B37] mb-4">
                            Pay and invest on-the-go, in any form
                        </h2>
                        <p className="font-fustat text-[16px] sm:text-[18px] text-[#03330A] mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
                            libero et velit interdum, ac aliquet odio mattis.
                        </p>
                        <button className="py-3 text-[#AB790E] font-reddit-mono font-medium text-[14px] tracking-[0.02em]">
                            TRY OUR TECH SOLUTION →
                        </button>
                    </div>
                </div>
            </section>

            {/* Section 3 */}
            <section className="bg-white py-16 px-5 sm:px-10 lg:px-24 overflow-hidden">
                <div className="max-w-[1320px] mx-auto flex flex-col lg:flex-row items-center gap-10">
                    <div className="w-full lg:w-1/2 text-center lg:text-left lg:pr-10">
                        <h2 className="font-fustat font-extrabold text-[28px] sm:text-[32px] md:text-[36px] text-[#004B37] mb-4">
                            Have full control over your payment schedule
                        </h2>
                        <p className="font-fustat text-[16px] sm:text-[18px] text-[#03330A] mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
                            libero et velit interdum, ac aliquet odio mattis.
                        </p>
                        <button className="py-3 text-[#AB790E] font-reddit-mono font-medium text-[14px] tracking-[0.02em]">
                            TRY OUR TECH SOLUTION →
                        </button>
                    </div>

                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                        <div className="relative w-full max-w-[400px]">
                            <div className="absolute w-full h-full bg-[#E9FBC7] z-0 rounded-[8px] translate-x-4 translate-y-4" />
                            <img
                                src={techimg2}
                                alt="Main Visual"
                                className="relative z-5 rounded-[8px] w-full h-auto"
                            />
                            <img
                                src={techimg2overlay}
                                alt="Overlay"
                                className="absolute bottom-0 left-[-60px] sm:left-[-100px] md:left-[-130px] w-[160px] sm:w-[200px] md:w-[240px] max-w-[65vw] z-8 rounded-[30px]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4 */}
            <section className="bg-white py-16 px-5 sm:px-10 lg:px-24">
                <div className="max-w-[1320px] mx-auto flex flex-col lg:flex-row items-center gap-10">
                    <div className="relative w-full lg:w-[50%]">
                        <div className="absolute w-full h-full bg-[#E9FBC7] z-0 rounded-[8px] translate-x-4 translate-y-4" />
                        <img
                            src={techimg3}
                            alt="Main Visual"
                            className="relative z-5 rounded-[8px] w-full h-auto"
                        />
                    </div>

                    <div className="w-full lg:w-[50%] text-center lg:text-left lg:pl-10">
                        <h2 className="font-fustat font-extrabold text-[28px] sm:text-[32px] md:text-[36px] text-[#004B37] mb-4">
                            Always chat with real, expert financial advisors
                        </h2>
                        <p className="font-fustat text-[16px] sm:text-[18px] text-[#03330A] mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
                            libero et velit interdum, ac aliquet odio mattis.
                        </p>
                        <button className="py-3 text-[#AB790E] font-reddit-mono font-medium text-[14px] tracking-[0.02em]">
                            TRY OUR TECH SOLUTION →
                        </button>
                    </div>
                </div>
            </section>


            {/* Application Cards */}
            <section className="bg-white py-8 px-5 sm:px-10 lg:px-20">
                <div className="bg-[#F1F8E5] rounded-[16px] p-4 sm:p-6 md:p-10 lg:p-16 max-w-[1320px] mx-auto">
                    <div className="text-left mb-10">
                        <h3 className="font-reddit-mono text-[16px] sm:text-[18px] md:text-[20px] text-[#AB790E] uppercase mb-3">
                            EXCLUSIVE APPLICATION TECHNOLOGY
                        </h3>
                        <h2 className="font-fustat font-extrabold text-[24px] sm:text-[30px] md:text-[36px] text-[#00494B]">
                            Streamlined, all-in-one application platform
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Cards */}
                        {[{
                            icon: <FaLink className="text-[#004B37] text-[20px]" />,
                            title: "All your documents in one place",
                            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ab.",
                        }, {
                            icon: <FaCalculator className="text-[#004B37] text-[20px]" />,
                            title: "Calculate your investment before, during, and after",
                            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                        }, {
                            icon: <GiMoneyStack className="text-[#004B37] text-[22px]" />,
                            title: "Receive your funds without ever leaving the platform",
                            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
                        }].map((card, idx) => (
                            <div key={idx} className="bg-white rounded-[12px] p-6 shadow-sm hover:shadow-md transition flex flex-col gap-4">
                                <div className="w-[48px] h-[48px] flex items-center justify-center bg-[#E9FBC7] rounded-full">{card.icon}</div>
                                <h4 className="text-[20px] sm:text-[22px] font-fustat font-bold text-black leading-[110%]">{card.title}</h4>
                                <p className="text-[16px] font-fustat text-[#253E29] leading-[140%] tracking-wide">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Email Signup Section */}
            <section className="px-4 sm:px-6 lg:px-20 py-10">
                <div className="max-w-[1200px] mx-auto">
                    <div className="bg-[#004B37] rounded-[16px] p-6 sm:p-10 shadow-md w-full text-center">
                        <h2 className="text-[24px] sm:text-[28px] md:text-[36px] font-fustat font-extrabold text-white mb-6">
                            Your investment journey starts <span className="text-[#FFD782]">today</span>
                        </h2>
                        <div className="flex justify-center mb-4">
                            <input type="email" placeholder="Your Email Address"
                                className="bg-white w-full max-w-[384px] h-[45px] px-4 rounded-[6px] focus:outline-none focus:ring-2 focus:ring-[#004B37] placeholder:text-[#A2A2A2] font-fustat text-[17px]" />
                        </div>
                        <div className="flex justify-center mb-4">
                            <button className="w-full max-w-[130px] h-[45px] bg-white text-[#004B37] font-reddit-mono font-medium text-[14px] rounded-[6px] transition">
                                SIGN UP NOW
                            </button>
                        </div>
                        <p className="text-[14px] font-fustat text-[#E9FBC7]">
                            Already signed up? <span className="underline cursor-pointer hover:text-[#E9FBC7] font-medium">Investor Login</span>
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default TechSolutions;
