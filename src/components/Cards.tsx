import Image from "next/image"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"




const Card =({icon,title,link,desc}:{icon:string,title:string,link:string,desc:string})=>(

    <div className="flex flex-col p-4 gap-2 border-[1px] border-[#000]/50 rounded-md">
        <Image alt="icon" src={icon} width={15} height={25} className="max-sm:w-10 max-smh-10"/>
        <p className="sm:text-[10px] max-sm:text-[20px] max-w-sm text-gray-600">{title}</p>
        <Link href="#" className="sm:text-[9px] flex items-center font-semibold gap-1 text-[#198353]">{link}<FaArrowRight /></Link>
        <p className="sm:text-[8px] max-sm:text-[13px] text-gray-500">{desc}</p>
    </div>
)

const Cards = () => {
  return (
    <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 mt-6">
          <Card icon="/doc-correct.svg" title="Get pre-approved to see how much you can borrow" link="Get started" desc="Won't impact your credit"/>
          <Card icon="/downtrend.svg" title="Get pre-approved to see how much you can borrow" link="Get started" desc="Won't impact your credit"/>
          <Card icon="/calculator.svg" title="Get pre-approved to see how much you can borrow" link="Get started" desc="Won't impact your credit"/>
    </div>
  )
}

export default Cards