import React from 'react';
import './About.css'

const About = () => {
  var date = new Date(2013,9,3);
  var years = new Date(new Date() - date).getFullYear() - 1970;
  return (
    <div className='about-container'>
      <div className="about-me-container">
        <img src="https://jmrossi98-personal-content.s3.amazonaws.com/images/me.png" className='me'></img>
        <p className='intro-1'>
          <br></br><br></br>
          I'm from Penn Yan, NY, a small village in the Finger Lakes Region of Upstate New York. I started programming {years} years ago and have loved it ever since.<br></br><br></br>
        </p>
      </div>
      <p className='intro-2'>
        <br></br><br></br>
        I graduated from the Rochester Institute of Technology with a Bachelor of Science Degree in Software Engineering. I minored in Business Administration and had a concentration in American Politics.<br></br><br></br>
        I've worked extensively with Python, Javascript / Typescript, HTML5, C++, C and Java.<br></br><br></br>
        In my free time I enjoy gaming and listening to music.
      </p>
    </div>
  );
};

export default About;
