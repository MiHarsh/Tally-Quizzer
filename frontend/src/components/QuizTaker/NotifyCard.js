import React, { useEffect, useState } from "react";
import Button from "../scoreUtils/controls/Button";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";
import { database } from "../../firebase";

export default function NotifyCard({ title, body, code }) {
  const history = useHistory();
  const [score, setScore] = useState(-1);
  const [maxScore, setMaxScore] = useState(-1);

  useEffect(() => {
    let quizID = new URLSearchParams(window.location.search).get("quizID");
    let tokenID = new URLSearchParams(window.location.search).get("tokenID");

    database
      .ref("quizTakers/" + quizID + "/" + tokenID)
      .on("value", (snapshot) => {
        let val = snapshot.val();
        console.log(val);
        setMaxScore(val.totalScore);
        setScore(val.score);
      });
  }, [code]);

  console.log(score, maxScore);

  return (
    <Card
      className="mt-5 mx-auto pb-5 pt-5"
      style={{ width: "60vw", fontFamily: "Futura" }}
    >
      <Card.Body>
        <Card.Title className="text-center">
          <h1>{title}</h1>
        </Card.Title>
        <Card.Text className="text-center">
          <h5>{body}</h5>
        </Card.Text>
        {score !== -1 ? (
          <Card.Text className="text-center">
            <h5>
              You got {score} / {maxScore}
            </h5>
          </Card.Text>
        ) : null}
      </Card.Body>
      <div className="mx-auto" style={{ width: "fit-content" }}>
        <Button
          text="Go to Home"
          size="large"
          onClick={() => {
            history.push("/");
          }}
        ></Button>
      </div>
    </Card>
  );
}
