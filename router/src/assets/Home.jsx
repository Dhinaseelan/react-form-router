import { createContext } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MyForm from "./Myfrom";
import { useNavigate } from "react-router-dom";
export const datacontext=createContext();
import Counter from "./counter";
function Home() {
  const Navigate=useNavigate()
  const data="DataData"
  const [post, setPost] = useState([]);
  useEffect(() => {
    const controller=new AbortController();
    const signal=controller.signal;
    setTimeout(() => {
      fetch("http://localhost:3000/post", { signal })
      .then((Respons) => Respons.json())
      .then((data) =>{ setPost(data)
        console.log(data)
      })
      .catch((err) => {
        console.log(err);
      });
    }, 5000);
    return()=>{
      
      console.log("cleanup function is activated")
      controller.abort();
    }
  }, []);
  return (
    <>
    <datacontext.Provider value={data}>
      <Counter/>
      <MyForm/>
    </datacontext.Provider>
      
      <h2>Home</h2>
      <div className="container">
        <Link className="btn btn-primary me-2" to={"/App"}>
          Form
        </Link>
        <Link className="btn btn-primary me-2" to={"/counter"}>
          Counter
        </Link>
        <Link className="btn btn-primary " to={"/stop"}>
          Stopwatch
        </Link>
        <div className="row justify-content-center m-3">
          {post&&post.map((posts) => {
              return (
                <div
                  onClick={()=>Navigate('/post/'+posts.id)}
                  key={posts.id}
                  className="card m-3 "
                  style={{ width: "18rem", cursor:"pointer"}}
                >
                  <div className="card-body">
                  <div className="card-title"><h2>{posts.title}</h2></div>
                  
                  </div>
                </div>
              );

            })}
        </div>
      </div>
    </>
  );
}
export default Home;
