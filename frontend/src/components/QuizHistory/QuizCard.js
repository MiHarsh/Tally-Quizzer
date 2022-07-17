import React from "react";

import { Container, Row, Col, Button } from "react-bootstrap";

export default function QuizCard({ quizName, startTime, endTime, quizID }) {
  return (
    <div className="result mx-auto py-3 px-3 mt-2">
      <div className="row d-flex justify-content-center py-2 block-example border-bottom border-dark paper mb-1">
        <h5>Quiz Name :&nbsp;&nbsp;</h5>
        <h5>{quizName}</h5>
      </div>
      <div className="row d-flex justify-content-center ">
        <div className="col-4">
          <p>Start Date : {new Date(startTime).toDateString()}</p>
        </div>
        <div className="col-4">
          <p>End Date: {new Date(endTime).toDateString()}</p>
        </div>
      </div>
      <div className="row d-flex justify-content-center ">
        <div className="col-4">
          <p>Start Time : {new Date(startTime).toTimeString()}</p>
        </div>
        <div className="col-4">
          <p>End Time: {new Date(endTime).toTimeString()}</p>
        </div>
      </div>

      {Date.now() < endTime ? (
        <div className="row d-flex justify-content-center space-between border-top border-dark paper pt-2">
          <Button className="btn btn-primary mx-5">Edit Time</Button>
          <Button className="btn btn-danger mx-5">Terminate</Button>
          <a href={"/addparticipant?quizID=" + quizID}>
            <Button className="btn btn-info mx-5">View Participant</Button>
          </a>
        </div>
      ) : (
        <div className="row d-flex justify-content-center space-between border-top border-dark paper pt-2">
          <a href={"/addparticipant?quizID=" + quizID}>
            <Button className="btn btn-info mx-5">View Participant</Button>
          </a>
          <a href={"/scorecard?quizID=" + quizID}>
            <Button className="btn btn-secondary mx-5">See Results</Button>
          </a>
        </div>
      )}
    </div>
  );
}
