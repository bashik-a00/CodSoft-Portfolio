import "../style.css";
import FlipZone from "../assets/FlipZone.png";
import Tasktracker from "../assets/tasktracker.png"

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="project-header">My Recent Works</h2>
      <div className="cards">
        <div className="left card">
          <img className="title-img" src={Tasktracker} alt="project-img" />
          <h3 className="card-title">Task-Tracker</h3>
          <p className="card-text">Simple Task Tracker website to track your list of tasks, by adding and completing when it&apos;s done
          </p>
        </div>
        <div className="right card">
          <img className="title-img" src={FlipZone} alt="project-img" />
          <h3 className="card-title">FlipZone</h3>
          <p className="card-text">
            FlipZone is a interactive online shopping website, Revitalized
an existing e-commerce platform to improve user experience,
focusing on intuitive navigation and engaging product
presentation. 
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
