import React from 'react';
import './Contact.css'

import emailjs from 'emailjs-com'

const Contact = () => {

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_jy9b9iw', 'template_b9zur19', e.target, "user_nX5HDf3E9etdbtNe42Hei").then((result) => {
        alert('Message Sent!');
        window.location.reload()
    }, (error) => {
        alert(error.text);
    });
  };

  return (
    <div className='form-container'>
      <h2>Send me a message!</h2>
      <form className="contact-form" onSubmit={sendEmail}>
          <div className='input-container'>
              <textarea name="message" className='input-name' placeholder='Name'></textarea>
              <textarea name="message" className='input-email' placeholder='Email'></textarea>
              <textarea name="message" className='input-text' placeholder='Your Message'></textarea>
              <input type="submit" value="Submit" className='btn btn--outline btn--large'></input>
          </div>
      </form>
      <h2>Or contact me at: jmrossi98@gmail.com</h2>
    </div>
  );
};
  
export default Contact