import React from 'react';

const Pricing = () => {
  const plans = [
    {
      title: 'Basic',
      price: '₹49',
      features: [
        'ATS-Optimized Resume',
        'Keyword Optimization',
        'Professional Formatting',
        '24-48 Hour Turnaround'
      ]
    },
    {
      title: 'Professional',
      price: '₹99',
      features: [
        'Everything in Basic',
        'Cover Letter',
        'LinkedIn Profile Optimization',
        '2 Revision Rounds'
      ]
    },
    {
      title: 'Executive',
      price: '₹199',
      features: [
        'Everything in Professional',
        'Job Search Strategy Session',
        'Interview Preparation Guide',
        '60-Day Support'
      ]
    }
    
  ];

  const testimonials = [
    {
      name: 'Ayesha M.',
      feedback:
        'The resume I received landed me 3 interviews in a week! Highly professional and quick turnaround.'
    },
    {
      name: 'Rahul K.',
      feedback:
        'Their executive package was a game-changer. The job strategy session gave me clear direction.'
    },
    {
      name: 'Divya S.',
      feedback:
        'Beautifully formatted and completely ATS-friendly. My LinkedIn profile looks amazing too!'
    }
  ];

  return (
    <section className="pricing-section" style={{ background: '#f5f8fa', padding: '60px 20px' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#222' }}>ATS Resume Pricing</h2>
          <p style={{ fontSize: '16px', color: '#555' }}>Choose the package that best suits your career goals</p>
        </div>

        <div className="card" style={{ borderRadius: '10px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', padding: '30px' }}>
          <div className="row text-center">
            {plans.map((plan, index) => (
              <div className="col-md-4" key={index}>
                <h4 style={{ fontWeight: '600', fontSize: '20px' }}>{plan.title}</h4>
                <h3 style={{ fontWeight: '700', color: '#007bff', fontSize: '28px' }}>{plan.price}</h3>
                <ul style={{ listStyleType: 'none', padding: 0, fontSize: '14px', color: '#333', lineHeight: '2' }}>
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>✔ {feature}</li>
                  ))}
                </ul>
                <a href="#contact" className="btn btn-outline-primary" style={{ marginTop: '15px' }}>Get Started</a>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-5">
          <h3 style={{ fontWeight: '600', fontSize: '24px', marginBottom: '30px' }}>What Our Clients Say</h3>
          <div className="row">
            {testimonials.map((testimonial, idx) => (
              <div className="col-md-4 mb-4" key={idx}>
                <div style={{ background: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)' }}>
                  <p style={{ fontStyle: 'italic', fontSize: '15px', color: '#444' }}>
                    “{testimonial.feedback}”
                  </p>
                  <p style={{ fontWeight: '600', marginTop: '10px', color: '#000' }}>{testimonial.name}</p>
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
