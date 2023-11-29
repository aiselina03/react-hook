import React from 'react'
import { useRef } from 'react'


function Ref() {
const inp=useRef()
function handleClick() {
    inp.current.focus()
}
  return (
    <div>
        <button onClick={handleClick}>Click me</button>
        <br /><br /> 
        <input type="text"  ref={inp}/>
    </div>
  )
}

export default Ref