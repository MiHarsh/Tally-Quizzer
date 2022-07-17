import React from "react";
import Button from "../scoreUtils/controls/Button";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";

export default function NotifyCard({ title, body }) {
  const history = useHistory();

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
