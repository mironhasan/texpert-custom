


//========================================
//           FOR HEADER FIXED
//========================================
$(window).on("scroll", function(){
    var scrolling = $(this).scrollTop();
    if (scrolling > 130){
        $(".header-part").addClass("active");
    }else{
        $(".header-part").removeClass("active");
    }
});


//========================================
//         FOR MOBILE SIDEBAR
//========================================
$('.header-nav').on('click', function(){
  $('.header-content').toggleClass('active');
});


//========================================
//            FOR VIDEO SLIDER
//========================================
$('.video-slider').slick({
    dots: false,
    fade: false,
    infinite: true,
    autoplay: false,
    arrows: true,
    speed: 800,
    prevArrow: '<i class="icofont-arrow-right dandik"></i>',
    nextArrow: '<i class="icofont-arrow-left bamdik"></i>',
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  });

//========================================
//            FOR REVIEW SLIDER
//========================================
$('.review-slider').slick({
    dots: false,
    fade: false,
    infinite: true,
    autoplay: true,
    arrows: true,
    speed: 800,
    prevArrow: '<i class="icofont-arrow-right dandik"></i>',
    nextArrow: '<i class="icofont-arrow-left bamdik"></i>',
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  });




