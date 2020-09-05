import React, { useContext } from "react";
import logo from "../../photos/bulb.png";
import "./Navigation.css";
import { Link } from "react-router-dom";
//<AiFillBulb className="d-inline-block align-top" width="30px" height="30px"alt=""/>
//<span className='navbar-toggler-icon'></span>
//<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"></button>
//<div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
import UserContext from "../context/UserContext";
//import App from "../../App";
//TODO Fix Toggle of menu, bootstrap check on website and implement along with LCO video 08


function Navigation() {

  const context = useContext(UserContext);

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <a className="navbar-brand" href="/home" alt="Logo">
          <img
            src={logo}
            width="45px"
            height="45px"
            alt="Logo"
            className="d-inline-block align-top"
          />
          Mismisi
        </a>

        <span className="navbar-text">
          When you are shaken up, say 'mismisi'
        </span>
        <span className="navbar-text">
          Hi, {context.user?.email ? context.user.email : 'Guest'}
        </span>
        <div className="navbar-nav">
          <Link to="/home" className="nav-item nav-link" href="/home">
            Home<span className="sr-only">(current)</span>
          </Link>
          <Link to="/aboutme" className="nav-items nav-link" href="/aboutme">
            About Me
          </Link>

          {
            context.user ? (
          
              <Link to="/logout" className="nav-items nav-link" href="/logout">
                LogOut
              </Link>
            
          ) : (
            <>
              <Link to="/signup" className="nav-items nav-link" href="/signup">
                SignUp
              </Link>
              <Link to="/signin" className="nav-items nav-link" href="/signin">
                SignIn
              </Link>
            </>
          )
          }

        </div>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>
    </div>
  );
}

export default Navigation;