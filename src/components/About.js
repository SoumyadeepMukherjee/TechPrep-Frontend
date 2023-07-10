import Navbar from "./Navbar";
import { useEffect } from "react";



const About = () => {
    useEffect(()=>{
        document.title = "TechPrep || About"
    },[]);
    return ( 
        <>
        <Navbar />
        <div className="super-about">
        <div className="about"> 
            <h2 style={{color:"black",fontWeight:"bold",fontSize:"2.5rem"}}>About Us</h2>

            <br />
            <div>
            <h3 style={{color:"black",marginRight:"-60px"}}>Welcome to our Exam Portal!!!</h3>
            <br/>
            <p style={{color:"initial"}}>This portal is dedicated for providing a comprehensive and user-friendly platform <br/> for conducting online exams.</p>
            <p style={{color:"initial"}}>Our goal is to simplify the examination process, making it convenient <br/> for students,educators, and institutions alike.</p>
            </div>
            <br/>
            <h3 style={{color:"darkcyan",marginRight:"-26px"}}>Developer Details</h3>
            <div>
            <h4 style={{color:"black"}}>Jaydip Bose</h4>
            <h5 style={{color:"black"}}>Programmer Analyst Trainee Intern</h5>
            <h6 style={{color:"black"}}>IOT-Java Full Stack</h6>
            <h6 style={{color:"black"}}>Cognizant</h6>
            </div>

        </div>
        </div>
        </>
        
     );
}
 
export default About;