import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';


const OwlCarousel = dynamic(import('react-owl-carousel3'));
const options = {
    loop:true,
    nav:false,
    autoplay:true,
    autoplayHoverPause: true,
    mouseDrag: true,
    margin: 30,
    center: true,
    dots: true,
    smartSpeed:1500,
    responsive:{
        0:{
            items:1,
        },
        576:{
            items:1,
        },
        768:{
            items:2,
        },
        992:{
            items:3,
        },
        1200:{
            items:3,
        }
    }
};

const Demovideo = () => {
    const [display, setDisplay] = React.useState(false);

    

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (      
        <div className="our-work-area ptb-100">
			<div className="container">
				<div className="section-title">
					<span className="top-title">Our Works</span>
					<h2>Our Intensive Care Unit</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel consequatur tempora atque blanditiis exercitationem incidunt, alias corporis quam assumenda dicta, temporibus.</p>
				</div>

                {display ? <OwlCarousel 
                    className="work-wrap owl-carousel owl-theme"
                    {...options}
                >  
					<div className="single-work">
                        <iframe width="100%" height="200" src="https://www.youtube.com/embed/v3FtIL6xe-Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" allowfullscreen></iframe>
					</div>
				
					<div className="single-work">
                       <iframe width="100%" height="200" src="https://www.youtube.com/embed/_n46CX_-kLM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; " allowfullscreen></iframe>
					</div>
				
					<div className="single-work">
                       <iframe width="100%" height="200" src="https://www.youtube.com/embed/ElbZAAHTkWc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; " allowfullscreen></iframe>
					</div>
					
					<div className="single-work">
                       <iframe width="100%" height="200" src="https://www.youtube.com/embed/nhH1e51MBWA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; " allowfullscreen></iframe>
					</div>
                </OwlCarousel> : ''}
			</div>

			<div className="shape">
				<img src="/img/shape/work-shape.png" alt="Image" />
			</div>
		</div>



    )

	
}

            
export default Demovideo;

