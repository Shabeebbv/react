import React,{useState} from 'react'


export const Count = () => {

  const[value,setvalue]=useState(0)
  // const[value1,setvalue1]=useState(0)


  function count(){
    setvalue(value+1)
  }
  function count1(){
    if (value>0)
    setvalue(value -1)
  }

  return (
<div>
    <div>
       <h1>{value}</h1>
        <button onClick={count}>+</button>
    </div>
     <div>
     
        <button onClick={count1}>-</button>
    </div>
    </div>
  )
}
