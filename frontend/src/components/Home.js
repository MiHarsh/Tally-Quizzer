import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import prof from "./images/2406-ai.png";
import exam from "./images/exams.png";
import "./Home.css";

export default function Home() {
  return (
    <div className="align-items-center justify-content-center" >
      <div >
        <Container  >
          <Row  > 
          <Col className="pt-4" style={{marginTop:'4rem',fontFamily:'Quicksand'}}>
        
          <h2 ><b>Quizzing Made Easy</b></h2>
          <br />
            <h5 class="mb-0" >Taking a quiz is fun and engaging.
              <br />Then creating one should be too.
              </h5>
              <div className="row" style={{ maxWidth: "400px", marginTop: "5rem" }}>
                
                <a href="/login" className="col-6">
              <button className="btn btn-primary " variant="primary"size="sm">
                 Create Quiz
              </button>{" "}
            </a>
             
              <a href="/" className="col-6">
              <button className="btn btn-primary " variant="primary" size="sm">
                 Take Quiz
              </button>{" "}
            </a>
            </div>
            </Col>
            <Col>
              <div style={{ marginTop: "5rem" }}>
                <img src={prof} style={{ maxWidth: "700px", minWidth:'600px',Height:"90vh"}} />
              </div>
            </Col>
           
          </Row>
          <br />
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
            background: 'rgb(16 60 139)',
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
