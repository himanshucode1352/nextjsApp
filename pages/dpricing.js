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

const Dpricing = () => {
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
                        <div className="col-lg-4 col-sm-6 txt_al">
                            <div className="single-pricing">
                                <h3 className="t_benefit">Benefits</h3>
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
                                    <li  className="txt_lef">
                                        {/* <i className='bx bx-plus'></i> */}
                                        License Validity
                                    </li>
                                    <li className="txt_lef">
                                        {/* <i className="red bx bx-minus"></i> */}
                                        Instant Wallet Recharge Amount
                                    </li>
                                    <li className="txt_lef"> 
                                        {/* <i className="red bx bx-minus"></i> */}
                                        Free Consultation(valid for first 6 months)
                                    </li>
                                </ul>
                                
                                <Link href="#">
                                    <a className="default-btn hid_btn">
                                        Subscribe Now
                                    </a>
                                </Link>
                            </div>
                        </div>
                        
                        <div className="col-lg-2 col-sm-6 bx_ste">
                            <div className="single-pricing">
                                <h3>Jan Samman</h3>
                                <h1>
                                  <del className="dis_yr">Rs. 9, 999/-</del>
                                </h1>
                                <h1>
                                   Free
                                   <p>Free for 1st 100</p>
                                </h1>

                                <ul>
                                    <li>
                                        1 Year
                                        <del className="dis_yr">6 Months</del>
                                    </li>

                                    <li>
                                       <i class="bx bx-minus"></i>
                                    </li>

                                    <li>
                                        
                                      <i class="bx bx-minus"></i>
                                    </li>
                                    
                                </ul>

                                <Link href="#">
                                    <a className="default-btn">
                                    Subscribe Now
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-2 col-sm-6 bx_ste">
                            <div className="single-pricing">
                                <h3>Jan Jyoti  </h3>
                                <h1>
                                  <del>Rs. 19,999/-</del>
                                </h1>
                                <h1>
                                      Rs. 17, 999/-
                                    <p>10% Off</p>
                                </h1>

                                <ul>
                                    <li>
                                        
                                        2 Years
                                        <del className="dis_yr">1 Year</del>
                                    </li>
                                    <li>
                                        
                                       Rs. 1,000/-
                                    </li>
                                    <li>
                                        
                                        25
                                    </li>
                                    
                                </ul>

                                <Link href="#">
                                    <a className="default-btn">
                                    Subscribe Now
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-2 col-sm-6 bx_ste">
                            <div className="single-pricing">
                                <h3>Jeevan Jyoti  </h3>
                                <h1>
                                  <del>Rs. 34,999</del>
                                </h1>
                                <h1>
                                    Rs. 29, 749/-
                                    <p>15% Off</p>
                                </h1>
                                <ul>
                                    <li>
                                        
                                        3 Years
                                        <del className="dis_yr"> 2 Years</del>
                                    </li>
                                    <li>
                                        
                                        Rs. 2,000/-
                                    </li>
                                    <li>
                                       
                                        50
                                    </li>
                                    
                                </ul>
                                 
                            

                                <Link href="#">
                                    <a className="default-btn">
                                      Subscribe Now
                                    </a>
                                </Link>
                            </div>

                           
                        </div>

                        <div className="col-lg-2 col-sm-6 bx_ste">
                            <div className="single-pricing">
                                <h3>Sanjeevani</h3>
                                <h1>
                                  <del>Rs. 69,999</del>
                                </h1>
                                <h1>
                                      Rs. 55,999/-
                                      <p>20% Off</p>
                                </h1>

                                <ul>
                                    <li>
                                        
                                        5 Years
                                         <del className="dis_yr">3 Years</del>
                                    </li>
                                    <li>
                                        
                                        Rs. 5,000/-
                                    </li>
                                    <li>
                                        
                                        100
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
                                              <div className="col-lg-4 col-sm-6 txt_al">
                                                <div className="single-pricing">
                                                    <ul>
                                                        <li className="txt_lef">
                                                           Service Charge Per Patient 
                                                        </li>
                                                        <li className="txt_lef">
                                                           Wall Posters
                                                        </li>
                                                        <li className="txt_lef"> 
                                                           Pamphlets
                                                        </li>
                                                        <li className="txt_lef">
                                                           Key Rings for Patients
                                                        </li>
                                                        <li className="txt_lef">
                                                           Marketing banner 
                                                        </li>
                                                        <li className="txt_lef">
                                                           Marketing Material
                                                        </li>
                                                        <li className="txt_lef">
                                                           XpressCure Merchandise
                                                        </li>
                                                        <li className="txt_lef">
                                                           Daily Social Media Post
                                                        </li>
                                                        <li className="txt_lef">
                                                           Bluetooth Speaker
                                                        </li >
                                                        <li className="txt_lef">
                                                            Priority Customer Support
                                                        </li>
                                                        <li className="txt_lef">
                                                           Infrared Thermometer
                                                        </li>
                                                        <li className="txt_lef">
                                                            Electronic BP Machine
                                                        </li>
                                                        <li className="txt_lef">
                                                           Electronic Weighing Machine
                                                        </li>
                                                        <li className="txt_lef">
                                                            Height Measuring Tape
                                                        </li>
                                                        <li className="txt_lef">
                                                            Digital Pulse Oximeter
                                                        </li>
                                                        <li className="txt_lef">
                                                           Unlimited Marketing Support
                                                        </li>
                                                        <li className="txt_lef">
                                                            Dedicated Manager
                                                        </li>
                                                        <li className="txt_lef">
                                                             Digital Pulse Oximeter
                                                        </li>
                                                        <li className="txt_lef">
                                                             Customized Marketing banner - 6*4 feet
                                                        </li>
                                                        <li className="txt_lef">
                                                             Unlimited Marketing Support
                                                        </li>
                                                        <li className="txt_lef">
                                                              Priority Customer Support
                                                        </li>
                                                        <li className="txt_lef">
                                                              Dedicated Manager
                                                        </li>
                                                    </ul>
                                                 </div>
                                              </div>
                                              <div className="col-lg-2 col-sm-6 bx_ste">
                                              <div className="single-pricing">
                                                    <ul>
                                                        <li>
                                                          Upto Rs. 99/-
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
                                              <div className="col-lg-2 col-sm-6 bx_ste">
                                              <div className="single-pricing">
                                              <ul>
                                                        <li>
                                                           Upto Rs. 99/- 
                                                        </li>
                                                        <li>
                                                           Four
                                                        </li>
                                                        <li>
                                                            500
                                                        </li>
                                                        <li>
                                                            50
                                                        </li>
                                                        <li>
                                                         <i class="bx bx-minus"></i>
                                                        </li>
                                                        <li>
                                                         <i class="bx bx-check"></i>
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
                                              <div className="col-lg-2 col-sm-6 bx_ste">
                                              <div className="single-pricing">
                                              <ul>
                                                        <li>
                                                          Upto Rs. 99/- 
                                                        </li>
                                                        <li>
                                                            Eight
                                                        </li>
                                                        <li>
                                                           1000
                                                        </li>
                                                        <li>
                                                           200
                                                        </li>
                                                        <li>
                                                           One
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

                                              <div className="col-lg-2 col-sm-6 bx_ste">
                                              <div className="single-pricing">
                                              <ul>
                                                        <li>
                                                          Upto Rs. 99/-
                                                        </li>
                                                        <li>
                                                            Twelve
                                                        </li>
                                                        <li>
                                                           2000
                                                        </li>
                                                        <li>
                                                           350
                                                        </li>
                                                        <li>
                                                           Two
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
                                                        <li>
                                                            <i class="bx bx-check"></i>
                                                        </li>

                                                    </ul>
                                                 </div>
                                              </div>
                                            </div>
                                    </AccordionItemPanel>
                                     <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <span>
                                                Veiw More Feature
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

export default Dpricing;