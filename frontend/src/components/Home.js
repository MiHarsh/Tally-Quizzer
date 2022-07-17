import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import prof from "./images/2406-ai.png";
import "./CreateQuiz.css";
import Button from "./scoreUtils/controls/Button";
import { useHistory } from "react-router-dom";
import uniqid from "uniqid";
import Card from "react-bootstrap/Card";

export default function Home() {
  const history = useHistory();
  return (
    <div className="align-items-center justify-content-center">
      <div>
        <Container>
          <Row>
            <Col>
              <Card
                className="mt-5 mx-auto pb-5 pt-5"
                style={{
                  boxShadow: "1px 2px 9px #5621f4",
                  maxWidth: "500px",
                  minWidth: "300px",
                  // width: "30vw",
                  minHeight: "60vh",
                  maxHeight: "70vh",
                  fontFamily: "QuickSand",
                  backgroundColor: "#4f4fff14 ",
                }}
              >
                <Card.Body>
                  <Card.Title className="text-left">
                    <h1>Quizzing </h1>
                  </Card.Title>
                  <Card.Text className="text-left pl-4">
                    <h2>Made Easy !!</h2>
                    <h4>
                      Taking a quiz is fun and engaging. And creating one should
                      be too.
                    </h4>
                  </Card.Text>
                </Card.Body>
                <div className="mx-auto " style={{ width: "70%" }}>
                  <Button
                    text="Create Quiz"
                    className="mr-3"
                    size="Large"
                    onClick={(e) => {
                      history.push("/createQuiz?quizID=" + uniqid());
                    }}
                  ></Button>
                  <Button text="Learn More" size="Large"></Button>
                </div>
              </Card>
            </Col>
            <Col>
              <div style={{ marginTop: "5rem" }}>
                <img
                  src={prof}
                  style={{
                    maxWidth: "700px",
                    minWidth: "500px",
                    Height: "90vh",
                  }}
                />
              </div>
            </Col>
          </Row>
        </Container>
        <div
          style={{
            background: "rgb(19 1 48)",
            textAlign: "center",
            marginTop: "2.9rem",

            paddingTop: "1rem",
            paddingBottom: "1rem",
          }}
        >
          <p
            style={{
              color: "white",
              fontFamily: "QuickSand",
              paddingLeft: "1rem",
            }}
          >
            Copyright @2022 Team MisFits
          </p>
        </div>
      </div>
    </div>
  );
}
