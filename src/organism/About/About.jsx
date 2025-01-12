import React from 'react'

const About = () => {
  return (
    <section id="about" className="about">
    <div className="section-heading text-center">
        <h2>about me</h2>
    </div>
    <div className="container">
        <div className="about-content">
            <div className="row">
                <div className="col-sm-6">
                    <div className="single-about-txt">
                        <h3>
                        I am a Chartered Accountant with 3+ years of experience as Assistant Manager at Genpact.
                        </h3>
                        <p>
                            My specialisation are Treasury based activities, managing and optimizing Cash flow for various account of clients, Forecasting the Cash flow, investing the idle funds , Fx deals with Bank, Bank reconciliations, Bank payments, handling audit queries and client interaction.Adept at in-depth reporting to client.                        
                        </p>
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="single-about-add-info">
                                    <h3>phone</h3>
                                    <p>9050149160</p>
                                </div>
                            </div>
                            <div className="col-sm-5">
                                <div className="single-about-add-info">
                                    <h3>email</h3>
                                    <p>bansalmadhuri0@gmail.com</p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="single-about-add-info">
                                    <h3>website</h3>
                                    <p>www.camadhuri.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-offset-1 col-sm-5">
                    <div className="single-about-img">
                        <img src="assets/images/about/profile_image.jpg" alt="profile_image" />
                        <div className="about-list-icon">
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/madhuri.bansal.395">
                                        <i  className="fa fa-facebook" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/ca-madhuri-bansal-03760a10b/">
                                        <i  className="fa fa-dribbble" aria-hidden="true"></i>
                                    </a>
                                    
                                </li>
                                <li>
                                    <a href="https://twitter.com">
                                        <i  className="fa fa-twitter" aria-hidden="true"></i>
                                    </a>
                                    
                                </li>
                                <li>
                                    <a href="https://linkedin.com/in/shubham-mern-stack-dev">
                                        <i  className="fa fa-linkedin" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://instagram.com/">
                                        <i  className="fa fa-instagram" aria-hidden="true"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    )
}

export default About
