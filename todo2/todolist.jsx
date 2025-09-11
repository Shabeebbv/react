import React from 'react'

export const Todolist = ({tasks =[]}) => {
  return (
    <>
        <div>
            {tasks.map((value)=>( <div><p>{value}</p> 
                 <button>DELETE</button></div>
))}
         </div>

    </>
  )
}
