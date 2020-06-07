import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import MagImage from './components/MagImage/MagImage.js';
import AboutUs from './components/AboutUs/AboutUs.js';
import PreviousIssues from './components/PreviousIssues/PreviousIssues.js';


function App() {
  return (
    <Router>
      <div class="App">
        
         <MagImage/>
         
         
         <AboutUs/>
         
         
         <PreviousIssues/>
   
      </div>
    </Router>
  );
}

export default App;
