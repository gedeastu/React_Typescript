// import React from 'react'
type ButtonProps = {
    bgColor:string;
    text:string;
}
const button = ({bgColor,text} : ButtonProps) => {
  return (
    <>
    <button className={`${bgColor} font-semibold text-white p-3 rounded-lg`}>
    {text}
    </button>
    </>
  )
}

export default button