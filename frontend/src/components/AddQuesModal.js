import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./AddQuesModal.css";
// import FloatingLabel from 'react-bootstrap';
import Form from "react-bootstrap/Form";
import FormCheckBox from "./CreateQuiz/FormCheckBox";
import { useAuth } from "../contexts/AuthContext";

function AddQuesModal({ setOpenModal, quesList, setQuestion }) {
  const { currentUser } = useAuth();

  const [tmp, setTmp] = useState({
    question: "",
    opt1: "",
    opt2: "",
    opt3: "",
    opt4: "",
    mmarks: 4,
  });

  const [correct, setCorrect] = useState({
    opt1: false,
    opt2: false,
    opt3: false,
    opt4: false,
    totalCorrect: 0,
    mmarks: 4,
  });

  // handle change event
  const handleChange = (e) => {
    e.preventDefault(); // prevent the default action
    setTmp({
      ...tmp,
      [e.target.name]: e.target.value,
    });
  };

  const saveToDB = () => {
    console.log(tmp);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        question: tmp,
        answer: correct,
        currentUser: currentUser.email.replace(".", ""),
        quizID: new URLSearchParams(window.location.search).get("quizID"),
      }),
    };
    fetch("http://localhost:5000/api/saveQues", requestOptions)
      .then((response) => response.json())
      .then((data) =>
        setQuestion({
          ...quesList,
          [data.quesID]: tmp,
        })
      )
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            <p style={{ fontSize: "15px", fontWeight: "bold" }}>X</p>
          </button>
        </div>
        <div className="body ">
          <Form>
            <Form.Group
              className="mb-3 ml-2"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="ml-1">Question:</Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                name="question"
                onChange={handleChange}
                value={tmp.question}
              />
            </Form.Group>
            <Form.Group
              className="mb-3 ml-2"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="ml-1">Option 1:</Form.Label>
              <Form.Control
                placeholder=""
                name="opt1"
                onChange={handleChange}
                value={tmp.opt1}
              />
            </Form.Group>
            <Form.Group
              className="mb-3 ml-2"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="ml-1">Option 2:</Form.Label>
              <Form.Control
                placeholder=""
                name="opt2"
                onChange={handleChange}
                value={tmp.opt2}
              />
            </Form.Group>
            <Form.Group
              className="mb-3 ml-2"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="ml-1">Option 3:</Form.Label>
              <Form.Control
                placeholder=""
                name="opt3"
                onChange={handleChange}
                value={tmp.opt3}
              />
            </Form.Group>
            <Form.Group
              className="mb-3 ml-2"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="ml-1">Option 4:</Form.Label>
              <Form.Control
                placeholder=""
                name="opt4"
                onChange={handleChange}
                value={tmp.opt4}
              />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3  row">
              <Form.Label className="col-3 ml-3 mt-2 ">
                Correct Options :
              </Form.Label>
              <FormCheckBox
                name="opt1"
                optlabel="1"
                correct={correct}
                setCorrect={setCorrect}
              />
              &nbsp;
              <FormCheckBox
                name="opt2"
                optlabel="2"
                correct={correct}
                setCorrect={setCorrect}
              />
              &nbsp;
              <FormCheckBox
                name="opt3"
                optlabel="3"
                correct={correct}
                setCorrect={setCorrect}
              />
              &nbsp;
              <FormCheckBox
                name="opt4"
                optlabel="4"
                correct={correct}
                setCorrect={setCorrect}
              />
              <Form.Label className="col-3 ml-3 mt-2">
                Maximum Marks :
              </Form.Label>
              <Form.Control
                placeholder={0}
                type="number"
                aria-label="Username"
                aria-describedby="basic-addon1"
                style={{ maxWidth: "60px" }}
                name="mmarks"
                onChange={(e) => [
                  handleChange(e),
                  setCorrect({
                    ...correct,
                    mmarks: e.target.value,
                  }),
                ]}
                value={tmp.mmarks}
              />
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3  row">
              <Form.Label className="col-3 ml-3">Add Media :</Form.Label>
              <Form.Control type="file" className="media col-5 m-0 p-0" />
            </Form.Group>
          </Form>
        </div>
        <div className="footer block-example border-top border-dark">
          <Button
            size="sm"
            variant="primary "
            className="m-2"
            onClick={() => {
              setOpenModal(false);
              saveToDB();
            }}
          >
            Add
          </Button>
          <Button
            size="sm"
            variant="danger"
            className="m-2"
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Discard
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AddQuesModal;
