import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { datacontext } from './Home';
 const Counter = () => {
    const [count,setCount]=useState(0)
    function add(){
        setCount(count=> count+1);
        setCount(count=> count+1);
    }
    const data=useContext(datacontext);
  return (
    <>
    <h1>{data}</h1>
    <div className='container p-2'>
    <h1>{count}</h1>
    <button  className="btn btn-success me-2" onClick={add}>add 2</button>
    <Link className='btn btn-secondary ' to={'/'}>Home</Link>
    </div>
    
    </>
  )
}
export default Counter