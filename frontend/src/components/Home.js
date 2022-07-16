import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import prof from "./images/2406-ai.png";
import exam from "./images/exams.png";
import "./Home.css";

export default function Home() {
  return (
    <div className="align-items-center justify-content-center" >
      <div style={{background: "linear-gradient(45deg,#03001e,#7303c0,#ec38bc,#fdeff9)" }}>
      {/* <header class="text-center text-white py-5"> */}
     
      
    {/* </header> */}
        <Container  >
          <Row  > 
          <Col className="pt-4">
          <h5 class="">Generate QUIZZES With MisFits Interactive Quiz maker</h5>
      <p class="mb-0">Taking a quiz is fun and engaging. And creating one should be too.</p>
              <div style={{ maxWidth: "200px", marginTop: "5rem" }}>
                
                <a href="/login">
              <button className="btn getstarted" size="sm">
                 Create Quiz
              </button>{" "}
            </a>
          
            {/* <p1>Create your own Quiz</p1> */}
               
              </div>
              <a href="/">
              <button variant="primary" size="sm">
                 Take QUIZ
              </button>{" "}
            </a>
            </Col>
            <Col>
              <div style={{ marginTop: "5rem" }}>
                <img src={prof} style={{ maxWidth: "700px", minWidth:'600px',Height:"90vh"}} />
              </div>
            </Col>
           
          </Row>
          {/* <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <a href="/dashboard">
              <Button variant="primary" size="lg">
                Go To Dashboard
              </Button>{" "}
            </a>
          </div> */}
        </Container>
        <div
          style={{
            background: 'rgb(19 1 48)',
            textAlign: "center",
            paddingTop: "2rem",
            paddingBottom: "2rem",
            
          }}
        >
          <p style={{ color: "white" }}>Copyright @2022 Team MisFits</p>
        </div>
      </div>
    </div>
  );
}
