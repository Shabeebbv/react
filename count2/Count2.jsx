import React,{useState} from 'react'
import './Counttwo.css'

export  const Counttwo=()=>{
    const [count,setCount]=useState(0)
    const[message,setMessage]=useState("")

    function Increment(){
        if(count<5){
        setCount(count+1)
        setMessage("")
    }
        else{setMessage("maximum value reached")
        }
        
    }
    function Decrement(){
        if(count>0){
        setCount(count-1)
        setMessage("")
        }
        else{
            setMessage("minimum value reached")
            
        }
        
    }
    function Reset(){
        setCount(0)
        setMessage("")
    }


    return(
        <>
        {count}
        <p>{message}</p>
        <div>
            <button onClick={Increment}>+</button>
            

        </div>
        <div>
            <button onClick={Decrement}>-</button>

        </div>
        <div>
            <button onClick={Reset}>Reset</button>
        </div>
        </>

    )

}