import React from "react";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";

const Home = () => {
  const currentYear = new Date().getFullYear();

  return (
    <React.Fragment>
     <Row>
          <Col lg="12">
               <h5 className="align-left">Welcome to BTTC</h5>
          </Col>
     </Row>
       
    </React.Fragment>
  );
};

export default Home;
