import React from 'react'

const data = [
    {startYear: 2008, endYear : 2010, degree: 'master of computer science', university: 'university of north carolina', location:'north carolina, USA', description: 'Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident. '},
    {startYear: 2008, endYear : 2010, degree: 'master of computer science', university: 'university of north carolina', location:'north carolina, USA', description: 'Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident. '},
    {startYear: 2008, endYear : 2010, degree: 'master of computer science', university: 'university of north carolina', location:'north carolina, USA', description: 'Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident. '},
]

const EducationCard = (props)=>{
    const {startYear, endYear, degree, university, location, description} = props;
    return (
        <div className="col-sm-4">
        <div className="single-horizontal-timeline">
            <div className="experience-time">
                <h2>{startYear} - {endYear}</h2>
                <h3>{degree}</h3>
            </div>
            <div className="timeline-horizontal-border">
                <i className="fa fa-circle" aria-hidden="true"></i>
                <span className="single-timeline-horizontal"></span>
            </div>
            <div className="timeline">
                <div className="timeline-content">
                    <h4 className="title">
                        {university}
                    </h4>
                    <h5>{location}</h5>
                    <p className="description">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    </div>
    )
}
const Education = () => {
  return (
<section id="education" className="education">
			<div className="section-heading text-center">
				<h2>education</h2>
			</div>
			<div className="container">
				<div className="education-horizontal-timeline">
					<div className="row">
                        {
                            data.map((educationObj, i)=>{
                                return (
                                    <EducationCard key={i} {...educationObj} />
                                )
                            })
                        }
					</div>
				</div>
			</div>

		</section>  )
}

export default Education
