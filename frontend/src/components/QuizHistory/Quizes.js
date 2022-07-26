import React, { useState, useEffect } from "react";

import { Container, Row, Col, Button } from "react-bootstrap";

import "./Quizes.css";
import { useAuth } from "../../contexts/AuthContext";
import QuizCard from "./QuizCard";

export const Quizes = () => {
  const { currentUser } = useAuth();
  const [prev, setPrev] = useState({});

  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        creator: currentUser.email.replace(".", ""),
      }),
    };
    fetch("http://localhost:5000/api/getQuizzes", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setPrev(data);
      });

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  return (
    <>
      {prev
        ? Object.keys(prev).map((key, idx) => {
            return prev[key].metadata ? (
              <QuizCard
                key={idx}
                quizName={prev[key].metadata.QuizName}
                startTime={prev[key].metadata.startTime}
                endTime={prev[key].metadata.endTime}
                quizID={key}
                setPrev={setPrev}
              />
            ) : null;
          })
        : null}
    </>
  );
};
