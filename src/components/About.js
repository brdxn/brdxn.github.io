import React from "react";
import { Outlet, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../App.css'

export const About = () => {
    return (
      <div>
        <div id="aheader">
      <h1>About Me</h1>
    </div>
    <div id="acontent">
      <p id="about">My name is Brendan Dill. I am currently a computer science major at West Chester University. On top of obtaining my Bachelors of Science in Computer Science, I am obtaining a Certificate Computer Security (NSA Approved).
        I'm currently pursuing to be a Software Engineer. Although, I do have interests in cybersecurity and artificial intelligence. Outside of programming and work, my interests are being outdoors (Hiking, Fishing, Boating, Running.).
        I'm in the process of getting scuba certified, so I can explore the ocean as I'm vastly fascinated by it. Besides that I enjoy hanging out with friends and catching up on any Netflix series I'm watching. Also, I enjoy watching sports
        as I am an Eagles, Sixers, Phillies, and Flyers fan.
      </p>
      <div id="resume">
      <h3>Resume</h3>
        <div className="mb-2">
            <Button id="button" variant="secondary" size="lg">
              <Link id="download" to="/resume.pdf" target="_blank" download>Download PDF</Link>
            </Button>
          <Outlet />
        </div>
      </div>
      <div id="skills1">
        <h2>Skills</h2>
        <div id="skills2">
            <h4>Java</h4>
            <ProgressBar animated now={80} />
            <h5></h5>
            <h4>JavaScript</h4>
            <ProgressBar animated now={45} />
            <h5></h5>
            <h4>SQL</h4>
            <ProgressBar animated now={65} />
            <h5></h5>
            <h4>C</h4>
            <ProgressBar animated now={40} />
        </div>
      </div>
    </div>
      </div>
    );
  };