import React from 'react'


interface ButtonProps{
  text:string,
  className?:string,
  clicked?:boolean,
  handleClick:()=>void
}
const Button = ({ text, className ,clicked=false,handleClick}: ButtonProps) => {
  return (
    <button onClick={handleClick} className={` ${className} ${clicked ? 'border-4 border-green-1 text-green-700':'text-[#000]/70'} text-[9px] font-semibold border py-2 px-2 rounded-full max-sm:text-sm`}>
        {text}
    </button>
  )
}

export default Button