import React from 'react';

const data = [
    {startYear:'2025', endYear: '2026', isPresent: true, designation: 'Senior Associate', company: 'Publicis Sapient', location : 'Gurugram, India', description: 'Worked as a Senior Software Engineer delivering enterprise-scale digital transformation solutions for global clients. Designed and developed modern web applications using React.js, TypeScript, and cloud-native technologies while focusing on scalability, performance, accessibility, and maintainable architecture. Collaborated with cross-functional teams to deliver high-quality user experiences. '},
    {startYear:'2021', endYear: '2025', isPresent: false, designation: 'Specialist programmer', company: 'Infosys LTD.', location : 'Chandigarh, India', description: 'Contributed to large-scale enterprise applications for global clients, including Walmart. Developed scalable frontend solutions using React.js and modern JavaScript frameworks, optimized application performance, and implemented reusable component architectures. Worked closely with stakeholders to deliver reliable and business-critical solutions. '},
    {startYear:'2017', endYear: '2021', isPresent: false, designation: 'Senior software engineer', company: 'Talkvalley LLC', location : 'Chandigarh, India', description: 'Started my professional software development journey by building web applications and learning modern software engineering practices. Worked on frontend and backend development, database integration, and client-focused solutions while strengthening core programming, problem-solving, and application development skills. '},
    {startYear:'2015', endYear: '2017', isPresent: false, designation: 'Associate IT', company: 'Daffodil Software PVT LTD', location : 'Gurgaon, India', description: 'Designed and developed full-stack web applications across multiple domains including healthcare, education, and enterprise technology. Built reusable UI components, REST APIs, real-time communication features, and cloud-integrated solutions while ensuring high code quality and maintainability. '},

];

const ExperienceCard = (props)=>{
  const {startYear, endYear, isPresent, designation, company, location, description} = props;
  return (
    <li>
    <div className="single-timeline-box fix">
        <div className="row">
            <div className="col-md-5">
                <div className="experience-time text-right">
                    <h2>{startYear} - {isPresent? 'Present': endYear} </h2>
                    <h3>{designation}</h3>
                </div>
            </div>
            <div className="col-md-offset-1 col-md-5">
                <div className="timeline">
                    <div className="timeline-content">
                        <h4 className="title">
                            <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                            {company}
                        </h4>
                        <h5>{location}</h5>
                        <p className="description">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</li>
  )  
};
const Experience = () => {
  return (
<section id="experience" className="experience">
			<div className="section-heading text-center">
				<h2>experience</h2>
			</div>
			<div className="container">
				<div className="experience-content">
						<div className="main-timeline">
							<ul>
                                {
                                    data.map((expObj, i)=>{
                                        return (
                                            <ExperienceCard key={i} {...expObj} />
                                        )
                                    })
                                }
							</ul>
						</div>
					</div>
			</div>

		</section>  )
}

export default Experience
