"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { BiSolidPhoneCall } from 'react-icons/bi'
import { IoMdMail } from 'react-icons/io'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { PiSpiralBold } from 'react-icons/pi'
import { Carattere } from 'next/font/google'


const text = Carattere({ subsets: ["latin"], weight: "400" })
const images = ["https://wdtaurea.wpengine.com/wp-content/uploads/2025/03/faq-img-1.jpg", "https://wdtaurea.wpengine.com/wp-content/uploads/2025/03/faq-img-2.jpg"]

const Question_answer = () => {

    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 2000)

        return () => clearInterval(timer)
    }, [])
    return (
        <div className='h-[970.733px] w-full bg-[#fff7ef] px-10'>
            <div className='flex gap-20 h-full w-full border-x-2 border-[#e4c1b2]'>
                <div className="w-[700px] h-full mt-28 inset-0 transition-opacity duration-1000 ease-in-out p-7 ">
                    <Image
                        src={images[currentIndex]}
                        alt="Product video preview"
                        height={900}
                        width={700}
                        className="transform scale-100 absolute mt-10"
                    />
                    <div className='relative flex mt-[515px] ml-14 h-[169.6px] w-[570.2px] bg-[#f7e2dd] border-2 border-[#e2b3a0]'>
                        <div className='my-auto justify-center items-center p-4'>
                            <h1 className='text-[25px] italic font-serif text-black'>Have Question? Talk to Us</h1>
                            <p className='font-light'>Get the answers to your questions from our exports.</p>
                        </div>
                        <div className='grid'>
                            <div className='flex justify-center items-center border border-[#e2b3a0]'>
                                <BiSolidPhoneCall size={35} className='border h-full w-[90px] p-3 border-[#e2b3a0]' />
                                <p className='hover:text-[#e43600] pl-2'>000 -123 -456789 / 0000 1234 56789</p>
                            </div>
                            <div className='flex justify-center items-center border border-[#e2b3a0]'>
                                <IoMdMail size={35} className='border h-full w-[90px] p-3 border-[#e2b3a0]' />
                                <p className='hover:text-[#e43600] pl-2'>info@aurea.com / support@aurea.com</p>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className='w-[700px] h-[700px] border-l-2 border-[#e4c1b2] p-8 mt-[180px]'>
                    <div className="w-[600px] h-[650px] bg-[#f7e2dd] border-2 border-[#e4c1b2] p-8 shadow-md mr-16">
                        <h1 className='text-[#e43600] text-[18px] flex gap-2 mb-2 w-[400px] '><PiSpiralBold size={20} className='text-[#e43600] rotate-180 font-sans-serif ' />QUESTIONS WE GET</h1>
                        <h1 className={`${text.className} text-[60px] font-bold italic`}>Clear Answers Await</h1>
                        <Accordion type="single" collapsible className="space-y-4  mt-10">
                            {[
                                {
                                    q: "How Do I Choose The Right Foundation Shade?",
                                    a: "Mollis tellus efficitur non lobortis eget dolor lectus. Metus lorem vestibulum primis senectus dignissim velit vulputate.",
                                },
                                {
                                    q: "How Long Does My Makeup Last?",
                                    a: "Venenatis fames felis praesent rutrum id nam iaculis aliquet. Varius potenti proin mauris auctor pharetra.",
                                },
                                {
                                    q: "Do Your Makeup Products Contain SPF?",
                                    a: "Consectetur aliquam dictum tortor hendrerit pretium convallis tempor. Posuere enim inceptos magnis.",
                                },
                                {
                                    q: "Are Your Makeup Products Non-comedogenic?",
                                    a: "Habitasse id vitae hendrerit vitae nec vivamus posuere. Neque mattis nisi parturient tellus velit himenaeos.",
                                },
                                {
                                    q: "What Ingredients Are In Your Makeup Products?",
                                    a: "Fusce velit tristique parturient at integer tempus. Per nullam vulputate nunc habitant malesuada aenean.",
                                },
                            ].map((item, i) => (
                                <AccordionItem
                                    key={i}
                                    value={`item-${i}`}
                                    className="border border-[#e4c1b2]"
                                >
                                    <AccordionTrigger className="italic text-[18px] text-left px-4 py-3 hover:no-underline">
                                        {item.q}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-[16px] font-light px-4 pb-4 pt-1">
                                        {item.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question_answer
