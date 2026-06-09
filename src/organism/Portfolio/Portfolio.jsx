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
										<img src="assets/images/portfolio/1780996994059.jpeg" alt="Agentic App"/>
										<div className="isotope-overlay">
											<a href="/">
												Agentic App
											</a>
										</div>
									</div>
									<div className="item">
										<img src="assets/images/portfolio/folinko-app.png" alt="ui/ux design"/>
										<div className="isotope-overlay">
											<a href="/">
												ui/ux design
											</a>
										</div>
									</div>
								</div>

								<div className="col-sm-4 padding-0">
									<div className="item">
										<img className='transform-img'  src="assets/images/portfolio/folinko-store-detail.png" alt="Mobile App UI/UX"/>
										<div className="isotope-overlay">
											<a href="/">
												Mobile App UI/UX
											</a>
										</div>
									</div>
								</div>

								<div className="col-sm-4">
									<div className="item">
										<img src="assets/images/portfolio/petshop-ss-1.png" alt="pet shop"/>
										<div className="isotope-overlay">
											<a href="/">
												UI/UX
											</a>
										</div>
									</div>
									<div className="item">
										<img src="assets/images/portfolio/folinko-business-app.png" alt="web development"/>
										<div className="isotope-overlay">
											<a href="/">
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
