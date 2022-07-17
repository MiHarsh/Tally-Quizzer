import React, { useState } from "react";
import { Container, InputGroup, Form, Button } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";

export default function ParticipantForm({ setUser }) {
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
    fetch("/api/mailParticipants", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClick = () => {
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
    fetch("/api/addParticipants", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.log(error);
      });
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
          variant="primary"
          size="sm"
          onClick={handleClick}
        >
          Add Participant
        </Button>
        <Button
          className="mx-auto "
          variant="primary"
          size="sm"
          onClick={handleEmail}
        >
          Email Participant
        </Button>
      </div>
    </Container>
  );
}
