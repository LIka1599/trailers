$(function () {

  $('.header__time-text').on('click', function () {
    $('.header__time-inner').toggleClass('header__time-inner--open')
  })

  $('.header__slider').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    dots: false,
  })

  $('.header__prev').on('click', function (e) {
    e.preventDefault()
    $('.header__slider').slick('slickPrev')
  })
  $('.header__next').on('click', function (e) {
    e.preventDefault()
    $('.header__slider').slick('slickNext')
  })


  $('.categories__slider, .categories__slider-2, .categories__slider-3, .categories__slider-4').slick({
    arrows: false,
    infinite: false,
    slidesToShow: 1,
    dots: false,
    swipe: false,
  })

  $('.categories__prev').on('click', function (e) {
    e.preventDefault()
    $('.categories__slider').slick('slickPrev')
  })
  $('.categories__next').on('click', function (e) {
    e.preventDefault()
    $('.categories__slider').slick('slickNext')
  })

  //2

  $('.categories__prev-2').on('click', function (e) {
    e.preventDefault()
    $('.categories__slider-2').slick('slickPrev')
  })
  $('.categories__next-2').on('click', function (e) {
    e.preventDefault()
    $('.categories__slider-2').slick('slickNext')
  })

  //3

  $('.categories__prev-3').on('click', function (e) {
    e.preventDefault()
    $('.categories__slider-3').slick('slickPrev')
  })
  $('.categories__next-3').on('click', function (e) {
    e.preventDefault()
    $('.categories__slider-3').slick('slickNext')
  })

  //4

  $('.categories__prev-4').on('click', function (e) {
    e.preventDefault()
    $('.categories__slider-4').slick('slickPrev')
  })
  $('.categories__next-4').on('click', function (e) {
    e.preventDefault()
    $('.categories__slider-4').slick('slickNext')
  })


  $('.image-slider, .image-slider-2, .image-slider-3, .image-slider-4').slick({
    arrows: false,
    infinite: false,
    slidesToShow: 1,
    dots: false,
  })

  // let countSlide = $(".image-slider").slick("getSlick").slideCount
  let currentSlide = $('.image-slider').slick('slickCurrentSlide') + 1;
  //console.log(currentSlide)
  $('.image__arrow-box span').html(currentSlide)

  $(".image-slider, .image-slider-2").on("afterChange", function (event, slick, currentSlide, nextSlide) {
    $(".image__arrow-box span").text(currentSlide + 1);
  });

  $('.image__prev').on('click', function (e) {
    e.preventDefault()
    $('.image-slider').slick('slickPrev')

  })
  $('.image__next').on('click', function (e) {
    e.preventDefault()
    $('.image-slider').slick('slickNext')
  })

  //2
  $('.image__arrow-box-2 span').html(currentSlide)
  $(".image-slider-2").on("afterChange", function (event, slick, currentSlide, nextSlide) {
    $(".image__arrow-box-2 span").text(currentSlide + 1);
  });

  $('.image__prev-2').on('click', function (e) {
    e.preventDefault()
    $('.image-slider-2').slick('slickPrev')

  })
  $('.image__next-2').on('click', function (e) {
    e.preventDefault()
    $('.image-slider-2').slick('slickNext')
  })

  //3
  $('.image__arrow-box-3 span').html(currentSlide)
  $(".image-slider-3").on("afterChange", function (event, slick, currentSlide, nextSlide) {
    $(".image__arrow-box-3 span").text(currentSlide + 1);
  });

  $('.image__prev-3').on('click', function (e) {
    e.preventDefault()
    $('.image-slider-3').slick('slickPrev')

  })
  $('.image__next-3').on('click', function (e) {
    e.preventDefault()
    $('.image-slider-3').slick('slickNext')
  })

  //4
  $('.image__arrow-box-4 span').html(currentSlide)
  $(".image-slider-4").on("afterChange", function (event, slick, currentSlide, nextSlide) {
    $(".image__arrow-box-4 span").text(currentSlide + 1);
  });

  $('.image__prev-4').on('click', function (e) {
    e.preventDefault()
    $('.image-slider-4').slick('slickPrev')

  })
  $('.image__next-4').on('click', function (e) {
    e.preventDefault()
    $('.image-slider-4').slick('slickNext')
  })

  //характеристики
  $('.categories__charact-link-1, .categories__charact-link-2, .categories__charact-link-3, .categories__charact-link-4').on('click', function (e) {
    e.preventDefault()
  
    var className = this.className.split(" ", 1)[0];
    var len = className.length;
    var num = className.charAt(len - 1);

    var inner = ".categories__charact-inner" + '-' + num;
    var link = '.' + className;

    if ($(inner).first().is(":hidden")) {
      $(inner).show("slow");
      $(link).toggleClass('categories__charact-link--active')
      $(link).html('Скрыть характеристики');
    } else {
      $(inner).slideUp("slow");
      $(link).toggleClass('categories__charact-link--active')
      $(link).html('Развернуть характеристики');
    }
  })


  $('body').on('click', function (e) {

    //var target = e.target;
    //console.log(target)
    if (!($(e.target).hasClass('categories__charact-link-1')) && !($(e.target).hasClass('categories__charact-link-2')) && !($(e.target).hasClass('categories__charact-link-3')) && !($(e.target).hasClass('categories__charact-link-4'))) {
      $(".categories__charact-inner-1").slideUp("slow");
      $(".categories__charact-inner-2").slideUp("slow");
      $(".categories__charact-inner-3").slideUp("slow");
      $(".categories__charact-inner-4").slideUp("slow");

      $('.categories__charact-link-1').removeClass('categories__charact-link--active')
      $('.categories__charact-link-2').removeClass('categories__charact-link--active')
      $('.categories__charact-link-3').removeClass('categories__charact-link--active')
      $('.categories__charact-link-4').removeClass('categories__charact-link--active')

      $('.categories__charact-link-1').html('Развернуть характеристики');
      $('.categories__charact-link-2').html('Развернуть характеристики');
      $('.categories__charact-link-3').html('Развернуть характеристики');
      $('.categories__charact-link-4').html('Развернуть характеристики');
    }

  })

  //popup

  $('.form__submit, .popup__close, .popup__area, .popup__refresh').on('click', function (e) {
    e.preventDefault()
    $('.popup').toggleClass('popup--active')
  })


  //media 

  $('.burger').on('click', function (e) {
    e.preventDefault()
    if ($('.footer__hiden').hasClass('footer__hiden--open')) {
      $('.footer__hiden').removeClass('footer__hiden--open');
      //$('.burger').removeClass('burger--open');
    }
    else {
      $('.footer__hiden').addClass('footer__hiden--open');
      //$('.burger').addClass('burger--open');
    }

  })


})