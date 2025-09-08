import React, { useState } from 'react'

export const Darkmood = () => {
    const [value,setvalue]=useState(true)

    function change(){
        setvalue(!value)
    }

  return (
    <>
    <div style={{height:"100px", background: value? "black":"green"}}></div>
    <button onClick={change} >click</button>
    
     <div style={{height:"100px" ,background: value? "green":"black"}}>
        {/* <button onClick={change} >click</button> */}
    </div>
    </>
  )
}
