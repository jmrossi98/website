import React from 'react';
import pic from '../assets/me.png'

const Home = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'Center', alignItems: 'Center', padding: "180px 230px"}}>
        <div>
            <img src={pic} alt="That's me" style={{display: 'flex', justifyContent: 'Center', alignItems: 'Center', padding: "0px 90px"}}>
            </img>
        </div>
        <div>
            <p style={{display: 'flex', justifyContent: 'Center', alignItems: 'Center', fontSize: '200%', width: '700px', padding: '0px 25px', fontWeight: 'bold', fontFamily: "ＭＳ Ｐゴシック"}}>
              Hi, I'm Jakob! Welcome to my website.<br></br><br></br>
              I'm a Software Engineer based in Rochester, NY. I'm passionate about learning new skills and developing useful software.<br></br><br></br>
              I'm interested in embedded systems programming, web development and artificial intelligence.
            </p>
        </div>
    </div>
  );
};
  
export default Home;
