import React, { useState, useEffect } from "react";
import { Container, Form, InputGroup } from "react-bootstrap";
import "./CreateQuiz.css";
import DateTime from "./DateTime/DateTime";
import AddQuesModal from "./AddQuesModal";
import QuestionDetails from "./CreateQuiz/QuestionDetails";
import { useAuth } from "../contexts/AuthContext";
import Button from "./scoreUtils/controls/Button";

export default function CreateQuiz() {
  const { currentUser } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);
  const [quesList, setQuesList] = useState({});
  const [metaData, setMetaData] = useState({
    QuizName: "",
    endTime: Date.now(),
    startTime: Date.now(),
  });

  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        currentUser: currentUser.email.replace(".", ""),
        quizID: new URLSearchParams(window.location.search).get("quizID"),
      }),
    };
    fetch("http://localhost:5000/api/getQues", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.metadata) {
          setMetaData(data.metadata);
        }

        if (data.questions) {
          setQuesList(data.questions);
        }
      });

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  const handleClick = () => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        currentUser: currentUser.email.replace(".", ""),
        quizID: new URLSearchParams(window.location.search).get("quizID"),
        metadata: metaData,
      }),
    };
    fetch("http://localhost:5000/api/saveMetaData", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <Container>
      <div className="row  parentbox ml-0 block-example  ">
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
              onChange={(e) => {
                setMetaData({
                  ...metaData,
                  QuizName: e.target.value,
                });
              }}
              value={metaData.QuizName}
            />
          </InputGroup>

          <p>Start Date and Time</p>
          <DateTime
            name="startTime"
            setMetaData={setMetaData}
            val={metaData.startTime}
          />
          <br />
          <p>End Date and Time</p>
          <DateTime
            name="endTime"
            setMetaData={setMetaData}
            val={metaData.endTime}
          />
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

          {/* <div className="row d-flex justify-content-center mt-2 ">
            <a href="/addparticipant">
              <button className="btn btn-primary ">Add Participants</button>
            </a>
          </div> */}
          <div className="row d-flex justify-content-center mt-2 ">
            <a
              href={
                "/addparticipant?quizID=" +
                new URLSearchParams(window.location.search).get("quizID")
              }
            >
              <button className="btn btn-danger" onClick={handleClick}>
                Save
              </button>
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
          {Object.keys(quesList).length > 0 ? (
            Object.keys(quesList).map((key, idx) => {
              let { question, opt1, opt2, opt3, opt4 } = quesList[key];

              return (
                <QuestionDetails
                  key={idx}
                  index={idx}
                  questionID={key}
                  question={question}
                  opt1={opt1}
                  opt2={opt2}
                  opt3={opt3}
                  opt4={opt4}
                  setQuesList={setQuesList}
                />
              );
            })
          ) : (
            <div
              className="row d-flex justify-content-center mt-5 pt-5 mb-3 "
              style={{ zIndex: 1, fontFamily: "QuickSand" }}
            >
              <h3>Please Add Questions to Show !!</h3>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
