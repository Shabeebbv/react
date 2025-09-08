import React from 'react'
import Loggeddin from './loggeddin'
import Notlogged from './notlogged'
function Mainn({isLogged}) {
  return (
    <div> 
        {isLogged?<Loggeddin />: <Notlogged />}
    </div>
  )
}

export default Mainn