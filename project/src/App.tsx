// import React from 'react'
import Button from "./components/button"
const App = () => {
  return (
   <>
   <Button 
   bgColor = {`bg-blue-400`}
   textColor = {`text-white`}
   text={`Press Button`}

   Padding={{
    paddingX:"px-5",
    paddingY:"py-5"
   }}
   
   />
   </>
  )
}

export default App