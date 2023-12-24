import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/_App/Footer";
import DoctorsStyleOne from "../components/Common/DoctorsStyleOne";
import FunFactStyleOne from "../components/Common/FunFactStyleOne";
import FacilitesFeatures from "../components/MyComponent/FacilitesFeatures";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <React.Fragment>
      <Navbar />
      <PageBanner
        pageTitle="Our Facilities"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Facilites"
        imgClass="bg-1"
      />
      <FacilitesFeatures />
      <div className="about-area about-page pb-130">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-content">
                <span className="top-title">NEED EQUIPMENT?</span>
                <h2>Visit Our PRO SHOP</h2>
                <p>
                  Visit our Pro Store on premises that is fully stocked with
                  with wide range of badminton rackets, shuttlecocks, table
                  tennis bats, shoes, bags and more.
                </p>

                <p style={{ fontWeight: "bolder" }}>
                  We offer a high grade, in-store restringing service for
                  badminton rackets.
                </p>

                <p>
                  Over time and use the strings on rackets can lose tension and
                  get weaker. Restringing is the perfect solution to bring it
                  back into its best performing condition.
                </p>
                <p style={{ fontWeight: "bolder" }}>
                  We offer assembly services for table tennis bats.
                </p>
                <p>
                  The rubber on table tennis bats requires regular maintenance,
                  and we provide a reliable restore and repair service instore.
                  We use a high quality glue to provide lasting results and
                  durability through regular use.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-img">
                <img
                  src="/img/about/700x467.jpg"
                  alt="Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Container>
        <Row>
          <Col md="12">
            <div className="text-center pt-70 bottom-text mb-5">
              <h2>
                Our club meets international competition level <br /> standards
                14 Badminton Courts
              </h2>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default About;
