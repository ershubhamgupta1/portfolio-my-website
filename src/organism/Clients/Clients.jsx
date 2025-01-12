import React from 'react';
import OwlCarousel from 'react-owl-carousel2';

const productOwlCarouselOptions = {
    items:7,
    loop:true,
    smartSpeed: 1000,
    autoplay:true,
    dots:false,
    autoplayHoverPause:true,
    responsive:{
            0:{
                items:2
            },
            415:{
                items:2
            },
            600:{
                items:4

            },
            1199:{
                items:4
            },
            1200:{
                items:4
            }
        }
}

const Clients = () => {
  return (
<section id="clients" className="clients">
			<div className="section-heading text-center">
				<h2>clients</h2>
			</div>
			<div className="clients-area">
				<div className="container">
                <OwlCarousel options={productOwlCarouselOptions} className="owl-carousel owl-theme" id="client">
                        <div className="item">
							<a href="#aaa">
                                <span><b>Banking and Financial Services</b></span>
								{/* <img src="/assets/images/clients/c1.png" alt="brand-image" /> */}
							</a>
						</div>
						<div className="item">
							<a href="#aaa">
                                <span><b>Manufacturing and Supply Chain</b></span>
								{/* <img src="assets/images/clients/c1.png" alt="brand-image" /> */}
							</a>
						</div>
						<div className="item">
							<a href="#bbb">
                                <span><b>Retail and E-commerce</b></span>
								{/* <img src="assets/images/clients/c3.png" alt="brand-image" /> */}
							</a>
						</div>
						<div className="item">
							<a href="#bbbb">
                                <span><b>Healthcare and Pharmaceuticals</b></span>
								{/* <img src="assets/images/clients/c4.png" alt="brand-image" /> */}
							</a>
						</div>
						{/* <div className="item">
							<a href="#bbbb">
								<img src="assets/images/clients/c5.png" alt="brand-image" />
							</a>
						</div>
						<div className="item">
							<a href="#bbb">
								<img src="assets/images/clients/c6.png" alt="brand-image" />
							</a>
						</div>
						<div className="item">
							<a href="#bbb">
								<img src="assets/images/clients/c7.png" alt="brand-image" />
							</a>
						</div>
						<div className="item">
							<a href="#bbb">
								<img src="assets/images/clients/c5.png" alt="brand-image" />
							</a>
						</div>
						<div className="item">
							<a href="#bbb">
								<img src="assets/images/clients/c6.png" alt="brand-image" />
							</a>
						</div>
						<div className="item">
							<a href="#bbb">
								<img src="assets/images/clients/c7.png" alt="brand-image" />
							</a>
						</div>
						<div className="item">
							<a href="#bbb">
								<img src="assets/images/clients/c6.png" alt="brand-image" />
							</a>
						</div>
						<div className="item">
							<a href="#bbb">
								<img src="assets/images/clients/c7.png" alt="brand-image" />
							</a>
						</div> */}
                </OwlCarousel>
				</div>
			</div>

		</section>  )
}

export default Clients
