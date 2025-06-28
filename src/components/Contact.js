import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "917207165639";
    const message = `Hello! My name is ${formData.name} (%20${formData.email}).%0A${formData.message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      {/* WhatsApp Floating Icon */}
      <a
        href="https://wa.me/917207165639"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          zIndex: 9999,
          background: 'white',
          borderRadius: '50%',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          padding: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '56px',
          height: '56px',
        }}
        aria-label="Chat on WhatsApp"
      >
        <img src={process.env.PUBLIC_URL + '/images/whatsapp.png'} alt="WhatsApp" style={{ width: '36px', height: '36px' }} />
      </a>
      <footer id="footer">
        <div className="footer section">
          <div className="container">
            <h1 className="title text-center" id="contact">Contact Us</h1>
            <div className="space"></div>
            <div className="row">
              <div className="col-sm-6">
                <div className="footer-content">
                  <form id="footer-form" onSubmit={handleSubmit}>
                    <div className="form-group has-feedback">
                      <label className="sr-only" htmlFor="name2">Name</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="name2" 
                        placeholder="Name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleInputChange}
                        required 
                      />
                      <i className="fa fa-user form-control-feedback"></i>
                    </div>
                    <div className="form-group has-feedback">
                      <label className="sr-only" htmlFor="email2">Email address</label>
                      <input 
                        type="email" 
                        className="form-control" 
                        id="email2" 
                        placeholder="Enter email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        required 
                      />
                      <i className="fa fa-envelope form-control-feedback"></i>
                    </div>
                    <div className="form-group has-feedback">
                      <label className="sr-only" htmlFor="message2">Message</label>
                      <textarea 
                        className="form-control" 
                        rows="8" 
                        id="message2" 
                        placeholder="Message" 
                        name="message" 
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      ></textarea>
                      <i className="fa fa-pencil form-control-feedback"></i>
                    </div>
                    <input type="submit" value="Send" className="btn btn-default" />
                  </form>
                </div>
              </div>
              
              <div className="col-sm-6">
                <div className="footer-content">
                  <div className="widget-content">
                    <p>
                      Welcome to Elite Services! We specialize in creating professional ATS-friendly 
                      resumes, cover letters, and providing creative design solutions. Our team is 
                      dedicated to helping you achieve your career goals with high-quality, 
                      customized services.
                    </p>
                    <br />
                    
                    <p className="contacts">
                      <i className="fa fa-map-marker"></i> Hyderabad, India
                    </p>
                    
                    <p className="contacts">
                      <i className="fa fa-phone"></i> +91 72071 65639
                    </p>
                    
                    <p className="contacts">
                      <i className="fa fa-envelope"></i> elitedrafts.services@gmail.com
                    </p>
                  </div>
                  
                  <ul className="social-links">
                    <li className="facebook">
                      <a target="_blank" href="https://facebook.com/" rel="noopener noreferrer">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li className="twitter">
                      <a target="_blank" href="https://twitter.com/" rel="noopener noreferrer">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li className="googleplus">
                      <a target="_blank" href="https://plus.google.com/" rel="noopener noreferrer">
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li className="linkedin">
                      <a target="_blank" href="https://linkedin.com/" rel="noopener noreferrer">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
