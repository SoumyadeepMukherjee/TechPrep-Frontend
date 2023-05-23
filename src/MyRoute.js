import React from "react";
import {BrowserRouter as Router, Routes , Route,Link} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import CategoryComponent from "./components/CategoryComponent";

const MyRoute = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/viewcategories" element={<CategoryComponent />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default MyRoute;
