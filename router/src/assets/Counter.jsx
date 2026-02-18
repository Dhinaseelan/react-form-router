import React, { useState } from 'react'

export const counter = () => {
    const [count,setCount]=useState(0)
  return (
    <>
    <h1>{count}</h1>
    <button>add 2</button>
    </>
  )
}
