$(function () {

  $('.header__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img  class="slider-arrows slider-arrows-left" src="src/images/header/arrows-left.svg" alt="">',
    nextArrow: '<img  class="slider-arrows slider-arrows-right" src="src/images/header/arrows-right.svg" alt="">',
    asNavFor: '.slider-dots'
  })


  $('.slider-dots').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header__slider',
    responsive: [
      {
        breakpoint: 961,
        settings: "unslick"
      }
    ]
  });


  //Surf SLider

  $('.surf-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<img  class="slider-arrows slider-arrows-left" src="src/images/header/arrows-left.svg" alt="">',
    nextArrow: '<img  class="slider-arrows slider-arrows-right" src="src/images/header/arrows-right.svg" alt="">',
    asNavFor: '.slider-map',
    responsive: [
      {
        breakpoint: 1210,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          centerMode: true
        }
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      }
    ]
  });

  $('.slider-map').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.surf-slider',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1103,
        settings: {
          slidesToShow: 3,
          centerMode: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          centerMode: true
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          centerMode: true
        }
      }
    ]
  });

  $('.holder__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img  class="slider-arrows slider-arrows-left" src="src/images/header/arrows-left.svg" alt="">',
    nextArrow: '<img  class="slider-arrows slider-arrows-right" src="src/images/header/arrows-right.svg" alt="">',
    asNavFor: '.slider-dots'
  });

  $('.shop__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img  class="slider-arrows slider-arrows-left" src="src/images/header/arrows-left.svg" alt="">',
    nextArrow: '<img  class="slider-arrows slider-arrows-right" src="src/images/header/arrows-right.svg" alt="">',
  })


  $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="build/img/travel/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="build/img/travel/minus.svg" alt=""></div></div>').insertAfter('.quantity input');
  $('.quantity').each(function () {
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');

    btnUp.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

  });



  $('.quantity-button').on("click", function () {
    var summ = ($('.guests').val() * $('.summ').data('night')) * $('.night').val();
    $('.summ').html('$' + summ.toFixed(1));
  });

  $('.surfboard-box__circle').on("click", function () {
    $(this).toggleClass('active')
  });


  $(".menu-btn").on("click", function () {
    $(".menu").toggleClass("active");
    $("body").toggleClass("overhidden")
  });

  new WOW().init();

  $('.slider-touch').on("click", function () {
    $(this).children('.slider-touch__circle').toggleClass('animated');
    // var touchChildren = $(this).children('.slider-touch__circle').toggleClass('animated');

    
    $(this).children('.slider-touch__content').toggleClass('animated');
  });

  var rellax = new Rellax('rellax');


});