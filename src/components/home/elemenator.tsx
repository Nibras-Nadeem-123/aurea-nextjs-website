import { Gwendolyn } from 'next/font/google';
import Image from 'next/image';
import React from 'react';

const text = Gwendolyn({ subsets: ["latin"], weight: "700" })

const Elemenator = () => {
    const product = [
        {
            text: "Improved Skin Texture",
            src: "https://wdtaurea.wpengine.com/wp-content/uploads/2025/03/aurea-home-3-collection-image-1.jpg",
        },
        {
            text: "Enhanced Lip Color",
            src: "https://wdtaurea.wpengine.com/wp-content/uploads/2025/03/section-2-img-1.jpg",
        },
        {
            text: "Eyebrow Shaping",
            src: "https://wdtaurea.wpengine.com/wp-content/uploads/2025/03/section-2-img-2.jpg",
        },
        {
            text: "Even Skin Tone",
            src: "https://wdtaurea.wpengine.com/wp-content/uploads/2025/03/section-2-img-3.jpg",
        },
        {
            text: "Acne Control",
            src: "https://wdtaurea.wpengine.com/wp-content/uploads/2025/03/section-2-img-4.jpg",
        },
        {
            text: "Skin Rejuvenation",
            src: "https://wdtaurea.wpengine.com/wp-content/uploads/2025/03/section-2-img-5.jpg",
        },
    ];

 
    return (
        <div className="w-full px-9 bg-[#fff7ef]">
            <div className="grid grid-cols-2 border border-[#e4c1b2]">
                {product.map((item, index) => (
                    <div
                        key={index}
                        className=" flex group justify-center items-center h-[300px] border border-[#e4c1b2] cursor-pointer relative overflow-hidden transition-all duration-300"
                         >                      
                        <Image
                                src={item.src}
                                alt={item.text}
                                height={300}
                                width={300}
                                className="absolute inset-0 h-full group-hover:opacity-100 opacity-0 w-full p-8 object-cover transition-all duration-300"
                            />
                        
                            <div className="group-hover:opacity-0 opacity-100 transition-all">
                                <p className={`${text.className} text-[60px] text-gray-800 text-center font-sans-serif`}>{item.text}</p>
                                <p className={`${text.className} text-[60px] font-bold text-[#e4c1b2] mb-2 text-right items-baseline justify-baseline`}>0{index + 1}</p>
                            </div>
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Elemenator;
