import React, { useState } from "react";
import "firebase/storage";
import { Navbar, Nav, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";

export default function NavigationBar() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#">Quizzer</Navbar.Brand>
        <Nav className="mr-auto" >
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/createquiz">Create Quiz</Nav.Link>
          <Nav.Link href="/studentLogin">StudentLogin</Nav.Link>
          <Nav.Link href="/quizes">Quizes</Nav.Link>
          <Nav.Link href="/scorecard">Score</Nav.Link>
          <Nav.Link href="/addparticipant"> Participant</Nav.Link>
          {currentUser && (
            <>
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            </>
          )}
        </Nav>
        <Nav className="ml-auto">
          {currentUser ? (
            <>
              <Nav.Link href="/update-profile">Update Profile</Nav.Link>
              <Nav.Link href="#" onClick={handleLogout}>
                Logout
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>
            </>
          )}
        </Nav>
      </Navbar>
      {error && <Alert variant="danger">{error}</Alert>}
    </>
  );
}
