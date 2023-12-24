import React from 'react';
import Link from 'next/link';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';
const Services = () => {
    return (      
        <div className="services-area bg pt-100 pb-70">
			<div className="container">
				<div className="section-title">
					<span className="top-title">Our Services</span>
					<h2>Our Healthcare Service</h2>
					<p>We offer services in 20 specialties</p>
				</div>

				<div className="row">
					<div className="col-lg-4 col-sm-6">
						<div className="single-services">
							<span className="flaticon-man"></span>
							<h3>Cancer Service</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore</p>
							
                            <Link href="/service-details">
                                <a className="read-more">
                                    Read More <i className="bx bx-plus"></i>
                                </a>
                            </Link>

							<div className="services-shape">
								<img src="/img/services-card-shape.png" alt="Image" />
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-services">
							<span className="flaticon-liver"></span>
							<h3>Liver Transport</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore</p>

							<Link href="/service-details">
                                <a className="read-more">
                                    Read More <i className="bx bx-plus"></i>
                                </a>
                            </Link>

							<div className="services-shape">
								<img src="/img/services-card-shape.png" alt="Image" />
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-services">
							<span className="flaticon-kidney"></span>
							<h3>Kidney Transport</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore</p>

							<Link href="/service-details">
                                <a className="read-more">
                                    Read More <i className="bx bx-plus"></i>
                                </a>
                            </Link>

							<div className="services-shape">
								<img src="/img/services-card-shape.png" alt="Image" />
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-services">
							<span className="flaticon-heart"></span>
							<h3>Cardiac Arrhythmia</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore</p>

							<Link href="/service-details">
                                <a className="read-more">
                                    Read More <i className="bx bx-plus"></i>
                                </a>
                            </Link>

							<div className="services-shape">
								<img src="/img/services-card-shape.png" alt="Image" />
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-services">
							<span className="flaticon-brain"></span>
							<h3>Neurology Care</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore</p>

							<Link href="/service-details">
                                <a className="read-more">
                                    Read More <i className="bx bx-plus"></i>
                                </a>
                            </Link>

							<div className="services-shape">
								<img src="/img/services-card-shape.png" alt="Image" />
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-services">
							<span className="flaticon-walker"></span>
							<h3>Orthopedic Care</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore</p>

							<Link href="/service-details">
                                <a className="read-more">
                                    Read More <i className="bx bx-plus"></i>
                                </a>
                            </Link>

							<div className="services-shape">
								<img src="/img/services-card-shape.png" alt="Image" />
							</div>
						</div>
					</div>
				</div>
                
                     <div className="more-services">
				        <Accordion allowZeroExpanded preExpanded={['a']}>
                                
                                <AccordionItem uuid="b">
                                    <AccordionItemHeading>
                                        <AccordionItemButton className="btn-more">
                                            <span>
                                                View More Services
                                            </span>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                       
									<div className="row">
										<div className="col-lg-3 col-sm-6">
											<div className="single-services">
												<span className="flaticon-man"></span>
												<h3>Cardiology</h3>
												
												<Link href="/service-details">
													<a className="read-more">
														Read More <i className="bx bx-plus"></i>
													</a>
												</Link>

												<div className="services-shape">
													<img src="/img/services-card-shape.png" alt="Image" />
												</div>
											</div>
										</div>
										<div className="col-lg-3 col-sm-6">
											<div className="single-services">
												<span className="flaticon-man"></span>
												<h3>Endocrinology</h3>
												
												<Link href="/service-details">
													<a className="read-more">
														Read More <i className="bx bx-plus"></i>
													</a>
												</Link>

												<div className="services-shape">
													<img src="/img/services-card-shape.png" alt="Image" />
												</div>
											</div>
										</div>
										<div className="col-lg-3 col-sm-6">
											<div className="single-services">
												<span className="flaticon-man"></span>
												<h3>Gastroenterology</h3>
												
												<Link href="/service-details">
													<a className="read-more">
														Read More <i className="bx bx-plus"></i>
													</a>
												</Link>

												<div className="services-shape">
													<img src="/img/services-card-shape.png" alt="Image" />
												</div>
											</div>
										</div>
										<div className="col-lg-3 col-sm-6">
											<div className="single-services">
												<span className="flaticon-man"></span>
												<h3>Pulmonology</h3>
												
												<Link href="/service-details">
													<a className="read-more">
														Read More Service <i className="bx bx-plus"></i>
													</a>
												</Link>

												<div className="services-shape">
													<img src="/img/services-card-shape.png" alt="Image" />
												</div>
											</div>
										</div>
										<div className="col-lg-3 col-sm-6">
											<div className="single-services">
												<span className="flaticon-man"></span>
												<h3>Oncology</h3>
												
												<Link href="/service-details">
													<a className="read-more">
														Read More Service <i className="bx bx-plus"></i>
													</a>
												</Link>

												<div className="services-shape">
													<img src="/img/services-card-shape.png" alt="Image" />
												</div>
											</div>
										</div>
										<div className="col-lg-3 col-sm-6">
											<div className="single-services">
												<span className="flaticon-man"></span>
												<h3>General Surgery </h3>
												
												<Link href="/service-details">
													<a className="read-more">
														Read More Service <i className="bx bx-plus"></i>
													</a>
												</Link>

												<div className="services-shape">
													<img src="/img/services-card-shape.png" alt="Image" />
												</div>
											</div>
										</div>
										<div className="col-lg-3 col-sm-6">
											<div className="single-services">
												<span className="flaticon-man"></span>
												<h3>Neurology</h3>
												
												<Link href="/service-details">
													<a className="read-more">
														Read More Service <i className="bx bx-plus"></i>
													</a>
												</Link>

												<div className="services-shape">
													<img src="/img/services-card-shape.png" alt="Image" />
												</div>
											</div>
										</div>
										<div className="col-lg-3 col-sm-6">
											<div className="single-services">
												<span className="flaticon-man"></span>
												<h3>Psychiatry</h3>
												
												<Link href="/service-details">
													<a className="read-more">
														Read More Service <i className="bx bx-plus"></i>
													</a>
												</Link>

												<div className="services-shape">
													<img src="/img/services-card-shape.png" alt="Image" />
												</div>
											</div>
										</div>
										<div className="col-lg-3 col-sm-6">
											<div className="single-services">
												<span className="flaticon-man"></span>
												<h3>Andrology</h3>
												
												<Link href="/service-details">
													<a className="read-more">
														Read More Service <i className="bx bx-plus"></i>
													</a>
												</Link>

												<div className="services-shape">
													<img src="/img/services-card-shape.png" alt="Image" />
												</div>
											</div>
										</div>
										<div className="col-lg-3 col-sm-6">
											<div className="single-services">
												<span className="flaticon-man"></span>
												<h3>Cosmetology</h3>
												
												<Link href="/service-details">
													<a className="read-more">
														Read More Service <i className="bx bx-plus"></i>
													</a>
												</Link>

												<div className="services-shape">
													<img src="/img/services-card-shape.png" alt="Image" />
												</div>
											</div>
										</div>
										<div className="col-lg-3 col-sm-6">
											<div className="single-services">
												<span className="flaticon-man"></span>
												<h3>Pediatric Endocrinology</h3>
												
												<Link href="/service-details">
													<a className="read-more">
														Read More Service <i className="bx bx-plus"></i>
													</a>
												</Link>

												<div className="services-shape">
													<img src="/img/services-card-shape.png" alt="Image" />
												</div>
											</div>
										</div>
									</div>

                                    </AccordionItemPanel>
                                </AccordionItem>
                        </Accordion>
				</div>

			</div>
		</div>
    )
}

export default Services;