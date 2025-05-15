import { Carattere } from 'next/font/google';
import React from 'react';
import { PiSpiralBold } from 'react-icons/pi';

const text = Carattere({ subsets: ["latin"], weight: "400" })

const Hero = () => {
    return (
        <div className="relative w-full h-[800px] -z-10 overflow-hidden">
            <video
                autoPlay
                muted
                playsInline
                loop
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="https://wedesignthemes.s3.us-east-1.amazonaws.com/Aurea/Aurea+cream.mp4"
            ></video>

            <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

            {/* Optional content overlay */}
            <div className="relative w-[1450px] z-10 h-full text-white mx-10 border-2 border-[#e43600]">
                <div className='px-10 pt-40 '>
                    <h1 className='text-white text-[18px] flex gap-2'><PiSpiralBold size={20} className='text-white rotate-180 font-sans-serif' /> Embrace Your Elegance</h1>
                    <h1 className={`${text.className} text-[120px] font-bold leading-[120px]`}>Timeless Beauty, <br />
                        Endless Confidence
                    </h1>
                    <p className='text-white/80 text-[18px] w-[600px]'>Embrace the power of timeless beauty and the confidence that comes with it. Our approach enhances your natural elegance, ensuring you feel radiant every day. Experience the perfect blend of grace, style, and self-assurance that never fades.</p>
                    <div className='flex gap-20 mt-20'>
                        <button className='h-[66.1125px] w-[132.538px] bg-[#131313]'>Shop Now</button>
                        <button className='h-[66.1125px] w-[132.538px] bg-[#e43600] '>View Collection</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
