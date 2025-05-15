"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Fraunces } from "next/font/google";

const text = Fraunces({ subsets: ["latin"] })
const products = [
    {
        name: "Serum",
        image: "https://wdtaurea.wpengine.com/wp-content/uploads/2025/03/section-5-img-1-829x1024.jpg",
        items: 2,
    },
    {
        name: "Lip Stain",
        image: "https://wdtaurea.wpengine.com/wp-content/uploads/2025/03/section-5-img-2-829x1024.jpg",
        items: 4,
    },
    {
        name: "Face Gel",
        image: "https://wdtaurea.wpengine.com/wp-content/uploads/2025/03/section-5img-3.jpg",
        items: 3,
    },
];

const ProductHover = () => {
    // keeps track of which product you are currently hovering over.
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    //    stores how far your mouse is from the center of the name, used to slide the image.
    const [xOffset, setXOffset] = useState(0);

    // to  calculates how far your mouse is from the center of the hovered element (offsetX).
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        setXOffset(offsetX - rect.width / 2);
    };

    return (
        <div className=" bg-[#685441] overflow-hidden -z-10">
        <div className=" min-h-screen flex items-center justify-center overflow-hidden m-10 border border-[#e43600]">
             <div className="relative h-[70vh] w-full max-w-[1300px] mx-auto ">
                {products.map((item, index) => {
                    const total = products.length - 1;
                    const top = `${10 + (index / total) * 70}%`;
                    const left = `${10 + (index / total) * 70}%`;

                    return (
                        <div
                            key={index}
                            className="absolute transform -translate-x-1/2 -translate-y-1/2"
                            style={{ top, left }}
                        >
                            <div
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => {
                                    setHoveredIndex(null);
                                    setXOffset(0);
                                }}
                                onMouseMove={handleMouseMove}
                                className="relative group cursor-pointer"
                            >
                                {/* Product Name */}
                                <h1
                                    className={`${text.className} text-[8rem] italic text-[#fff7ef] font-thin relative whitespace-nowrap`}
                                >
                                    {item.name}
                                    <span className="absolute left-0 right-0 top-1/2 border-t-2 border-[#e43600] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                                </h1>

                                {/* Item Count aligned to the right of the name */}
                                <p className="text-white text-sm absolute -top-0 left-full ml-2 whitespace-nowrap">
                                    ({item.items} Items)
                                </p>

                                {/* Hover Image */}
                                {hoveredIndex === index && (
                                    <div
                                        className="absolute top-1/2 left-1/2 z-20 pointer-events-none transition-transform duration-300 ease-in-out"
                                        style={{
                                            transform: `translate(-50%, -50%) translateX(${xOffset}px)`,
                                        }}
                                    >
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            width={700}
                                            height={900}
                                            className="border border-[#e43600] p-2 shadow-lg object-cover opacity-90 mix-blend-multiply"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
            </div>
            </div>
     );
};

export default ProductHover;