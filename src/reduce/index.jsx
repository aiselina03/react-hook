import React from 'react'
import { useReducer } from 'react'

function reducer(state, action) {
    console.log(action);
    switch (action.type) {

        case "count/inc":
            return {...state, count : (state.count  + action.payload) }

        case "count/dec":
            return {...state, count : (state.count  - action.payload) }
    
        default:
            return state;
    }
}
function Counter() {
const [state, dispatch] = useReducer(reducer, {count:0})
function handleIncrease(payload) {
    dispatch({type: "count/inc", payload})
}
function handleDecrease(payload) {
    dispatch({type: "count/dec", payload})
}
  return (
    <div>
        <div>{state.count}</div>
        <button onClick={()=>handleIncrease(5)}>+</button>
        <button onClick={()=>handleDecrease(5)}>-</button>
    </div>
  )
}

export default Counter