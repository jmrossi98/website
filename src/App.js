import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  return (
    <>
    <video src='/videos/background.mp4' autoPlay loop muted/>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' exact component={About}/>
        <Route path='/projects' exact component={Projects}/>
        <Route path='/resume' exact component={Resume}/>
        <Route path='/blog' exact component={Contact}/>
        <Route path='/contact' exact component={Contact}/>
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
