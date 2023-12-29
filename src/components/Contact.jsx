import '../style.css';

const Contact = () => {
  return(
  <section id="contact">
    <form action="">
      <div className="input-container">
        <label htmlFor="name">Name</label>
        <input type="text" name="Name" className="c-name" ></input>
      </div>
      <div className='input-container'>
        <label htmlFor='email' className='label-email'>Email</label>
        <input type="email" name='email' className='input-email' />
      </div>
      <div className='input-container'>
        <label htmlFor='message'>Message</label>
        <textarea type='text' name='message' className='form-message'></textarea>
      </div>
      <div className='submit-button'>
        <button type='submit' className='submit-btn'>
          <p>send</p>
        </button>
      </div>
    </form>
  </section>
  );
}

export default Contact;