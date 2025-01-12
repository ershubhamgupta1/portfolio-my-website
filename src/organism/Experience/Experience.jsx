import React from 'react';

const data = [
    {id: 1, startYear:'2021', isPresent: true, designation: 'Assistant Manager', company: 'Genpact India Pvt. Ltd', location : 'Noida, India', description: 'I manage monthly cash flow forecasts, variance analysis, and working capital projections while monitoring bank funds and handling FX deals. My responsibilities include SAP accounting tasks like posting transactions (F-02, F-05), managing dividends, royalties, loan payments, and bank reconciliations. I also interact with clients, banks, and auditors to ensure smooth financial operations and compliance.'},
    {id: 2, startYear:'2014', endYear: '2016', isPresent: false, designation: 'Article Assistant', company: 'Atul K Garg & Company', location : 'Delhi, India', description: 'I have gained extensive experience in audits, including tax audits, internal audits, concurrent audits, and statutory audits. My responsibilities also include preparing Form 15CA and 15CB, filing income tax and TDS returns for companies and individuals, finalizing books of accounts, and preparing balance sheets with notes to accounts. Additionally, I analyze draft financial statements prepared by clients to ensure accurate accounting and adequate expense provisioning.'},
    {id: 3, startYear:'2013', endYear: '2014', isPresent: false, designation: ' Article Assistant', company: 'Sanjay Vibha & Associates', location : 'Delhi, India', description: 'I have gained experience in internal audits, statutory audit. My work includes preparing Form 15CA and 15CB, filing income tax and TDS returns for companies and individuals, finalizing books of accounts, and preparing balance sheets with notes to accounts. I am also skilled in creating PowerPoint presentations to effectively communicate financial insights.'},
    // {id: 4, startYear:'2012', endYear: '2013', isPresent: false, designation: 'associate design director', company: 'hoplony tech limited', location : 'newyork, USA', description: 'Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident. '},
    // {id: 5, startYear:'2010', endYear: '2012', isPresent: false, designation: 'associate design director', company: 'hoplony tech limited', location : 'newyork, USA', description: 'Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident. '},

];

const ExperienceCard = (props)=>{
  const {startYear, endYear, isPresent, designation, company, location, description} = props || {};
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
                                    data.map((expObj)=>{
                                        return (
                                            <ExperienceCard key={expObj.id} {...expObj} />
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
