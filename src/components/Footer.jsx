import { Link } from "react-router-dom";
import '../style.css';

const Footer=()=>{
  return(
    <div id="footer">
      <div className="social-icons">
        <ul className="sm-icon">
          <li>
            <Link to="https://twitter.com/bashiksultan94" className="sm-links"><img className="sm-logo" src="../images/github.svg" alt="" /><p className="sm-title">Github</p></Link>
          </li>
          <li>
            <Link to="https://twitter.com/bashiksultan94" className="sm-links"><img className="sm-logo" src="../images/linkedin.svg" alt="" /><p className="sm-title">LinkedIn</p></Link>
          </li>
          <li>
            <Link to="https://twitter.com/bashiksultan94" className="sm-links"><img className="sm-logo" src="../images/discord.svg" alt="" /><p className="sm-title">Discord</p></Link>
          </li>
          <li>

            
            <Link to="https://twitter.com/bashiksultan94" className="sm-links"><img className="sm-logo" src="../images/twitterx.svg" alt="" /><p className="sm-title">X</p></Link>
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