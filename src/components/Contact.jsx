import "../style.css";

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="contact-header">GET IN TOUCH</h2>
      <form>
        <div className="input-container">
          <input type="text" className="input-name" placeholder="Name"></input>
        </div>
        <div className="input-container">
          <input type="email" className="input-email" placeholder="Email"/>
        </div>
        <div className="input-container">
          <textarea
            placeholder="Message"
            type="text"
            className="form-message"
          ></textarea>
        </div>
        <div className="submit-button">
          <button type="submit" className="submit-btn">
            SEND
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
