import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  // eslint-disable-next-line no-unused-vars
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && window.innerWidth > 767) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleResize = () => {
      const width = window.innerWidth;
      setScreenWidth(width);
      setIsMobile(width <= 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/', { replace: true });
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsNavOpen(false);
  };

  return (
    <>
      <div className={`scrollToTop ${isScrolled ? 'fixed-header-on' : ''}`}>
        <i className="icon-up-open-big"></i>
      </div>
      
      <header
        className="header fixed clearfix navbar navbar-fixed-top sticky-navbar"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          zIndex: 1030,
          backgroundColor: 'white',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          borderBottom: '1px solid #e5e5e5'
        }}
      >
        <div className="container">
          <div className="row" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            minHeight: isMobile ? '70px' : '80px',
            padding: isMobile ? '0 10px' : '0 15px'
          }}>
            {/* Company Name Section - Left Side */}
            <div style={{ flex: '1', display: 'flex', alignItems: 'center' }}>
              <div className="header-left" style={{ display: 'flex', alignItems: 'center', height: isMobile ? '70px' : '80px' }}>
                <div className="logo smooth-scroll" style={{ marginRight: isMobile ? '15px' : '20px' }}>
                  <a href="#banner" onClick={(e) => { e.preventDefault(); scrollToSection('banner'); }}>
                    <img 
                      id="logo" 
                      src="/images/newlogo.png" 
                      alt="Elite Services"
                      style={{
                        maxHeight: isMobile ? '70px' : '90px', // Increased size
                        width: 'auto'
                      }}
                    />
                  </a>
                </div>
                <div className="logo-section smooth-scroll">
                  <div className="brand">
                    <a 
                      href="#banner" 
                      onClick={(e) => { e.preventDefault(); scrollToSection('banner'); }}
                      style={{
                        fontSize: isMobile ? '32px' : '44px', // Increased size
                        fontWeight: 'bold',
                        lineHeight: isMobile ? '1.2' : '1.4',
                        display: 'block',
                        padding: isMobile ? '8px 0' : '12px 0',
                        textDecoration: 'none',
                        color: '#0A94DB',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      Elite Services
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Hamburger Menu Section - Right Side with Space */}
            <div style={{ 
              flex: '0 0 auto', 
              marginLeft: isMobile ? '50px' : '60px',
              paddingRight: isMobile ? '5px' : '10px'
            }}>
              <div className="header-right" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', height: isMobile ? '70px' : '80px' }}>
                <button 
                  type="button" 
                  className="navbar-toggle" 
                  onClick={() => setIsNavOpen(!isNavOpen)}
                  style={{
                    marginTop: '0',
                    marginRight: '0',
                    marginLeft: '0',
                    padding: '10px 12px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    backgroundColor: 'transparent',
                    cursor: 'pointer',
                    minWidth: '45px',
                    minHeight: '45px'
                  }}
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span 
                    className="icon-bar" 
                    style={{
                      display: 'block',
                      width: '22px',
                      height: '2px',
                      borderRadius: '1px',
                      backgroundColor: '#888',
                      margin: '4px 0'
                    }}
                  ></span>
                  <span 
                    className="icon-bar"
                    style={{
                      display: 'block',
                      width: '22px',
                      height: '2px',
                      borderRadius: '1px',
                      backgroundColor: '#888',
                      margin: '4px 0'
                    }}
                  ></span>
                  <span 
                    className="icon-bar"
                    style={{
                      display: 'block',
                      width: '22px',
                      height: '2px',
                      borderRadius: '1px',
                      backgroundColor: '#888',
                      margin: '4px 0'
                    }}
                  ></span>
                </button>
                
                {/* Mobile Navigation Menu */}
                <div className="main-navigation animated" style={{ 
                  display: isMobile && isNavOpen ? 'block' : 'none',
                  position: 'absolute',
                  top: '100%',
                  left: '0',
                  right: '0',
                  backgroundColor: 'white',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                  zIndex: 1000
                }}>
                  <nav className="navbar navbar-default" role="navigation">
                    <div className="container-fluid">
                      <div className={`collapse navbar-collapse scrollspy smooth-scroll ${isNavOpen ? 'in' : ''}`} id="navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right" style={{ 
                          margin: '0',
                          padding: '10px 0',
                          width: '100%'
                        }}>
                          <li className="active" style={{ overflow: 'hidden' }}>
                            <a 
                              href="#banner" 
                              onClick={(e) => { e.preventDefault(); scrollToSection('banner'); }} 
                              style={{ 
                                padding: '10px 20px',
                                transition: 'all 0.3s ease',
                                position: 'relative',
                                overflow: 'hidden'
                              }}
                              onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#0A94DB';
                                e.target.style.color = 'white';
                                e.target.style.transform = 'translateX(5px)';
                              }}
                              onMouseLeave={(e) => {
                                e.target.style.backgroundColor = 'transparent';
                                e.target.style.color = '#333';
                                e.target.style.transform = 'translateX(0)';
                              }}
                            >
                              Home
                            </a>
                          </li>
                          <li style={{ overflow: 'hidden' }}>
                            <a 
                              href="#services" 
                              onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} 
                              style={{ 
                                padding: '10px 20px',
                                transition: 'all 0.3s ease',
                                position: 'relative',
                                overflow: 'hidden'
                              }}
                              onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#0A94DB';
                                e.target.style.color = 'white';
                                e.target.style.transform = 'translateX(5px)';
                              }}
                              onMouseLeave={(e) => {
                                e.target.style.backgroundColor = 'transparent';
                                e.target.style.color = '#333';
                                e.target.style.transform = 'translateX(0)';
                              }}
                            >
                              We Offer
                            </a>
                          </li>
                          <li style={{ overflow: 'hidden' }}>
                            <a 
                              href="#about" 
                              onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} 
                              style={{ 
                                padding: '10px 20px',
                                transition: 'all 0.3s ease',
                                position: 'relative',
                                overflow: 'hidden'
                              }}
                              onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#0A94DB';
                                e.target.style.color = 'white';
                                e.target.style.transform = 'translateX(5px)';
                              }}
                              onMouseLeave={(e) => {
                                e.target.style.backgroundColor = 'transparent';
                                e.target.style.color = '#333';
                                e.target.style.transform = 'translateX(0)';
                              }}
                            >
                              About Us
                            </a>
                          </li>
                          <li style={{ overflow: 'hidden' }}>
                            <a 
                              href="/ats-resume-pricing" 
                              onClick={(e) => { 
                                e.preventDefault(); 
                                navigate('/ats-resume-pricing');
                                setIsNavOpen(false);
                              }} 
                              style={{ 
                                padding: '10px 20px',
                                transition: 'all 0.3s ease',
                                position: 'relative',
                                overflow: 'hidden'
                              }}
                              onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#0A94DB';
                                e.target.style.color = 'white';
                                e.target.style.transform = 'translateX(5px)';
                              }}
                              onMouseLeave={(e) => {
                                e.target.style.backgroundColor = 'transparent';
                                e.target.style.color = '#333';
                                e.target.style.transform = 'translateX(0)';
                              }}
                            >
                              ATS Resume Pricing
                            </a>
                          </li>
                          <li style={{ overflow: 'hidden' }}>
                            <a 
                              href="#contact" 
                              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} 
                              style={{ 
                                padding: '10px 20px',
                                transition: 'all 0.3s ease',
                                position: 'relative',
                                overflow: 'hidden'
                              }}
                              onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#0A94DB';
                                e.target.style.color = 'white';
                                e.target.style.transform = 'translateX(5px)';
                              }}
                              onMouseLeave={(e) => {
                                e.target.style.backgroundColor = 'transparent';
                                e.target.style.color = '#333';
                                e.target.style.transform = 'translateX(0)';
                              }}
                            >
                              Contact Us
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
