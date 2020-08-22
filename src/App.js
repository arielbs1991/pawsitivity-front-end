import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./pages/Login"
import Swipe from './pages/Swipe';
// import PetDetails from "./pages/PetDetails"
import Profile2 from './pages/Profile2';
import UpdateProfile from './pages/UpdateProfile';
// import HeaderComp from "./components/Header"
import FooterComp from "./components/Footer"
import Matches from "./pages/Matches"
function App() {
  return (
    <Router> 
      {/* <HeaderComp/> */}
    <Switch>
      <Route path="/login">
        <Login/>
      </Route>
      <Route path = "/swipe">
        <Swipe/>
      </Route>
      {/* <Route path ="/petdetails">
        <PetDetails/>
      </Route> */}
      <Route path ="/matches">
        <Matches/>
      </Route>
      <Route path = "/profile2">
        <Profile2/>
      </Route>
      <Route path = "/updateprofile">
        <UpdateProfile/>
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