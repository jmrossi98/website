import React from 'react';
import './About.css'

const About = () => {
  var date = new Date(2013,9,3);
  var years = new Date(new Date() - date).getFullYear() - 1970;
  return (
    <div className='about-container'>
      <div className="about-me-container">
        <img src="/images/me.png" className='me'></img>
        <p className='intro-1'>
          I'm from Penn Yan, NY, a small town in the Finger Lakes Region. I started programming {years} years ago and have loved it ever since.<br></br><br></br>
          I graduated from the Rochester Institute of Technology with a Bachelor of Science Degree in Software Engineering. I minored in Business Administration and had a concentration in American Politics.<br></br><br></br>
        </p>
      </div>
      <p className='intro-2'>
        I currently work at <a href="https://www.mastodondesign.com" target="_blank">Mastodon Design</a>, a telecommunications company in Rochester, NY. I develop test scripts in Python to validate 
        the functionality of our products, which often involves the remote automation of RF Signal Analysis Equipment. Some of these scripts can also 
        involve programming FPGAs and manipulating bits via SPI communication. I also work on the company's Operations Dashboard, a website contained within our domain network that allows
        coworkers to view test results and data.<br></br><br></br>
        As for overall programming experience, I've worked with Python, C++, C, Java, HTML5, Javascript, Typescript, MATLAB, Ruby, Visual Basic, YAML, PHP and Assembly.<br></br><br></br>
        I achieved the rank of Eagle Scout during my time in the Boy Scouts of America.<br></br><br></br>
        In my free time I enjoy gaming as well as making and listening to music.
      </p>
    </div>
  );
};

export default About;