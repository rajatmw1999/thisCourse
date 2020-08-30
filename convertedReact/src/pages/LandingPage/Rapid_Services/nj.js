alert("hello");
console.log("fh");
(function ($) {
    "use strict";
  
    // Initiate the wowjs animation library
    new WOW().init();
  
    // Clients carousel (uses the Owl Carousel library)
    $(".clients-carousel").owlCarousel({
      autoplay: true,
      dots: true,
      loop: true,
      responsive: { 0: { items: 4 }, 768: { items: 4 }, 900: { items: 6 }}
    });
  
  })(jQuery);
