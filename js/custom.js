$(document).ready(function(){

  // Wow 
   wow = new WOW(
      {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       true,       // default
      live:         true        // default
    }
    )
    wow.init(); 
    
    // Header Sticky
    $(window).scroll(function(){
      if ($(window).scrollTop() >= 300) {
          $('nav').addClass('fixed-header');
      }
      else {
          $('nav').removeClass('fixed-header');
      }
    });
    

  // Toggle
      $('span.navbar-toggler-icon').click(function() {
        $(this).toggleClass('cross');
    });

     // banner 
    $('#slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: false,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover:false,
      dots:false,
      vertical:true
  });


   $('.servicesSlider').slick({
        dots:false,
        slidesToShow:4,
        slidesToScroll: 1,
       // autoplay:true,
        autoplaySpeed: 3000,
        infinite: true,
        arrows:false,
      pauseOnHover:false,

        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
              autoplaySpeed: 3000,
              slidesToShow:1,
              centerMode: true,
              centerPadding: '60px',
            }
          }   
        ],     
      });
      
  $('.clinetleft').click(function(){
    $('.servicesSlider').slick('slickPrev');
  });

  $('.clinetright').click(function(){
    $('.servicesSlider').slick('slickNext');
  });

});