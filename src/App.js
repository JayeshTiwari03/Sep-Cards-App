import React, { useState } from "react";
import "./App.css";
import FirstCard from "./components/cards/FirstCard";
import Home from "./components/home/Home";
import Navigation from "./components/nav/Navigation";
import { Switch, Route } from "react-router-dom";
import About from "./components/about/About";
import Footers from "./components/footer/Footers";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
//import PageNotFound from "./components/auth/PageNotFound";
import UserContext from "./components/context/UserContext";
//import { SiFirebase } from "react-icons/si";
//import AppWrapper from "./components/nav/Navigation";
//init firebase
import firebase from "firebase/app";
import "firebase/auth";

import firebaseConfig from "./components/config/firebaseConfig";

firebase.initializeApp(firebaseConfig);

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div>

      <UserContext.Provider value={{ user, setUser }}>
      <Navigation />
        <Switch>

          <Route path="/home">
            <Home />
          </Route>
          <Route path="/firstcard1">
            <FirstCard />
          </Route>
          <Route path="/aboutme">
            <About />
          </Route>

          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/" component={Home} />
        </Switch>
      </UserContext.Provider>
      <Footers />
    </div>
  );
};

export default App;
