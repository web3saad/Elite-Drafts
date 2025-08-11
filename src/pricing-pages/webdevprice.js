import React from 'react';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
  const navigate = useNavigate();

  const handleWhatsAppOrder = (planTitle, price) => {
    const phoneNumber = "917207165639";
    const message = `Hi! I'm interested in the ${planTitle} Website Development package (${price}). Please provide more details and help me get started.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const plans = [
    {
      title: 'Basic',
      price: '₹4,999',
      features: [
        'Responsive Landing Page',
        'Mobile-Friendly Design',
        'Basic SEO Setup',
        'Contact Form Integration',
        '7-Day Delivery'
      ]
    },
    {
      title: 'Professional',
      price: '₹7,999',
      features: [
        'Everything in Basic',
        'Multi-Page Website (5 pages)',
        'Custom Domain Setup',
        'Google Analytics Integration',
        'Social Media Integration',
        '2 Revision Rounds'
      ]
    },
    {
      title: 'E-Commerce',
      price: '₹15,999',
      features: [
        'Everything in Professional',
        'Online Store Setup',
        'Payment Gateway Integration',
        'Product Management System',
        'Order Tracking',
        '30-Day Support'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Priya R.',
      feedback: 'Elite Services created a stunning website for my business. The design is modern and mobile-friendly!'
    },
    {
      name: 'Amit S.',
      feedback: 'Their e-commerce solution helped me launch my online store seamlessly. Great customer support!'
    },
    {
      name: 'Neha T.',
      feedback: 'Professional website delivery within the promised timeframe. Highly recommended for small businesses!'
    }
  ];

  return (
    <section className="pricing-section py-5" style={{ background: '#f4f7fa' }}>
      <div className="container">
        <div className="mb-4">
          <button
            onClick={() => navigate('/')}
            className="btn btn-outline-secondary d-flex align-items-center gap-2"
          >
            <i className="fa fa-arrow-left"></i>
            Back to Home
          </button>
        </div>

        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ fontSize: '36px' }}>Website Development Pricing</h2>
          <p className="text-muted">Choose the package that best suits your business needs</p>
        </div>

        <div className="card shadow-sm border-0 rounded-4 p-4">
          <div className="row text-center">
            {plans.map((plan, index) => (
              <div className="col-md-4 mb-4 mb-md-0" key={index}>
                <div className="p-3">
                  <h4 className="fw-semibold text-uppercase" style={{ fontSize: '20px' }}>{plan.title}</h4>
                  <h3 className="fw-bold text-primary" style={{ fontSize: '32px' }}>{plan.price}</h3>
                  <ul className="list-unstyled text-muted mt-3 mb-3" style={{ fontSize: '14px', lineHeight: '2' }}>
                    {plan.features.map((feature, idx) => (
                      <li key={idx}>✔ {feature}</li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handleWhatsAppOrder(plan.title, plan.price)}
                    className="btn btn-primary btn-sm px-4 py-2"
                  >
                    <i className="fa fa-whatsapp me-2"></i>Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Website Samples Section */}
        <div className="text-center mt-5 mb-5">
          <h3 className="fw-bold mb-4">Our Website Samples</h3>
          <div className="row">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div className="col-md-4 mb-4" key={num}>
                <div 
                  className="sample-image-container" 
                  style={{ 
                    position: 'relative', 
                    overflow: 'hidden', 
                    borderRadius: '10px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  }}
                >
                  <img
                    src={`/images/w${num}.jpeg`}
                    alt={`Website Sample ${num}`}
                    style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1)';
                    }}
                  />
                  {/* Watermark */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      right: '0',
                      bottom: '0',
                      background: 'linear-gradient(45deg, transparent 40%, rgba(0,123,255,0.1) 50%, transparent 60%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      pointerEvents: 'none'
                    }}
                  >
                    <div
                      style={{
                        color: 'rgba(0,123,255,0.3)',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        transform: 'rotate(-45deg)',
                        userSelect: 'none',
                        textShadow: '1px 1px 2px rgba(255,255,255,0.5)'
                      }}
                    >
                      ELITE SERVICES
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-5">
          <h3 className="fw-bold mb-4">What Our Clients Say</h3>
          <div className="row">
            {testimonials.map((testimonial, idx) => (
              <div className="col-md-4 mb-4" key={idx}>
                <div className="bg-white rounded-4 p-4 shadow-sm h-100">
                  <p className="fst-italic text-secondary">“{testimonial.feedback}”</p>
                  <p className="fw-semibold mt-3 mb-0 text-dark">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
