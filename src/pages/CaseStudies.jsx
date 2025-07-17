import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CaseStudyImg from '../assets/Case_Study1.png'
import Emily from '../assets/Emily.png'
import John from '../assets/John.png'
import Sarah from '../assets/Sarah.png'

const CaseStudies = () => {
    return (
        <div>
            <Navbar />
            <div className="w-full bg-[#F1F8E5] px-6 sm:px-10 py-16 relative">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10 md:gap-16">

                    {/* Image Section */}
                    <div className="relative flex-shrink-0 self-center md:self-start md:ml-[80px]">
                        <div className="w-[300px] sm:w-[340px] md:w-[377px] h-[460px] sm:h-[500px] md:h-[516px] overflow-hidden rounded-xl shadow-lg">
                            <img
                                src={CaseStudyImg}
                                alt="Case Studies"
                                className="w-full h-full object-cover object-[60%] scale-[1.4]"
                            />
                        </div>

                        {/* Testimonial Card (absolute for large screens only) */}
                        <div className="hidden lg:block absolute -right-[340px] top-[320px] w-[436px] bg-[#00494B] rounded-[12px] px-6 py-8 shadow-md">
                            <p
                                className="text-white text-[18px] font-semibold italic leading-[140%]"
                                style={{ fontFamily: 'DM Sans' }}
                            >
                                “I was able to pay off my other mortgage and retire comfortably in a renovated home right here in California.” — Karen Smith
                            </p>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 text-center md:text-left">
                        <h3
                            className="text-[14px] sm:text-[16px] font-medium tracking-[0.125em] text-[#AB790E] mb-5"
                            style={{ fontFamily: 'Reddit Mono' }}
                        >
                            CUSTOMER TESTIMONIAL
                        </h3>

                        <h1
                            className="text-[28px] sm:text-[32px] md:text-[36px] font-extrabold text-[#004B37] leading-[120%] mb-5"
                            style={{ fontFamily: 'Fustat' }}
                        >
                            Hear Karen’s Investment and Retirement Story
                        </h1>

                        <p
                            className="inline-block bg-[#E9FBC7] text-[#004B37] text-[14px] sm:text-[16px] font-semibold px-4 py-1 rounded-full mb-5"
                            style={{ fontFamily: 'Fustat' }}
                        >
                            Use Case: Investment and Retirement
                        </p>

                        <p
                            className="text-[15px] sm:text-[16px] text-[#03330A] leading-[140%] tracking-[0.0625em] max-w-xl mx-auto md:mx-0"
                            style={{ fontFamily: 'Fustat' }}
                        >
                            Karen started investing with EQTY LYFE in 2017. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                        </p>
                    </div>
                </div>

                {/* Testimonial Card for Mobile/Tablet */}
                <div className="block lg:hidden mt-10 max-w-[90%] mx-auto bg-[#00494B] rounded-[12px] px-6 py-6 shadow-md">
                    <p
                        className="text-white text-[16px] sm:text-[18px] font-semibold italic leading-[140%]"
                        style={{ fontFamily: 'DM Sans' }}
                    >
                        “I was able to pay off my other mortgage and retire comfortably in a renovated home right here in California.” — Karen Smith
                    </p>
                </div>
            </div>
            {/* Additional Section */}
            <div className="bg-white py-16 px-6 sm:px-10 lg:px-[150px]">
                <div className="max-w-7xl mx-auto mb-12">
                    <h2 className="text-[36px] font-extrabold text-[#004B37] mb-4 text-left" style={{ fontFamily: 'Fustat' }}>
                        Hear from hundreds like Karen
                    </h2>
                    <p className="text-[16px] text-[#03330A] max-w-2xl leading-[140%] tracking-wide text-left" style={{ fontFamily: 'Fustat' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                    </p>
                </div>

                {/* Cards Wrapper */}
                <div className="flex flex-col gap-16">
                    {/* CARD 1 - IMAGE LEFT */}
                    <div className="flex flex-col md:flex-row items-start bg-white rounded-xl border border-[#E5E5E5] overflow-hidden p-6 md:p-10 max-w-[747px] w-full mr-auto relative">
                        {/* Image */}
                        <div className="w-full md:w-[300px] h-[280px] relative z-0">
                            <img src={Emily} alt="Emily" className="w-full h-full object-cover rounded-2xl" />
                        </div>

                        {/* Text */}
                        <div className="flex-1 md:pl-6 mt-6 md:mt-0 relative">
                            <h3 className="text-[32px] font-bold text-black mb-2" style={{ fontFamily: 'Fustat' }}>Emily, 32, California</h3>
                            <p className="inline-block bg-[#E9FBC7] text-[#004B37] text-[14px] font-semibold px-4 py-2 rounded-xl mb-3" style={{ fontFamily: 'Fustat' }}>
                                Use Case: Small Business
                            </p>

                            {/* Green Overlay Card */}
                            <div className="bg-[#00494B] text-[18px] font-medium text-white italic px-6 py-5 rounded-[12px] shadow-md relative z-8 md:-ml-24 mt-2 max-w-[90%] md:max-w-[480px]" style={{ fontFamily: 'DM Sans' }}>
                                “I started my own business with the help of EQTY and realized my dream.” — Emily John
                            </div>

                            <div className="text-right mt-5">
                                <button className="text-[#AB790E] font-semibold text-[15px] hover:underline cursor-pointer" style={{ fontFamily: 'Fustat' }}>
                                    LEARN MORE ABOUT EMILY →
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* CARD 2 - IMAGE RIGHT */}
                    <div className="flex flex-col md:flex-row-reverse items-start bg-white rounded-xl border border-[#E5E5E5] overflow-hidden p-6 md:p-10 max-w-[747px] w-full ml-auto relative">
                        {/* Image */}
                        <div className="w-full md:w-[300px] h-[280px] relative z-0">
                            <img src={John} alt="John" className="w-full h-full object-cover rounded-2xl" />
                        </div>

                        {/* Text */}
                        <div className="flex-1 md:pr-6 mt-6 md:mt-0 relative">
                            <h3 className="text-[32px] font-bold text-black mb-2 text-right md:text-left" style={{ fontFamily: 'Fustat' }}>John, 25, New York</h3>
                            <p className="inline-block bg-[#E9FBC7] text-[#004B37] text-[14px] font-semibold px-4 py-2 rounded-xl mb-3" style={{ fontFamily: 'Fustat' }}>
                                Use Case: Higher Education
                            </p>

                            {/* Green Overlay Card */}
                            <div className="bg-[#00494B] text-[18px] font-medium text-white italic px-6 py-5 rounded-[12px] shadow-md relative z-8 md:-mr-24 mt-2 max-w-[90%] md:max-w-[480px]" style={{ fontFamily: 'DM Sans' }}>
                                “Thanks to the home equity investment my parents took out before college, I was able to graduate debt free.” — John Wilson
                            </div>

                            <div className="text-left mt-5">
                                <button className="text-[#AB790E] font-semibold text-[15px] hover:underline cursor-pointer" style={{ fontFamily: 'Fustat' }}>
                                    LEARN MORE ABOUT JOHN →
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* CARD 3 - IMAGE LEFT */}
                    <div className="flex flex-col md:flex-row items-start bg-white rounded-xl border border-[#E5E5E5] overflow-hidden p-6 md:p-10 max-w-[747px] w-full mr-auto relative">
                        {/* Image */}
                        <div className="w-full md:w-[300px] h-[280px] relative z-0">
                            <img src={Sarah} alt="Sarah" className="w-full h-full object-cover rounded-2xl" />
                        </div>

                        {/* Text */}
                        <div className="flex-1 md:pl-6 mt-6 md:mt-0 relative">
                            <h3 className="text-[32px] font-bold text-black mb-2" style={{ fontFamily: 'Fustat' }}>Sarah, 28, Texas</h3>
                            <p className="inline-block bg-[#E9FBC7] text-[#004B37] text-[14px] font-semibold px-4 py-2 rounded-xl mb-3" style={{ fontFamily: 'Fustat' }}>
                                Use Case: Small Business
                            </p>

                            {/* Green Overlay Card */}
                            <div className="bg-[#00494B] text-[18px] font-medium text-white italic px-6 py-5 rounded-[12px] shadow-md relative z-8 md:-ml-24 mt-2 max-w-[90%] md:max-w-[480px]" style={{ fontFamily: 'DM Sans' }}>
                                “I started my own business with the help of EQTY and realized my dream.” — Sarah Johnson
                            </div>

                            <div className="text-right mt-5">
                                <button className="text-[#AB790E] font-semibold text-[15px] hover:underline cursor-pointer" style={{ fontFamily: 'Fustat' }}>
                                    LEARN MORE ABOUT SARAH →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#004B37] text-white py-20 px-6 text-center">
                <div className="max-w-5xl mx-auto space-y-6 px-4 sm:px-6 lg:px-8">
                    <h2 className="text-[14px] sm:text-[16px] tracking-widest uppercase text-[#E9FBC7]" style={{ fontFamily: 'Fustat' }}>
                        IN THE NEWS
                    </h2>

                    <p
                        className="text-[24px] sm:text-[30px] lg:text-[36px] font-bold leading-tight text-[#F1F8E5]"
                        style={{ fontFamily: 'Fustat' }}
                    >
                        “EQTY LYFE, a new start-up, strives to help home owners access the value of their homes in a risk-avert and accessible way.”
                    </p>

                    <div className="text-[18px] sm:text-[20px] text-[#CFEAD2] text-right" style={{ fontFamily: 'Fustat' }}>
                        — Real Estate Column, New York Times
                    </div>
                </div>
            </div>



            <Footer />
        </div>
    )
}

export default CaseStudies
