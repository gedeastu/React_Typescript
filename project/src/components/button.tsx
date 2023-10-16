// import React from 'react'
type textColor = `text-white` | `text-black` | `text-red-200`;
type ButtonProps = {
    bgColor?:string;
    text?:string;
    textColor?: textColor;
};
const button = ({bgColor,text,textColor} : ButtonProps) => {
  return (
    <>
    <button className={`${bgColor} font-semibold ${textColor} p-3 rounded-lg`}>
    {text}
    </button>
    </>
  )
}

export default button