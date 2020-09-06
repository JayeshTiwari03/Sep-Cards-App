import React, { useState, useContext } from "react";
import logo from "../../photos/bulb.png";
import UserContext from "../context/UserContext";
import "./main.css";
import firebase from "firebase/app";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";

const SignIn = () => {
  const context = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
        context.setUser({ email: res.user.email, uid: res.user.uid });
      })
      .catch((error) => {
        console.log(error);
        toast(error.message, {
          type: 'error'
        })
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp();
  };

  if (context.user?.uid) {
    return <Redirect to="/home" />;
  }

  return (
    <div className="contain">
      <form className="form-signin" onSubmit={handleSubmit}>
        <img
          className="mb-4"
          src={logo}
          alt="Logo"
          alt-width="72"
          height="72"
        />
        <h1 className="h3 mb-3 font-weight-normal">Sign In</h1>
        <label htmlFor="inputEmail" className="sr-only">
          Email Address
        </label>
        <input
          type="email"
          className="form-control"
          id="inputEmail"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoFocus
        />
        <label htmlFor="inputPassword" className="sr-only">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="inputPassword"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Sign in
        </button>
        <p className="mt-5 mb-3 text-muted">© 2020</p>
      </form>
    </div>
  );
};

export default SignIn;
