import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CoverLetterPricing = () => {
  const navigate = useNavigate();
  const [region, setRegion] = React.useState('USD');
  const [loadingRegion, setLoadingRegion] = React.useState(true);

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Use ipapi.co to get country code
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        if (data && data.country_code === 'IN') {
          setRegion('INR');
        } else if (["AE","AR","SA","QA","OM","KW","BH"].includes(data.country_code)) {
          setRegion('INR');
        } else if (data.country_code === 'AU') {
          setRegion('AUD');
        } else {
          setRegion('USD');
        }
        setLoadingRegion(false);
      })
      .catch(() => {
        setRegion('USD');
        setLoadingRegion(false);
      });
  }, []);

  const handleWhatsAppOrder = (planTitle, price) => {
    const phoneNumber = "917207165639";
    const message = `Hi! I'm interested in the ${planTitle} cover letter package (${price}). Please provide more details and help me get started.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const plansINR = [
    {
      title: 'Starter Letter',
      price: '₹499',
      features: [
        '1 Customized Cover Letter',
        'Professional Language',
        'Delivery in 2 Days',
        'PDF & DOCX Formats'
      ]
    },
    {
      title: 'Advanced Letter',
      price: '₹599',
      features: [
        '2 Tailored Cover Letters',
        'Keyword Optimized for ATS',
        '1 Revision',
        'Delivery in 2-3 Days'
      ]
    },
    {
      title: 'Premium Letter',
      price: '₹699',
      features: [
        'Up to 3 Industry-Specific Letters',
        'Unlimited Revisions',
        'Personalized Strategy Guidance',
        'Delivery in 3 Days'
      ]
    }
  ];

  const plansUSD = [
    {
      title: 'Starter Letter',
      price: '$15',
      features: [
        '1 Customized Cover Letter',
        'Professional Language',
        'Delivery in 2 Days',
        'PDF & DOCX Formats'
      ]
    },
    {
      title: 'Advanced Letter',
      price: '$25',
      features: [
        '2 Tailored Cover Letters',
        'Keyword Optimized for ATS',
        '1 Revision',
        'Delivery in 2-3 Days'
      ]
    },
    {
      title: 'Premium Letter',
      price: '$35',
      features: [
        'Up to 3 Industry-Specific Letters',
        'Unlimited Revisions',
        'Personalized Strategy Guidance',
        'Delivery in 3 Days'
      ]
    }
  ];

  const plansAUD = [
    {
      title: 'Starter Letter',
      price: 'A$49',
      features: [
        '1 Customized Cover Letter',
        'Professional Language',
        'Delivery in 2 Days',
        'PDF & DOCX Formats'
      ]
    },
    {
      title: 'Advanced Letter',
      price: 'A$78',
      features: [
        '2 Tailored Cover Letters',
        'Keyword Optimized for ATS',
        '1 Revision',
        'Delivery in 2-3 Days'
      ]
    },
    {
      title: 'Premium Letter',
      price: 'A$99',
      features: [
        'Up to 3 Industry-Specific Letters',
        'Unlimited Revisions',
        'Personalized Strategy Guidance',
        'Delivery in 3 Days'
      ]
    }
  ];

  const plans = region === 'INR' ? plansINR : region === 'AUD' ? plansAUD : plansUSD;

  if (loadingRegion) {
    return (
      <section className="pricing-section py-5" style={{ background: '#fffaf6', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ color: '#333', fontSize: '20px', textAlign: 'center' }}>Loading pricing...</div>
      </section>
    );
  }

  return (
    <section className="pricing-section py-5" style={{ background: '#fffaf6' }}>
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
          <h2 className="fw-bold" style={{ fontSize: '36px' }}>Cover Letter Pricing</h2>
          <p className="text-muted">Professional cover letters tailored to your dream job</p>
        </div>

        <div className="card shadow-sm border-0 rounded-4 p-4">
          <div className="row text-center">
            {plans.map((plan, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="p-3">
                  <h4 className="fw-semibold" style={{ fontSize: '20px' }}>{plan.title}</h4>
                  <h3 className="fw-bold text-warning" style={{ fontSize: '30px' }}>{plan.price}</h3>
                  <ul className="list-unstyled text-muted mt-3 mb-3" style={{ fontSize: '14px', lineHeight: '2' }}>
                    {plan.features.map((feature, idx) => (
                      <li key={idx}>✔ {feature}</li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handleWhatsAppOrder(plan.title, plan.price)}
                    className="btn btn-warning btn-sm px-4 py-2"
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
                name: 'Anjali S.',
                feedback: 'The cover letter was so well written, I got a call for an interview within days!'
              },
              {
                name: 'Karthik M.',
                feedback: 'Very professional and tailored to my job application. Highly recommend their service.'
              },
              {
                name: 'Priya T.',
                feedback: 'Quick turnaround and the language was perfect. My confidence is boosted!'
              }
            ].map((testimonial, idx) => (
              <div className="col-md-4 mb-4 d-flex align-items-stretch" key={idx}>
                <div style={{
                  background: 'linear-gradient(135deg, #fffaf6 80%, #fbeee6 100%)',
                  borderRadius: '18px',
                  boxShadow: '0 6px 32px rgba(0,0,0,0.08)',
                  padding: '32px 24px',
                  minHeight: '260px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  position: 'relative',
                  border: '1px solid #f5e9df'
                }}>
                  <i className="fa fa-quote-left" style={{ fontSize: '32px', color: '#ff9800', marginBottom: '18px', opacity: 0.2 }}></i>
                  <p style={{ fontStyle: 'italic', fontSize: '17px', color: '#333', marginBottom: '18px', flex: 1 }}>
                    “{testimonial.feedback}”
                  </p>
                  <hr style={{ width: '40%', borderTop: '1.5px solid #f0d9c2', margin: '12px auto' }} />
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '8px' }}>
                    <div style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      background: '#fbeee6',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      color: '#ff9800',
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

export default CoverLetterPricing;
