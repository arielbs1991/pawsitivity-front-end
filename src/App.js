import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./pages/Login"
import Swipe from './pages/Swipe';
import Profile from './pages/Profile';
import HeaderComp from "./components/Header"
import FooterComp from "./components/Footer"

function App() {
  return (
    <Router> 
      <HeaderComp/>
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
    <FooterComp />
  </Router>
  );
}

export default App;
