import React, { useEffect } from 'react'
import { useState } from 'react'

export const Usfxt = () => {

    const [counter,setcounter]=useState(0)
     const [counter1,setcounter1]=useState(0)

    useEffect(()=>{
        // console.log("hello")
    },[counter])
  return (
    <div>
    <div>
    <h1>{counter}</h1>
    {/* {console.log("cc0")} */}
    <button onClick={()=>setcounter (counter+1)}>+</button>
    </div>
     <div>
    <h1>{counter1}</h1>
    {/* {console.log("cc")} */}
    <button onClick={()=> setcounter1 (prev=>prev+1
    )}>+</button>
    </div>
    </div>
  )
}
