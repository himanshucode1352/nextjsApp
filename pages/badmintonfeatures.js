import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/_App/Footer";
import DoctorsStyleOne from "../components/Common/DoctorsStyleOne";
import FunFactStyleOne from "../components/Common/FunFactStyleOne";
import FacilitesFeatures from "../components/MyComponent/FacilitesFeatures";
import { Col, Container, Row } from "react-bootstrap";

const BadmintonFeatures = () => {
  return (
    <React.Fragment>
      <Navbar />
      <PageBanner
        pageTitle="Badminton"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Badminton"
        imgClass="bg-2"
      />
      <div className="about-area about-page pb-130">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-content">
                <span className="top-title">Badminton</span>
                <h2>
                  Become a member today and get immediate access to many
                  benefits
                </h2>
                <p style={{ fontWeight: "bolder" }}>
                  Become a member at Badminton and Table Tennis Connect and
                  immediately be granted access to many benefits.
                </p>

                <p style={{ fontWeight: "bolder" }}>
                  To sign up as a member, please complete the Membership
                  agreement form that is available at our front desk reception
                  and submit it to our staff in the centre.
                </p>

                <p style={{ fontWeight: "bolder" }}>
                  The annual membership fee is $60.00. Membership can be renewed
                  annually and is calculated from the date of joining.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-img">
                <img src="/img/sp-img/bad.jpg" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Container>
        <Row>
          <Col md="12">
            <div className="text-center">
              <h2>Court Hire Fees</h2>
              <p>BTTC Sports Centre has two different prices for court hire.</p>
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
                      <span>$18 p/h </span>
                    </td>
                    <td>
                      <span>$16 p/h</span>
                    </td>
                  </tr>
                  <tr>
                    <th className="p-10">Weekend: </th>
                    <td className="tb-color-2">
                      <span>$18 p/h </span>
                    </td>
                    <td>
                      <span>$16 p/h</span>
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
              *Please note: bookings once made are non refundable, refer to our
              cancellation policy
            </p>
          </Col>
        </Row>
      </Container>

      {/* membership section */}
      <section className="mt-4 mb-5">
        <Container>
          <Row>
            <h2 className="text-center mb-5">Membership Benefits</h2>
            <Col md="6">
              <div className="about-content">
                <ul style={{ listStyle: "none" }}>
                  <li className="mt-3">
                    <h3>
                      <span style={{ marginRight: "10px", color: "#006400" }}>
                        <i className="flaticon-tick"></i>
                      </span>
                      Discounted court hire and store products
                    </h3>
                    <p>
                      Discounted prices with court hire and 10% off selected
                      store products, ranging from racquets, bags, shoes,
                      shuttlecocks and more!
                    </p>
                  </li>
                  <li className="mt-3">
                    <h3>
                      <span style={{ marginRight: "10px", color: "#006400" }}>
                        <i className="flaticon-tick"></i>
                      </span>
                      Permanent court bookings
                    </h3>
                    <p>
                      Provide a given time and court preference based on the
                      availability of courts the staff will help you to organize
                      a continuous permanent booking until your membership
                      expires.
                    </p>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md="6">
              <ul style={{ listStyle: "none" }}>
                <li className="mt-3">
                  <h3>
                    <span style={{ marginRight: "10px", color: "#006400" }}>
                      <i className="flaticon-tick"></i>
                    </span>
                    Discounted restringing
                  </h3>
                  <p>
                    Based on the selection of strings, a discount will be
                    provided.
                  </p>
                </li>
                <li className="mt-3">
                  <h3>
                    <span style={{ marginRight: "10px", color: "#006400" }}>
                      <i className="flaticon-tick"></i>
                    </span>
                    Accounts top up
                  </h3>
                  <p>
                    All members will be able to top up money into their accounts
                    via cash or EFTPOS to make a transaction.
                  </p>
                </li>
                <li className="mt-3">
                  <h3>
                    <span style={{ marginRight: "10px", color: "#006400" }}>
                      <i className="flaticon-tick"></i>
                    </span>
                    Online support and booking confirmation.
                  </h3>
                  <p>
                    As a member you will receive court booking confirmation of
                    all bookings via email and you will receive direct support
                    with regards to any issues.
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      {/* membership section close */}
      <Footer />
    </React.Fragment>
  );
};

export default BadmintonFeatures;
