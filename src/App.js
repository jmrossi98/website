import './App.css';
import React from 'react';
import { MemoryRouter, Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home'
import About from './pages/about'
import Projects from './pages/projects';
import Resume from './pages/resume'
import Contact from './pages/contact'

function App() {
  return (
    <MemoryRouter>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/projects' exact component={Projects} />
        <Route path='/resume' exact component={Resume} />
        <Route path='/contact' exact component={Contact} />
      </Switch>
    </MemoryRouter>
  );
}

export default App;
