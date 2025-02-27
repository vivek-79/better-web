
"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const FloatingCard = () => {

    const [isOpen,setIsOpen] = useState<boolean>(true);
    const [smallOpen,setSmallOpen] = useState(false)

    
    return (
        <div className="fixed sm:bottom-4 right-4 max-sm:left-0 max-sm:right-0 max-sm:bottom-0">
            {/* Small Floating Button */}
            <motion.div
                className="bg-[#F0F7F1] max-sm:hidden shadow-md rounded-lg cursor-pointer flex items-center max-sm:bg-white max-sm:pt-12 max-sm:px-2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                onHoverStart={()=>setSmallOpen(true)}
            >

               <div className="relative">
                    <Image
                        width={150}
                        height={150}
                        src="/floating-image.webp"
                        alt="Better Forever"
                        className="w-14 h-14 rounded-lg max-sm:w-24 max-sm:h-24"
                    />
                    <p className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white text-xs font-semibold">Better <br/>Forever</p>
               </div>
                <div className="px-2">
                    <p className="text-[10px] max-sm:text-[15px] max-sm:text-black/70 font-light text-green-1/80 text-left" style={{fontWeight:200}}>Save on future home loans<br/>with $0 origination fees.</p>
                    <p className="text-[11px] max-sm:text-sm max-sm:text-black font-semibold text-[#000]/70 text-left">See details </p>
                </div>

               {smallOpen && (
                    <motion.div
                        className="absolute w-full h-full opacity-0 right-0 bottom-0 bg-[#e2ede4] p-4 rounded-md"
                        whileHover={{
                            opacity: 1,
                            width: 450,
                            height: 300
                        }}
                    >

                        {/* Details */}

                        <div className="flex justify-end">
                            <button onClick={()=>setSmallOpen(false)} className="px-4 py-1 mb-2 rounded-md bg-gray-200 text-lg text-black">X</button>
                        </div>
                        <div className="w-full flex justify-between items-center ">
                            <h2 className="text-[15px] font-semibold text-[#000]" style={{ fontWeight: 500 }}>The Better Forever Program</h2>
                            <motion.button
                                className=" text-[11px] font-semibold bg-green-1 text-white py-2 px-4 rounded-full"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                Start preapproval
                            </motion.button>
                        </div>
                        <hr className="w-full mt-4 mb-4 h-[2px] bg-gray-300" />
                        <p className="text-black/60 mt-2 text-xs text-left">
                            Introducing a loyalty program designed to reward your homeownership journey – again and again.
                        </p>
                        <ul className="mt-5 text-black/60 space-y-2  text-left text-xs">
                            <li>
                                ✅ <strong>Refinance whenever rates drop:</strong> Enjoy unlimited refinances with no origination fees.
                            </li>
                            <li>
                                ✅ <strong>Buy your next home, for less.</strong> No fees on future home purchases.
                            </li>
                            <li>
                                ✅ <strong>You’re already in.</strong> Funded a loan with Better since 2019? You’re automatically enrolled.
                            </li>
                            <li className="mt-2">
                                <p className="text-[#000]/80 font-semibold">Read more</p>
                            </li>
                        </ul>
                    </motion.div>
               )}
            </motion.div>

            {/* Small device */}


            <motion.div
                className="hidden z-50 max-sm:block shadow-md rounded-lg cursor-pointer items-center bg-white px-2"
                drag="y"
                dragConstraints={{ top: 0, bottom: 100 }} 
                animate={{ y: isOpen ? 0 : "100%" }} 
                transition={{ type: "spring", stiffness: 300, damping: 30 }} 
                onDragEnd={() => setIsOpen((prev) => !prev)} // Toggle only on drag end
            >
                {isOpen ? (
                    <div className="flex flex-col relative rounded-md">
                        <hr className=" self-center rounded-full mt-4 w-10 mb-4 h-[6px] bg-gray-400" />
                       <div className="flex">
                            <div className="relative">
                                <Image
                                    width={150}
                                    height={150}
                                    src="/floating-image.webp"
                                    alt="Better Forever"
                                    className="w-14 h-14 rounded-lg max-sm:w-24 max-sm:h-24 mb-1"
                                />
                                <p className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white text-xs font-semibold">
                                    Better <br />
                                    Forever
                                </p>
                            </div>
                            <div className="px-2">
                                <p
                                    className="text-[10px] max-sm:text-[15px] max-sm:text-black/70 font-light text-green-1/80"
                                    style={{ fontWeight: 200 }}
                                >
                                    Save on future home loans
                                    <br />
                                    with $0 origination fees.
                                </p>
                                <p className="text-[11px] max-sm:text-sm max-sm:text-black font-semibold text-[#000]/70">
                                    See details{" "}
                                </p>
                            </div>
                       </div>
                    </div>
                ) : (
                    <motion.div
                        className="absolute z-50 right-0 left-0 -top-[420px] bottom-0 bg-white p-4 rounded-md"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Drag Indicator */}
                        <div className="hidden max-sm:block w-full top-2 z-50 mx-auto">
                            <hr className="absolute top-2 left-1/2 -translate-x-1/2 rounded-full w-10 h-1 bg-gray-400 z-50" />
                        </div>

                        {/* Close Button */}
                        <div className="flex justify-end">
                            <button
                                className="px-4 py-1 mb-2 rounded-md bg-gray-200 text-lg text-black"
                                onClick={() => setIsOpen(true)}
                            >
                                X
                            </button>
                        </div>

                        {/* Header */}
                        <div className="w-full flex flex-col items-center">
                            <h2 className="w-full text-[23px] font-semibold text-[#000]/70 text-left">
                                The Better Forever Program
                            </h2>
                            <motion.button
                                className="text-[16px] w-full mt-4 font-semibold bg-green-1 text-white py-2 px-4 rounded-full"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                Start preapproval
                            </motion.button>
                        </div>

                        <hr className="w-full mt-4 mb-4 h-[2px] bg-gray-300" />

                        {/* Details */}
                        <p className="text-black/60 mt-2 text-xs">
                            Introducing a loyalty program designed to reward your homeownership
                            journey – again and again.
                        </p>
                        <ul className="mt-5 text-black/70 space-y-2 text-sm">
                            <li>
                                ✅ <strong>Refinance whenever rates drop:</strong> Enjoy unlimited
                                refinances with no origination fees.
                            </li>
                            <li>
                                ✅ <strong>Buy your next home, for less.</strong> No fees on future
                                home purchases.
                            </li>
                            <li>
                                ✅ <strong>You’re already in.</strong> Funded a loan with Better
                                since 2019? You’re automatically enrolled.
                            </li>
                            <li className="mt-2">
                                <p className="text-[#000]/80 font-semibold">Read more</p>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
};

export default FloatingCard;
