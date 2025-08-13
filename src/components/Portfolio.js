import React, { useState, useEffect } from 'react';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="modal fade in" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.7)' }}>
      <div className="modal-dialog" style={{ maxWidth: '90%', margin: '50px auto' }}>
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" onClick={onClose}>
              <span>&times;</span>
            </button>
            <h4 className="modal-title">{project.title}</h4>
          </div>
          <div className="modal-body text-center">
            <img
              src={project.image}
              alt={project.title}
              style={{ maxWidth: '100%', maxHeight: '70vh', objectFit: 'contain', borderRadius: '8px' }}
            />
            <p style={{ marginTop: '15px' }}>{project.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectItem = ({ project, onClick, isMobile }) => {
  console.log('ProjectItem render - isMobile:', isMobile);
  
  const itemStyle = {
    width: isMobile ? '100%' : '50%',
    padding: isMobile ? '9px 0' : '9px',
    boxSizing: 'border-box',
    // Force mobile layout
    ...(isMobile && {
      minWidth: '100%',
      maxWidth: '100%',
      flexBasis: '100%'
    })
  };
  
  return (
    <div style={itemStyle} className="portfolio-item-mobile">
      <div
        className="image-box"
        style={{
          cursor: 'pointer',
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '10px',
          backgroundColor: '#fff',
          minHeight: '320px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          height: '100%'
        }}
        onClick={() => onClick(project)}
      >
        <img
          src={project.image}
          alt={project.title}
          style={{ width: '100%', height: '220px', objectFit: 'contain', borderRadius: '6px', background: '#f8f8f8' }}
        />
        <div className="text-center" style={{ marginTop: '12px', fontSize: '15px', fontWeight: 'bold' }}>
          {project.title}
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('*');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle window resize for responsive layout
  useEffect(() => {
    const checkMobile = () => {
      // Use multiple methods to detect mobile
      const width = window.innerWidth;
      const isMobileView = width <= 768;
      
      // Also check if we're in a mobile browser
      const userAgent = navigator.userAgent;
      const isMobileBrowser = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
      
      // Set mobile state based on viewport width (primary) and user agent (secondary)
      setIsMobile(isMobileView);
      
      console.log('Screen width:', width, 'isMobile:', isMobileView, 'UserAgent mobile:', isMobileBrowser);
    };

    // Check immediately
    checkMobile();
    
    // Add event listener
    window.addEventListener('resize', checkMobile);
    window.addEventListener('orientationchange', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('orientationchange', checkMobile);
    };
  }, []);

  // Custom styles for consistent 2-column layout
  const containerStyle = {
    maxWidth: '100%',
    margin: '0 auto'
  };

  const rowStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    margin: isMobile ? '0' : '0 -9px' // Negative margin to offset padding
  };

  const filters = [
    { label: 'All', value: '*' },
    { label: 'Resume Writing', value: 'resume-writing' },
    { label: 'Cover Letters', value: 'cover-letters' },
    { label: 'Graphic Design', value: 'graphic-design' },
    { label: 'Web Development', value: 'web-development' }
  ];

  const allProjects = [
    {
      id: 1,
      title: 'Executive Resume Sample',
      image: '/images/cv1.jpeg',
      category: 'resume-writing',
      description: 'ATS-optimized executive resume for high-level positions.'
    },
    {
      id: 2,
      title: 'Tech Professional Resume',
      image: '/images/cv2.jpeg',
      category: 'resume-writing',
      description: 'Clean format for IT roles showcasing projects and skills.'
    },
    {
      id: 3,
      title: 'Creative Industry Resume',
      image: '/images/cv3.jpeg',
      category: 'resume-writing',
      description: 'Design-focused resume for creative professionals.'
    },
    {
      id: 6,
      title: 'Modern Business Website',
      image: '/images/w1.jpeg',
      category: 'web-development',
      description: 'Responsive business website with contact form.'
    },
    {
      id: 7,
      title: 'Finance Resume',
      image: '/images/cv7.jpeg',
      category: 'resume-writing',
      description: 'Finance-focused layout highlighting metrics.'
    },
    {
      id: 9,
      title: 'E-Commerce Platform',
      image: '/images/w2.jpeg',
      category: 'web-development',
      description: 'Full-featured online store with payment integration.'
    },
    {
      id: 10,
      title: 'Portfolio Showcase',
      image: '/images/w3.jpeg',
      category: 'web-development',
      description: 'Personal portfolio site for creative professionals.'
    },
    {
      id: 11,
      title: 'Corporate Landing Page',
      image: '/images/w4.jpeg',
      category: 'web-development',
      description: 'Clean landing page for corporate branding.'
    },
    {
      id: 12,
      title: 'Startup Web App',
      image: '/images/w5.jpeg',
      category: 'web-development',
      description: 'Web application for startup MVP launch.'
    },
    {
      id: 13,
      title: 'Educational Platform',
      image: '/images/w6.jpeg',
      category: 'web-development',
      description: 'Learning management system for online courses.'
    }
  ];

  const filteredProjects =
    activeFilter === '*'
      ? allProjects.slice(0, 6)
      : allProjects.filter((project) => project.category === activeFilter).slice(0, 6);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section className="section secPadding">
      <div className="container">


        {/* Filter Buttons in 2 Rows */}
        <div className="row text-center" style={{ marginBottom: '20px' }}>
          <div className="col-xs-12">
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
              {filters.map((filter) => (
                <button
                  key={filter.value}
                  className={`btn btn-xs ${activeFilter === filter.value ? 'btn-primary' : 'btn-default'}`}
                  onClick={() => setActiveFilter(filter.value)}
                  style={{ minWidth: '120px', fontSize: '12px' }}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <div style={rowStyle} className="portfolio-row-mobile">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectItem key={project.id} project={project} onClick={handleProjectClick} isMobile={isMobile} />
            ))
          ) : (
            <div className="text-center" style={{ width: '100%' }}>No projects found.</div>
          )}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={closeModal} />
      )}
    </section>
  );
};

export default Portfolio;
