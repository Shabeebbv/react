import React ,{useEffect,useRef} from 'react'

export const Usref=()=>{

    const uref=useRef(null)
    useEffect(()=>{
        uref.current.focus()

    },[])


    return(
        <div>
            <input ref={uref} type='text'></input>
        </div>
    )
}