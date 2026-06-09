import React from 'react'

const data = [
    {startYear: 2012, endYear : 2014, degree: 'master of computer science', university: 'Kurukshetra University, Kurukshetra', location:'Kurukshetra, India', description: 'Advanced my expertise in software engineering, system design, data structures, algorithms, and enterprise application development. Worked on complex software projects while strengthening analytical and technical skills. The program enhanced my ability to design scalable solutions and prepared me for building modern, high-performance applications.'},
    {startYear: 2009, endYear : 2012, degree: 'Bachelor of computer science', university: 'Kurukshetra University, Kurukshetra', location:'Kurukshetra, India', description: 'Built a strong foundation in computer science, software development, database management, and web technologies. Developed problem-solving and programming skills through academic projects involving C, C++, JavaScript, SQL, and web development fundamentals. Gained practical experience in software engineering principles and application development. '},
    // {startYear: 2008, endYear : 2010, degree: 'master of computer science', university: 'university of north carolina', location:'north carolina, USA', description: 'Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident. '},
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
