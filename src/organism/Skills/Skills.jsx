import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

const data = [
    {id: 1, skill: 'SAP', ratingOutOfTen: 9},
    {id: 2, skill: 'Budgeting & Forecasting', ratingOutOfTen: 9},
    {id: 3, skill: 'Cash & Bank management', ratingOutOfTen: 8.5},
    {id: 4, skill: 'MS excel', ratingOutOfTen: 9.7},
    {id: 5, skill: 'Accounting & Book-keeping', ratingOutOfTen: 9},
    {id: 6, skill: 'Analytical skills', ratingOutOfTen: 8.5},
    {id: 7, skill: 'Hyperion', ratingOutOfTen: 9.7},
    {id: 8, skill: 'Tally ERP9', ratingOutOfTen: 9},
];

const SkillCard = (props)=>{
    const {skill, ratingOutOfTen} = props || {};
    return (
        <div className="barWrapper">
        <span className="progressText">{skill}</span>
        <div className="single-progress-txt">
            <ProgressBar now={ratingOutOfTen*10} />
            <h3>{ratingOutOfTen*10}%</h3>	
        </div>
    </div>

    )
}

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
                                    {data.slice(0, 4).map((item) => (
                                        <SkillCard key={item.id} {...item} />
                                    ))}
								</div>
							</div>
							<div className="col-md-6">
								<div className="single-skill-content">
                                    {data.slice(4, 8).map((item) => (
                                        <SkillCard key={item.id} {...item} />
                                    ))}
								</div>
							</div>
						</div>
					</div>	
				</div>

		</section>  )
}

export default Skills