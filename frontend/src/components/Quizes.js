import React from 'react'

import { Container, Row , Col , Button} from "react-bootstrap"

import './Quizes.css'

export const Quizes = () => {
  return (
    <>
    <div className="result mx-auto py-3 px-3 mt-2"> 
      <div className="row d-flex justify-content-center py-2 block-example border-bottom border-dark paper mb-1">
        <h5>Quiz Name :&nbsp;&nbsp;</h5>
        <h5>Science Quiz</h5>
      </div>
      <div className="row d-flex justify-content-center ">
        <div className="col-4">
          <p>Start Date :</p>
          </div>
        <div className="col-4">
          <p>End Date:</p>
        </div>
        </div>
      <div className="row d-flex justify-content-center ">
        <div className="col-4">
          <p>Start Time :</p>
          </div>
        <div className="col-4">
          <p>End Time:</p>
        </div>
      </div>
      <div className="row d-flex justify-content-center space-between border-top border-dark paper pt-2">
          <Button className="btn btn-primary mx-5">Edit Time</Button>
        <Button className="btn btn-danger mx-5">Terminate</Button>
      </div>
    </div>
    <div className="result mx-auto py-3 px-3 mt-2"> 
    <div className="row d-flex justify-content-center py-2 block-example border-bottom border-dark paper mb-1">
      <h5>Quiz Name :&nbsp;&nbsp;</h5>
      <h5>Science Quiz</h5>
    </div>
    <div className="row d-flex justify-content-center ">
      <div className="col-4">
        <p>Start Date :</p>
        </div>
      <div className="col-4">
        <p>End Date:</p>
      </div>
      </div>
    <div className="row d-flex justify-content-center ">
      <div className="col-4">
        <p>Start Time :</p>
        </div>
      <div className="col-4">
        <p>End Time:</p>
      </div>
    </div>
    <div className="row d-flex justify-content-center space-between border-top border-dark paper pt-2">
      <Button className="btn btn-secondary mx-5">See Results</Button>
    </div>
  </div>
  </>
    
  )
}
