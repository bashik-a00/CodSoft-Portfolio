import {  Link } from "react-router-dom";
import About from "./About";
import "../style.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <Link to="/">Home</Link>
        <Link to={About}>About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </nav>
  );
};

export default Navbar;
