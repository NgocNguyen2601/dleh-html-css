//=============================MASORY============================//
$( function() {
	/* =======================masory layout==================== */
  var $container=$('#container');
     $container.imagesLoaded( function() {
          $('#container').masonry();
     }); 
/* =======================click button==================== */
  var isVertical = true;
  $("#print").click( function() {
    $container.isotope({
      filter: '.print'
    });
  });
  $("#advertising").click( function() {
    $container.isotope({
      filter: '.advertising'
    });
  });
  $("#all").click( function() {
    $container.isotope({
      filter: ''
    });
  });
  $("#branding").click( function() {
    $container.isotope({
      filter: '.branding'
    });
  });
  $("#product").click( function() {
    $container.isotope({
      filter: '.product'
    });
  });
  $("#webdes").click( function() {
    $container.isotope({
      filter: '.webdes'
    });
  });
  
});


//=============================GALERRY / MANSORY============================//
$(document).ready(function() {
$('.popup-gallery').magnificPopup({
    delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function(item) {
          return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
        }
      }
    });
});







