import React, { useState } from 'react'

const Contact = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [subject, setSubject] = useState();
    const [message, setMessage] = useState();


    const handleSubmit = ()=>{
        console.log('in submit')
    // Collect form data
    // const name = document.getElementById("name").value;
    // const email = document.getElementById("email").value;
    // const message = document.getElementById("message").value;

    const name = 'shubham';
    const email = 'ershubhamgupta1@gmail.com';
    const message = 'Heelo from shubham'


    // Construct the mailto link
    const subject = encodeURIComponent(`Contact Form Submission from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    // Open Gmail with pre-filled email
    // window.location.href = `mailto:your-email@gmail.com?subject=${subject}&body=${body}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=bansalmadhuri0@gmail.com@gmail.com&su=${subject}&body=${body}`;

    // Open Gmail compose window in a new tab
    window.open(gmailUrl, '_blank');

    }
  return (
<section id="contact" className="contact">
			<div className="section-heading text-center">
				<h2>contact me</h2>
			</div>
			<div className="container">
				<div className="contact-content">
					<div className="row">
						<div className="col-md-offset-1 col-md-5 col-sm-6">
							<div className="single-contact-box">
								<div className="contact-form">
									<form>
										<div className="row">
											<div className="col-sm-6 col-xs-12">
												<div className="form-group">
												  <input onChange={(e)=>{setName(e.target.value)}} type="text" className="form-control" id="name" placeholder="Name*" name="name" />
												</div>
											</div>
											<div className="col-sm-6 col-xs-12">
												<div className="form-group">
													<input onChange={(e)=>{setEmail(e.target.value)}} type="email" className="form-control" id="email" placeholder="Email*" name="email" />
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-sm-12">
												<div className="form-group">
													<input onChange={(e)=>{setSubject(e.target.value)}} type="text" className="form-control" id="subject" placeholder="Subject" name="subject" />
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-sm-12">
												<div className="form-group">
													<textarea className="form-control" rows="8" id="comment" placeholder="Message" ></textarea>
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-sm-12">
												<div className="single-contact-btn">
													<button onClick={handleSubmit} className="contact-btn">submit</button>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div className="col-md-offset-1 col-md-5 col-sm-6">
							<div className="single-contact-box">
								<div className="contact-adress">
									<div className="contact-add-head">
										<h3>CA Madhuri Bansal</h3>
										<p>Assistant Manager</p>
									</div>
									<div className="contact-add-info">
										<div className="single-contact-add-info">
											<h3>phone</h3>
											<p>9050149160</p>
										</div>
										<div className="single-contact-add-info">
											<h3>email</h3>
											<p>bansalmadhuri0@gmail.com</p>
										</div>
										<div className="single-contact-add-info">
											<h3>website</h3>
											<p>www.camadhuri.com</p>
										</div>
									</div>
								</div>
								<div className="hm-foot-icon">
									<ul>
										<li><a href="https://facebook.com"><i className="fa fa-facebook"></i></a></li>
										{/* <li><a href="https://www.linkedin.com/in/ca-madhuri-bansal-03760a10b/"><i className="fa fa-dribbble"></i></a></li> */}
										<li><a href="https://x.com/?mx=2"><i className="fa fa-twitter"></i></a></li>
										<li><a href="https://www.linkedin.com/in/ca-madhuri-bansal-03760a10b/"><i className="fa fa-linkedin"></i></a></li>
										<li><a href="https://www.instagram.com/"><i className="fa fa-instagram"></i></a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</section>  )
}

export default Contact
