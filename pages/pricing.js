import React from 'react';
// import Navbar from '../components/_App/Navbar';
// import PageBanner from '../components/Common/PageBanner';
// import Subscribe from '../components/Common/Subscribe';
// import Footer from '../components/_App/Footer';
import Link from 'next/link'; 
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

const Pricing = () => {
    return (
        <React.Fragment>
            {/* <Navbar /> */}
            {/* <PageBanner 
                pageTitle="Pricing" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Pricing" 
                imgClass="bg-2" 
            /> */}

            <div className="pricing-area pt-100 pb-70 pd-subs">
                <div className="container">
                     <div className="section-title">
                        <span className="top-title">What We Offer</span>
                        <h2>Our Subscription Plan</h2>
                        <p>"India’s largest patient outreach program is starting soon. Join Us today and serve millions." </p>

                    </div> 

                    <div className="row">
                        <div className="col-lg-3 col-sm-6 dr-sub">
                            <div className="single-pricing">
                                <h3>Benefits</h3>
                                {/* <h1>
                                    $12.00
                                     <span>one-fee payment</span> 
                                </h1> */}

                                <ul>
                                <li className="txt_lef">
                                        {/* <i className='bx bx-plus'></i> */}
                                        Subscription Price
                                    </li>
                                    <li className="txt_lef">
                                        {/* <i className='bx bx-plus'></i> */}
                                        Covid-19 Offer
                                    </li>
                                    <li className="txt_lef"> 
                                        {/* <i className='bx bx-plus'></i> */}
                                        License Validity
                                    </li>
                                    <li className="txt_lef">
                                        {/* <i className="red bx bx-minus"></i> */}
                                        Our Offering per Patients
                                    </li>
                                    <li className="txt_lef"> 
                                        {/* <i className="red bx bx-minus"></i> */}
                                       General Physician ( MBBS Doctor)
                                    </li>
                                </ul>
                                
                                <Link href="#">
                                    <a className="default-btn hid_btn">
                                        Subscribe Now
                                    </a>
                                </Link>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-sm-6 dr-sub">
                            <div className="single-pricing">
                                <h3>XpressGo </h3>
                                <h1>
                                  <del className="dis_yr">Rs. 9, 999/-</del>
                                </h1>
                                <h1>
                                   Free
                                   <p>First 100 Doctor Only</p>
                                </h1>
                                <ul>
                                    <li>
                                         6 Months
                                        <del className="dis_yr">3 Months</del>
                                    </li>
                                    <li>
                                       
                                      <i class="bx bx-minus"></i>
                                    </li>
                                    <li>
                                        
                                       Upto 50%
                                    </li>
                                    
                                </ul>

                                <Link href="#">
                                    <a className="default-btn">
                                    Subscribe Now
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 dr-sub">
                            <div className="single-pricing">
                                <h3>XpressPlus</h3>
                                <h1>
                                  <del className="dis_yr">Rs. 23, 999/-</del>
                                </h1>
                                <h1>
                                    Rs. 21, 600/-
                                   <p>10% Off</p>
                                </h1>
                                <ul>
                                    <li>
                                        12 Months
                                        <del className="dis_yr">6 Months</del>
                                    </li>
                                    <li>
                                       
                                      <i class="bx bx-minus"></i>
                                    </li>
                                    <li>
                                        
                                       Upto 50%
                                    </li>
                                    
                                </ul>

                                <Link href="#">
                                    <a className="default-btn">
                                    Subscribe Now
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 dr-sub">
                            <div className="single-pricing">
                                <h3>XpressPro </h3>
                                <h1>
                                  <del className="dis_yr">Rs. 57,600/-</del>
                                </h1>
                                <h1>
                                    Rs. 48, 960/-
                                   <p>15% Off</p>
                                </h1>

                                <ul>
                                    <li>
                                        24 Months
                                        <del className="dis_yr">1 Year</del>
                                    </li>
                                    <li>
                                       
                                       <i class="bx bx-minus"></i>
                                     </li>
                                     <li>
                                         
                                        Upto 50%
                                     </li>
                                    
                                </ul>
                                 
                            

                                <Link href="#">
                                    <a className="default-btn">
                                      Subscribe Now
                                    </a>
                                </Link>
                            </div>

                           
                        </div>

                        <Accordion allowZeroExpanded >
                                <AccordionItem  uuid="a">
                                    <AccordionItemPanel className="pd_none">
                                          <div className="row">
                                              <div className="col-lg-3 col-sm-6 dr-sub">
                                                <div className="single-pricing">
                                                    <ul>
                                                        <li className="txt_lef">
                                                             Specialist Doctor 
                                                        </li>
                                                        <li className="txt_lef">
                                                            Super Specilaist Doctor
                                                        </li > 
                                                        <li className="txt_lef">
                                                            Patient - Super Specialist Cases
                                                        </li>
                                                        <li className="txt_lef">
                                                             General Case Fee
                                                        </li>
                                                        <li className="txt_lef">
                                                             Specialist Doctor Fee
                                                        </li>
                                                        <li className="txt_lef">
                                                            Total Social Media Post
                                                        </li>
                                                        <li className="txt_lef">
                                                           X-Post Subscription
                                                        </li>
                                                        <li className="txt_lef"> 
                                                           Content of Social Media
                                                        </li>
                                                        <li className="txt_lef">
                                                            Starter Kit- For Clinic/Hospital
                                                        </li>
                                                        <li className="txt_lef">
                                                            Author- The Cure Blog
                                                        </li>
                                                        <li className="txt_lef">
                                                             Eligibility For Webinar Guide
                                                        </li>
                                                        
                                                    </ul>
                                                 </div>
                                              </div>
                                              <div className="col-lg-3 col-sm-6 dr-sub">
                                              <div className="single-pricing">
                                                    <ul>
                                                        <li>
                                                          Upto 55%
                                                        </li>
                                                        <li>
                                                           Upto 60%
                                                        </li>
                                                        <li>
                                                          <i class="bx bx-minus"></i>
                                                        </li>
                                                        <li>
                                                          <i class="bx bx-minus"></i>
                                                        </li>
                                                        <li>
                                                           <i class="bx bx-check"></i>
                                                        </li>
                                                        <li>
                                                           <i class="bx bx-minus"></i>
                                                        </li>
                                                        <li>
                                                          <i class="bx bx-minus"></i>
                                                        </li>
                                                        <li>
                                                          <i class="bx bx-minus"></i>
                                                        </li>
                                                        <li>
                                                         <i class="bx bx-minus"></i>
                                                        </li>
                                                        <li>
                                                          <i class="bx bx-minus"></i>
                                                        </li>
                                                        <li>
                                                        <i class="bx bx-minus"></i>
                                                        </li>
                                                      
                                                    </ul>
                                                 </div>
                                              </div>
                                              <div className="col-lg-3 col-sm-6 dr-sub">
                                              <div className="single-pricing">
                                                    <ul>
                                                        <li>
                                                           Upto 55%
                                                        </li>
                                                        <li>
                                                           Upto 60%
                                                        </li>
                                                        <li>
                                                           100
                                                        </li>
                                                        <li>
                                                          <i class="bx bx-check"></i>
                                                        </li>
                                                        <li>
                                                          <i class="bx bx-check"></i>
                                                        </li>
                                                        <li>
                                                           <i class="bx bx-check"></i>
                                                        </li>
                                                        <li>
                                                           <i class="bx bx-check"></i>
                                                        </li>
                                                        <li>
                                                           <i class="bx bx-check"></i>
                                                        </li>
                                                        <li>
                                                         <i class="bx bx-check"></i>
                                                        </li>
                                                        <li>
                                                          <i class="bx bx-check"></i>
                                                        </li>
                                                        <li>
                                                           <i class="bx bx-check"></i>
                                                        </li>
                                                       
                                                    </ul>
                                                 </div>
                                              </div>
                                              <div className="col-lg-3 col-sm-6 dr-sub">
                                              <div className="single-pricing">
                                              <ul>
                                                        <li>
                                                           Upto 55%
                                                        </li>
                                                        <li>
                                                           Upto 60%
                                                        </li>
                                                        <li>
                                                           250
                                                        </li>
                                                        <li>
                                                          <i class="bx bx-check"></i>
                                                        </li>
                                                        <li>
                                                          <i class="bx bx-check"></i>
                                                        </li>
                                                        <li>
                                                           <i class="bx bx-check"></i>
                                                        </li>
                                                        <li>
                                                           <i class="bx bx-check"></i>
                                                        </li>
                                                        <li>
                                                           <i class="bx bx-check"></i>
                                                        </li>
                                                        <li>
                                                         <i class="bx bx-check"></i>
                                                        </li>
                                                        <li>
                                                          <i class="bx bx-check"></i>
                                                        </li>
                                                        <li>
                                                           <i class="bx bx-check"></i>
                                                        </li>
                                                       
                                                    </ul>
                                                 </div>
                                              </div>
                                            </div>
                                    </AccordionItemPanel>
                                     <AccordionItemHeading>
                                        <AccordionItemButton className="ud_btn">
                                            <span>
                                              <img src="/img/upd.png" className="udb"></img>
                                            </span>
                                        </AccordionItemButton>
                                     </AccordionItemHeading>
                                </AccordionItem>
                            </Accordion>


                    </div>
                </div>
            </div>
 
            {/* <Subscribe />
            <Footer />  */}
        </React.Fragment>
    )
}

export default Pricing;