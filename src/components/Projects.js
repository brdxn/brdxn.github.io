import placeholder from './placeholder.png';
import fishApp from './fishApp.jpg';
import portfolioshot from './portfolioshot.png';
import React from 'react';
import {Container ,Card, Col, Button, Row} from 'react-bootstrap'; 

export const Projects = () => {
  return (
    <div>
      <div id="header2">
        <h1>Projects</h1>
      </div>
      <div id="projects" className="App">  
        <Container className='p-4'>  
          <Row>
          <Col md="4">  
          <Card>  
          <a href="https://github.com/brdxn/fishingLog" target="_blank"><Card.Img id="project1" variant="top" src={fishApp} /></a>
            <Card.Body>  
            <Card.Title>Fishing Log Application</Card.Title>  
            <Card.Text>  
              Users can log their catches from their fishing trips into a MySQL database. Using crowdsourcing users are able to read the information from other catches and use it for their next fishing adventure.  
            </Card.Text>  
            <a href="https://github.com/brdxn/fishingLog" target="_blank"><Button variant="secondary">View Project</Button></a> 
            </Card.Body>  
          </Card>  
          </Col>
          <Col md="4">  
          <Card>  
          <a href="https://github.com/brdxn/brdxn.github.io" target="_blank"><Card.Img id="project2" variant="top" src={portfolioshot} /></a>
            <Card.Body>  
            <Card.Title>Portfolio</Card.Title>  
            <Card.Text>  
              This is the portfolio website I created for myself using Github Pages. To create this site I used HTML, CSS, Bootstrap, JSX, and React.js.  
            </Card.Text>  
            <a href="https://github.com/brdxn/brdxn.github.io" target="_blank"><Button variant="secondary">View Project</Button></a> 
            </Card.Body>  
          </Card>  
          </Col>
          <Col md="4">  
          <Card>  
          <a href="#" target="_blank"><Card.Img id="project3" variant="top" src={placeholder} /></a> 
            <Card.Body>  
            <Card.Title>Project #3</Card.Title>  
            <Card.Text>  
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae molestie magna. Vivamus sed molestie enim, eu convallis mauris. Aliquam pharetra velit ac enim maximus, a commodo augue hendrerit. Phasellus at aliquam est  
            </Card.Text>  
            <a href="#" target="_blank"><Button variant="secondary">View Project</Button></a> 
            </Card.Body>  
          </Card>  
          </Col>
          </Row>
          <br></br>
          <Row>
          <Col md="4">  
          <Card>  
          <a href="#" target="_blank"><Card.Img id="project4" variant="top" src={placeholder}/></a>  
            <Card.Body>  
            <Card.Title>Project #4</Card.Title>  
            <Card.Text>  
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae molestie magna. Vivamus sed molestie enim, eu convallis mauris. Aliquam pharetra velit ac enim maximus, a commodo augue hendrerit. Phasellus at aliquam est  
            </Card.Text>  
            <a href="#" target="_blank"><Button variant="secondary">View Project</Button></a> 
            </Card.Body>  
          </Card>  
          </Col>
          <Col md="4">  
          <Card>  
          <a href="#" target="_blank"><Card.Img id="project5" variant="top" src={placeholder} /></a>  
            <Card.Body>  
            <Card.Title>Project #5</Card.Title>  
            <Card.Text>  
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae molestie magna. Vivamus sed molestie enim, eu convallis mauris. Aliquam pharetra velit ac enim maximus, a commodo augue hendrerit. Phasellus at aliquam est  
            </Card.Text>  
            <a href="#" target="_blank"><Button variant="secondary">View Project</Button></a>  
            </Card.Body>  
          </Card>  
          </Col>
          <Col md="4">  
          <Card>  
          <a href="#" target="_blank"><Card.Img id="project6" variant="top" src={placeholder} /></a>  
            <Card.Body>  
            <Card.Title>Project #6</Card.Title>  
            <Card.Text>  
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae molestie magna. Vivamus sed molestie enim, eu convallis mauris. Aliquam pharetra velit ac enim maximus, a commodo augue hendrerit. Phasellus at aliquam est  
            </Card.Text>  
            <a href="#" target="_blank"><Button variant="secondary">View Project</Button></a>  
            </Card.Body>  
          </Card>  
          </Col>
          </Row>
        </Container>  
      </div>
    </div>
  );
};