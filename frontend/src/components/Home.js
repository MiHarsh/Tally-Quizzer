import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import prof from "./images/2406-ai.png";
import exam from "./images/exams.png";
import "./CreateQuiz.css";

export default function Home() {
  return (
    <div className="align-items-center justify-content-center" >
      <div >
        <Container  >
          <Row  > 
          <Col>
              <div style={{ maxWidth: "200px", marginTop: "6rem" }}>
                
      {/* <h5 class="display-4 font-weight-bold mb-4">Generate QUIZZES With MisFits Interactive Quiz maker</h5>
      <p class="lead mb-0">Taking a quiz is fun and engaging. And creating one should be too.</p> */}
                <a href="/CreateQuiz">
              <Button variant="primary" size="sm">
                 Ceate Quiz              
                 </Button>{" "}
            </a>
            <a href="/ParticipantLogin">
              <Button variant="primary" size="sm">
                 Take Quiz              
                 </Button>{" "}
            </a>
          
               
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
            paddingTop: "1.8rem",
            paddingBottom: "2rem",
            
          }}
        >
          <p style={{ color: "white" }}>Copyright @2022 Team MisFits</p>
        </div>
      </div>
    </div>
  );
}
