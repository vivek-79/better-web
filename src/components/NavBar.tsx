
"use client"
import { navLeft, navLinks } from '@/constants'
import { motion, useMotionValueEvent, useScroll } from 'motion/react'
import Link from 'next/link'
import { useState } from 'react'
import { BsList } from 'react-icons/bs'
import { IoIosCall } from 'react-icons/io'
import { MdCall } from 'react-icons/md'



const NavBar = ({ className }: { className?: string }) => {


    const [selected, setSelected] = useState<{ index: number, item: string }>({ index: -1, item: '' })
    const [sideMenu,setSideMenu] = useState(false)

    return (
        <nav
            className={`fixed left-0  right-0 w-full  top-0 z-50  px-4 ${className ? className : "bg-white text-black"
                }`}
        >
            <div className='w-full h-full mx-auto max-w-[700px] flex justify-between items-center'>
                <div className="w-[70%] h-full flex items-center relative">
                    <h1 className="text-sm font-bold py-2">Better</h1>
                    {navLeft.map((item, index) => (
                        <div key={index} className="relative w-full max-sm:hidden"
                            onMouseEnter={() => setSelected({ index, item })}
                            onMouseLeave={() => setSelected({ index: -1, item: "" })}
                        >

                            <motion.li

                                className={`list-none py-4 text-[9px] cursor-pointer  px-4 rounded-md ${className ? 'hover:bg-green-700' :'hover:bg-gray-100'}`}
                            >
                                {item}
                                {index == 4 ? <sup className="text-[9.5px]">+</sup> : ""}
                            </motion.li>

                            {/* Dropdown Menu */}
                            {selected.item === item && navLinks[item]?.length > 0 && (
                                <motion.div
                                    className="absolute -left-8 w-36 mt-[1px]  bg-white shadow-lg rounded-md p-2"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {navLinks[item].map((link, idx) => (
                                        <Link
                                            href="#"
                                            key={idx}
                                            className="block px-2 py-1  text-[9px] hover:bg-gray-100 rounded group text-black"
                                        >
                                            {link}
                                            <span className="absolute right-2 opacity-0 group-hover:opacity-100 transition-opacity text-green-800 mr-2">
                                                ➜
                                            </span>
                                        </Link>
                                    ))}
                                </motion.div>
                            )}
                        </div>
                    ))}
                </div>

                <div className='flex items-center gap-4'>
                    <p className='border p-1 rounded-full'><IoIosCall /></p>
                    <p className='text-[9px] flex'>SignIn</p>
                    <BsList className='sm:hidden' onClick={() => setSideMenu(true) }/>

                    {sideMenu && (
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "tween", duration: 0.4 }}
                            className="fixed inset-0 bg-white z-50 shadow-lg p-6 flex flex-col w-full md:w-[400px] h-full"
                        >
                            {/* Close Button */}
                            <button className="absolute top-4 right-6 text-2xl" onClick={()=>setSideMenu(false)}>
                                ✖
                            </button>

                            {/* Logo */}
                            <h1 className="text-2xl font-bold mb-6">Better</h1>

                            {/* Menu Items */}
                            <ul className="space-y-4 text-lg">
                                <li className="cursor-pointer">Buy</li>
                                <li className="cursor-pointer">Refinance</li>
                                <li className="cursor-pointer">HELOC</li>
                                <li className="cursor-pointer">Rates</li>
                                <li className="cursor-pointer">Better+</li>
                            </ul>

                            {/* Call Section */}
                            <div className="mt-10 bg-green-50 rounded-lg py-2 px-2 text-center flex items-center justify-center">
                                <span className="mr-2"><MdCall /></span> Call us anytime at{" "}
                                <a href="tel:4155238837" className=" ml-2 underline">
                                    (415) 523 8837
                                </a>
                            </div>

                            {/* CTA Buttons */}
                            <div className="mt-auto">
                                <button className="w-full bg-green-700 text-white py-2 rounded-full text-[14px] font-semibold">
                                    Get started
                                    <p className="text-[9px] -mt-1 font-normal">3 min | No credit impact</p>
                                </button>
                                <button className="w-full mt-3 border rounded-full py-2 text-[14px] flex justify-center items-center">
                                    Sign in <span className="ml-2">👤</span>
                                </button>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default NavBar