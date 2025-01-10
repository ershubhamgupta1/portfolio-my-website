import logo from './logo.svg';
import './App.css';
import Header from './organism/Header/Header';
import Hero from './organism/Hero/Hero';
import About from './organism/About/About';
import Education from './organism/Education/Education';
import Skills from './organism/Skills/Skills';
import Experience from './organism/Experience/Experience';
import Profiles from './organism/Profiles/Profiles';
import Portfolio from './organism/Portfolio/Portfolio';
import Clients from './organism/Clients/Clients';
import Contact from './organism/Contacts/Contact';
import Footer from './organism/Footer/Footer';
import { useEffect } from 'react';
import $ from 'jquery'; // Assuming jQuery is installed via npm

function App() {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        document.querySelector('.return-to-top').style.display = 'block';
      } else {
        document.querySelector('.return-to-top').style.display = 'none';
      }
    };

    $('.return-to-top').bind('click', function (event) {
      $('html, body').animate({
				scrollTop: 0
			}, 1500);
			return false;

    });


    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    $('li.smooth-menu a').bind('click', function (event) {
      event.preventDefault();
      var anchor = $(this);
      const anchorHref = event.target.getAttribute('href'); // Get the href value
      const targetElement = document.querySelector(anchorHref); // Find the target element
      if (targetElement) {
        // Scroll smoothly to the target element
        window.scrollTo({
          top: targetElement.offsetTop, // Top offset of the element
          behavior: 'smooth',          // Smooth scrolling
        });
      }      

    });

    // Clean up to avoid duplicate bindings
    return () => {
      $('li.smooth-menu a').unbind('click');
    };
  }, []);
  return (
    <>
    <Header />
    <Hero />
    <About />
    <Education />
    <Skills />
    <Experience />
    <Profiles />
    <Portfolio />
    <Clients />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
