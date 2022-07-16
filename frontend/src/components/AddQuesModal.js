import React from "react";
import { Button} from 'react-bootstrap';
import "./AddQuesModal.css";
// import FloatingLabel from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


function AddQuesModal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => { setOpenModal(false);}}>
            <p style={{fontSize:"15px",fontWeight:"bold"}}>X</p>
          </button>
        </div>
        <div className="body ">
           <Form >
            <Form.Group className="mb-3 ml-2" controlId="exampleForm.ControlTextarea1">
                <Form.Label className="ml-1">Question:</Form.Label>
                <Form.Control as="textarea" rows={2} />
            </Form.Group>
            <Form.Group className="mb-3 ml-2" controlId="exampleForm.ControlTextarea1">
                <Form.Label className="ml-1">Option 1:</Form.Label>
                <Form.Control placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3 ml-2" controlId="exampleForm.ControlTextarea1">
                <Form.Label className="ml-1">Option 2:</Form.Label>
                <Form.Control placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3 ml-2" controlId="exampleForm.ControlTextarea1">
                <Form.Label className="ml-1">Option 3:</Form.Label>
                <Form.Control placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3 ml-2" controlId="exampleForm.ControlTextarea1">
                <Form.Label className="ml-1">Option 4:</Form.Label>
                <Form.Control placeholder=""  />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3  row">
              
                <Form.Label className="col-3 ml-3 mt-2 ">Correct Options :</Form.Label >
                <Form.Check type="checkbox" label="1" className="mt-2"/>&nbsp;
                <Form.Check type="checkbox" label="2" className="mt-2"/>&nbsp;
                <Form.Check type="checkbox" label="3" className="mt-2"/>&nbsp;
                <Form.Check type="checkbox" label="4" className="mt-2"/>
                <Form.Label className="col-3 ml-3 mt-2">Maximum Marks :</Form.Label >
                <Form.Control placeholder="00" aria-label="Username" aria-describedby="basic-addon1" style={{ maxWidth:"60px"}}/>
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3  row">
                <Form.Label className="col-3 ml-3">Add Media :</Form.Label >
                <Form.Control type="file" className="media col-5 m-0 p-0"/>
            </Form.Group>
            </Form>
    
        </div>
        <div className="footer block-example border-top border-dark">
        <Button size="sm" variant="primary " className="m-2">Add</Button>
          <Button size="sm" variant="danger" className="m-2"onClick={() => {setOpenModal(false);}}id="cancelBtn">Discard</Button>
        </div>
      </div>
    </div>
  );
}

export default AddQuesModal;