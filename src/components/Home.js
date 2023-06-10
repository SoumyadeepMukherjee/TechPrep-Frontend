import { Link } from "react-router-dom";
import LoginComponent from "./LoginComponent";
import bg from '../img/bg.svg';

const Home = () => {
  const handleLogin = () => {
    console.log("Login button clicked!");
    <LoginComponent />;
  };

  return (
    <div className="home">
      <h1 className="header">Welcome to TechPrep!</h1>
      <div className="home-content">
        
        <p>TechPrep is a One-Stop Place to Prepare for various Tech Stacks</p>
        <p>Navigate to the Categories to view the available courses</p>
        <p>Login to attempt our quizzes</p>
        <Link onClick={handleLogin} class="btn btn-primary" to='/login'>
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Home;
