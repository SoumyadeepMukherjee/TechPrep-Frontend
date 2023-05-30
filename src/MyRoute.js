import React from "react";
import {BrowserRouter as Router, Routes , Route, withRouter } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import CategoryComponent from "./components/CategoryComponent";
import QuizComponent from "./components/QuizComponent";
import QuizDetails from "./components/QuizDetails";
import LoginComponent from "./components/LoginComponent";
import QuestionComponent from "./components/QuestionComponent";
import UserDashboard from "./components/UserDashboard";
import QuizResultsComponent from "./components/QuizResultsComponent";

const MyRoute = () => {
  return (
    <Router>
      <div className="container">
        <Routes> 
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<LoginComponent />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/viewcategories" element={<CategoryComponent />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/user/:userName" element={ <UserDashboard />}></Route>
          <Route path="/viewquizbycategory/:cid" element={<QuizComponent />}></Route>
          <Route path="/viewquizdetails/:qid" element={<QuizDetails />}></Route>
          <Route path="/questions/:qid/:title" element={<QuestionComponent />}></Route>
          <Route path="/user/:userId/quizresults" element={<QuizResultsComponent />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default MyRoute;
