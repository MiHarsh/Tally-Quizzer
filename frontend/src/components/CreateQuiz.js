import React, { useState } from "react";
import {
  Card,
  Button,
  Alert,
  Container,
  Form,
  Row,
  Col,
  InputGroup,
  ButtonToolbar,
} from "react-bootstrap";
import "./CreateQuiz.css";
import DateTime from './DateTime/DateTime'
import AddQuesModal from "./AddQuesModal";

export default function CreateQuiz() {
  const [modalOpen, setModalOpen] = useState(false);
  console.log("Imported about");
  return (
    <div style={{background: "linear-gradient(45deg,#C04848,#480048)" }}>
    <Container className="containerr ">
      <div  className="row  parentbox ml-0 block-example border border-dark paper">
        <div
          className="col-3 pr-4 ml-0 pt-3 block-example border-right border-dark "
          style={{ zIndex: 1, height: "89vh", position: "absolute" }}
        >
          <Form.Label>Quiz Title</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Enter "
              aria-label="Quizname"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          
          <p>Start Date and Time</p>
            <DateTime/>
            <br />
          <p>End Date and Time</p>
            <DateTime/>
            <br />
          <div className="row ml-1 d-flex justify-content-center ">
            <Form.Group controlId="formFileMultiple" className="mb-3">
              <Form.Label>Add Participants List</Form.Label>
              <Form.Control
                type="file"
                multiple
                className="participantMedia "
              />
            </Form.Group>
          </div>
          <div className="row d-flex justify-content-center ">
            <button className="btn btn-primary " onClick={() => { setModalOpen(true);}}>
              Add Question
            </button>
          </div>
          <div className="row d-flex justify-content-center mt-2 ">
            <a href="/addparticipant"> 
            <button
              className="btn btn-primary ">
              Add Participants
            </button>
            </a>
          </div>
          {modalOpen && <AddQuesModal setOpenModal={setModalOpen} />}
        </div>
        <div className="col-8  pt-4 ml-auto mr-2 ">
          <div
            className="row d-flex justify-content-center mt-0 mb-3 "
            style={{ zIndex: 1 }}
          >
            <h2>Quiz Name</h2>
          </div>
          <div className="row pl-3">
            
            <b>Question 1:</b><pre>                                                                   </pre>
            <button className="btn btn-danger">Delete</button>
            
            <p>
              The figure above shows the graph of the function f, defined by f
              of x = the absolute value of 2x, end absolute value, + 4 for all
              numbers x. For which of the following functions g, defined for all
              numbers x, does the graph of g intersect the graph of f ?
            </p>
            <br />
            {/* <p>ADD media Syntax </p> */}
            <br />
            <p style={{ minWidth: "100%" }}>
              <b>A. &nbsp;</b>option 1{" "}
            </p>
            <br />
            <p style={{ minWidth: "100%" }}>
              <b>B. &nbsp;</b>option 2{" "}
            </p>
            <br />
            <p style={{ minWidth: "100%" }}>
              <b>C. &nbsp;</b>option 3{" "}
            </p>
            <br />
            <p style={{ minWidth: "100%" }}>
              <b>D. &nbsp;</b>option 4{" "}
            </p>
          </div>
          <div className="row pl-3">
          <b>Question 2:</b><pre>                                                                   </pre>
            <button className="btn btn-danger">Delete</button>
            <p>
              The figure above shows the graph of the function f, defined by f
              of x = the absolute value of 2x, end absolute value, + 4 for all
              numbers x. For which of the following functions g, defined for all
              numbers x, does the graph of g intersect the graph of f ?
            </p>
            <br />
            <p>ADD media Syntax </p>
            <br />
            <p style={{ minWidth: "100%" }}>
              <b>A. &nbsp;</b>option 1{" "}
            </p>
            <br />
            <p style={{ minWidth: "100%" }}>
              <b>B. &nbsp;</b>option 2{" "}
            </p>
            <br />
            <p style={{ minWidth: "100%" }}>
              <b>C. &nbsp;</b>option 3{" "}
            </p>
            <br />
            <p style={{ minWidth: "100%" }}>
              <b>D. &nbsp;</b>option 4{" "}
            </p>
          </div>
        </div>
      </div>
    </Container>
    </div>
  );
}
