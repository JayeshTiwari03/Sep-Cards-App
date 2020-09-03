import React from "react";
import "./About.css";
import "../home/Home.css";
import profilepic from '../../photos/profilepic.png';

export default function About() {
  return (
    <div className="contain">
      <div className="card-container">
        <img
          className="round"
          src={profilepic}
          alt="user"
        />
        <h3>Jayesh Tiwari</h3>
        <h6>Indore, India</h6>
        <p>
          ReactJS Developer and <br></br>
          UI Designer
        </p>
        <div className="buttons">
          <button className="primary">Message Me</button>
        </div>
        <div className="skills">
          <h6>Skills</h6>
          <ul>
            <li>UI/UX</li>
            <li>Front End Development</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
      </div>

      <div className="card-container">
        <img
          className="round"
          src={profilepic}
          alt="user"
        />
        <h3>...</h3>
        <h6>...</h6>
        <p>
          ...
          ...<br></br>
          ...
        </p>
        <div className="buttons">
          <button className="primary">Message Me</button>
        </div>
        <div className="skills">
          <h6>Skills</h6>
          <ul>
            <li>...</li>
            <li>...</li>
            <li>...</li>
            <li>...</li>
          </ul>
        </div>
      </div>

    </div>
  );
}
