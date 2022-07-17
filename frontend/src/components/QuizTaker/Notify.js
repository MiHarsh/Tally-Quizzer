import React from "react";
import Button from "../scoreUtils/controls/Button";
import Card from 'react-bootstrap/Card';
import { useHistory } from "react-router-dom";



export default function DisplayNotif() {
    const history = useHistory();

  return (
    <>
    <Card className="mt-5 mx-auto pb-5 pt-5"style={{ width: '60vw',fontFamily:"Futura" }}>
      
      <Card.Body>
      
        <Card.Title className="text-center" ><h1>Quiz is Yet to Begin !!</h1></Card.Title>
        <Card.Text className="text-center">
        <h5>Please Login Within The Quiz Time Duration.</h5>
        </Card.Text>
        
      </Card.Body>
      <div className="mx-auto" style={{width: 'fit-content'}}>
      <Button   text="Go to Home" size="large" onClick={(e) => {history.push("/");}}></Button>
        </div>
    </Card>

    <Card className="mt-5 mx-auto pb-5 pt-5"style={{ width: '60vw',fontFamily:"Futura" }}>
      <Card.Body>
        <Card.Title className="text-center" ><h1>Quiz has Ended !!</h1></Card.Title>
        <Card.Text className="text-center">
        <h5>This Quiz has already ended. Please Contact your Admin for More Information.</h5>
        </Card.Text>
        
      </Card.Body>
      <div className="mx-auto" style={{width: 'fit-content'}}>
      <Button   text="Go to Home" size="large" onClick={(e) => {history.push("/");}}></Button>
        </div>
    </Card>

    <Card className="mt-5 mx-auto pb-5 pt-5"style={{ width: '60vw',fontFamily:"Futura" }}>
      <Card.Body>
        <Card.Title className="text-center" ><h1>Thank You !!</h1></Card.Title>
        <Card.Text className="text-center">
        <h5>Your quiz has been submitted successfully. Click on the Home button to proceed to the homepage</h5>
        </Card.Text>
        
      </Card.Body>
      <div className="mx-auto" style={{width: 'fit-content'}}>
      <Button   text="Go to Home" size="large" onClick={(e) => {history.push("/");}}></Button>
        </div>
    </Card>

    <Card className="mt-5 mx-auto pb-5 pt-5"style={{ width: '60vw',fontFamily:"Futura" }}>
      
      <Card.Body>
      
        <Card.Title className="text-center" ><h1>Error 404 !!</h1></Card.Title>
        <Card.Text className="text-center">
        </Card.Text>
        
      </Card.Body>
      <div className="mx-auto" style={{width: 'fit-content'}}>
      <Button   text="Go to Home" size="large" onClick={(e) => {history.push("/");}}></Button>
        </div>
    </Card>
    </>
  );
}
