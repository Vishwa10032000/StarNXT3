import './Contact.css'
import contactImage from '../../assets/contactImage.png'

const Contact = () => {
  return (
    <section
      id="contact"
      className="contact"
    >
      <div className="row">
        {/* Image */}
        <div
          className="col-md-6 mb-2"
        >
          <div className="contact-image-container">
            <img
              src={contactImage}
              alt="Contact"
              className="contact-image"
            />
          </div>
        </div>

        {/* Form */}
        <div
          className="col-md-6 mb-2"
        >
          <div className="contact-form-container">
            <h2 className="contact-title" >
              Get in Touch with Us
            </h2>
            <p className="contact-description">
              We would love to hear from you! Whether you have a question, feedback, 
              or just want to say hello, our friendly team is here to assist you.
            </p>

            <form className="contact-form">
              <div className="row">
                {[
                  { type: 'text', placeholder: 'Company', col: 'col-md-6' },
                  { type: 'text', placeholder: 'Your Name', col: 'col-md-6' },
                  { type: 'text', placeholder: 'Phone Number', col: 'col-md-6' },
                  { type: 'email', placeholder: 'Email', col: 'col-md-6' },
                ].map((field, i) => (
                  <div className={`${field.col} mb-3`} key={i}>
                    <input type={field.type} placeholder={field.placeholder} className="contact-input" />
                  </div>
                ))}

                <div className="col-md-12 mb-3">
                  <textarea placeholder="How can we help you?" className="contact-input" />
                </div>

                <div className="col-md-12 mb-3">
                  <div className="contact-checkbox-container">
                    <input type="checkbox" className="contact-checkbox" /> I agree to the{' '}
                    <a href="#">Terms and Conditions</a>
                  </div>
                </div>

                <div className="col-md-12 mb-3">
                  <div className="d-flex align-items-center justify-content-center">
                    <button
                      className="contact-btn"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
