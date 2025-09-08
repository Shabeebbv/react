import React, {useState, useEffect } from 'react'

export const Fetch = () => {

    
    const [data,setdata]=useState([])

    useEffect(()=>{
        fetch("https://dummyjson.com/users")
        .then((res)=>res.json())
        .then((data)=> setdata(data.users))
    },[])


  return (
    <div>
        <h1>fetching data</h1>
        {data.map((post)=>(<h1>{post.firstName}</h1>))}
    </div>
  )
}
