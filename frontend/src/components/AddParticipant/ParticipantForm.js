import React, { useState } from "react";
import { Container, InputGroup, Form } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";

import Button from "../scoreUtils/controls/Button";

export default function ParticipantForm({ setUser, user }) {
  const { currentUser } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleEmail = () => {
    // saveUserTODB
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        creator: currentUser.email.replace(".", ""),
        quizID: new URLSearchParams(window.location.search).get("quizID"),
      }),
    };
    fetch("http://localhost:5000/api/mailParticipants", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClick = () => {
    const isFound = user.some((element) => {
      if (element.email === email) {
        return true;
      }

      return false;
    });
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) &&
      !isFound
    ) {
      setUser((prev) => {
        return [...prev, { email: email, name: name }];
      });
      setName("");
      setEmail("");

      // saveUserTODB
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          emailID: email,
          name: name,
          creator: currentUser.email.replace(".", ""),
          quizID: new URLSearchParams(window.location.search).get("quizID"),
        }),
      };
      fetch("http://localhost:5000/api/addParticipants", requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <Container>
      <br />
      <div className="row  mx-auto" style={{ width: "90vw" }}>
        <InputGroup size="sm" className="mb-3 col-4">
          <InputGroup.Text id="inputGroup-sizing-sm">Name</InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            className="mt-1"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </InputGroup>
        <InputGroup size="sm" className="mb-3 col-4">
          <InputGroup.Text id="inputGroup-sizing-sm">Email</InputGroup.Text>
          <Form.Control
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            className="mt-1"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </InputGroup>

        <Button
          className="mx-auto "
          size="sm"
          onClick={handleClick}
          text="Add Participant"
        />

        <Button
          className="mx-auto "
          size="sm"
          onClick={handleEmail}
          text="Email Participants"
        />
      </div>
    </Container>
  );
}
