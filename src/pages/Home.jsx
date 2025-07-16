import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Home from '../assets/Home.png'
import Solution from '../assets/Solution.png'
import Statistics from '../assets/Statistics.png'
import Education from '../assets/Education.png'
import House from '../assets/House.png'
import Business from '../assets/Business.png'
import Realestate from '../assets/Realestate.png'
import one from '../assets/1.svg'
import two from '../assets/2.svg'
import three from '../assets/3.svg'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="min-h-screen bg-gray-100 w-full">
            <div className="bg-white shadow-lg">
                <Navbar />

                {/* Hero Section */}
                <main>
                    <section className="flex flex-col lg:flex-row items-stretch w-full lg:min-h-[calc(100vh-94px)]">
                        {/* Left - Text Section */}
                        <div className="flex-1 bg-[#004B37] flex items-center py-10">
                            <div className="px-4 sm:px-10 md:px-[60px] lg:ml-[115px] text-white w-full">
                                <h1 className="text-[32px] sm:text-[40px] md:text-[45px] lg:text-[48.93px] leading-tight font-fustat font-bold mb-6 max-w-[90%] lg:max-w-[315px]">
                                    Put your home equity to <span className="text-[#FFD782]">work</span>
                                </h1>

                                <p className="font-fustat text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-relaxed text-[#F1FFEF] max-w-[90%] lg:max-w-[401px]">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, ipsam dicta! Quo vel facere tempore sequi repudiandae officia.
                                </p>

                                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-8">
                                    <input
                                        type="text"
                                        placeholder="Try your home address"
                                        className="w-full sm:w-[258px] h-[40px] px-4 rounded-[6px] text-gray-700 bg-white placeholder:text-[#A2A2A2] font-fustat text-[13px] outline-none border border-[#D0D0D0] focus:border-[#004B37] transition"
                                    />
                                    <button
                                        className="w-full sm:w-[105px] h-[40px] px-2 bg-[#FFFDF7] text-[#004B37] rounded-[4px] font-reddit-mono font-bold text-[13px] tracking-normal cursor-pointer"
                                    >
                                        GET ESTIMATE
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right - Image */}
                        <div className="flex-1">
                            <img
                                src={Home}
                                alt="Hero"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </section>
                </main>

                <section className="bg-[#F1F8E5] px-4 sm:px-6 md:px-10 py-10">
                    <div className="max-w-[1200px] mx-auto">
                        {/* White Card */}
                        <div className="bg-white rounded-[16px] shadow-md p-4 sm:p-6 lg:p-10">
                            {/* 2-Column Layout */}
                            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

                                {/* Left - Image */}
                                <div className="w-full lg:w-[477px] h-[452px] overflow-hidden rounded-[8px] shrink-0">
                                    <img
                                        src={Solution}
                                        alt="Our Solution"
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>



                                {/* Right - Text Content */}
                                <div className="w-full">
                                    <h3 className="text-[14px] sm:text-[16px] md:text-[18px] font-reddit-mono tracking-widest text-[#AB790E] mb-2 uppercase">
                                        OUR SOLUTION
                                    </h3>

                                    <h2 className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-fustat font-extrabold text-[#004B37] mb-6 leading-tight">
                                        EQTY LYFE Lump Sum
                                    </h2>

                                    <p className="text-[15px] sm:text-[16px] md:text-[18px] leading-[1.6] font-fustat text-[#03330A] mb-8">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                    </p>

                                    <ul className="space-y-3 text-[#004B37] font-fustat text-[16px] sm:text-[18px] md:text-[20px] font-semibold mb-10 list-disc pl-5">
                                        <li>10 year investment duration</li>
                                        <li>Market-proof low interest rate</li>
                                        <li>No monthly payment</li>
                                        <li>No income or employment requirement</li>
                                    </ul>

                                    <button
                                        className="bg-[#004B37] px-6 py-3 text-[14px] sm:text-[16px] rounded-[4px] text-white font-reddit-mono font-semibold cursor-pointer transition"
                                    >
                                        EXPLORE LUMP SUM SOLUTION →
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-white py-12 px-4 sm:px-6 lg:px-20">
                    <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-12 mb-6">

                        {/* Left Text Content */}
                        <div className="flex-1 text-center lg:text-left">
                            <h3 className="text-[16px] sm:text-[18px] font-reddit-mono text-[#AB790E] tracking-wide mb-2">
                                WHAT IS HOME EQUITY?
                            </h3>

                            <h2 className="text-[24px] sm:text-[28px] md:text-[36px] lg:text-[46px] font-fustat font-extrabold text-[#004B37] mb-4 leading-tight">
                                We provide <span className='text-[#E8BC1D]'>cash today</span> for a share of your home's future value.
                            </h2>

                            <p className="text-[16px] sm:text-[18px] font-fustat text-[#03330A] mb-6 max-w-[500px] mx-auto lg:mx-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                            </p>

                            <button className="bg-[#004B37] text-white font-reddit-mono text-[14px] sm:text-[16px] font-semibold py-3 px-6 rounded-[4px] cursor-pointer">
                                SEE MY HOME VALUE
                            </button>
                        </div>

                        {/* Right Image */}
                        <div className="flex-1">
                            <img
                                src={Statistics}
                                alt="Home Equity"
                                className="w-full h-auto max-w-[500px] mx-auto lg:mx-0 rounded-[8px]"
                            />
                        </div>
                    </div>
                </section>

                <section className="bg-[#004B37] py-16 px-4 lg:px-24 text-white">
                    <div className="max-w-[1200px] mx-auto text-center">
                        {/* Section Title */}
                        <h3 className="text-[16px] sm:text-[18px] font-reddit-mono text-[#FFD782] mb-2 tracking-wider">
                            WHAT CAN I USE HOME EQUITY FOR?
                        </h3>
                        <h2 className="text-[22px] sm:text-[30px] lg:text-[48px] font-fustat font-bold mb-12 leading-tight">
                            Don’t miss out on your potential
                        </h2>

                        {/* Cards List */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10 text-left">
                            {/* Card Template */}
                            {[...Array(4)].map((_, i) => {
                                const content = [
                                    {
                                        title: "Fund an education",
                                        image: Education,
                                    },
                                    {
                                        title: "Live more comfortably, in your own home",
                                        image: House,
                                        imgPosition: "object-[center_75%]",
                                    },
                                    {
                                        title: "Long-term real-estate investment",
                                        image: Realestate,
                                    },
                                    {
                                        title: "Fund your own business",
                                        image: Business,
                                    },
                                ][i];

                                return (
                                    <div key={i} className="bg-[#F5F5EB] rounded-[4px] text-[#004B37] flex flex-col justify-between h-[558.25px] overflow-hidden">
                                        {/* Text Content */}
                                        <div className="px-3 sm:px-4 pt-4">
                                            <h3 className="text-[20px] sm:text-[23px] font-fustat font-bold mb-2">
                                                {content.title}
                                            </h3>
                                            <p className="text-[14px] sm:text-[15px] font-fustat text-[#253E29]">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio.
                                            </p>
                                        </div>

                                        {/* Image */}
                                        <div className="w-full h-[386px] overflow-hidden">
                                            <img
                                                src={content.image}
                                                alt={content.title}
                                                className={`w-full h-full object-cover ${content.imgPosition || "object-center"}`}
                                            />
                                        </div>

                                        {/* CTA */}
                                        <div className="w-full bg-[#F4BF4F] px-4 py-3 text-right">
                                            <span className="text-[16px] sm:text-[19px] text-[#004B37] font-reddit-mono font-medium cursor-pointer">
                                                FIND OUT MORE →
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <section className="bg-[#F1F8E5] py-16 px-4 sm:px-6 lg:px-24">
                    <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-start gap-y-12 lg:gap-x-20">

                        {/* Left Side - Section Heading */}
                        <div className="lg:w-1/2 text-center lg:text-left">
                            <h3 className="text-[18px] sm:text-[20px] font-reddit-mono font-medium text-[#00494B] mb-3 tracking-wide">
                                HOW TO GET STARTED
                            </h3>
                            <h2 className="text-[26px] sm:text-[32px] lg:text-[48px] font-fustat font-extrabold text-[#00494B] mb-4 leading-snug">
                                Simple process, <br />
                                lasting impact.
                            </h2>
                            <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-fustat text-[#00494B] leading-relaxed max-w-[500px] mx-auto lg:mx-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                                ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                                per inceptos himenaeos.
                            </p>
                            <button className="rounded-[4px] bg-[#00494B] text-white text-[16px] py-3 px-6 my-8 sm:my-10">
                                GET STARTED NOW
                            </button>
                        </div>

                        {/* Right Side - Steps */}
                        <div className="lg:w-1/2 flex flex-col gap-8">
                            {/* Step 1 */}
                            <div className="flex flex-col sm:flex-row gap-5 items-start">
                                <img src={one} alt="1" className="w-[50px] h-auto" />
                                <div className="bg-white rounded-[12px] p-6 shadow-sm">
                                    <h3 className="text-[20px] sm:text-[24px] font-fustat font-extrabold text-[#00494B] mb-2">
                                        Submit an online application
                                    </h3>
                                    <p className="text-[#253E29] font-fustat text-[15px]">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                                        ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                                        per inceptos himenaeos.
                                    </p>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex flex-col sm:flex-row gap-5 items-start">
                                <img src={two} alt="2" className="w-[50px] h-auto" />
                                <div className="bg-white rounded-[12px] p-6 shadow-sm">
                                    <h3 className="text-[20px] sm:text-[24px] font-fustat font-extrabold text-[#00494B] mb-2">
                                        Schedule an appraisal with our certified undertakers
                                    </h3>
                                    <p className="text-[#253E29] font-fustat text-[15px]">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                                        ac aliquet odio mattis.
                                    </p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex flex-col sm:flex-row gap-5 items-start">
                                <img src={three} alt="3" className="w-[50px] h-auto" />
                                <div className="bg-white rounded-[12px] p-6 shadow-sm">
                                    <h3 className="text-[20px] sm:text-[24px] font-fustat font-extrabold text-[#00494B] mb-2">
                                        Choose how to receive your funds!
                                    </h3>
                                    <p className="text-[#253E29] font-fustat text-[15px]">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                                        ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                                        per inceptos himenaeos.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </div>
    )
}

export default App
