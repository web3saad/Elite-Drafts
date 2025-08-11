import React from 'react';

const WelcomeSection = () => {
  const logos = [
    { src: '/images/wipro.jpg', alt: 'Wipro' },
    { src: '/images/infosys.png', alt: 'Infosys' },
    { src: '/images/adobe.png', alt: 'Adobe' },
    { src: '/images/amazon.png', alt: 'Amazon' },
    { src: '/images/google.webp', alt: 'Google' },
  ];

  const isMobile = window.innerWidth <= 768;

  return (
    <section className="hero-caption secPadding" style={{ backgroundColor: '#f9f9f9', padding: isMobile ? '30px 10px' : '60px 0' }}>
      <div className="container text-center">
        <h2 style={{ fontSize: isMobile ? '20px' : '32px', fontWeight: '600', color: '#333' }}>
          Trusted by <strong style={{ color: '#007bff' }}>Partners</strong>
        </h2>
        <div 
          className="partner-logos" 
          style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            gap: isMobile ? '15px' : '40px',
            marginTop: '25px'
          }}
        >
          {logos.map((logo, index) => (
            <img 
              key={index}
              src={logo.src} 
              alt={logo.alt} 
              style={{ 
                height: isMobile ? '40px' : '60px',
                objectFit: 'contain',
                maxWidth: '120px',
              }} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
