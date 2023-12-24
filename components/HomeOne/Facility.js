import React from 'react';
import Link from 'next/link';

const Facilities = () => {
    return (      
        <div className="second-facility-area pt-100 pb-70">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-sm-6">
						<div className="second-facility-item">
							<img src="/img/facility-img/facility-icon1.png" alt="Image" />
							<h3>Specialist Doctors</h3>
							<p>Our doctors keep the patient at the centre of treatment.</p>

                            <Link href="/service-details">
                                <a className="read-more">
                                    Read More <i className="bx bx-plus"></i>
                                </a>
                            </Link>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="second-facility-item">
							<img src="/img/facility-img/facility-icon2.png" alt="Image" />
							<h3>Digital Clinics</h3>
							<p>Self Employment opportunity for the health care workers.</p>

							<Link href="/service-details">
                                <a className="read-more">
                                    Read More <i className="bx bx-plus"></i>
                                </a>
                            </Link>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
						<div className="second-facility-item">
							<img src="/img/facility-img/facility-icon3.png" alt="Image" />
							<h3>The Cure Blog</h3>
							<p>Read our blogs, they will certainly add to your knowledge.</p>

							<Link href="/service-details">
                                <a className="read-more">
                                    Read More <i className="bx bx-plus"></i>
                                </a>
                            </Link>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Facilities;