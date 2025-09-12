import React,{useState} from 'react'

export const Changecolor = () => {
    const[value,setValue]=useState(true)

    function Change(){
        setValue(!value)
    }

  return (
    <>
    <div style={{height:"100px", background: value? "black":"red"}}></div>
        <button onClick={Change}>Click </button>
        <div style={{height:"100px",background: value? "red":"black"}}></div>
    

    </>
  )
}
