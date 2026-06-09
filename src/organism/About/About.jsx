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
                            I'm a Senior Frontend Engineer and AI Application Developer specializing in React, Next.js, TypeScript, and scalable web solutions.
                        </h3>
                        <p>
                            I am a Full Stack Engineer with 11+ years of experience building scalable, high-performance web applications and enterprise solutions. My expertise includes React.js, Next.js, Node.js, TypeScript, and Azure Cloud. I have led development teams, designed enterprise-grade architectures, and delivered products across Healthcare, Finance, Media, and Real Estate domains. Passionate about clean code, performance optimization, and modern software design, I focus on creating intuitive user experiences and robust backend systems. Recently, I have been building AI-powered applications, RAG systems, and intelligent platforms that leverage Large Language Models to solve real-world business challenges.
                        </p>
                        <div className="row">
                            <div className="col-sm-6 single-about-add-info-container">
                                <div className="single-about-add-info">
                                    <h3>phone</h3>
                                    <p>+91-90501-49160</p>
                                </div>
                            </div>
                            <div className="col-sm-6 single-about-add-info-container">
                                <div className="single-about-add-info">
                                    <h3>email</h3>
                                    <p>ershubhamgupta1@gmail.com</p>
                                </div>
                            </div>
                            {/* <div className="col-sm-4 single-about-add-info-container">
                                <div className="single-about-add-info">
                                    <h3>website</h3>
                                    <p>www.shubhamgupta.com</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="col-sm-offset-1 col-sm-5">
                    <div className="single-about-img">
                        <img src="assets/images/about/profile-pic.png" alt="profile_image" />
                        <div className="about-list-icon">
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/shubhamgupta49160" target="_blank">
                                        <i  className="fa fa-facebook" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/ershubhamgupta1" target="_blank">
                                        <i  className="fa fa-dribbble" aria-hidden="true"></i>
                                    </a>
                                    
                                </li>
                                <li>
                                    <a href="https://github.com/ershubhamgupta1" target="_blank">
                                        <i  className="fa fa-github" aria-hidden="true"></i>
                                    </a>
                                    
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/shubham-gupta-3280a4123/" target="_blank">
                                        <i  className="fa fa-linkedin" aria-hidden="true"></i>
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
