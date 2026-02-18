import React, { useState } from 'react'

export const counter = () => {
    const [count,setCount]=useState(0)
    function add(){
        setCount(count=> count+1);
        setCount(count=> count+1);
    }
  return (
    <>
    <h1>{count}</h1>
    <button onClick={add}>add 2</button>
    </>
  )
}
