import React, { useState } from 'react'


export const Header = () => {
    const[color,setColor]=useState("green")

    const[count,setCount]=useState(0)
    
    const sample=()=>{
        setColor("red")

    }
    const increment=()=>{
        setCount(count +1)
    }
        const decrement=()=>{
                    if (count>0){

        setCount(count -1)
                    }
    }
  return (
    <div>
        my fevorite color is {color}
        <button onClick={sample}>click me</button>

        <h1>count is {count}</h1>
        <button onClick={increment} style={
            {margin:10}
        }>+</button>
        <button onClick={decrement}>-
        </button>
    </div>
  )
}
export default Header