import React from 'react';

const data = [
    {startYear:'2018', isPresent: true, designation: 'creative director', company: 'hoplony tech limited', location : 'newyork, USA', description: 'Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident. '},
    {startYear:'2016', endYear: '2018', isPresent: false, designation: 'associate design director', company: 'hoplony tech limited', location : 'newyork, USA', description: 'Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident. '},
    {startYear:'2013', endYear: '2016', isPresent: false, designation: 'associate design director', company: 'hoplony tech limited', location : 'newyork, USA', description: 'Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident. '},
    {startYear:'2012', endYear: '2013', isPresent: false, designation: 'associate design director', company: 'hoplony tech limited', location : 'newyork, USA', description: 'Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident. '},
    {startYear:'2010', endYear: '2012', isPresent: false, designation: 'associate design director', company: 'hoplony tech limited', location : 'newyork, USA', description: 'Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident. '},

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
