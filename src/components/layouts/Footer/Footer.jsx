import { Link } from 'react-router-dom'
import './Footer.css'
import { HashLink } from 'react-router-hash-link';
import StarNXTLogo from '../../../assets/starnxt-logo-v3.png'
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaTwitter } from 'react-icons/fa'


const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer
      className="footer"
    >
      <div className="row">
        <div className="col-lg-4 col-md-6 col-12 mb-3">
          <img
            src={StarNXTLogo}
            className="footer-logo"
            alt="StarNXT Logo"
          />
          <p className="footer-description">
            StarNXT is your trusted partner in IT solutions, dedicated to driving innovation and excellence. We specialize in delivering cutting-edge technology services that empower businesses to thrive in a digital world.
          </p>
        </div>

        <div className="col-lg-2 col-md-6 col-6 mb-3">
          <nav
            className=""
            aria-label="Footer navigation"
          >
            <h5 className="footer-title">
              Quick Links
            </h5>
            <div className="d-flex flex-wrap flex-column ">
              {/* Use pathname + hash so these work from any route */}
              <HashLink smooth to="/#hero" className="footer-link">Home</HashLink>
              <HashLink smooth to="/#about" className="footer-link">About</HashLink>
              <HashLink smooth to="/#services" className="footer-link">Services</HashLink>
              <HashLink smooth to="/#contact" className="footer-link">Contact</HashLink>

            </div>
          </nav>
        </div>

        <div className="col-lg-2 col-md-6 col-6 mb-3">
          <nav
            className=""
            aria-label="Social media links"
          >
            <h5 className="footer-title">
              Follow Us
            </h5>

            <div className="d-flex flex-wrap flex-column">
              <a
                className="footer-link"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="social-icon" /> LinkedIn
              </a>
              <a
                className="footer-link"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="social-icon" /> Twitter
              </a>
              <a
                className="footer-link"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="social-icon" /> Facebook
              </a>
              <a
                className="footer-link"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="social-icon" /> Instagram
              </a>
            </div>
          </nav>
        </div>

        <div className="col-lg-4 col-md-6 col-12 mb-3">
          <div className="footer-contact" >
            <h5 className="footer-title" >
              Our Address
            </h5>


            <address className="footer-address" >
              <p>
                <FaMapMarkerAlt className="contact-icon" />
                Covai Tech Park, Nehru Nagar West, Sitra, Coimbatore - 641014.
              </p>

              {/* <p>
                <FaPhoneAlt className="contact-icon" />
                <a className="footer-link" href="tel:+1234567890">+91 9626264112</a>
              </p> */}

              <p>
                <FaEnvelope className="contact-icon" />
                <a className="footer-link" href="mailto:starnxt25@gmail.com">starnxt25@gmail.com</a>
              </p>
            </address>

          </div>
        </div>

        {/* <h1 className="footer-title" >STARNXT</h1> */}


      </div>

      <div className="row">
        <div className="col-md-7 mb-2">
          <span className="footer-copyright" >
            © {year} StarNXT. All rights reserved.
          </span>
        </div>
        <div className="col-md-5">
          <span
            className="d-flex gap-3 flex-wrap justify-content-between"

          >
            <HashLink smooth to="/#hero" className="footer-copyright">Terms of Service</HashLink>
           <HashLink smooth to="/#hero" className="footer-copyright">Privacy Policy</HashLink>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
