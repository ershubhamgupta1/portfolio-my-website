import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

const data = [
    {skill: 'adobe photoshop', ratingOutOfTen: 9},
    {skill: 'html 5', ratingOutOfTen: 9},
    {skill: 'css 3 animation', ratingOutOfTen: 8.5},
    {skill: 'communication', ratingOutOfTen: 9.7},
    {skill: 'creativity', ratingOutOfTen: 9},
    {skill: 'adobe illustrator', ratingOutOfTen: 8.5},
    {skill: 'adobe after effects', ratingOutOfTen: 9.7},
    {skill: 'sketch', ratingOutOfTen: 9},
];

const SkillCard = (props)=>{
    const {skill, ratingOutOfTen} = props;
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
                                    {data.slice(0, 4).map((item, index) => (
                                        <SkillCard key={index} {...item} />
                                    ))}
								</div>
							</div>
							<div className="col-md-6">
								<div className="single-skill-content">
                                    {data.slice(4, 8).map((item, index) => (
                                        <SkillCard key={index} {...item} />
                                    ))}
								</div>
							</div>
						</div>
					</div>	
				</div>

		</section>  )
}

export default Skills