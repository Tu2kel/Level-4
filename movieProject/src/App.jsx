import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import MovieDetails from "../components/MovieDetails";
import "../components/Styles/Header.css";
import "./App.css";

function App() {
  return (
    <Router>
      {/* <AudioPlayer /> */}
      <nav
        style={{
          // background: "#dc143c",
          height: "15vh",
        }}
      >
        <img
          src="https://tinyurl.com/49wt4wvb" //Avenger NavBar
          alt="Logo"
          style={{
            minWidth: "100%",
            height: "35vh",
            objectFit: "cover",
          }}
        />
        <div className="nav_Links">
          <Link to={"/"} target="_blank">
            Home
          </Link>
          <Link to={"/about"} target="_blank">
            About
          </Link>
          <Link to={"/contact"} target="_blank">
            Contact
          </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
