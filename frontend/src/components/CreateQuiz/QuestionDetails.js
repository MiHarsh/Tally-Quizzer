import React from "react";
import Button from "../scoreUtils/controls/Button";
import { database } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";

export default function QuestionDetails(props) {
  const { currentUser } = useAuth();
  const handleClick = () => {
    const quizID = new URLSearchParams(window.location.search).get("quizID");
    const creator = currentUser.email.replace(".", "");

    database
      .ref(
        "quizMaster/" +
          creator +
          "/" +
          quizID +
          "/questions/" +
          props.questionID
      )
      .remove();
    database
      .ref(
        "quizMaster/" + creator + "/" + quizID + "/answers/" + props.questionID
      )
      .remove();

    props.setQuesList((current) => {
      const copy = { ...current };
      delete copy[props.questionID];
      return copy;
    });
  };

  return (
    <div className="row pl-3 ">
      <div
        className="row  mt-1 d-flex"
        style={{ minWidth: "100%", justifyContent: "space-between" }}
      >
        <div>
          <b>Question {props.index + 1}:</b>
        </div>
        <div>
          <Button text="Delete" onClick={(e) => handleClick()}></Button>
        </div>
      </div>
      <div className="row mt-2" style={{ minWidth: "100%" }}>
        {" "}
        <p>{props.question}</p>
      </div>
      <div className="row mt-2" style={{ minWidth: "100%" }}>
        {" "}
        <b>A. &nbsp;</b>
        {props.opt1}
      </div>
      <div className="row mt-2" style={{ minWidth: "100%" }}>
        {" "}
        <b>B. &nbsp;</b>
        {props.opt2}
      </div>
      <div className="row mt-2" style={{ minWidth: "100%" }}>
        {" "}
        <b>C. &nbsp;</b>
        {props.opt3}
      </div>
      <div className="row mt-2" style={{ minWidth: "100%" }}>
        {" "}
        <b>D. &nbsp;</b>
        {props.opt4}
      </div>
    </div>
  );
}
