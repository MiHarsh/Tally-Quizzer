import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import prof from "./images/class.png";
import exam from "./images/exams.png";

export default function Home() {
  return (
    <div className="align-items-center justify-content-center">
      <div>
        <Container>
          <Row>
            <Col>
              <div style={{ maxWidth: "400px", marginTop: "10rem" }}>
                <h1 style={{ color: "#007bff" }}>Quizzer - base</h1>
              </div>
            </Col>
            <Col>
              <div style={{ marginTop: "5rem" }}>
                <img src={prof} style={{ maxWidth: "500px" }} />
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div style={{ marginTop: "5rem" }}>
                <img src={exam} style={{ maxWidth: "500px" }} />
              </div>
            </Col>
            <Col>
              <div style={{ maxWidth: "400px", marginTop: "10rem" }}>
                <h1 style={{ color: "#007bff", marginLeft: "5rem" }}>
                  quizzer base
                </h1>
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
            background: "#007bff",
            textAlign: "center",
            paddingTop: "2rem",
            paddingBottom: "2rem",
            marginTop: "3rem",
          }}
        >
          <p style={{ color: "white" }}>Copyright @2022 Team MisFits</p>
        </div>
      </div>
    </div>
  );
}
