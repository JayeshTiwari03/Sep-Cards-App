import React from "react";
import "./App.css";
import FirstCard from "./components/cards/FirstCard";
import Home from "./components/home/Home";
import Navigation from "./components/nav/Navigation";
import { Switch, Route } from 'react-router-dom';
import About from './components/about/About';
import Footers from "./components/footer/Footers";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";

function App() {
  return (
    <div>
      <Navigation />
      
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path='/firstcard1'>
          <FirstCard />
        </Route>
        <Route path='/aboutme'>
          <About />
        </Route>
        <Route path='/signup'>
          <SignUp />
        </Route>
        <Route path='/signin'>
          <SignIn />
        </Route>

      </Switch>
      
      <Footers />
    </div>
  );
}

export default App;
