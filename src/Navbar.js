import { Link } from "react-router-dom"
export default function Navbar(){
    return(
        <>
        <center>
            <div className="nav">

            <Link to='/'>Home</Link>
            <Link to='/create'>Create</Link>
            </div>
        </center>
        </>
    )
}