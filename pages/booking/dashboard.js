import React from "react";
import Link from "next/link";
import Nav from "./header";
import Header from "./header";
import FooterBook from "./footer";
import Home from "./home";
import { Container, Row, Col, Button } from "react-bootstrap";

const dashboard = () => {
  return (
    <>
      <div className="main-div">
        <Header />
        <div className="pt-100 mb-5">
          <Container>
            <Row>
              <Col lg="12">
                <div className="home-content p-4">
                  <p style={{ textAlign: "left" }}>Welcome to BTTC</p>
                  <div className="mt-1S text-center">
                    <h2>Logo</h2>
                    <h5>WELCOME TO BTTC</h5>
                    <p>
                      As we launch this year, amidst the pandemic, our vision is
                      to serve the local community with the fun and experience
                      associated with playing indoor sports family.
                    </p>
                    <p style={{ fontWeight: "bolder" }}>
                      As we launch this year, amidst the pandemic, our vision is
                      to serve the local community with the fun and experience
                      associated with playing indoor sports family.
                    </p>
                    <p>
                      Cancellations must be communicated to BTTC Badminton 24
                      hours prior to the commencement of
                      <br />
                      the court booking. Customers who fail to cancel online via
                      Online booking App are ineligible for
                      <br />
                      credit refunds.
                    </p>
                    <p><a href="#">CLICK HERE</a> to become a Badminton Member.</p>
                    <p>
                      No refunds are available for cancellation after 24 hours,
                      please contact the centre at 0466450450
                    </p>
                    <p style={{ fontWeight: "bolder" }}>
                      Parking: Please do not park in front of the warehouse
                      shutters, Customers are responsible for their own parking
                    </p>
                    <Button className="default-btn mb-2">BOOK NOW</Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <FooterBook />
      </div>
    </>
  );
};

export default dashboard;
