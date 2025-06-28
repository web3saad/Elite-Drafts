import { useEffect } from 'react';

export const useCustomEffects = () => {
  useEffect(() => {
    // Wait for jQuery to be available
    const initializeEffects = () => {
      if (typeof window.$ === 'undefined') {
        setTimeout(initializeEffects, 100);
        return;
      }

      const $ = window.$;

      // Fixed header
      $(window).scroll(function() {
        if (($(".header.fixed").length > 0)) { 
          if(($(this).scrollTop() > 0) && ($(window).width() > 767)) {
            $("body").addClass("fixed-header-on");
          } else {
            $("body").removeClass("fixed-header-on");
          }
        }
      });

      $(window).on('load', function() {
        if (($(".header.fixed").length > 0)) { 
          if(($(this).scrollTop() > 0) && ($(window).width() > 767)) {
            $("body").addClass("fixed-header-on");
          } else {
            $("body").removeClass("fixed-header-on");
          }
        }
      });

      // Quote carousel
      if ($('#quote-carousel').length > 0) {
        try {
          if (typeof $.fn.carousel === 'function') {
            $('#quote-carousel').carousel({
              pause: true,
              interval: 4000,
            });
          } else {
            console.log('Bootstrap carousel not available');
          }
        } catch (error) {
          console.log('Carousel initialization failed:', error);
        }
      }

      // Scroll Spy
      if($(".scrollspy").length > 0) {
        $("body").addClass("scroll-spy");
        try {
          if (typeof $.fn.scrollspy === 'function') {
            $('body').scrollspy({ 
              target: '.scrollspy',
              offset: 152
            });
          } else {
            console.log('Bootstrap scrollspy not available');
          }
        } catch (error) {
          console.log('Scrollspy initialization failed:', error);
        }
      }

      // Smooth Scroll
      if ($(".smooth-scroll").length > 0) {
        $('.smooth-scroll a[href*=#]:not([href=#]), a[href*=#]:not([href=#]).smooth-scroll').click(function() {
          if (window.location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && window.location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top-151
              }, 1000);
              return false;
            }
          }
        });
      }

      // Animations
      if (($("[data-animation-effect]").length > 0) && window.Modernizr && !window.Modernizr.touch) {
        $("[data-animation-effect]").each(function() {
          var $this = $(this),
          animationEffect = $this.attr("data-animation-effect");
          if(window.Modernizr.mq('only all and (min-width: 768px)') && window.Modernizr.csstransitions) {
            $this.appear(function() {
              setTimeout(function() {
                $this.addClass('animated object-visible ' + animationEffect);
              }, 400);
            }, {accX: 0, accY: -130});
          } else {
            $this.addClass('object-visible');
          }
        });
      }

      // Isotope filters
      if ($('.isotope-container').length > 0) {
        $(window).on('load', function() {
          $('.isotope-container').fadeIn();
          var $container = $('.isotope-container').isotope({
            itemSelector: '.isotope-item',
            layoutMode: 'masonry',
            transitionDuration: '0.6s',
            filter: "*"
          });
          // filter items on button click
          $('.filters').on( 'click', 'ul.nav li a', function() {
            var filterValue = $(this).attr('data-filter');
            $(".filters").find("li.active").removeClass("active");
            $(this).parent().addClass("active");
            $container.isotope({ filter: filterValue });
            return false;
          });
        });
      }

      // Modal
      if($(".modal").length > 0) {
        $(".modal").each(function() {
          $(".modal").prependTo( "body" );
        });
      }
    };

    // Initialize effects after a short delay to ensure DOM is ready
    setTimeout(initializeEffects, 500);

    // Cleanup function
    return () => {
      // Remove event listeners if needed
      if (typeof window.$ !== 'undefined') {
        window.$(window).off('scroll');
        window.$(window).off('load');
      }
    };
  }, []);
};
