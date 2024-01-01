
import '../style.css';

const Skills =()=>{
  return(
    <section id='Skills'>
      <h2 className='skills-header'>Tools That I Like To Use</h2>
      <p className='skills-disc'>Technologies I Prefer Using</p>
      <div className='skill'>
        <div className='tool'>
          <img className="icon" src="../images/react.svg" alt="react-icon" />
          <p className='react'>React</p>
        </div>
        <div className='tool'>
          <img className="icon" src="../images/node-js.svg" alt="node-icon" />
          <p className='nodejs'>Node.js</p>
        </div>
        <div className='tool'>
          <img className="icon" src="../images/html.svg" alt="html-icon" />
          <p className='html'>HTML</p>
        </div>
        <div className='tool'>
          <img className="icon" src="../images/js.svg" alt="js-icon" />
          <p className='js'>JavaScript</p>
        </div>
        <div className='tool'>
          <img className="icon" src="../images/expressjs1.svg" alt="express-icon" />
          <p className='express'>Express.js</p>
        </div>
        <div className='tool'>
          <img className="icon" src="../images/css.svg" alt="css-icon" />
          <p className='css'>CSS</p>
        </div>
        <div className='tool'>
          <img className="icon" src="../images/bootstrap.svg" alt="bootstrap-icon" />
          <p className='bootstrap'>Bootstrap</p>
        </div>
        <div className='tool'>
          <img className="icon" src="../images/git.svg" alt="git-icon" />
          <p className='css'>Git</p>
        </div>
        </div>
    </section>
  );
}

export default  Skills;
