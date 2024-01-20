import "../style.css";
import Bootstrap from "../assets/bootstrap.svg";
import CSS from "../assets/css.svg";
import JS from "../assets/js.svg";
import Git from "../assets/git.svg";
import HTML from "../assets/html.svg";
import REACT from "../assets/react.svg";
import Node from "../assets/node-js.svg";
import Express from "../assets/expressjs1.svg";

const Skills = () => {
  return (
    <section id="Skills">
      <h2 className="skills-header">Tools That I Like To Use</h2>
      <p className="skills-disc">Technologies I Prefer Using</p>
      <div className="skill">
        <div className="tool">
          <img className="icon" src={REACT} alt="react-icon" />
          <p className="react">React</p>
        </div>
        <div className="tool">
          <img className="icon" src={Node} alt="node-icon" />
          <p className="nodejs">Node.js</p>
        </div>
        <div className="tool">
          <img className="icon" src={HTML} alt="html-icon" />
          <p className="html">HTML</p>
        </div>
        <div className="tool">
          <img className="icon" src={JS} alt="js-icon" />
          <p className="js">JavaScript</p>
        </div>
        <div className="tool">
          <img className="icon" src={Express} alt="express-icon" />
          <p className="express">Express.js</p>
        </div>
        <div className="tool">
          <img className="icon" src={CSS} alt="css-icon" />
          <p className="css">CSS</p>
        </div>
        <div className="tool">
          <img className="icon" src={Bootstrap} alt="bootstrap-icon" />
          <p className="bootstrap">Bootstrap</p>
        </div>
        <div className="tool">
          <img className="icon" src={Git} alt="git-icon" />
          <p className="css">Git</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
