import React, { useState, useEffect } from "react";
import { Container, Form, InputGroup } from "react-bootstrap";
import "./CreateQuiz.css";
import DateTime from "./DateTime/DateTime";
import AddQuesModal from "./AddQuesModal";
import QuestionDetails from "./CreateQuiz/QuestionDetails";
import { useAuth } from "../contexts/AuthContext";

export default function CreateQuiz() {
  const { currentUser } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);
  const [quesList, setQuesList] = useState({});

  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        currentUser: currentUser.email.replace(".", ""),
        quizID: new URLSearchParams(window.location.search).get("quesID"),
      }),
    };
    fetch("/api/getQues", requestOptions)
      .then((response) => response.json())
      .then((data) => setQuesList(data));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  return (
    <div style={{ background: "linear-gradient(45deg,#C04848,#480048)" }}>
      <Container className="containerr ">
        <div className="row  parentbox ml-0 block-example border border-dark paper">
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
            <DateTime />
            <br />
            <p>End Date and Time</p>
            <DateTime />
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
              <button
                className="btn btn-primary "
                onClick={() => {
                  setModalOpen(true);
                }}
              >
                Add Question
              </button>
            </div>
            {/* {modalOpen && (
            <AddQuesModal
              setOpenModal={setModalOpen}
              setQuestion={setQuesList}
              
            />
          )} */}
            <div className="row d-flex justify-content-center mt-2 ">
              <a href="/addparticipant">
                <button className="btn btn-primary ">Add Participants</button>
              </a>
            </div>
            {modalOpen && (
              <AddQuesModal
                setOpenModal={setModalOpen}
                quesList={quesList}
                setQuestion={setQuesList}
              />
            )}
          </div>
          <div className="col-8  pt-4 ml-auto mr-2 ">
            <div
              className="row d-flex justify-content-center mt-0 mb-3 "
              style={{ zIndex: 1 }}
            >
              <h2>Quiz Name</h2>
            </div>

            {quesList ? (
              Object.keys(quesList).map((key, idx) => {
                let { question, opt1, opt2, opt3, opt4 } = quesList[key];

                return (
                  <QuestionDetails
                    key={idx}
                    index={idx}
                    question={question}
                    opt1={opt1}
                    opt2={opt2}
                    opt3={opt3}
                    opt4={opt4}
                  />
                );
              })
            ) : (
              <div className="row pl-3">load</div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
