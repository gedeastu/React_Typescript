// import React from 'react'
type textColor = `text-white` | `text-black` | `text-red-200`;
type text = 'Press Button' | 'Loading' | 'Success';
type ButtonProps = {

  Padding : {
    paddingY?: string;
    paddingX?: string;
  };
  
  bgColor?:string;
  textColor?: textColor;
  text?:text;
};
const button = ({Padding,bgColor,textColor,text} : ButtonProps) => {
  return (
    <>
    <button className={`${bgColor} ${Padding.paddingX} ${Padding.paddingY} ${textColor} font-semibold p-3 rounded-lg`}>
    {text}
    </button>
    </>
  )
}

export default button