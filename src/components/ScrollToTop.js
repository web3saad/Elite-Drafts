import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div 
      className={`scrollToTop ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      style={{ 
        display: isVisible ? 'block' : 'none',
        cursor: 'pointer'
      }}
    >
      <i className="icon-up-open-big"></i>
    </div>
  );
};

export default ScrollToTop;
