import "../style.css";

const About=()=>{
  return(
    <div id="about">
      <h2 className="aboutMe">About Me...</h2>
      <div className="text-photo">
      <div className="photo-area">
        <img className="about-me-photo" src="../images/my_photo.JPG" alt="myPicture" />
      </div>
      <div className="text-area">
        <p className="aboutMeText">Greetings, I am Bashik A, a dedicated and passionate web developer with a profound addiction to coding. I am committed to transforming this addiction into a driving force for crafting professional and innovative web solutions</p>
      </div>
      </div>      
    </div>
  );
}

export default About;