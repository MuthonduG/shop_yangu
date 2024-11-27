"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaOpencart } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import adminProfile from '@/public/test_profile.png';

// interface for links
interface navLinks {
    name: string,
    href: string,
};

// interface for profile settings
interface profileSettings {
    name: string,
    href: string,
    icon: any
}

// array of expted navlinks
const navigationLinks: navLinks[] = [
    { name: 'Dashboard', href: '#'},
    { name: 'Shops', href: '#' },
    { name: 'Products', href: '#'}
];

// interface of profile settings
const profNavSettings = [
    { name: 'profile', href: '#', icon: <HiOutlineUserCircle />},
    { name: 'settings', href: '#', icon: <IoSettingsOutline /> },
    { name: 'logout', href: '#', icon: <MdKeyboardDoubleArrowRight />},
];


// nav component
const Navbar = () => {
    const [ isCurrent, setIsCurrent ] = useState<boolean>(false)
  return (
    <nav className='fixed bg-slate-950 w-screen p-2 text-cyan-50 flex justify-center items-center'>
        <div className="grid grid-cols-3 justify-center items-center gap-7 xl:w-[80%] p-4 sm:w-screen md:w-screen">
            {/* Holder for the logo item */}
            <div className="flex justify-center items-center">
                <Link href={"#"} className='flex justify-center items-center gap-3'>
                    <FaOpencart className='text-4xl'/>
                    <span className='text-2xl font-serif'>Shop Yangu</span>
                </Link>
            </div>

            {/* Holder for the nav links */}
            <div className="">
                <ul className='flex justify-center items-center gap-6 '>
                    {
                        navigationLinks.map((navItem)=> {
                            return( 
                                <li key={navItem.name}>
                                    <Link href={navItem.href} className='hover:text-slate-400 ease-in-out duration-600 font-semibold'>{navItem.name}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

            {/* Holder for profile content */}
            <div className="flex justify-center items-center">
                <div className="w-10 h-10 overflow-hidden rounded-full">
                    <Image src={adminProfile} alt="profile" className="object-cover" width={50} height={50}/>
                </div>
            </div>
        </div>
    </nav>
  )
};

export default Navbar;
