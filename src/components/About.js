import React from 'react';

const About = () => {
  const keyFeatures = [
    'ATS-Friendly Resume Writing',
    'Professional Cover Letters',
    'Creative Graphic Design Solutions',
    'Custom Website Development',
    'Standard Operating Procedures (SOPs)',
    'Professional Company Brochures'
  ];

  const handleWhatsAppRedirect = () => {
    // Replace with your actual WhatsApp number
    const phoneNumber = "917207165639"; // Replace with your WhatsApp business number
    const message = "Hi! I'm interested in your professional services. Could you please provide more information?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="section secPadding">
      <div className="container">
        <h1 id="about" className="text-center title">About Elite Services</h1>
        <div className="space"></div>
        
        <div className="row">
          <div className="col-md-6">
            <img src="/images/section-image-1.png" alt="Professional Services" />
            <div className="space"></div>
          </div>
          <div className="col-md-6">
            <p>
              Elite Services is your trusted partner for professional document creation and creative design solutions. 
              We specialize in crafting ATS-friendly resumes, compelling cover letters, and stunning graphic designs 
              that help individuals and businesses achieve their goals.
            </p>
            <ul className="list-unstyled">
              {keyFeatures.map((feature, index) => (
                <li key={index}>
                  <i className="fa fa-check-circle pr-10 colored"></i> {feature}
                </li>
              ))}
            </ul>
            <div className="space"></div>
          </div>
        </div>
        
        <div className="space"></div>
        <div className="text-center">
          <button 
            className="btn btn-primary btn-lg"
            onClick={handleWhatsAppRedirect}
          >
            <i className="fa fa-whatsapp"></i> Contact Us on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
