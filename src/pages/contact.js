import React from 'react';
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
    <div style={{display:'flex', justifyContent: 'Center', alignItems: 'Center', padding: "120px 500px"}}>
        <div style={{justifyContent: 'Center', alignItems: 'Center'}}>
            <div>
                  <h2 style={{fontSize: '200%', fontWeight: 'bold', fontFamily: "ＭＳ Ｐゴシック"}}>Send me a message!</h2>
            </div>
            <div>
                <form className="contact-form" onSubmit={sendEmail}>
                    <div>
                        <textarea name="message" style={{width:'500px', height:'200px', fontSize: '100%', fontWeight: 'bold', fontFamily: "ＭＳ Ｐゴシック"}}></textarea>
                    </div>
                    <div>
                        <input type="submit" value="Send" style={{width:'70px', height:'40px', fontSize: '100%', fontWeight: 'bold', fontFamily: "ＭＳ Ｐゴシック"}}></input>
                    </div>
                </form>
            </div>
            <div>
                <p style={{justifyContent: 'Center', alignItems: 'Center', fontSize: '200%', fontWeight: 'bold', fontFamily: "ＭＳ Ｐゴシック", padding:'40px 0px'}}>
                  Or contact me at:<br></br>
                  Email: jmrossi98@gmail.com<br></br>
                </p>
            </div>
        </div>
    </div>
  );
};
  
export default Contact