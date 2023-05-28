const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <h1>TechPrep</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact Us</a>
                <a href="/login">Login</a>
            </div>
        </nav>
     );
}
 
export default Navbar;