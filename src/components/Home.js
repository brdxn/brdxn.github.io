import React from "react";
import profilepic from './profliepic.jpeg';
import github from './github.png';
import linkedin from './linkedin.jpeg';

export const Home = () => {
    return (
      <div>
        <div>
      <div id="piclay">
        <img id="pic" src={profilepic} width="260px" height="400px"></img>
      </div>
      <div id="info">
        <h1 id="name">Hi, my name is Brendan!</h1>
        <div class="facts">
          <ul id="contentlist1">
            <li id="contentlist2">I'm currently a Computer Science student at West Chester University.</li>
            <li id="contentlist2">Aspiring to be a Software Engineer.</li>
            <li id="contentlist2">My interests are programming, the outdoors, and working out.</li>
          </ul>
        </div>
      </div>
      <div id="footer">
        <a href="https://github.com/brdxn" target="_blank"><img id="git" src={github} width="40px" height="40px"></img></a>
        <a href="https://www.linkedin.com/in/brendan-dill-570b4a213/" target="_blank"><img id="linkedin" src={linkedin} width="50px" height="50px"></img></a>
      </div>
    </div>
      </div>
    );
  };