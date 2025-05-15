import React from 'react'
import Upperpart from './upper-part'
import Image from 'next/image'
import { IoSearchOutline } from 'react-icons/io5'
import { CiUser } from 'react-icons/ci'
import { FaCartShopping } from 'react-icons/fa6'
import Link from 'next/link'

const Header = () => {
    const navbar = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "Products",
            link: "/products",
        },
        {
            name: "Inner Pages",
            link: "/inner-pages",
        },
        {
            name: "Our Gallery",
            link: "/our-gallery",
        },
        {
            name: "Contact",
            link: "/contact",
        },
    ]
    return (
        <div>
            <Upperpart />
            <div className='absolute z-10 flex justify-between h-[60px] w-full bg-black/50 pl-10 pr-8'>
                {/* Aurea site */}
                <div className='h-[58.875px] w-[161px] px-[20px] py-[14px] border-1 border-[#e41b00]'>
                    <Image src="https://wdtaurea.wpengine.com/wp-content/themes/aurea/assets/images/light-logo.svg" alt="Aurea Site" height={30.875} width={110}></Image>
                </div>
                <div className='flex justify-between w-[649.062px] px-8 py-4 border-1 border-[#e41b00]'>
                    {navbar.map((navbar, index) => (
                        <div key={index}>
                            <Link href={navbar.link} className='text-[18px] text-white focus:text-[#e41b00]'>{navbar.name}</Link>
                        </div>
                    ))}
                </div>
                <div className='flex'>
                    <div className='relative'>
                        <input
                            placeholder="Search Keyword"
                            className="w-[283.6px] h-[60px] pr-[60px] pl-[30px] py-[10px] text-[#ffffff] focus:text-[#5a5856] border-1 border-[#e41b00]  bg-[length:100%_0%] bg-no-repeat bg-gradient-to-t from-[#fad4c4] to-[#fff] transition-[background-size] duration-500 ease-in-out focus:bg-[length:100%_100%]  focus:outline-none"
                        />
                        <IoSearchOutline size={30} className='absolute top-4 right-5 text-white hover:text-[#e41b00] cursor-pointer duration-500' />
                    </div>
                    <div className='h-[60px] w-[70px] p-[15px]  border-1 border-[#e41b00]'>
                        <CiUser size={30} className='text-white hover:text-[#e41b00] cursor-pointer duration-500' />
                    </div>
                    <div className='h-[60px] w-[70px] p-[15px]  border-1 border-[#e41b00]'>
                        <FaCartShopping size={30} className='text-white hover:text-[#e41b00] cursor-pointer duration-500' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
 