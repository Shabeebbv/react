import React, { useState } from 'react'


const products=[{id:1, name:"laptop" , Model:"dell", qty: 1},
    {id:2,name:"laptop" , Model:"hp", qty: 1},
    {id:3,name:"laptop" , Model:"Asus", qty: 1}
]
 const Key = () => {

    const [item,setItem]=useState(products)

    

  return (
    <div>
        {products.map((product)=>( <div key={product.id}><h1>{product.name}</h1> <h2>Model:{product.Model}</h2><h3>qty:{product.qty}</h3> <button>+</button> </div>)) }
    </div>

  )
}
export default Key
