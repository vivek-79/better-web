
"use client"

import Image from "next/image";
import Button from "./Button";
import { useState } from "react";
import { calculators, guides, Products, products } from "@/constants";
import { div } from "motion/react-client";


const Faqs = () => {

    const [data,setData] = useState<Products[]>(products);
    const [selected,setSelected] = useState<number>(1);

    return (
        <section className="py-16 px-6 max-sm:pb-36">
            <div className="max-w-2xl mx-auto">
                <div className="flex flex-row max-sm:flex-col justify-between items-center max-sm:items-start pb-2 max-sm:pb-4">
                    <h2 className="text-2xl max-sm:text-3xl max-sm:text-left font-bold text-gray-900 mb-6">
                        Got questions? <br /> We&apos;ve got answers
                    </h2>
                    <div className="flex gap-2">
                        <Button handleClick={() => { setData(products) , setSelected(1) }} clicked ={selected==1} text="Our products"/>
                        <Button handleClick={() => { setData(calculators), setSelected(2) }} clicked={selected == 2} text="Calculators"/>
                        <Button handleClick={() => { setData(guides), setSelected(3) }} clicked={selected == 3} text="Guide & FAQs"/>
                    </div>
                </div>
                <div className="grid grid-cols-1  sm:grid-cols-3 gap-6">
                    {data.map((product, index) => (
                        <div
                            key={index}
                            className={`bg-green-50 p-6 rounded-lg shadow-md flex space-y-4 max-sm:gap-4 max-sm:flex-col ${index == 1 ? 'flex-row' : index == 2 ? 'flex-row-reverse gap-4 ' : 'flex-col '} ${index == 1 || index==2 ? 'sm:col-span-2':''}`}
                        >
                           <div >
                                <h3 className="text-[14px] max-sm:text-[20px] text-[#000]/70 font-semibold">{product.title}</h3>
                                <button className="flex items-center space-x-2 text-green-600 font-semibold">
                                    <span className="border px-4 py-3 flex items-center justify-center rounded-[50%] font-bold">&rarr;</span>
                                </button>
                                {product.description && (
                                    <p className="text-gray-700 max-w-[80%] text-xs mt-8 max-sm:hidden">{product.description}</p>
                                )}
                               
                           </div>
                            {product.image && (
                                <div className="h-full w-full">
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        width={250}
                                        height={100}
                                        className="rounded-lg object-fill object-center h-full max-sm:w-full max-sm:h-[180px]"
                                    />
                                </div>
                            )}
                           
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faqs;
