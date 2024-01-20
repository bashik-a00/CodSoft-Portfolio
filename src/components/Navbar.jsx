import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "../style.css";

const Navbar = () => {
  const location = useLocation();
  if (location.pathname !== '/') {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <nav id="navbar">
      <div className="navbar-container">
        

        <ul type="none" className="navbar">
          <li className="nav-items">
            <Link className="nav-link" to={"/"}>
              Home
            </Link>
          </li>
          <li className="nav-items">
            <Link className="nav-link" to={"/skills"}>
              Skills
            </Link>
          </li>
          <li className="nav-items">
            <Link className="nav-link" to={"/projects"}>
              Projects
            </Link>
          </li>
          <li className="nav-items abt-item">
            <Link className="nav-link" to={"/about"}>
              About
            </Link>
          </li>
        </ul>
        <div className="logo-container">
          <img
            width="64"
            height="64"
            src="https://img.icons8.com/laces/64/000000/circled-b.png"
            alt="circled-b"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
