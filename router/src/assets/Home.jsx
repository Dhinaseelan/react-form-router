import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Home() {
  const [post, setPost] = useState(null);
  useEffect(() => {
    const controller=new AbortController();
    const signal=controller.signal;
    setTimeout(() => {
      fetch("http://localhost:3000/post")
      .then((Response) => Response.json)
      .then((data) => setPost(data))
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
      <h2>Home</h2>
      <div className="container">
        <Link className="btn btn-primary" to={"/App"}>
          Form
        </Link>
        <div className="row justify-content-center m-3">
          {post &&
            post.map((posts) => {
              return (
                <div
                  key={posts.id}
                  className="card m-3"
                  style={{ width: "18rem" }}
                >
                  <div className="card-body">
                  <div className="card-title">{posts.title}</div>
                  <p className="card-text">{posts.content}</p>
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
