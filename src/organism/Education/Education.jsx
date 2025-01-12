import React from 'react'

const data = [
    {id: 1, startYear: undefined, endYear : 2020, degree: 'Chartered Accountant', university: 'Institute of Chartered Accountant of India', location:'Delhi, India', description: 'I am qualified Chartered Accountant, recognized for my expertise in financial management, auditing, taxation, and regulatory compliance. Completing the rigorous CA program.'},
    {id: 2, startYear: undefined, endYear : 2018, degree: 'Master of commerce', university: 'Indira Gandhi National Open University', location:'Delhi, India', description: 'I hold a Master of Commerce (M.Com) degree, which provided me with in-depth knowledge of advanced accounting, finance, and business management.'},
    {id: 3, startYear: undefined, endYear : 2015, degree: 'Bachelor of commerce', university: 'School of Open learning', location:'Delhi, India', description: 'I hold a Bachelor of Commerce (B.Com) degree, which provided me with a strong foundation in accounting, finance, business principles, and economics.'},
]

const EducationCard = (props)=>{
    const {startYear, endYear, degree, university, location, description} = props || {};
    return (
        <div className="col-sm-4">
        <div className="single-horizontal-timeline">
            <div className="experience-time">
                {
                    startYear &&
                    <h2>{startYear} - {endYear}</h2>
                }
                {
                    !startYear &&
                    <h2>{endYear}</h2>
                }
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
                            data.map((educationObj)=>{
                                return (
                                    <EducationCard key={educationObj.id} {...educationObj} />
                                )
                            })
                        }
					</div>
				</div>
			</div>

		</section>  )
}

export default Education
