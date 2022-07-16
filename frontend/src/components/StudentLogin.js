import React from "react";
import { Container,Form,InputGroup } from "react-bootstrap";
import DateTime from './DateTime/DateTime'
export default function ParticipantLogin() {
  console.log("i am improted");
  return (
    <Container>
      <br />
      <h5><b>Multiple Choice Quiz Instructions: </b></h5>
      <ul>
        
        <li>Click the red button corresponding to the best answer for each of the questions.</li>
        <li>If you want to change an answer, simply click the button for your new choice.</li>
        <li>If you have checked a button with a guess and then wish to deselect all of the buttons for that question, just reclick the "red-lit" button.</li>
        <li>When you are finished, the "Click for Grading" button at the end of the quiz will calculate your score (from 000 to 100). All of the correct answers will then be mark</li>
        <li>The total score for the quiz is based on your responses to all questions. If you respond incorrectly to a question or retake a question again and get the correct response, your quiz score will reflect it appropriately. However, your quiz will not be graded, if you skip a question or exit before responding to all the questions.</li>
      </ul>
      <br />
      <br />
      <div className="row  mx-auto" style={{width: '30vw'}}>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm" >Email</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"className="mt-1"
        />
      </InputGroup>
      <br />
      
      <button className="btn btn-primary mx-auto">Start Quiz</button>
      </div>
      <DateTime/>
    </Container>
  );
}
