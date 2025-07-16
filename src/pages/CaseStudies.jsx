import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CaseStudyImg from '../assets/Case_Study1.png'

const CaseStudies = () => {
    return (
        <div>
            <Navbar />
            <div className="w-full bg-[#F1F8E5] min-h-screen px-6 sm:px-10 py-16 relative">
                {/* Flex Row */}
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-8 md:gap-12">

                    {/* Left Image */}
                    <div className="flex-shrink-0 md:ml-[100px]">
                        <div className="w-[377px] h-[516px] overflow-hidden rounded-xl shadow-lg">
                            <img
                                src={CaseStudyImg}
                                alt="Case Studies"
                                className="w-full h-full object-cover object-[60%] scale-[1.4] transform"
                            />
                        </div>
                    </div>

                    {/* Right Text Content */}
                    <div className="md:ml-6 mt-8 md:mt-0 text-center md:text-left px-2">
                        <h3
                            className="text-[16px] font-medium tracking-[0.125em] leading-[120%] text-[#AB790E] mb-5"
                            style={{ fontFamily: 'Reddit Mono' }}
                        >
                            CUSTOMER TESTIMONIAL
                        </h3>

                        <h1
                            className="text-[36px] font-extrabold leading-[120%] text-[#004B37] mb-5"
                            style={{ fontFamily: 'Fustat' }}
                        >
                            Hear Karen’s Investment and Retirement Story
                        </h1>

                        <p
                            className="inline-block bg-[#E9FBC7] text-[#004B37] text-[16px] font-semibold px-3 py-1 rounded-full leading-[130%] mb-5"
                            style={{ fontFamily: 'Fustat' }}
                        >
                            Use Case: Investment and Retirement
                        </p>

                        <p
                            className="text-[16px] font-normal text-[#03330A] leading-[140%] tracking-[0.0625em] max-w-xl mx-auto md:mx-0"
                            style={{ fontFamily: 'Fustat' }}
                        >
                            Karen started investing with EQTY LYFE in 2017. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                        </p>
                    </div>
                </div>

                {/* Positioned Testimonial Card */}
                <div
                    className="
            hidden
            lg:block
            absolute
            left-[430px]
            top-[420px]
            w-[436px]
            h-[127px]
            bg-[#00494B]
            rounded-[12px]
            px-6
            py-8
            shadow-md
          "
                >
                    <p
                        className="text-white text-[18px] font-semibold italic leading-[140%]"
                        style={{ fontFamily: 'DM Sans' }}
                    >
                        “I was able to pay off my other mortgage and retire comfortably in a renovated home right here in California.” — Karen Smith
                    </p>
                </div>

                {/* Mobile & Tablet Version of Card */}
                <div
                    className="
            block
            lg:hidden
            mt-10
            max-w-[90%]
            mx-auto
            bg-[#00494B]
            rounded-[12px]
            px-6
            py-6
            shadow-md
          "
                >
                    <p
                        className="text-white text-[18px] font-semibold italic leading-[140%]"
                        style={{ fontFamily: 'DM Sans' }}
                    >
                        “I was able to pay off my other mortgage and retire comfortably in a renovated home right here in California.” — Karen Smith
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default CaseStudies
