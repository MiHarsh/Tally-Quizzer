import React from 'react'
import {Container, InputGroup,Form,Button} from 'react-bootstrap'

import ParticipantList from "./ParticipantList";
export default function  ParticipantForm  () {
  return (
    <Container>
        <br />
        <div className="row  mx-auto" style={{width: '90vw'}}>
       
      <InputGroup size="sm" className="mb-3 col-4">
      <InputGroup.Text id="inputGroup-sizing-sm" >Name</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"className="mt-1"
        />
      </InputGroup>
      <InputGroup size="sm" className="mb-3 col-4">
      <InputGroup.Text id="inputGroup-sizing-sm" >Email</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"className="mt-1"
        />
      </InputGroup>
      
      <Button className="mx-auto "variant="primary" size="sm">Add Participant</Button>
      </div>
      <ParticipantList/>
    </Container>
  )
}
