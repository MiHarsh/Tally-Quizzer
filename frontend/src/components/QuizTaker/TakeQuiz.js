import React, { useEffect, useState } from "react";
import { Container, Form, InputGroup } from "react-bootstrap";
import Button from "../scoreUtils/controls/Button";
import { useHistory } from "react-router-dom";
import Instructions from "./Instruction";
import Quiz from "./Quiz";

export default function TakeQuiz() {
  const history = useHistory();
  console.log("i am improted");
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);

  return (
    <>
      {show ? (
        <Quiz email={email} />
      ) : (
        <Instructions setEmail={setEmail} setShow={setShow} email={email} />
      )}
    </>
  );
}
