import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Doctorsubscribe from "../pages/doctorsubscribe";
import Footer from "../components/_App/Footer";
import Link from "next/link";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Select from "react-select";
import Dmitrabanner from "../pages/dmitra-banner";
import AppointmentForm from "../components/HomeOne/AppointmentForm";

const MySwal = withReactContent(Swal);
const alertContent = () => {
  // video modal

  MySwal.fire({
    title: "Congratulations!",
    text: "You ragister successfully and will back to you soon",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};
const options = [
  { value: "Google", label: "Google" },
  { value: "Facebook", label: "Facebook" },
  { value: "Friend", label: "Friend" },
  { value: "School Newsletter", label: "School Newsletter" },
  { value: "Advertisement", label: "Advertisement" },
];

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      mobile_number: "",
      email: "",
      password: "",
      Specialization: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("http://148.72.214.135:5000/api/admin_doctor_signup", this.state)
      .then((response) => {
        // console.log(response);
        alertContent();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { first_name, mobile_number, email, Specialization, password } =
      this.state;

    return (
      <React.Fragment>
        {/* <Navbar /> */}
        {/* <PageBanner
                    pageTitle="Doctor"
                    homePageUrl="/"
                    homePageText="Home"
                    activePageText="Sign Up"
                    imgClass="bg-2 hh"
                /> */}
        {/* <Dmitrabanner/> */}

        <div className="user-area-all-style sign-up-area ptb-100">
          <div className="container">
            {/* <div className="section-title">
                            <h2>Create an account!</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium quas cumque iste veniam id dolorem deserunt ratione error voluptas rem ullam possimus placeat, ut, odio</p>
                        </div> */}

            <div className="row">
              <div className="col-lg-3"></div>
              <div className="col-lg-6">
                <div className="contact-form-action">
                  <div className="text-center">
                    <h2>Logo</h2>
                    <h4>Signup Form </h4>
                    <p className="mb-2">
                      Please fill in the following details. All fields marked
                      with * are required
                    </p>
                  </div>
                  <form onSubmit={this.submitHandler}>
                    <div className="row">
                      <div className="col-md-12 col-sm-12">
                        <div className="form-group">
                          <label>
                            * Your email address: (This will be your login
                            username)
                          </label>
                          <input
                            className="form-control"
                            type="email"
                            name=""
                            // value={}
                            onChange={this.changeHandler}
                            placeholder="email"
                          />
                        </div>
                      </div>

                      <div className="col-md-12 col-sm-12 ">
                        <div className="form-group">
                          <label>* Your name:</label>
                          <input
                            className="form-control"
                            type="text"
                            name=""
                            // value={}
                            onChange={this.changeHandler}
                            placeholder="First Name"
                          />
                          <input
                            className="form-control mt-1"
                            type="text"
                            name=""
                            // value={}
                            onChange={this.changeHandler}
                            placeholder="Last Name"
                          />
                        </div>
                      </div>

                      <div className="col-md-12 col-sm-12">
                        <div className="form-group">
                          <label>* Mobile:</label>
                          <input
                            className="form-control"
                            type="text"
                            name=""
                            // value={}
                            onChange={this.changeHandler}
                            placeholder="mobile"
                          />
                        </div>
                      </div>

                      <div className="col-md-12 col-sm-12">
                        <div className="form-group">
                          <label>Postcode:</label>
                          <input
                            className="form-control"
                            type="text"
                            name=""
                            // value={}
                            onChange={this.changeHandler}
                            placeholder="Postcode"
                          />
                        </div>
                      </div>

                      <div className="col-md-12 col-sm-12">
                        <div className="form-group">
                          <label>
                            * Create a password: At least 8 characters long
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            name="password"
                            value={password}
                            onChange={this.changeHandler}
                            placeholder="password"
                          />
                          <div
                            style={{
                              backgroundColor: "#dff0d8",
                              padding: "10px",
                              margin: "8px 0px",
                            }}
                          >
                            <p
                              style={{
                                marginBottom: "0px",
                                color: "green",
                                fontSize: "12px",
                              }}
                            >
                              <span>
                                <i class="bx bx-check"></i>
                              </span>
                              8 or more characters long
                            </p>
                            <p
                              style={{
                                marginBottom: "0px",
                                color: "green",
                                fontSize: "12px",
                              }}
                            >
                              <span>
                                <i class="bx bx-check"></i>
                              </span>
                              No leading or trailing spaces
                            </p>
                          </div>
                          <input
                            className="form-control mt-1"
                            type="text"
                            name="password"
                            value={password}
                            onChange={this.changeHandler}
                            placeholder="Confirm password"
                          />
                        </div>
                      </div>

                      {/* <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </DropdownButton> */}

                      <div className="col-md-12 col-sm-12">
                        <div className="form-group">
                          <label>Where did you hear about us?</label>
                          <Select
                            placeholder="select"
                            name=""
                            options={options}
                          />
                        </div>
                      </div>

                      <div className="col-md-12 col-sm-12 col-xs-12 form-condition">
                        <div className="agree-label">
                          <input type="checkbox" id="chb1" />
                          <label htmlFor="chb1">
                            I agree with{" "}
                            <a href="/privacy-policy">Privacy Policy</a> &{" "}
                            <a href="/terms-conditions">Terms Conditions</a>
                          </label>
                        </div>
                      </div>

                      <div className="col-12">
                        <button className="default-btn btn-two" type="submit">
                          Submit
                        </button>
                        <p className="account-desc">
                          Already have a login? 
                          <Link href="/sign-in">
                            <a>Sign In here</a>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-3"></div>
              {/* <div className="col-lg-6">
                                <div className="sign-in-img"></div>
                            </div> */}
            </div>
          </div>
        </div>

        {/* <Doctorsubscribe/>
                <Footer /> */}
      </React.Fragment>
    );
  }
}

export default SignUp;
