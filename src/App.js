import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./pages/Login"
import ShelterLogin from './pages/ShelterLogin';
import Swipe from './pages/Swipe';
import ShelterAnimals from './pages/ShelterAnimals';
// import PetDetails from "./pages/PetDetails"
import Profile2 from './pages/Profile2';
import ShelterCreate from './pages/ShelterCreate';
import ShelterProfile from './pages/ShelterProfile';
import Welcome from './pages/Welcome';
import UpdateProfile from './pages/UpdateProfile';
import ShelterUpdate from './pages/ShelterUpdate';
// import HeaderComp from "./components/Header"
import FooterComp from "./components/Footer"
import Matches from "./pages/Matches"
import CreateAnimal from "./pages/CreateAnimal"
import UpdateAnimal from "./pages/UpdateAnimal"
function App() {
  return (
    <Router> 
      {/* <HeaderComp/> */}
    <Switch>
      <Route path="/welcome">
        <Welcome/>
      </Route>
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/shelterlogin">
        <ShelterLogin/>
      </Route>
      <Route path = "/swipe">
        <Swipe/>
      </Route>
      <Route path = "/shelteranimals">
        <ShelterAnimals/>
      </Route>
      {/* <Route path ="/petdetails">
        <PetDetails/>
      </Route> */}
      <Route path ="/matches">
        <Matches/>
      </Route>
      <Route path ="/createanimal">
        <CreateAnimal/>
      </Route>
      <Route path = "/profile2">
        <Profile2/>
      </Route>
      <Route path = "/sheltercreate">
        <ShelterCreate/>
      </Route>
      <Route path = "/shelterprofile">
        <ShelterProfile/>
      </Route>
      <Route path = "/updateprofile">
        <UpdateProfile/>
      </Route>
      <Route path = "/updateanimal">
        <UpdateAnimal/>
      </Route>
      <Route path = "/shelterupdate">
        <ShelterUpdate/>
      </Route>
      <Route exact path="/">
        <Welcome/>
      </Route>
    </Switch>
    <FooterComp />
  </Router>
  );
}
export default App;