import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GraphicDesignPricing = () => {
  const navigate = useNavigate();

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleWhatsAppOrder = (planTitle, price) => {
    const phoneNumber = "917207165639";
    const message = `Hi! I'm interested in the ${planTitle} graphic design package (${price}). Please provide more details and help me get started.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const plans = [
    {
      title: 'Basic Design',
      price: '₹399',
      features: [
        '1 Logo or Banner Design',
        '1 Revision',
        'Delivery in 2 Days',
        'High Resolution Output'
      ]
    },
    {
      title: 'Standard Design',
      price: '₹499',
      features: [
        'Up to 3 Graphics (Logo, Poster, Brochure)',
        '2 Revisions',
        'Delivery in 3 Days',
        'Source Files Included'
      ]
    },
    {
      title: 'Premium Design',
      price: '₹599',
      features: [
        '5 Graphics Package',
        'Unlimited Revisions',
        'Delivery in 3-4 Days',
        'Commercial Use Rights'
      ]
    }
  ];

  return (
    <section className="pricing-section py-5" style={{ background: '#fdfdfd' }}>
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
          <h2 className="fw-bold" style={{ fontSize: '36px' }}>Graphic Design Pricing</h2>
          <p className="text-muted">Flexible design packages to suit your creative needs</p>
        </div>

        <div className="card shadow-sm border-0 rounded-4 p-4">
          <div className="row text-center">
            {plans.map((plan, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="p-3">
                  <h4 className="fw-semibold" style={{ fontSize: '20px' }}>{plan.title}</h4>
                  <h3 className="fw-bold text-danger" style={{ fontSize: '30px' }}>{plan.price}</h3>
                  <ul className="list-unstyled text-muted mt-3 mb-3" style={{ fontSize: '14px', lineHeight: '2' }}>
                    {plan.features.map((feature, idx) => (
                      <li key={idx}>✔ {feature}</li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handleWhatsAppOrder(plan.title, plan.price)}
                    className="btn btn-danger btn-sm px-4 py-2"
                  >
                    <i className="fa fa-whatsapp me-2"></i>Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="text-center mt-5">
          <h3 className="fw-bold mb-4">What Our Clients Say</h3>
          <div className="row justify-content-center">
            {[
              {
                name: 'Rohit D.',
                feedback: 'The logo and brochure design exceeded my expectations. Fast delivery and creative work!'
              },
              {
                name: 'Sneha P.',
                feedback: 'Elite Services gave my brand a fresh, professional look. Highly recommended for startups.'
              },
              {
                name: 'Vikram S.',
                feedback: 'Great attention to detail and unlimited revisions. My business cards look amazing!'
              }
            ].map((testimonial, idx) => (
              <div className="col-md-4 mb-4 d-flex align-items-stretch" key={idx}>
                <div style={{
                  background: 'linear-gradient(135deg, #f8fafc 80%, #e3eafc 100%)',
                  borderRadius: '18px',
                  boxShadow: '0 6px 32px rgba(0,0,0,0.08)',
                  padding: '32px 24px',
                  minHeight: '260px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  position: 'relative',
                  border: '1px solid #f0f4fa'
                }}>
                  <i className="fa fa-quote-left" style={{ fontSize: '32px', color: '#007bff', marginBottom: '18px', opacity: 0.2 }}></i>
                  <p style={{ fontStyle: 'italic', fontSize: '17px', color: '#333', marginBottom: '18px', flex: 1 }}>
                    “{testimonial.feedback}”
                  </p>
                  <hr style={{ width: '40%', borderTop: '1.5px solid #e0e6ed', margin: '12px auto' }} />
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '8px' }}>
                    <div style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      background: '#e3eafc',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      color: '#007bff',
                      fontSize: '18px',
                      textTransform: 'uppercase'
                    }}>{testimonial.name.split(' ').map(n => n[0]).join('')}</div>
                    <span style={{ fontWeight: 600, color: '#222', fontSize: '15px' }}>{testimonial.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GraphicDesignPricing;
