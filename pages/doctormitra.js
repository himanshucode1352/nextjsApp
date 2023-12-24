import React, { useState } from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Docmitrasubscribe from '../pages/docmitrasubscribe';
import Footer from '../components/_App/Footer';
import Pricing from '../pages/pricing';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Select from 'react-select';
import axios from "axios";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useRouteMatch,
    useParams
  } from "react-router-dom";

  import ModalVideo from 'react-modal-video';
  

const MySwal = withReactContent(Swal)



const alertContent = () => {
    MySwal.fire({
        title: 'Congratulations!',
        text: 'You ragister successfully and will back to you soon',
        icon: 'success',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}


const INITIAL_STATE = {
    first_name: "",
    mobile: "",
    email: "",
    password: "",
    health_worker_course: ""
}
const options = [
    { value: 'BAMS – Bachelor of Ayurvedic Medicine and Surgery', label: 'BAMS – Bachelor of Ayurvedic Medicine and Surgery' },
    { value: 'BUMS – Bachelor of Unani Medicine and Surgery', label: 'BUMS – Bachelor of Unani Medicine and Surgery' },
    { value: 'D. Pharma - Diploma of Pharmacy', label: 'D. Pharma - Diploma of Pharmacy' },
    { value: 'B.Sc (Audiology and Speech Therapy)', label: 'B.Sc (Audiology and Speech Therapy)' },
    { value: 'M.A. in Yoga', label: 'M.A. in Yoga' },
    { value: 'MS Oral and Dental Management. (Ay)', label: 'MS Oral and Dental Management. (Ay)' },
    { value: 'MS Toxicology (Ay)', label: 'MS Toxicology (Ay)' }
];

const SignUp = () => {
    const [contact, setContact] = useState(INITIAL_STATE);
        // video modal
        const [isOpen, setIsOpen] = React.useState(true);
        const openModal = () => {
            setIsOpen(!isOpen);
        }

    const { register, handleSubmit, errors } = useForm();
    const handleChange = e => {
        const { name, value } = e.target;
        setContact(prevState => ({ ...prevState, [name]: value }));
        console.log(contact)
    }

    const onSubmit = async e => {
        // e.preventDefault();
        try {
            const url = "http://148.72.214.135:5000/api/admin/health_worker_signup";
            const { first_name, email, mobile, password, health_worker_course } = contact;
            const payload = { first_name, email, mobile, password, health_worker_course };
            const detail = await axios.post(url, payload);
            console.log(detail);
            setContact(INITIAL_STATE);
            // res.redirect("/thanku")
            <Route path="/thanku">
            </Route>

        }catch (error) {
            console.log("error hai")
            console.log(error)
        }

    };

    


    return (
        <React.Fragment>
            <Navbar />
            <PageBanner
                pageTitle="Doctor Mitra"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Sign Up"
                imgClass="bg-2"
                
            />
            {/* video button */}
            <div className="container">
            <div
               onClick={e => {e.preventDefault(); openModal()}}
               className="default-btn active popup-youtube vdmitra "
                > 
                Play Now
            </div>
            </div>

            <div className="user-area-all-style sign-up-area ptb-100">
                <div className="container">
                    {/* <div className="section-title">
                        <h2>Create an account!</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium quas cumque iste veniam id dolorem deserunt ratione error voluptas rem ullam possimus placeat, ut, odio</p>
                    </div> */}
                    <Pricing/>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="appointment-here-form">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="row">

                                        <div className="col-md-12 col-sm-12">
                                            <div className="form-group">
                                                {/* <input className="form-control" type="text" name="name" placeholder="Dr. Name" /> */}
                                                <input
                                                    type="text"
                                                    name="first_name"
                                                    className="form-control"
                                                    placeholder="full name"
                                                    value={contact.first_name}
                                                    onChange={handleChange}
                                                    ref={register({ required: true })}
                                                />
                                                 <i className="flaticon-account"></i>
                                            </div>
                                        </div>

                                        <div className="col-md-12 col-sm-12 ">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="mobile"
                                                    className="form-control"
                                                    placeholder="mobile"
                                                    value={contact.mobile}
                                                    onChange={handleChange}
                                                    ref={register({ required: true })}
                                                />                                            </div>
                                        </div>


                                        <div className="col-md-12 col-sm-12">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="email"
                                                    className="form-control"
                                                    placeholder="email"
                                                    value={contact.email}
                                                    onChange={handleChange}
                                                    ref={register({ required: true })}
                                                />                                            </div>
                                        </div>

                                        <div className="col-md-12 col-sm-12">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="password"
                                                    className="form-control"
                                                    placeholder="password"
                                                    value={contact.password}
                                                    onChange={handleChange}
                                                    ref={register({ required: true })}
                                                />                                            </div>
                                        </div>

                                        <div className="col-md-12 col-sm-12">
                                            <div className="form-group">
                                                <Select name="health_worker_course"  placeholder="courses" className="slt_1"
                                                    options={options}
                                                />
                                            </div>
                                        </div>


                                        <div className="col-md-12 col-sm-12 col-xs-12 form-condition">
                                            <div className="agree-label">
                                                <input type="checkbox" id="chb1" />
                                                <label htmlFor="chb1">
                                                    I agree with XpressCure <a href="/privacy-policy">Privacy Policy</a> & <a href="/terms-conditions">Terms  Conditions</a>
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <button className="default-btn btn-two" type="submit">
                                                Sign Up
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="sign-in-img"></div>
                        </div>
                    </div>
                </div>
            </div>
              
            <ModalVideo 
                channel='youtube' 
                isOpen={!isOpen} 
                videoId='ElbZAAHTkWc' 
                onClose={() => setIsOpen(!isOpen)} 
            />

           <Docmitrasubscribe/>
            <Footer />

            {/* If you want to change the video need to update videoID */}
           
        </React.Fragment>
    )
}

export default SignUp;