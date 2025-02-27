
"use client"
import Faqs from "@/components/Faqs";
import FloatingCard from "@/components/FloatingCard";
import NavBar from "@/components/NavBar";
import TestimonialsSection from "@/components/Testimonials";
import Image from "next/image";
import { useMotionValueEvent, useScroll } from 'motion/react'
import { useRef, useState } from "react";
export default function Home() {



  const ref= useRef(null)
  const [navBg, setNavBg] = useState("");
  const { scrollYProgress } = useScroll({
    target:ref,
    offset: ["start end", "end start"]
  })
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setNavBg(latest < 0.965 ? "bg-[#004733] text-white":"")
  });
  return (
    <main className="relative w-full h-full">
      <NavBar className={navBg} />
    <div ref={ref} className="relative h-[85vh] sm:h-[500px] bg-[#004733] flex flex-col items-center justify-start sm:justify-center text-center text-white px-10 py-6">

      <h1 className="text-5xl sm:text-6xl text-[#1EE07F] pt-4 sm:pt-12 font-bold z-10">Mortgages <br/> made simple</h1>
        <div className="mx-auto h-full flex flex-col sm:flex-row justify-between w-full max-w-[500px] sm:text-[9px] pt-10">
          <div className="flex flex-col z-50">
            <button className=" mt-6 px-6 py-5 sm:py-3 bg-[#1EE07F] text-black font-semibold rounded-full hover:bg-green-400">
              Start my approval
            </button>
            <p className="mt-2 self-center flex items-center space-x-2 text-gray-300">
              <span>⏱ 3 min | No credit impact</span>
            </p>
          </div>
          <div className="mt-8 w-fit flex flex-col items-center space-x-2 text-yellow-400 max-sm:bg-[#073126] z-[1] max-sm:mx-auto  rounded-md">
            <span className="text-lg">G⭐️⭐️⭐️⭐️⭐️</span>
            <span className="text-gray-300">4.6 Stars | 3177 Google reviews</span>
          </div>
          <div className="z-[9999] absolute">
            <FloatingCard />
          </div>
      </div>
      <div className="absolute bottom-0 flex items-center justify-center w-full">
        <Image
          src="/hero-variant-c.webp"
          alt="Phone displaying mortgage approval"
          width={300}
          height={600}
          className="rounded-lg"
        />
      </div>
    </div>
    

    <TestimonialsSection/>

    <Faqs/>
    </main>
  );
}
