import { Link } from "react-router-dom";
import '../style.css';

const Footer=()=>{
  return(
    <div id="footer">
      <div className="social-icons">
        <ul className="sm-icon">
          <li>
            <Link to="https://github.com/bashik-a00" className="sm-links"><img className="sm-logo" src="../assets/github.svg" alt="" /><p className="sm-title">Github</p></Link>
          </li>
          <li>
            <Link to="https://www.linkedin.com/in/bashik-a-8875a6271/" className="sm-links"><img className="sm-logo" src="../assets/linkedin.svg" alt="" /><p className="sm-title">LinkedIn</p></Link>
          </li>
          <li>
            <Link to="https://discord.com/users/959372109308633129" className="sm-links"><img className="sm-logo" src="../assets/discord.svg" alt="" /><p className="sm-title">Discord</p></Link>
          </li>
          <li>

            
            <Link to="https://twitter.com/bashiksultan94" className="sm-links"><img className="sm-logo" src="../assets/twitterx.svg" alt="" /><p className="sm-title">X</p></Link>
          </li>
        </ul>
      </div>
      <div className="copyright">
        <p>© 2024. Bashik A</p>
      </div>
    </div>
  );
}

export default Footer;