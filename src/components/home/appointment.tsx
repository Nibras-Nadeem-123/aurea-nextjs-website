import { Carattere } from 'next/font/google'
import Link from 'next/link'
import React from 'react'
import { PiSpiralBold } from 'react-icons/pi'

const text = Carattere({ subsets: ["latin"], weight: "400" })

const Appointment = () => {

    const inputs = [
        { name: "Your Full Name" },
        { name: "Your Email Address" },
        { name: "Your Phone Number" },
    ]
    return (
        <div className='h-[803.85px]  bg-[#fff7ef] '>
            <div className='h-full p-9 mx-9 border-x-2 border-[#e4c1b2]'>
                <div className='m-7 mx-auto my-auto w-[1319.6px] h-[703.85px] bg-[#e43600] flex text-center justify-center items-center'>
                    <div>
                        <div className='text-white'>
                            <h1 className='text-white text-[18px] flex gap-2 mb-2 w-[400px] mx-auto'><PiSpiralBold size={20} className='text-white rotate-180 font-sans-serif ' /> Book Your Appointment</h1>
                            <h1 className={`${text.className} text-[100px] font-bold leading-[120px]`}>Reserve Your Spot</h1>
                            <h1 className='text-[22.5584px] w-[850px] '>You can reach out via email at <Link href={"example@example.com"} className='font-bold'>Support-Care@Aurea.com</Link>, use the form below, or give me a call at <Link href={"+ (123) 472-9722"} className='font-bold'>+ (123) 472-9722</Link></h1>
                            <h2 className='text-[22.5584px] w-[850px] '>For fastest response time, please email us</h2>
                        </div>
                        <div className=' grid grid-cols-2 gap-5'>
                            {inputs.map((input, index) => (
                                <div key={index}>
                                    <input type='text' placeholder={input.name} className='w-[449.8px] text-[20px] h-[66.3833px] text-white p-5 border-1 border-white focus:outline-none' />

                                </div>
                            ))}
                            <select className='w-[449.8px] text-[20px] h-[66.3833px] text-white p-5 border-1 border-white focus:outline-none'>Select Services
                                <option className='text-black text-[20px]'>Microdermabrasion</option>
                                <option className='text-black text-[20px]'>Chemical Peel</option>
                                <option className='text-black text-[20px]'>Classical Facial</option>
                                <option className='text-black text-[20px]'>Light Therapy</option>
                                <option className='text-black text-[20px]'>Facial Massage</option>
                                <option className='text-black text-[20px]'>Hydrating Facial</option>
                            </select>
                            <input type='datetime-local' placeholder='Select Date' className='w-[449.8px] text-[20px] h-[66.3833px] text-white p-5 border-1 border-white focus:outline-none'/>
                            <input type='time' placeholder='Select Time' className='w-[449.8px] text-[20px] h-[66.3833px] text-white p-5 border-1 border-white focus:outline-none'/>
                        </div>
                        <button className='w-[200.783px] h-[66.3833px] bg-white mt-5 hover:bg-amber-600'>
                            Book Appointment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Appointment
