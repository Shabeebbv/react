import React, { useState } from 'react'
import { Todolist } from './todolist'

export const Addtask = () => {
    const[input,setInput]=useState(' ')
    const[data,setData]=useState([])

    function Adding(){
        setData([...data,input])
    }

  return (
    <>
    <div><input type="text" placeholder='Text Anything' value={input} onChange={(event)=> setInput(event.target.value)}/>

    <button onClick={Adding}>ADD</button>
    
    
    </div>
    <Todolist tasks={data}/>
    </>
  )
}
