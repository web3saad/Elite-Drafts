import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceItem = ({ icon, title, description, onClick }) => {
  return (
    <div
      className="service-card-wrapper"
      style={{
        width: '48%',
        margin: '1%',
        boxSizing: 'border-box',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      <div
        className="service-card"
        style={{
          backgroundColor: '#fff',
          borderRadius: '10px',
          padding: '20px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          transition: 'all 0.3s ease',
          height: '100%',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '15px' }}>
          <i
            className={`fa ${icon}`}
            style={{ fontSize: '32px', color: '#007bff' }}
          ></i>
        </div>
        <h3
          style={{
            fontSize: '18px',
            textAlign: 'center',
            marginBottom: '10px',
            color: '#333',
            fontWeight: 600,
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: '14px',
            textAlign: 'center',
            color: '#555',
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

const Services = () => {
  const navigate = useNavigate();
  
  const services = [
    {
      icon: 'fa-file-text-o',
      title: 'ATS-Friendly Resume',
      description:
        'Professional resumes that pass ATS and highlight key skills.',
    },
    {
      icon: 'fa-envelope-o',
      title: 'Cover Letter',
      description:
        'Personalized cover letters to attract hiring managers.',
    },
    {
      icon: 'fa-paint-brush',
      title: 'Graphic Design',
      description:
        'Creative branding, logos, brochures and visual assets.',
    },
    {
      icon: 'fa-code',
      title: 'Website Development',
      description:
        'Modern, responsive, and fast websites for your business.',
    },
    {
      icon: 'fa-list-alt',
      title: 'SOP Documentation',
      description:
        'Clear SOPs to optimize your business operations and workflows.',
    },
    {
      icon: 'fa-book',
      title: 'Company Brochures',
      description:
        'Elegant brochures to present your services and story.',
    },
  ];

  const handleServiceClick = (serviceName) => {
    if (serviceName === 'ATS-Friendly Resume') {
      // Navigate to ATS Resume pricing page
      navigate('/ats-resume-pricing');
    } else if (serviceName === 'Website Development') {
      // Navigate to Website Development pricing page
      navigate('/website-development-pricing');
    } else if (serviceName === 'Cover Letter') {
      // Navigate to Cover Letter pricing page
      navigate('/cover-letter-pricing');
    } else if (serviceName === 'Graphic Design') {
      // Navigate to Graphic Design pricing page
      navigate('/graphic-design-pricing');
    } else {
      // Placeholder for other services
      alert(`More details about ${serviceName} coming soon!`);
    }
  };

  return (
    <section id="services" className="section transprant-bg pclear secPadding" style={{ padding: '40px 0' }}>
      <div className="container object-visible" data-animation-effect="fadeIn">
        <h1 className="title text-center" style={{ fontSize: '32px', marginBottom: '10px' }}>
          Our Professional Services
        </h1>
        <p
          className="text-center"
          style={{
            fontSize: '16px',
            maxWidth: '600px',
            margin: '0 auto 30px',
            color: '#ffffff',
          }}
        >
          Explore our tailored services crafted to meet your career and business needs.
        </p>

        <div
          className="services-grid"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            padding: '0 10px',
          }}
        >
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              onClick={() => handleServiceClick(service.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
