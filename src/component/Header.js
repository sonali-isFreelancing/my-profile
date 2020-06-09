import React from 'react'
import one from '../assets/img/newest-profile.jpg'
import two from '../assets/img/portfolio/promodIndia.jpg'
import { FaWhatsappSquare } from "react-icons/fa";

function Header() {
    return(
        <div>
        <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu"></i></button>

  
  <header id="header">
    <div className="d-flex flex-column">

      <div className="profile">
        <img src={one} alt="" className="img-fluid rounded-circle" />
        <h1 className="text-light"><a href="index.html">Sonali</a></h1>
        {/* <div className="social-links mt-3 text-center">
          <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
          <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
          <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
          <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
          <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
        </div> */}
      </div>

      <nav className="nav-menu">
        <ul>
          <li className="active"><a href="#hero"><i className="bx bx-home"></i> <span>Home</span></a></li>
          <li><a href="#about"><i className="bx bx-user"></i> <span>About</span></a></li>
          <li><a href="#portfolio"><i className="bx bx-book-content"></i> Portfolio</a></li>
          <li><a href="#services"><i className="bx bx-server"></i> Services</a></li>
          <li><a href="#contact"><i className="bx bx-envelope"></i> Contact</a></li>

        </ul>
      </nav>
      <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu"></i></button>

    </div>
  </header>

  
  <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
    <div className="hero-container" data-aos="fade-in">
      <h1>Sonali</h1>
      <p>I'm Developer and Freelancer</p>
    </div>
  </section>

  <main id="main">

    
    <section id="about" className="about">
      <div className="container">

        <div className="section-title">
          <h2>About</h2>
          <p>I am a full stack developer with over 7 years of experience in the industry. During these year I got a chance to work with some big names and critical projects. Freelancing is my hobby so here I am with this profile</p>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src={one} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Full Stack Developer</h3>
            <p className="font-italic">
              Below are my personal details
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="icofont-rounded-right"></i> <strong>Charges:</strong> 10$ per hour</li>
                  <li><i className="icofont-rounded-right"></i> <strong>Website:</strong> www.example.com</li>
                  <li><i className="icofont-rounded-right"></i> <strong>Frelance:</strong> Available</li>
                  <li><i className="icofont-rounded-right"></i> <strong>City:</strong> New Delhi, India</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="icofont-rounded-right"></i> <strong>Age:</strong> 30</li>
                  <li><i className="icofont-rounded-right"></i> <strong>Degree:</strong> Master</li>
                  <li><i className="icofont-rounded-right"></i> <strong>Email:</strong> sonali.isfreelancing@gmail.com</li>
                  <li><i className="icofont-rounded-right"></i> <strong>Phone:</strong> +919654441627</li>
                </ul>
              </div>
            </div>
            <p>
              I have 100% availability on weekends and 30% on weekdays, but I can prioritize according to the given work.
            </p>
          </div>
        </div>

      </div>
    </section>
    
    <section id="skills" className="skills section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Skills</h2>
          <p>Below is my skill set</p>
        </div>

        <div className="row skills-content">

          <div className="col-lg-6" data-aos="fade-up">

            <div className="progress">
              <span className="skill">HTML <i className="val">90%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">Java <i className="val">100%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">JavaScript <i className="val">75%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">

            <div className="progress">
              <span className="skill">React js <i className="val">60%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">SQL <i className="val">90%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">Spring <i className="val">70%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>

    
    

    
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Below are some of my live projects which I have done</p>
        </div>

        <div className="row" data-aos="fade-up">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src={two} className="img-fluid" alt="" />
              <div className="portfolio-links">
                {/* <a href={two} data-gall="portfolioGallery" className="venobox" title="Web 3"><i className="bx bx-plus"></i></a> */}
                <a href="https://anand89pandey.github.io/Momentum/#/" title="More Details"><i className="bx bx-link"></i></a>
              </div>
              {/* <ul>
                  <li href="https://anand89pandey.github.io/Momentum/#/">Parmod India</li>
              </ul> */}
            </div>
          </div>

        </div>

      </div>
    </section>

    
    <section id="services" className="services">
      <div className="container">

        <div className="section-title">
          <h2>Services</h2>
          <p>Below are the areas in which I have expertise, but incase your requirement does not fall in below category then also please feel free to contact me.</p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
            <div className="icon"><i className="icofont-computer"></i></div>
            <h4 className="title"><a href="">Programming</a></h4>
            <p className="description">If you need help in existing software/program or assignments I would be more than happy to help</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
            <div className="icon"><i className="icofont-chart-bar-graph"></i></div>
            <h4 className="title"><a href="">Websites</a></h4>
            <p className="description">If you need websites you can contact me. I also have a small team with me so incase you are creating something big don't hesitate to cantact me.</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
            <div className="icon"><i className="icofont-earth"></i></div>
            <h4 className="title"><a href="">Databases</a></h4>
            <p className="description">Need any help regarding normal sql or database programming you can contact me.</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
            <div className="icon"><i className="icofont-image"></i></div>
            <h4 className="title"><a href="">Apps</a></h4>
            <p className="description">In case you need a react native app you can buzz me.</p>
          </div>
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
            <div className="icon"><i className="icofont-settings"></i></div>
            <h4 className="title"><a href="">Project for Students</a></h4>
            <p className="description">Engineering students who need project/programs for their semesters can please contact me. I will be more than happy in assisting with the project and preparing you for VIVA</p>
          </div>
          
        </div>

      </div>
    </section>

    
    <section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
          <h2>Contact</h2>
          <p>Below is my email and phone no. The quota for mails from the below message box is full so I will not recieve messages from there, you can whatsapp or mail me.</p>
        </div>

        <div className="row" data-aos="fade-in">

          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="email">
                <i className="icofont-envelope"></i>
                <h4>Email:</h4>
                <p>sonali.isfreelancing@gmail.com</p>
              </div>

              <div className="phone">
                <i className="icofont-phone"></i>
                <h4>Call:</h4>
                <p>+91 9654441627</p>
              </div>
              <a
              className="whats-app"
              href="https://wa.me/919654441627"
              target="_blank"
            >
              <FaWhatsappSquare></FaWhatsappSquare>
            </a>

              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" style="border:0; width: 100%; height: 290px;" allowfullscreen></iframe> */}
            </div>

          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="name">Your Name</label>
                  <input type="text" name="name" className="form-control" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div className="validate"></div>
                </div>
                <div className="form-group col-md-6">
                  <label for="name">Your Email</label>
                  <input type="email" className="form-control" name="email" id="email" data-rule="email" data-msg="Please enter a valid email" />
                  <div className="validate"></div>
                </div>
              </div>
              <div className="form-group">
                <label for="name">Subject</label>
                <input type="text" className="form-control" name="subject" id="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                <div className="validate"></div>
              </div>
              <div className="form-group">
                <label for="name">Message</label>
                <textarea className="form-control" name="message" rows="10" data-rule="required" data-msg="Please write something for us"></textarea>
                <div className="validate"></div>
              </div>
              <div className="mb-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
            
          </div>

        </div>

      </div>
      
    </section>

  </main>
  </div>
       
    ) 
}

export default Header