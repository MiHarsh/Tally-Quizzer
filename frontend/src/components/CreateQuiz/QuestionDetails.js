import React from "react";

export default function QuestionDetails(props) {
  return (
    <div className="row pl-3">
      <b>Question {props.index}:</b>
      <br />
      <p>{props.question}</p>
      <br />
      <br />
      <p style={{ minWidth: "100%" }}>
        <b>A. &nbsp;</b>
        {props.opt1}
      </p>
      <br />
      <p style={{ minWidth: "100%" }}>
        <b>B. &nbsp;</b>
        {props.opt2}
      </p>
      <br />
      <p style={{ minWidth: "100%" }}>
        <b>C. &nbsp;</b>
        {props.opt3}
      </p>
      <br />
      <p style={{ minWidth: "100%" }}>
        <b>D. &nbsp;</b>
        {props.opt4}
      </p>
    </div>
  );
}
