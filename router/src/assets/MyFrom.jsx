import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
function MyForm() {
    const [pas1,Setpas1]=useState();
    const [pas2,Setpas2]=useState();
    const [check,setcheck]=useState()
    const check1=(e)=>{
        Setpas1(e.target.value)
    }
     const check2=(e)=>{
        Setpas2(e.target.value)
        
    }
    const result=()=>{
        setcheck(pas1==pas2)
        console.log(pas1==pas2)
    }
  return (
    <form className="p-5 border rounded bg-light form-with" style={{width:"70%", margin:"auto", marginTop:"50px"}}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          
          placeholder="Enter your name"
          
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter your email"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Password
        </label>
        <input
          type="text"
          value={pas1}
          onChange={check1}
          className="form-control"
          id="name"
          placeholder="Enter your name"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Conform Password
        </label>
        <input
        value={pas2}
          type="text"
          onChange={check2}
          className="form-control"
          id="name"
          placeholder="Enter your name"
        />
        {!check&&<label style={{color:"red"}}>Password is not match</label>}
      </div>  
      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          className="form-control"
          id="message"
          rows="3"
          placeholder="Type your message"
        ></textarea>
      </div>
    
      <button type="button" className="btn btn-primary" onClick={result}>
        Submit
      </button>
      <Link className="btn btn-secondary" to={'/'} style={{marginLeft:"10px"}}>Home</Link>
    </form>
  );
}

export default MyForm;