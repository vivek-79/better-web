import Link from "next/link"


const Navigate = () => {
  return (
    <div className="w-full">
          <div className="w-fit  z-[9999] flex gap-2 bg-white rounded-md px-2">
              <Link className="px-1 hover:bg-gray-200 rounded-md" href="/">Home</Link>
              <Link className="px-1 hover:bg-gray-200 rounded-md" href="/start">Start</Link>
              <Link className=" px-1 hover:bg-gray-200 rounded-md" href="/about">About</Link>
              <Link className=" px-1 hover:bg-gray-200 rounded-md" href="/mortage-calculator">Calculator</Link>
          </div>
    </div>
  )
}

export default Navigate