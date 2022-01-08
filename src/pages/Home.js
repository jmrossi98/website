import React from 'react';
import './Home.css'

import {Button} from '../components/Button';

const Home = () => {
  return (
    <div className='hero-container'>
      <h1>Hi, I'm Jakob!</h1> 
      <h2><br></br><br></br>Welcome to my website. I'm a Software Engineer based in Rochester, NY. I'm passionate about learning new skills and developing useful software. I'm interested in web development and embedded systems programming.</h2>
      <Button
        className='btns'
        buttonStyle='btn--outline'
        buttonSize='btn--large'
        path='/projects'
      >
        VIEW MY WORK
      </Button>
    </div>
  );
};

export default Home;
