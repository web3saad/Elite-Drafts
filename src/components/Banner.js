import React, { useEffect } from 'react';

const Banner = () => {
  useEffect(() => {
    // Wait for jQuery and backstretch to be available, then set banner background
    const initializeBanner = () => {
      if (typeof window.$ === 'undefined') {
        setTimeout(initializeBanner, 100);
        return;
      }

      const $ = window.$;
      
      if (typeof $.fn.backstretch === 'undefined') {
        setTimeout(initializeBanner, 100);
        return;
      }
      
      // Use backstretch plugin like the original
      if ($(".banner-image").length > 0) {
        console.log('Setting banner background with backstretch');
        try {
          $(".banner-image").backstretch('/images/bannerfinal.png');
          
          // Apply mobile-specific positioning
          if (window.innerWidth <= 768) {
            $(".backstretch img").css({
              'object-position': 'center 20%'
            });
          }
        } catch (error) {
          console.log('Backstretch failed, using CSS fallback:', error);
          // Fallback to CSS background with mobile adjustments
          const isMobile = window.innerWidth <= 768;
          $(".banner-image").css({
            'background-image': 'url(/images/bannerfinal.png)',
            'background-size': 'cover',
            'background-position': isMobile ? 'center 20%' : 'center top',
            'background-repeat': 'no-repeat',
            'height': isMobile ? '60vh' : '100vh',
            'min-height': isMobile ? '60vh' : '100vh'
          });
        }
      } else {
        console.log('Banner image element not found');
      }
    };

    // Initialize with a longer delay to ensure DOM and scripts are ready
    setTimeout(initializeBanner, 1000);
  }, []);

  return (
    <div 
      id="banner" 
      className="banner"
      style={{
        height: window.innerWidth <= 768 ? '60vh' : '100vh',
        minHeight: window.innerWidth <= 768 ? '60vh' : '100vh'
      }}
    >
      <div className="banner-image"></div>
      <div className="banner-caption">
        <div className="container">
          <div className="row">
            <div 
              className="caption-data" 
              style={{
                marginTop: '0px', 
                opacity: 1,
                textAlign: 'center',
                padding: window.innerWidth <= 768 ? '20px 15px' : '40px 0'
              }} 
              data-animation-effect="fadeIn"
            >
              <h1 style={{ 
                fontSize: window.innerWidth <= 768 ? '28px' : '48px',
                lineHeight: window.innerWidth <= 768 ? '1.3' : '1.2',
                marginBottom: window.innerWidth <= 768 ? '15px' : '20px'
              }}>
                Your Vision, Our Service
              </h1>
          
              <div 
                className="padding-top60 contact-form"
                style={{ paddingTop: window.innerWidth <= 768 ? '30px' : '60px' }}
              >
                <button 
                  className="btn cta-button"
                  onClick={() => {
                    const element = document.getElementById('services');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  style={{ 
                    fontSize: window.innerWidth <= 768 ? '14px' : '16px',
                    padding: window.innerWidth <= 768 ? '12px 24px' : '15px 30px'
                  }}
                >
                  Our Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
