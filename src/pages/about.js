import React from 'react';

const About = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Center',
        alignItems: 'Center',
        padding: "50px 210px"
      }}>
        <div>
          <p style={{
            fontSize: '200%',
            width: '1200px',
            fontWeight: 'bold',
            fontFamily: "ＭＳ Ｐゴシック"
          }}>
            I'm from Penn Yan, NY, a small town in the Finger Lakes Region. I started programming 6 years ago and have loved it ever since.<br></br><br></br>
            I graduated from the Rochester Institute of Technology with a Bachelor of Science Degree in Software Engineering. I minored in Business Administration and had a concentration in American Politics.<br></br><br></br>
            I currently work at <a href="https://www.mastodondesign.com" target="_blank">Mastodon Design</a>, a telecommunications/defense company in Rochester, NY. I develop test scripts in Python to validate 
            the functionality of our products, which often involves the remote automation of RF Signal Analysis Equipment. Some of these scripts can also 
            involve programming FPGAs and manipulating bits via SPI communication. I also work on the company's Operations Dashboard, a website contained within our domain network that allows
            coworkers to view test results and data.<br></br><br></br>
            As for overall programming experience, I've worked with Python, C++, C, Java, HTML5, Javascript, Typescript, MATLAB, Ruby, Visual Basic, YAML, PHP and Assembly.<br></br><br></br>
            I achieved the rank of Eagle Scout in my time in the Boy Scouts of America.<br></br><br></br>
            In my free time I enjoy gaming as well as making and listening to music.
          </p>
        </div>
    </div>
  );
};
  
export default About;