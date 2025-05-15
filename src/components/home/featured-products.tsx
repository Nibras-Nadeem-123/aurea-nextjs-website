import { Carattere } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import { PiSpiralBold } from 'react-icons/pi'

const text = Carattere({ subsets: ["latin"], weight: "400" })


const Featured_products = () => {
    const products = [
        {
            image: "https://wdtaurea.wpengine.com/wp-content/uploads/2025/03/pricing1.jpg",
            produst1_name: "Glow Fusion Serum",
            product1_description: "Acommodo varius ante convallis rutrum finibus.",
            product1_price: "49.00",
            produst2_name: "Radiant Boost Elixir",
            product2_description: "Sapien suspendisse quis massa ac venenatis. In scelerisque.",
            product2_price: "55.00",
            produst3_name: "Vibrant Radiance Serum",
            product3_description: "Pellentesque dapibus amet nisi non lectus auctor euismod.",
            product3_price: "60.00",
            produst4_name: "Crystal Clear Serum",
            product4_description: "Habitasse cras congue dui vitae, cursus consectetur massa.",
            product4_price: "42.00",
            produst5_name: "Hydra Vibe Serum",
            product5_description: "Magnis habitant maximus ac ultricies ut, semper non ligula.",
            product5_price: "38.00",
        },
        {
            image: "https://wdtaurea.wpengine.com/wp-content/uploads/2025/02/pricing-plan-img-2.jpg",
            produst1_name: "Pure Glow Facial Cleanser",
            product1_description: "Ex potenti tempus volutpat mus fames.",
            product1_price: "41.00",
            produst2_name: "Glow Balance Toner",
            product2_description: "Dictumst scelerisque consequat eros habitasse id neque.",
            product2_price: "55.00",
            produst3_name: "Vibrant Clear Pore Toner",
            product3_description: "Cras diam augue fringilla magnis bibendum feugiat.",
            product3_price: "72.00",
            produst4_name: "Glow Perfect Primer",
            product4_description: "Aliquet orci tellus morbi est sem laoreet himenaeos.",
            product4_price: "89.00",
            produst5_name: "Radiance Boost Cleansing Gel",
            product5_description: "Nisl litora posuere aliquam vestibulum mus nec netus.",
            product5_price: "88.00",
        },
        {
            image: "https://wdtaurea.wpengine.com/wp-content/uploads/2025/03/price-3-img.jpg",
            produst1_name: "Cucumber Cool Eye Cream",
            product1_description: "Ornare nostra nulla mauris; iaculis  suspendisse.",
            product1_price: "33.00",
            produst2_name: "Deep Renewal Eye Gel",
            product2_description: "Class elit penatibus in nostra tempus suspendisse torquent.",
            product2_price: "42.00",
            produst3_name: "Luxe Moist Silk Cream",
            product3_description: "Amet sodales suscipit lobortis enim ornare.",
            product3_price: "47.00",
            produst4_name: "Hydra Fresh Reviving Mask",
            product4_description: "Penatibus dis ullamcorper facilisi; consectetur.",
            product4_price: "53.00",
            produst5_name: "Face Smoothen Gel",
            product5_description: "Nibh viverra vulputate lacus curae curabitur.",
            product5_price: "79.00",
        },
    ]
    return (
        <div className='h-[950px] w-full bg-[#fff7ef] p-10'>
            <h1 className='text-[#e43600] text-[18px] flex gap-2 mb-2 w-[400px] mx-auto'><PiSpiralBold size={20} className='text-[#e43600] rotate-180 font-sans-serif ' />PRICING MADE SIMPLE</h1>
            <h1 className={`${text.className} text-[100px] font-bold mx-auto text-center leading-[120px]`}>Explore Our Featured Products</h1>
            <div className='flex h-full w-full border-2 border-[#e4c1b2]'>
                {
                    products.map((product, index) => (
                        <div key={index} className='group flex flex-col gap-3 p-6 border-2 border-[#e4c1b2]'>
                            <Image src={product.image} alt={product.produst1_name} height={500} width={500} className='group-hover:scale-105 duration-700 mb-10' />
                            <div className='flex justify-between border-y-1 border-[#bfbcba] h-[100px] py-2'>
                                <div>
                                    <h1 className={`${text.className} text-[30px] hover:text-[#e43600] duration-700`}>{product.produst1_name}</h1>
                                    <h2 className='font-light text-[15px] text-[#5a5856]'>{product.product1_description}</h2>
                                </div>
                                <h2 className={`${text.className} text-[30px] text-[#5a5856]`}>${product.product1_price}</h2>
                            </div>
                            <div className='flex justify-between border-y-1 border-[#bfbcba] h-[100px] py-2'>
                                <div>
                                    <h1 className={`${text.className} text-[30px] hover:text-[#e43600] duration-700`}>{product.produst2_name}</h1>
                                    <h2 className='font-light text-[15px] text-[#5a5856]'>{product.product2_description}</h2>
                                </div>
                                <h2 className={`${text.className} text-[30px] text-[#5a5856]`}>{product.product2_price}</h2>
                            </div>
                            <div className='flex justify-between border-y-1 border-[#bfbcba] h-[100px] py-2'>
                                <div>
                                    <h1 className={`${text.className} text-[30px] hover:text-[#e43600] duration-700`}>{product.produst3_name}</h1>
                                    <h2 className='font-light text-[15px] text-[#5a5856]'>{product.product3_description}</h2>
                                </div>
                                <h2 className={`${text.className} text-[30px] text-[#5a5856]`}>{product.product3_price}</h2>
                            </div>
                            <div className='flex justify-between border-y-1 border-[#bfbcba] h-[100px] py-2'>
                                <div>
                                    <h1 className={`${text.className} text-[30px] hover:text-[#e43600] duration-700`}>{product.produst4_name}</h1>
                                    <h2 className='font-light text-[15px] text-[#5a5856]'>{product.product4_description}</h2>
                                </div>
                                <h2 className={`${text.className} text-[30px] text-[#5a5856]`}>{product.product4_price}</h2>
                            </div>
                            <div className='flex justify-between border-y-1 border-[#bfbcba] h-[100px] py-2'>
                                <div>
                                    <h1 className={`${text.className} text-[30px] hover:text-[#e43600] duration-700`}>{product.produst5_name}</h1>
                                    <h2 className='font-light text-[15px] text-[#5a5856]'>{product.product5_description}</h2>
                                </div>
                                <h2 className={`${text.className} text-[30px] text-[#5a5856]`}>{product.product5_price}</h2>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Featured_products
