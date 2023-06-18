import { Link } from 'react-router-dom';
import avatar from '../img/avatar.svg';

const Navbar2 = ( {name} ) => {
    return ( 
        <nav className="navbar">
            <h1><a href="/">TechPrep</a></h1>
            
            <div className="links">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact Us</a>
                <a href="/login">Logout</a>
                <Link to={`/user/${name}/profile`}><img src={avatar} className="userdp" /></Link>
                
            </div>
        </nav>
     );
}
 
export default Navbar2;