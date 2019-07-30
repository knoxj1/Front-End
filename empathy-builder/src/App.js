import React from 'react';
import { Route } from 'react-router-dom'; 

import NavBar from './components/NavBar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Calculator from './components/Calculator';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path ="/calculator" render={props => <Calculator {...props} />} />
      <Route exact path="/login" render={props => <Login {...props}/>} />
      <Route exact path ="/sign-up" render={props => <SignUp {...props} />} />
      
    </div>
  );
}

export default App;
