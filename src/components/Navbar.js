import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1><a href="/">TechPrep</a></h1>
            
            <div className="links">
                <Link to="/">Home</Link>
                <a href="/about">About</a>
                <Link to="/contact">Contact Us</Link>
                <Link to="/login">Login</Link>
            </div>
        </div>
     );
}
 
export default Navbar;