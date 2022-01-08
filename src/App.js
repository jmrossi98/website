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
        <Route path={`${process.env.PUBLIC_URL}/`} exact component={Home}/>
        <Route path={`${process.env.PUBLIC_URL}/about`} exact component={About}/>
        <Route path={`${process.env.PUBLIC_URL}/projects`} exact component={Projects}/>
        <Route path={`${process.env.PUBLIC_URL}/resume`} exact component={Resume}/>
        <Route path={`${process.env.PUBLIC_URL}/contact`} exact component={Contact}/>
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
