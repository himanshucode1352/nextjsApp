import React from 'react';
import Navbar from '../components/_App/Navbar';
import MainBanner from '../components/HomeOne/MainBanner';
// import Facilities from '../components/HomeOne/Facility';
import AboutUs from '../components/HomeOne/AboutUs';
import Services from '../components/HomeOne/Services';
import DoctorsStyleOne from '../components/Common/DoctorsStyleOne';
// import OurWorks from '../components/HomeOne/OurWorks';
import FunFactStyleOne from '../components/Common/FunFactStyleOne';
import AppointmentForm from '../components/HomeOne/AppointmentForm';
import EmergencyArea from '../components/HomeOne/EmergencyArea';
import TestimonialStyleOne from '../components/Common/TestimonialStyleOne';
import NewsStyleOne from '../components/Common/NewsStyleOne';
import Subscribe from '../components/Common/Subscribe';
import Footer from '../components/_App/Footer';
import Demovideo from '../pages/demovideo';
import Facilities from '../components/HomeFive/Facilities';
import Doctors2 from '../pages/doctors-2'

const Index = () => {
    return (
        <React.Fragment>
            <Navbar />
            <MainBanner />
            {/* <Facilities /> */}
            <AboutUs />
            <Facilities />
            
            <Doctors2/>

            {/* <Services /> */}
            {/* <DoctorsStyleOne /> */}
            {/* <OurWorks /> */}
            {/* <Demovideo/> */}
            <FunFactStyleOne />
            {/* <AppointmentForm /> */}
            {/* <EmergencyArea /> */}
            {/* <TestimonialStyleOne /> */}
            {/* <NewsStyleOne /> */}
            <Subscribe />
            <Footer /> 
        </React.Fragment>
    )
}

export default Index;