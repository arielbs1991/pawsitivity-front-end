import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./pages/Login"
import Profile from './pages/Profile';
import Swipe from './pages/Swipe';

function App() {
  return (
    <Router> 
    <Switch>
      <Route path="/login">
        <Login/>
      </Route>
      <Route path = "/swipe">
        <Swipe/>
      </Route>
      <Route path = "/profile">
        <Profile/>
      </Route>
      <Route exact path="/">
        <Login/>
      </Route>
    </Switch>
  </Router>
  );
}

// TODO: make navbar in components to put on each page

export default App;
