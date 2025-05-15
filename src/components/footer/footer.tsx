import { Carattere } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiFillYoutube } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa6'
import { SiWhatsapp } from 'react-icons/si'

const text = Carattere({ subsets: ["latin"], weight: "400" })

const Footer = () => {
    const useful_links = [
        {
            name: "Gift Sets",
            link: "",
        },
        {
            name: "Customer Care",
            link: "",
        },
        {
            name: "Track My Order",
            link: "",
        },
        {
            name: "Careers",
            link: "",
        },
        {
            name: "Online Community",
            link: "",
        },
    ]

    const shop_links = [
        {
            name: "Loyalty Program",
            link: "",
        },
        {
            name: "Best Sellers",
            link: "",
        },
        {
            name: "Social Media",
            link: "",
        },
        {
            name: "Advanced Search",
            link: "",
        },
    ]

    const customer_support = [
        {
            name: "Virtual Skin",
            link: "",
        },
        {
            name: "Consultation",
            link: "",
        },
        {
            name: "Glow Up With Us",
            link: "",
        },
        {
            name: "Site Map",
            link: "",
        },
        {
            name: "Investor Relations",
            link: "",
        },
        {
            name: "Press Release",
            link: "",
        },
    ]
    return (
        <div className='h-[793.567px] bg-black p-10 text-white'>
            <div className='flex absolute justify-between border border-[#e43600] w-full h-full'>
                <div className='flex w-[800px] flex-col gap-2 m-14'>
                    <h1 className={`${text.className} text-[74px]`}>Join Our Mailing List</h1>
                    <p>Mauris porttitor metus non purus aliquet, id tincidunt sapien malesuada. Proin posuere malesuada efficitur.</p>
                    <div className='w-[400px] h-[70px] flex mt-7 p-3 border border-[#e43600]'>
                        <input type='text' placeholder='Enter Email Address' className='focus:outline-none w-full h-full' />
                        <button className='w-2/3 h-full bg-[#e43600] cursor-pointer'>Subscribe Now</button>
                    </div>
                    <div className='flex gap-2'>
                        <input type='checkbox' className='w-[15px] h-[15px] mt-1' /> I agree with the <Link href={""} className='underline underline-offset-2'>Privacy Policy</Link>
                    </div>
                </div>
                <div className='w-[800px] p-14 text-white border border-[#e43600]'>
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='text-white text-[20px] font-semibold mb-3'>Useful Links</h1>

                            {useful_links.map((link, i) => (
                                <div key={i} className='grid '>
                                    <Link href={link.link} className='text-[18px] font-light hover:text-[#e43600] duration-500'>{link.name}</Link>
                                </div>
                            ))}
                        </div>
                        <div>
                            <h1 className='text-white text-[20px] font-semibold mb-3'>Shop Links</h1>

                            {shop_links.map((link, i) => (
                                <div key={i}>
                                    <Link href={link.link} className='text-[18px] font-light hover:text-[#e43600] duration-500'>{link.name}</Link>
                                </div>
                            ))}
                        </div>
                        <div>
                            <h1 className='text-white text-[20px] font-semibold mb-3'>Customer Support</h1>

                            {customer_support.map((link, i) => (
                                <div key={i}>
                                    <Link href={link.link} className='text-[18px] font-light hover:text-[#e43600] duration-500'>{link.name}</Link>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='mt-7 flex gap-30 justify-between mr-10'>
                        <div className=''>
                            <h1 className={`${text.className} text-[28px] text-white`}>Social Links</h1>
                            <div className='flex gap-3'>
                                <BsInstagram size={45} className='border border-[#e43600] p-3 hover:bg-slate-800 hover:text-[#e43600] cursor-pointer duration-1000'/>
                                <AiFillYoutube size={45} className='border border-[#e43600] p-3 hover:bg-slate-800 hover:text-[#e43600] cursor-pointer duration-1000'/>
                                <FaFacebookF size={45} className='border border-[#e43600] p-3 hover:bg-slate-800 hover:text-[#e43600] cursor-pointer duration-1000'/>
                                <SiWhatsapp size={45} className='border border-[#e43600] p-3 hover:bg-slate-800 hover:text-[#e43600] cursor-pointer duration-1000'/>
                            </div>
                        </div>
                        <div>
                            <h1 className={`${text.className} text-[28px] text-white`}>Payment Gateways</h1>
                            <div className='w-[300px] grid grid-cols-4 h-[60px] gap-2'>
                                <Image src={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/250px-MasterCard_Logo.svg.png"} alt='master card' height={65} width={65} className='border border-[#e43600] h-[50px] w-[70px] p-3 hover:bg-slate-800 hover:text-[#e43600] cursor-pointer duration-1000'/>
                                <Image src={"https://download.logo.wine/logo/Visa_Inc./Visa_Inc.-Logo.wine.png"} alt='Visa' height={65} width={65} className='border border-[#e43600] p-3 hover:bg-slate-800 hover:text-[#e43600] h-[50px] w-[70px] cursor-pointer duration-1000'/>
                                <Image src={"https://www.rithum.com/wp-content/uploads/2020/12/Payoneer-Logo-PNG-Grey-Text-Transparent-Background.png"} alt='Payoneer' height={65} width={65} className='border border-[#e43600] h-[50px] w-[70px] p-3 hover:bg-slate-800 hover:text-[#e43600] cursor-pointer duration-1000'/>
                                <Image src={"https://smartstore.com/media/6059/content/PayPal-1024x271px.svg.png"} alt='Paypal' height={65} width={65} className='border border-[#e43600] p-3 hover:bg-slate-800 hover:text-[#e43600] h-[50px] w-[70px] cursor-pointer duration-1000'/>
                                <Image src={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Skrill_logo.svg/1200px-Skrill_logo.svg.png"} alt='Skrill' height={65} width={65} className='border border-[#e43600] h-[50px] w-[70px] p-3 hover:bg-slate-800 hover:text-[#e43600] cursor-pointer duration-1000'/>
                                <Image src={"https://www.mastercard.com.au/content/dam/public/mastercardcom/au/en/consumers/icons/google-pay-logo_1280x531.png"} alt='G pay' height={65} width={65} className='border border-[#e43600] h-[50px] w-[70px] p-3 hover:bg-slate-800 hover:text-[#e43600] cursor-pointer duration-1000'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Image src="https://wdtaurea.wpengine.com/wp-content/themes/aurea/assets/images/light-logo.svg" alt="Aurea Site" height={1200} width={1100} className='relative mt-[400px] mx-auto' />

        </div>
    )
}

export default Footer
