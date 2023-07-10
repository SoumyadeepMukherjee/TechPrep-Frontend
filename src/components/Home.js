import { Link } from "react-router-dom";
import LoginComponent from "./LoginComponent";
import bg from '../img/bg.svg';
import Navbar from "./Navbar";
import test from '../img/test-img.avif'
import { useEffect } from "react";

const Home = () => {
  const handleLogin = () => {
    console.log("Login button clicked!");
    <LoginComponent />;
  };
  useEffect(()=>{
    document.title = "TechPrep || Home"
},[]);
  return (
    <>
    <Navbar />
    <div className="super">
    <div className="home">
      <h1 className="header">Welcome to TechPrep!</h1>
      <div className="home-content">
        
        <p style={{fontWeight:"bold",color:"seagreen"}}>TechPrep is a One-Stop Place to Prepare for various Tech Stacks</p>
        <p style={{fontWeight:"bold" ,color:"firebrick"}}>Navigate to the Categories to view the available courses</p>
        <p style={{fontWeight:"bold",color:"darkcyan" }}>Login to attempt our quizzes</p>
        <br/>
        <Link onClick={handleLogin} class="btn btn-primary" to='/login'>
          Get Started
        </Link>
      </div>
    </div>
    </div>
    </>
  );
};

export default Home;
