import React from 'react';
import Navbar from '../components/Navbar';
import image1 from '../assets/Tech_Solutions2.png';
import image2 from '../assets/Tech_Solutions1.png';
import bgimg from '../assets/bg-tech.png'
import techimg1 from '../assets/TechImg1.png'
import techimg1overlay from '../assets/TechImg1overlay.png'

const TechSolutions = () => {
    return (
        <div className="min-h-screen bg-gray-100 w-full overflow-x-hidden">
            <Navbar />

            {/* Card Container */}
            <div className="flex justify-center px-4 mt-4 sm:mt-6">
                <div className="w-full max-w-[1105px] xl:max-w-[1200px] 2xl:max-w-[1320px] bg-[#004B37] rounded-[12px] shadow-lg pt-6 pb-6 px-6 sm:pl-14 sm:pr-0 text-white mb-10">


                    {/* Exclusive Technology Section */}
                    <div className="flex flex-col lg:flex-row gap-10 items-start">

                        {/* Left: Text Content */}
                        <div className="lg:w-[40%] w-full text-center lg:text-left pt-12 px-2 sm:px-0">

                            <h4 className="font-reddit-mono text-[18px] tracking-[0.02em] text-[#FFD782] uppercase mb-6">
                                EXCLUSIVE TECHNOLOGY
                            </h4>

                            <h3 className="font-fustat font-extrabold text-[28px] sm:text-[32px] md:text-[36px] leading-tight text-white mb-8">
                                The simplest way to visualize your home equity investments
                            </h3>

                            <p className="font-fustat text-[18px] tracking-[0.01em] text-[#F1FFEF] mb-10">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                            </p>

                            <button className="px-4 py-2 rounded-[4px] bg-white text-[#004B37] font-reddit-mono font-medium text-[12px] tracking-[0.02em]">
                                VISUALIZE MY HOME VALUE
                            </button>
                        </div>

                        {/* Right: Images */}
                        <div className="lg:w-[60%] w-full relative mt-10 lg:mt-0 flex justify-center items-start pl-6">
                            <div className="relative w-full max-w-[600px] mx-auto">
                                {/* Background Image */}
                                <img
                                    src={image1}
                                    alt="Tech Visual 1"
                                    className="w-full h-auto rounded-[8px] object-cover"
                                />

                                {/* Overlay Image */}
                                <img
                                    src={image2}
                                    alt="Tech Visual 2"
                                    className="absolute bottom-[5px] left-[-40px] sm:left-[-60px] md:left-[-62px] w-[160px] sm:w-[180px] md:w-[200px] rounded-[8px] object-cover"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* White Section - Image Left, Text Right */}
            <section className="bg-white py-16 px-6 lg:px-24">
                <div className="max-w-[1320px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">

                    <div className="relative w-full max-w-md mx-auto">
                        {/* Background Shape/Image */}
                        <img
                            src={bgimg}
                            alt="Background"
                            className="absolute w-full h-auto z-0"
                        />

                        {/* Main Image */}
                        <img
                            src={techimg1}
                            alt="Main Visual"
                            className="relative z-10 rounded-[8px] w-full h-auto"
                        />

                        {/* Optional Overlay Image */}
                        <img
                            src={techimg1overlay}
                            alt="Overlay"
                            className="absolute bottom-[80px] right-[-80px] w-[220px] z-20"
                        />
                    </div>


                    {/* Right: Text */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">

                        <h2 className="font-fustat font-extrabold text-[28px] sm:text-[32px] md:text-[36px] leading-tight text-[#004B37] mb-4">
                            Pay and invest on-the-go, in any form
                        </h2>

                        <p className="font-fustat text-[18px] text-[#03330A] mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                        </p>

                        <button className="py-3 text-[#AB790E] font-reddit-mono font-medium text-[14px] tracking-[0.02em]">
                            TRY OUR TECH SOLUTION →
                        </button>
                    </div>
                </div>
            </section>
            {/* White Section - Text Left, Image Right */}
            <section className="bg-white py-16 px-6 lg:px-24">
                <div className="max-w-[1320px] mx-auto flex flex-col lg:flex-row items-center gap-10">

                    {/* Left: Text */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">

                        <h2 className="font-fustat font-extrabold text-[28px] sm:text-[32px] md:text-[36px] leading-tight text-[#004B37] mb-4">
                            Have full control over your payment schedule
                        </h2>

                        <p className="font-fustat text-[18px] text-[#03330A] mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                        </p>

                        <button className="py-3 rounded-[4px] text-[#AB790E] font-reddit-mono font-medium text-[14px] tracking-[0.02em]">
                            TRY OUR TECH SOLUTION →
                        </button>
                    </div>

                    {/* Right: Image */}
                    <div className="w-full lg:w-1/2">
                        <img
                            src={'/path-to-image.jpg'} // Replace with actual image path or import
                            alt="Payment Control"
                            className="w-full h-auto rounded-[8px] object-cover"
                        />
                    </div>
                </div>
            </section>
            {/* White Section - Text Left, Image Right */}
            <section className="bg-white py-16 px-6 lg:px-24">
                <div className="max-w-[1320px] mx-auto flex flex-col lg:flex-row items-center gap-10">


                    {/* left: Image */}
                    <div className="w-full lg:w-1/2">
                        <img
                            src={'/path-to-your-image.jpg'} // Replace with the actual image path
                            alt="Expert Advisors"
                            className="w-full h-auto rounded-[8px] object-cover"
                        />
                    </div>
                    {/* right: Text */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">

                        <h2 className="font-fustat font-extrabold text-[28px] sm:text-[32px] md:text-[36px] leading-tight text-[#004B37] mb-4">
                            Always chat with real, expert financial advisors
                        </h2>

                        <p className="font-fustat text-[18px] text-[#03330A] mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                        </p>

                        <button className="py-3 rounded-[4px] text-[#AB790E] font-reddit-mono font-medium text-[14px] tracking-[0.02em]">
                            TRY OUR TECH SOLUTION →
                        </button>
                    </div>

                </div>
            </section>


        </div>
    );
};

export default TechSolutions;
