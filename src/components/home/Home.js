import React from "react";
import "./Home.scss";

import cardimagesmall1 from "../../photos/images2.jpg";
import cardimagesmall2 from "../../photos/suitcase.jpg";
import cardimagesmall3 from "../../photos/packing.jpg";
import cardimagesmall4 from "../../photos/pets.jpg";
import cardimagesmall5 from "../../photos/dice.jpg";
import cardimagesmall6 from "../../photos/man.jpg";

import { AiFillCamera } from "react-icons/ai";
import { FiCloudRain } from "react-icons/fi";
import { GrEmoji } from "react-icons/gr";
import { FaBook } from "react-icons/fa";
import { BsPersonBoundingBox } from "react-icons/bs";
import { SiTwitch } from "react-icons/si";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="card-page">
      <div className="jumbotron">
        <h1 className="display-4">Welcome, Human</h1>
        <p className="lead">
          Hope you are doing well today. We ar ehere to make your day better.
        </p>
        <hr className="my-4" />
        <p>
          To get started, you can Sign Up or browse the app without signing In
          too.
        </p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="/signup" role="button">
            Sign Up here
          </a>
        </p>
      </div>

      <div className="card-columns">
        <div className="card" id="small-cards">
          <div className="card-header text-center">Featured Misses</div>
          <Link to="/gitusers">
            <img className="card-img-top" src={cardimagesmall1} alt="card" />
          </Link>
          <div className="card-body">
            <h5 className="card-title">
              <AiFillCamera /> GitHub User
            </h5>
            <p className="card-text">
              See lots of GitHub users displayed in cards. See your favorite
              users in this Mis and keep rocking.
            </p>
          </div>
        </div>

        <div className="card" id="small-cards">
          <div className="card-header text-center">Featured Misses</div>
          <img className="card-img-top" src={cardimagesmall3} alt="card" />
          <div className="card-body">
            <h5 className="card-title">
              <GrEmoji /> Mis-Emoji
            </h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>

        <div className="card" id="small-cards">
          <div className="card-header text-center">Featured Misses</div>
          <Link to="/searchsome">
            <img className="card-img-top" src={cardimagesmall2} alt="card" />
          </Link>
          <div className="card-body">
            <h5 className="card-title">
              <FiCloudRain /> User Search
            </h5>
            <p className="card-text">
              Search your favorite GitHub user in this miss. Click on this and
              start hitting that Search button!
            </p>
          </div>
        </div>

        <div className="card" id="small-cards">
          <div className="card-header text-center">Premium Misses</div>
          <img className="card-img-top" src={cardimagesmall4} alt="card" />
          <div className="card-body">
            <h5 className="card-title">
              <FaBook /> Mis-Books
            </h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>

        <div className="card" id="small-cards">
          <div className="card-header text-center">Featured Misses</div>
          <Link to="/movies">
            <img className="card-img-top" src={cardimagesmall5} alt="card" />
          </Link>
          <div className="card-body">
            <h5 className="card-title">
              <BsPersonBoundingBox /> Movies Search
            </h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>

        <div className="card" id="small-cards">
          <div className="card-header text-center">Premium Misses</div>
          <img className="card-img-top" src={cardimagesmall6} alt="card" />
          <div className="card-body">
            <h5 className="card-title">
              <SiTwitch /> Mis-Twitch
            </h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
