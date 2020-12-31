import React,{useContext} from 'react';
import Navbar from './Components/NavBar';
import Login from './Components/Login';
import Events from './Components/Events';
import PrivateRoute from './hocs/PrivateRoute';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import UnPrivateRoute from './hocs/UnPrivateRoute';

function App() {
  return (
      <Router>
        <Navbar/>
        <UnPrivateRoute exact path="/login" component={Login}/>
        <PrivateRoute exact path="/events" component={Events}/>
      
      </Router>
  );
}

export default App;
