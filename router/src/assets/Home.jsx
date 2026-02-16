import { Link } from "react-router-dom"
function Home(){
    return(
        <>
        <h2>Home</h2>
        <Link className="btn btn-primary" to={"/App"}>Form</Link>
        </>
    )
}
export default Home