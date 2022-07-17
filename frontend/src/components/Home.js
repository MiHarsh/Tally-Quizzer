import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import prof from "./images/2406-ai.png";
import "./CreateQuiz.css";
import Button from "./scoreUtils/controls/Button";
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();
  return (
    <div className="align-items-center justify-content-center" >
      <div >
        <Container  >
          <Row  > 
          <Col>
              <div style={{ maxWidth: "300px", marginTop: "6rem" }}>
                
              <Button text="Ceate Quiz" size="Large"onClick={(e) => history.push("/login")}>
                 </Button>
              <Button text="Learn More" size="Large" >
                               
                 </Button>               
              </div>
              <div className="">

              </div>
            </Col>
            <Col>
              <div style={{ marginTop: "5rem" }}>
                <img src={prof} style={{ maxWidth: "700px", minWidth:'600px',Height:"90vh"}} />
              </div>
            </Col>
           
          </Row>
        </Container>
        <div
          style={{
            background: 'rgb(19 1 48)',
            textAlign: "center",
            paddingTop: "1.8rem",
            paddingBottom: "2rem",
            
          }}
        >
          <p style={{ color: "white" }}>Copyright @2022 Team MisFits</p>
        </div>
      </div>
    </div>
  );
}
