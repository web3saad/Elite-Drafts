import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
  const navigate = useNavigate();
  const [region, setRegion] = useState('USD');
  const [loadingRegion, setLoadingRegion] = useState(true);

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
    const message = `Hi! I'm interested in the ${planTitle} ATS Resume package (${price}). Please provide more details and help me get started.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const plansINR = [
    {
      title: 'Experience 1 to 5',
      price: '₹499',
      features: [
        'ATS-Optimized Resume',
        'Keyword Optimization',
        'Professional Formatting',
        '24-48 Hour Turnaround'
      ]
    },
    {
      title: 'Experience 6 to 10',
      price: '₹699',
      features: [
        'ATS-Optimized Resume',
        'Advanced Keyword Optimization',
        'Professional Formatting',
        '2 Revision Rounds',
        '48-Hour Turnaround'
      ]
    },
    {
      title: 'Experience 10+',
      price: '₹899 to ₹2999',
      features: [
        'ATS-Optimized Resume',
        'Executive/Leadership Resume',
        'Personalized Consultation',
        'Price depends on experience & role',
        'Priority Delivery'
      ]
    },
        {
      title: 'Australian standard CV',
      price: '$49',
      features: [
        'ATS-Optimized Resume',
        'Executive/Leadership Resume',
        'Personalized Consultation',
        'Price depends on experience & role',
        'Priority Delivery'
      ]
    }
  ];

  const plansUSD = [
    {
      title: 'Fresher',
      price: '$70',
      features: [
        'ATS-Optimized Resume',
        'Keyword Optimization',
        'Professional Formatting',
        '24-48 Hour Turnaround'
      ]
    },
    {
      title: 'Experience 1 to 5',
      price: '$120',
      features: [
        'ATS-Optimized Resume',
        'Keyword Optimization',
        'Professional Formatting',
        '24-48 Hour Turnaround'
      ]
    },
    {
      title: 'Experience 6 to 10',
      price: '$160',
      features: [
        'ATS-Optimized Resume',
        'Advanced Keyword Optimization',
        'Professional Formatting',
        '2 Revision Rounds',
        '48-Hour Turnaround'
      ]
    },
    {
      title: 'Experience 10+',
      price: '$200 to $500',
      features: [
        'ATS-Optimized Resume',
        'Executive/Leadership Resume',
        'Personalized Consultation',
        'Price depends on experience & role',
        'Priority Delivery'
      ]
    }

  ];

  const plansAUD = [
    {
      title: 'Fresher',
      price: 'A$105',
      features: [
        'ATS-Optimized Resume',
        'Keyword Optimization',
        'Professional Formatting',
        '24-48 Hour Turnaround'
      ]
    },
    {
      title: 'Experience 1 to 5',
      price: 'A$180',
      features: [
        'ATS-Optimized Resume',
        'Keyword Optimization',
        'Professional Formatting',
        '24-48 Hour Turnaround'
      ]
    },
    {
      title: 'Experience 6 to 10',
      price: 'A$240',
      features: [
        'ATS-Optimized Resume',
        'Advanced Keyword Optimization',
        'Professional Formatting',
        '2 Revision Rounds',
        '48-Hour Turnaround'
      ]
    },
    {
      title: 'Experience 10+',
      price: 'A$300 to A$750',
      features: [
        'ATS-Optimized Resume',
        'Executive/Leadership Resume',
        'Personalized Consultation',
        'Price depends on experience & role',
        'Priority Delivery'
      ]
    }
  ];

  const plans = region === 'INR' ? plansINR : region === 'AUD' ? plansAUD : plansUSD;

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

  if (loadingRegion) {
    return (
      <section className="section transprant-bg pclear secPadding" style={{ padding: '40px 0', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ color: '#fff', fontSize: '20px', textAlign: 'center' }}>Loading pricing...</div>
      </section>
    );
  }

  return (
    <section className="pricing-section" style={{ background: '#f5f8fa', padding: '60px 20px' }}>
      <div className="container">
        {/* Back Button */}
        <div className="mb-4">
          <button 
            onClick={() => navigate('/')}
            className="btn btn-outline-secondary"
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px',
              padding: '10px 20px',
              fontSize: '14px'
            }}
          >
            <i className="fa fa-arrow-left"></i>
            Back to Home
          </button>
        </div>

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
                <button 
                  onClick={() => handleWhatsAppOrder(plan.title, plan.price)}
                  className="btn btn-outline-primary" 
                  style={{ marginTop: '15px' }}
                >
                  <i className="fa fa-whatsapp" style={{ marginRight: '8px' }}></i>
                  Order Now
                </button>
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
