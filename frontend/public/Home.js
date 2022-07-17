import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import prof from "./images/2406-ai.png";
import exam from "./images/exams.png";
import "./CreateQuiz.css";

export default function Home() {
  return (
    <div className="align-items-center justify-content-center" >
      <div style={{background: "linear-gradient(45deg,#03001e,#7303c0,#ec38bc,#fdeff9)" }}>
      <header class="text-center text-white py-5">
      <h1 class="display-4 font-weight-bold mb-4">Generate QUIZZES With MisFits Interactive Quiz maker</h1>
      <p class="lead mb-0">Taking a quiz is fun and engaging. And creating one should be too.</p>
      
    </header>
        <Container  >
          <Row  > 
          <Col>
              <div style={{ maxWidth: "200px", marginTop: "10rem" }}>
                
                <a href="/CreateQuiz">
              <Button variant="primary" size="sm">
                 CREATE QUIZ
              </Button>{" "}
            </a>
            <p1>Create your own Quiz</p1>
               
              </div>
              <div className="">

              </div>
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
