import React from 'react';
import './App.css';

import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Blog from './pages/Blog';
import Contact from './pages/Contact';


function App() {
  return (
    <>
    <div>
      <video webkit-playsinline playsinline loop autoPlay muted autobuffer poster="https://jmrossi98-personal-content.s3.amazonaws.com/images/background.gif" src="https://jmrossi98-personal-content.s3.amazonaws.com/videos/background.mp4" type="videos/mp4">
      </video>
    </div>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' exact component={About}/>
        <Route path='/projects' exact component={Projects}/>
        <Route path='/resume' exact component={Resume}/>
        <Route path='/blog' exact component={Blog}/>
        <Route path='/contact' exact component={Contact}/>
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
