import { Link } from 'react-router-dom';
import userdp from '../img/userdp.jpg';

const Navbar2 = ( {name} ) => {
    return ( 
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <h1>TechPrep</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact Us</a>
                <a href="/login">Logout</a>
                <Link to={`/user/${name}/profile`}><img src={userdp} className="userdp" /></Link>
                
            </div>
        </nav>
     );
}
 
export default Navbar2;