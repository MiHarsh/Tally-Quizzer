import React from "react";
import Button from "../scoreUtils/controls/Button";

export default function QuestionDetails(props) {
  return (
    <div className="row pl-3 ">
      
      <div className="row  mt-1 d-flex" style={{ minWidth: "100%" ,justifyContent: "space-between"}}>
        <div ><b>Question {props.index+1}:</b></div>
        <div ><Button text="Delete" ></Button></div>
      </div>
      <div className="row mt-2" style={{ minWidth: "100%" }}> <p>{props.question}</p></div>
      <div className="row mt-2" style={{ minWidth: "100%" }}> <b>A. &nbsp;</b>{props.opt1}</div>
      <div className="row mt-2" style={{ minWidth: "100%" }}> <b>B. &nbsp;</b>{props.opt2}</div>
      <div className="row mt-2" style={{ minWidth: "100%" }}> <b>C. &nbsp;</b>{props.opt3}</div>
      <div className="row mt-2" style={{ minWidth: "100%" }}> <b>D. &nbsp;</b>{props.opt4}</div>
      
    </div>
  );
}
