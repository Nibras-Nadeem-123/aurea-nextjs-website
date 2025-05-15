import { Carattere } from 'next/font/google'
import React from 'react'
import Image from 'next/image'
import { PiSpiralBold } from 'react-icons/pi'
import { FaRegHeart } from 'react-icons/fa6'

const text = Carattere({ subsets: ["latin"], weight: "400" })

const Top_picks = () => {
    const product = [
        {
            img1: "https://wdtaurea.wpengine.com/wp-content/uploads/2025/03/shop-3-01.png",
            img2: "https://wdtaurea.wpengine.com/wp-content/uploads/2025/03/shop-3-02.jpg",
            name: "Natural Glow Cream",
            rating: "4.5",
            price: "₹120.00 - ₹310.00",
            buttons: "Select Options",
        },
        {
            img1: "https://wdtaurea.wpengine.com/wp-content/uploads/2025/03/shop-2-01.png",
            img2: "https://wdtaurea.wpengine.com/wp-content/uploads/2025/03/shop-2-02.jpg",
            name: "Whitening Face Cream",
            rating: "3.0",
            price: "₹280.00 - ₹225.00",
            buttons: "Buy On Amazon",
            sale: "19.6% off"
        },
        {
            img1: "https://wdtaurea.wpengine.com/wp-content/uploads/2025/03/shop-1-01.png",
            img2: "https://wdtaurea.wpengine.com/wp-content/uploads/2025/03/shop-1-02.jpg",
            name: "Vitamin C Face Serum",
            rating: "3.8",
            price: "₹0.00 - ₹480.00",
            buttons: "Select Options",
        },
        {
            img1: "https://wdtaurea.wpengine.com/wp-content/uploads/2025/03/shop-4-01-1000x1000.png",
            img2: "https://wdtaurea.wpengine.com/wp-content/uploads/2025/03/shop-4-02.jpg",
            name: "Vitamin E Face Moisturizer",
            rating: "2.2",
            price: "₹80.00 - ₹49.00.",
            buttons: "Read More",
            sale: "38.8% off"
        },
    ]
    return (
        <div className="bg-[#fff7ef] z-10">
            <div className="border-2 border-[#e4c1b2] mx-9 p-10 text-center">
                <h2 className="text-[#e43600] text-[18px] flex items-center justify-center gap-2 mb-2">
                    <PiSpiralBold size={20} className="text-[#e43600] rotate-180" />
                    Find Your Perfect Match
                </h2>
                <h1 className={`${text.className} text-[60px] md:text-[100px] font-bold leading-tight mb-10`}>
                    Explore Our Top Picks
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
                    {product.map((item, index) => (
                        <div key={index} className="w-full max-w-[300px] text-center">
                            <div className="relative w-full h-[300px] group border border-[#e4c1b2] overflow-hidden">
                                {/* Default Image */}
                                <Image
                                    src={item.img1}
                                    alt={item.name}
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-opacity duration-500 group-hover:opacity-0"
                                />
                                {/* Hover Image */}
                                <Image
                                    src={item.img2}
                                    alt={item.name}
                                    layout="fill"
                                    objectFit="cover"
                                    className="absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                                />
                                <button className='relative h-[40px] text-center w-[40px] bg-[#e43600] opacity-0 transition-opacity duration-500 group-hover:opacity-100 p-[7px] ml-60 mt-4 cursor-pointer'><FaRegHeart size={25} className='text-white' /></button>

                                <button className='relative mt-48 h-[60px] bg-[#e43600] w-full cursor-pointer pb-3 text-[20px] text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100'>{item.buttons}</button>
                            </div>
                            <div className='border border-[#e4c1b2] w-[300px] h-[200px]'>
                                <p>{item.rating}</p>
                                <p className={` text-[30px] font-serif text-gray-800 mt-4`}>{item.name}</p>
                                <p className={` text-[18px] font-serif text-black font-thin mt-1`}>{item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Top_picks
