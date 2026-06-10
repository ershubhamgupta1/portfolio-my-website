import React, {useState} from 'react'

const Contact = () => {
	console.log("enter in contact")
	const [form, setForm] = useState({
	name: '',
	email: '',
	subject: '',
	message: ''
	});
	const handleSubmit = (e) => {
		e.preventDefault();

		const subject = encodeURIComponent(form.subject);
		const body = encodeURIComponent(`
		Name: ${form.name}
		Email: ${form.email}

		${form.message}
		`);
		console.log("ready to set windlow locarion")	
		window.location.href =
			`mailto:ershubhamgupta1@gmail.com?subject=${subject}&body=${body}`;
	};
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
									<form onSubmit={handleSubmit}>
										<div className="row">
											<div className="col-sm-6 col-xs-12">
												<div className="form-group">
												  <input 
												  	type="text" 
													value={form.name}
													onChange={(e) =>
														setForm({ ...form, name: e.target.value })
													} 
													className="form-control" id="name" placeholder="Name*" name="name" />
												</div>
											</div>
											<div className="col-sm-6 col-xs-12">
												<div className="form-group">
													<input 
														value={form.email}
														onChange={(e) =>
															setForm({ ...form, email: e.target.value })
														} 
														type="email" 
														className="form-control" 
														id="email" 
														placeholder="Email*" 
														name="email" 
													/>
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-sm-12">
												<div className="form-group">
													<input 
														type="text" 
														className="form-control" 
														id="subject" 
														placeholder="Subject" 
														name="subject"
														value={form.subject}
														onChange={(e) =>
															setForm({ ...form, subject: e.target.value })
														}
													/>
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-sm-12">
												<div className="form-group">
													<textarea 
														value={form.message}
														onChange={(e) =>
															setForm({ ...form, message: e.target.value })
														}
														className="form-control" rows="8" id="comment" placeholder="Message" ></textarea>
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col-sm-12">
												<div className="single-contact-btn">
													<button className="contact-btn" href="/" type="submit" role="button">submit</button>
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
										<h3>Shubham Gupta</h3>
										<p>Web Developer</p>
									</div>
									<div className="contact-add-info">
										<div className="single-contact-add-info">
											<h3>phone</h3>
											<p>+91-90501-49160</p>
										</div>
										<div className="single-contact-add-info">
											<h3>email</h3>
											<p>ershubhamgupta1@gmail.com</p>
										</div>
										<div className="single-contact-add-info">
											<h3>website</h3>
											<p>shubham-dev-nine.vercel.app</p>
										</div>
									</div>
								</div>
								<div className="hm-foot-icon">
									<ul>
										<li><a href="/"><i className="fa fa-facebook"></i></a></li>
										<li><a href="/"><i className="fa fa-dribbble"></i></a></li>
										<li><a href="/"><i className="fa fa-twitter"></i></a></li>
										<li><a href="/"><i className="fa fa-linkedin"></i></a></li>
										<li><a href="/"><i className="fa fa-instagram"></i></a></li>
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
