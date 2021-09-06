import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";  //bootstrap through npm
import "bootstrap/dist/js/bootstrap.bundle";
import {
  Switch,
  Route
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from "./components/Home";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Error from "./components/Error";

//import './App.scss';

function App() {
  return (
    <>
        <Navbar/>

        <Switch>
          <Route exact path="/Portfolio" component={Home} />
          <Route exact path="/" component={Home} />
          <Route exact path="/education" component={Education} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/projects" component={Project} />
          <Route exact path="/contact" component={Contact} />
          <Route component={Error} />
        </Switch>

        <Footer/>
    </>
    
  );
}

export default App