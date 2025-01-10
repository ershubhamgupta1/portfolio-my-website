import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
const Skills = () => {
  return (
<section id="skills" className="skills">
				<div className="skill-content">
					<div className="section-heading text-center">
						<h2>skills</h2>
					</div>
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<div className="single-skill-content">
									<div className="barWrapper">
										<span className="progressText">adobe photoshop</span>
										<div className="single-progress-txt">
                                            <ProgressBar now={60} />
											<h3>90%</h3>	
										</div>
									</div>
									<div className="barWrapper">
										<span className="progressText">adobe illustrator</span>
										<div className="single-progress-txt">
                                            <ProgressBar now={60} />
											<h3>85%</h3>	
										</div>
									</div>
									<div className="barWrapper">
										<span className="progressText">adobe after effects</span>
										<div className="single-progress-txt">
                                            <ProgressBar now={60} />
											<h3>97%</h3>	
										</div>
									</div>
									<div className="barWrapper">
										<span className="progressText">sketch</span>
										<div className="single-progress-txt">
                                            <ProgressBar now={60} />
											<h3>90%</h3>	
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<div className="single-skill-content">
									<div className="barWrapper">
										<span className="progressText">html 5</span>
										<div className="single-progress-txt">
                                            <ProgressBar now={60} />
											<h3>90%</h3>	
										</div>
									</div>
									<div className="barWrapper">
										<span className="progressText">css 3 animation</span>
										<div className="single-progress-txt">
                                            <ProgressBar now={85} />
											<h3>85%</h3>	
										</div>
									</div>
									<div className="barWrapper">
										<span className="progressText">communication</span>
										<div className="single-progress-txt">
                                            <ProgressBar now={97} />
											<h3>97%</h3>	
										</div>
									</div>
									<div className="barWrapper">
										<span className="progressText"> creativity</span>
										<div className="single-progress-txt">
                                            <ProgressBar now={90} />
											<h3>90%</h3>	
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>	
				</div>

		</section>  )
}

export default Skills