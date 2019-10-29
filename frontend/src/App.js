import React from 'react';
import './App.css';
import logo from './assets/logo.svg'

import Route from './routes';

function App() {

  return (
    <div className="container">

      <img src={logo} alt="AirCnC" />
      <div className="content">
        
        <Route/>    
      </div>
    </div>
  );
}

export default App;
