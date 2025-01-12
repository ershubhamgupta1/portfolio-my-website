import React from 'react'

const Portfolio = () => {
  return (
<section id="portfolio" className="portfolio">
			<div className="portfolio-details">
				<div className="section-heading text-center">
					<h2>portfolio</h2>
				</div>
				<div className="container">
					<div className="portfolio-content">
						<div className="isotope">
							<div className="row">

								<div className="col-sm-4">
									<div className="item">
										<img src="assets/images/portfolio/p1.jpg" alt="UI/UX design portfolio example"/>
										<div className="isotope-overlay">
											<a href="https://github.com/ershubhamgupta1">
												ui/ux design
											</a>
										</div>
									</div>
									<div className="item">
										<img src="assets/images/portfolio/p2.jpg" alt="UI/UX design portfolio example"/>
										<div className="isotope-overlay">
											<a href="https://github.com/ershubhamgupta1">
												ui/ux design
											</a>
										</div>
									</div>
								</div>

								<div className="col-sm-4">
									<div className="item">
										<img src="assets/images/portfolio/p3.jpg" alt="web design portfolio example"/>
										<div className="isotope-overlay">
											<a href="https://github.com/ershubhamgupta1">
												web design
											</a>
										</div>
									</div>
								</div>

								<div className="col-sm-4">
									<div className="item">
										<img src="assets/images/portfolio/p4.jpg" alt="web developent portfolio example"/>
										<div className="isotope-overlay">
											<a href="https://github.com/ershubhamgupta1">
												web development
											</a>
										</div>
									</div>
									<div className="item">
										<img src="assets/images/portfolio/p5.jpg" alt="web developent portfolio example"/>
										<div className="isotope-overlay">
											<a href="https://github.com/ershubhamgupta1">
												web development
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</section>  )
}

export default Portfolio
