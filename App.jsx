
import React from 'react'
// import Header from './sample' 
// import { Props } from '../props';
import 'bootstrap/dist/css/bootstrap.min.css';
import Key from './keys/key';
// import Mainn from './conditional/res';
// import Header from './sample/sample';
import { Usfxt } from './conditional/useefect/usfxt';
import { Fetch } from './conditional/useefect/fth/fetch';
import { Usref } from './conditional/useefect/fth/ref/usref';
import { Darkmood } from './conditional/useefect/colorchange/darkmood';


const App = () => {

  // let num=0
  // const Check=()=>{
  //   if (num>0){
  //     return <h1>positive number</h1>
  //   }
  //   else if(num<0){
  //     return <h1>negative number</h1>
  //   }
  //   else{
  //     return <h1>zero</h1>
  //   }
  // }

  // const states=[{name:"kerala",language:"malayalam"},
  //   {name:"tamilnadu",language:"arabi"},
  //   {name:"goa",language:"hindi"}
  // ]
// let num=-9
  return (
    <div >
      <Darkmood/>
      {/* {<Usref/>} */}
      {/* <Fetch /> */}
      {/* <Usfxt /> */}
      {/* {num>0 ? <h1>positive number</h1>: num<0? <h1>negative number</h1>: <h1>zero</h1>} */}
              {/* <Main isLogged={true} /> */}
          
          {/* <Key /> */}
   {/* <Mainn isLogged={true}/> */}
   {/* <Header /> */}
   
      {/* <Check /> */}
      {/* {<Props states={states}/>} */}
    {/* <Sample /> */}
    {/* <Header /> */}
    {/* <Props name={"kerala"} language={"malayalam"}/>
    <Props name={"goa"} language={"arabic"}/>
    <Props name={"tamilnadu"} language={"malayalthamilam"} /> 
    <Props name={"karnataka"} language={"hindi"} /> */}


    </div>
  )
}

export default App