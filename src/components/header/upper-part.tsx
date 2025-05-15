import React from 'react'

const Upperpart = () => {
    const list = [
        { name: "Exclusive Deal, Limited Time Only" },
        { name: "uy One, Get One Free" },
        { name: "Hurry, Limited Time Beauty Discounts" },
        { name: "Flawless Beauty, Amazing Deals Await" },
        { name: "Exclusive Beauty Sale, Don't Miss!" },
        { name: "Save More on Beauty Essentials" },
        { name: "Up to 50% Off Today!" },
        { name: "Glow More, Spend Less Today!" },
    ]


    return (
        <div className='h-[41.56px] bg-[#E43600] w-full'>
            <div
                className="flex gap-8 whitespace-nowrap py-2"
                style={{
                    animation: 'marquee 30s linear infinite'
                }}
            >
                {list.map((text, index) => (
                    <span
                        key={index}
                        className="inline-block text-[18px] font-sans-serif justify-center items-center text-center text-[#ffffff] align-baseline h-auto duration-75"
                    >
                        {text.name}
                    </span>
                ))}
            </div>

             <style>
                {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}
            </style>
        </div>
    )
}

export default Upperpart
