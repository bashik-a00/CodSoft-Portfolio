import "../style.css";

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="project-header">My Recent Works</h2>
      <div className="cards">
        <div className="left card">
          <img
            className="title-img"
            src="../images/pro1.png"
            alt="project-img"
          />
          <h3 className="card-title">Project1</h3>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et neque
            ducimus ipsa amet quasi asperiores! Nostrum provident
          </p>
        </div>

        <div className="right card">
          <img
            className="title-img"
            src="../images/pro1.png"
            alt="project-img"
          />
          <h3 className="card-title">Project2</h3>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et neque
            ducimus ipsa amet quasi asperiores! Nostrum provident
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
