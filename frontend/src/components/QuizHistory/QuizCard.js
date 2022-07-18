import React from "react";

import Button from "../scoreUtils/controls/Button";
import { useHistory } from "react-router-dom";
import { database } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";

export default function QuizCard({
  quizName,
  startTime,
  endTime,
  quizID,
  setPrev,
}) {
  const { currentUser } = useAuth();

  const history = useHistory();

  const handleTerminate = () => {
    let timeNow = Date.now();
    database
      .ref(
        "quizMaster/" +
          currentUser.email.replace(".", "") +
          "/" +
          quizID +
          "/metadata/endTime"
      )
      .set(timeNow);
    setPrev((prev) => {
      let updatedData = prev[quizID];
      updatedData.metadata.endTime = timeNow;
      return {
        ...prev,
        [prev[quizID]]: updatedData,
      };
    });
  };

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

      <div className="row d-flex justify-content-center space-between border-top border-dark paper pt-2">
        {Date.now() < endTime ? (
          <Button
            text="Terminate"
            color="secondary"
            onClick={handleTerminate}
          />
        ) : null}
        <Button
          text="View Participants"
          color="info"
          onClick={(e) => {
            history.push("/addparticipant?quizID=" + quizID);
          }}
        ></Button>
        <Button
          text="Edit Quiz"
          color="info"
          onClick={(e) => {
            history.push("/createQuiz?quizID=" + quizID);
          }}
        ></Button>
        <Button
          text="See Results"
          color="secondary"
          onClick={(e) => {
            history.push("/scorecard?quizID=" + quizID);
          }}
        ></Button>
      </div>
    </div>
  );
}
