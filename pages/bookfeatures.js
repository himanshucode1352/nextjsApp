import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/_App/Footer";
import DoctorsStyleOne from "../components/Common/DoctorsStyleOne";
import FunFactStyleOne from "../components/Common/FunFactStyleOne";
import FacilitesFeatures from "../components/MyComponent/FacilitesFeatures";
import { Button, Col, Container, Row } from "react-bootstrap";

const BookFeatures = () => {
  return (
    <React.Fragment>
      <Navbar />
      <PageBanner
        pageTitle="Book a Session"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Book Now"
        imgClass="bg-1"
      />
      <section className="mt-5">
        <Container>
          <Row>
            <Col md="12">
              <div className="text-center">
                <h2>Court Hire Fees</h2>
                <p>
                  BTTC Sports Centre has two different prices for court hire.
                </p>
              </div>
              <div className="doctor-vaccination-table table-responsive mt-3">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Off-Peak: </th>
                      <td className="tb-color-2 text-center">
                        <span>Weekdays</span>
                      </td>
                      <td className="tb-color-2 text-center">
                        <span>10am – 6pm</span>
                      </td>
                    </tr>
                    <tr>
                      <th>Peak: </th>
                      <td className="tb-color-2 text-center">
                        <span>Weekdays	</span>
                      </td>
                      <td className="tb-color-2 text-center">
                        <span>6pm – 11pm</span>
                      </td>
                    </tr>
                  </thead>
                </table>
              </div>
            </Col>

            <Col md="12" className="mt-5">
              <div className="text-center">
                <h2>Badminton Bookings</h2>
              </div>
              <div className="doctor-vaccination-table table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th></th>
                      <th className="tb-color-2 text-center">Non Members </th>
                      <th className="tb-color-3 text-center">Members</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <th className="p-10">Weekday Off-Peak Hours: </th>
                      <td className="tb-color-2">
                        <span>$18 p/h </span>
                      </td>
                      <td>
                        <span>$16 p/h</span>
                      </td>
                    </tr>
                    <tr>
                      <th className="p-10">Weekday Peak Hours: </th>
                      <td className="tb-color-2">
                        <span>$28 p/h	 </span>
                      </td>
                      <td>
                        <span>$25 p/h	</span>
                      </td>
                    </tr>
                    <tr>
                      <th className="p-10">Weekend: </th>
                      <td className="tb-color-2">
                        <span>$28 p/h </span>
                      </td>
                      <td>
                        <span>$25 p/h</span>
                      </td>
                    </tr>
                    <tr>
                      <th className="p-10">Night Special 10 to 11pm: </th>
                      <td className="tb-color-2">
                        <span>$18 </span>
                      </td>
                      <td>
                        <span>$16</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 mb-4 text-center">
                *Please note: bookings once made are non refundable, refer to
                our cancellation policy
              </p>
            </Col>
            <Col md='12'>
                 <div className="text-center mt-1 mb-5 ">
                     <Button className="default-btn">Book Now</Button>
                 </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default BookFeatures;
