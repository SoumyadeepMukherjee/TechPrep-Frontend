import React, { useState } from "react";
import Navbar from "./Navbar";
import { useEffect } from "react";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };
  useEffect(()=>{
    document.title = "TechPrep || Contact"
},[]);
  return (
    <>
    <Navbar />
    <div className="super">
    <div className="contact">
      <h2 id="contact-h2">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="fields">
          <label htmlFor="name" style={{position:'relative',left:-20}}>Name:</label>
          <input className="inputele"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required 
            style={{borderBlockColor:"green",borderRadius:"18px"}}
          />
        </div>
        <div className="fields">
          <label htmlFor="email" style={{position:'relative',left:-20}}>Email:</label>
          <input className="inputele"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{position:'relative',right:-7,borderBlockColor:"green",borderRadius:"18px"}}
          />
        </div>
        <div className="fields">
          <label htmlFor="subject" style={{position:'relative',left:-20}}>Subject:</label>
          <input className="inputele"
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            style={{position:'relative',right:5,borderBlockColor:"green",borderRadius:"18px"}}
          />
        </div>
        <div className="fields">
          <label htmlFor="message" style={{position:'relative',left:-20,top:12}}>Message:</label>
          <textarea className="inputele"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            style={{position:'relative',left:-15,borderBlockColor:"green",borderRadius:"18px",border:"solid green"}}
          ></textarea>
        </div>
        <button class="btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
    </div>
    </>
    
  );
};

export default Contact;
