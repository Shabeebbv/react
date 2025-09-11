import React from 'react'
import './todo.css'

export const Todolist = ({tasks =[],dlt}) => {
  return (
    <>
        <div className='values'>
            {tasks.map((value,index)=>( <div key={index}><p>{value}
                 <button onClick={()=> dlt(index)}>DELETE</button></p> </div>
))}
         </div>

    </>
  )
}
