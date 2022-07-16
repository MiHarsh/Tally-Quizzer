import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import prof from "./images/2406-ai.png";
import exam from "./images/exams.png";

export default function Home() {
  return (
    <div className="align-items-center justify-content-center" >
      <div style={{backgroundColor:'rgb(39 20 70)', }}>
        <Container  >
          <Row  > 
          <Col>
              <div style={{ maxWidth: "200px", marginTop: "10rem" }}>
                <h1 style={{ color: "#007bff", marginLeft: "5rem" }}>
                  quizzer base
                </h1>
              </div>
            </Col>
            <Col>
              <div style={{ marginTop: "5rem" }}>
                <img src={prof} style={{ maxWidth: "700px", minWidth:'600px',Height:"90vh"}} />
              </div>
            </Col>
           
          </Row>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <a href="/dashboard">
              <Button variant="primary" size="lg">
                Go To Dashboard
              </Button>{" "}
            </a>
          </div>
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
