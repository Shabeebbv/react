import React from 'react'
import { Greeting } from './print'

export const Prop = () => {
  return (
    <div>
        <Greeting name="shabeeb"/>
    </div>
  )
}
// function Child(props){
//     return <h1>hello,{props.name}</h1>
// }
// function Parent(){
//     return <Child name="shabeeb"/>
// }