import "../style.css";

const Skills = () => {
  return (
    <section id="Skills">
      <h2 className="skills-header">Tools That I Like To Use</h2>
      <p className="skills-disc">Technologies I Prefer Using</p>
      <div className="skill">
        <div className="tool">
          <img className="icon" src="../assets/react.svg" alt="react-icon" />
          <p className="react">React</p>
        </div>
        <div className="tool">
          <img className="icon" src="../assets/node-js.svg" alt="node-icon" />
          <p className="nodejs">Node.js</p>
        </div>
        <div className="tool">
          <img className="icon" src="../assets/html.svg" alt="html-icon" />
          <p className="html">HTML</p>
        </div>
        <div className="tool">
          <img className="icon" src="../assets/js.svg" alt="js-icon" />
          <p className="js">JavaScript</p>
        </div>
        <div className="tool">
          <img
            className="icon"
            src="../assets/expressjs1.svg"
            alt="express-icon"
          />
          <p className="express">Express.js</p>
        </div>
        <div className="tool">
          <img className="icon" src="../assets/css.svg" alt="css-icon" />
          <p className="css">CSS</p>
        </div>
        <div className="tool">
          <img
            className="icon"
            src="../assets/bootstrap.svg"
            alt="bootstrap-icon"
          />
          <p className="bootstrap">Bootstrap</p>
        </div>
        <div className="tool">
          <img className="icon" src="../assets/git.svg" alt="git-icon" />
          <p className="css">Git</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
