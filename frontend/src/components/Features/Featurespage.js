import React from 'react';
import {Container} from 'react-bootstrap';
import './FeaturesPage.css';


export default function Featurespage () {
  return (
    <Container >
        <div className="split left">
        <div className="centered">
            <a href="/createquiz"><button className="button button1">Create Quiz</button></a>
          <h2 style={{color:"aqua"}}>Click here for generating quiz</h2>
        </div>
      </div>
      
      <div className="split right">
        <div className="centered">
        <a href="/quizes"><button className="button button2">Quiz History</button></a>
          <h2 style={{color:"antiquewhite"}}>Click here for viewing quiz history</h2>
        </div>
      </div>
    </Container>
  )
}
