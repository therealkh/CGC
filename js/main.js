$(document).ready(function () {
  // анимация чисел в блоке .achi
  var show = true;
  var countbox = ".cnt";
  $(window).on("scroll load resize", function () {
    if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
    var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
    var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
    var w_height = $(window).height(); // Высота окна браузера
    var d_height = $(document).height(); // Высота всего документа
    var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
    if (w_top + 600 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
      $('.cnt').css('opacity', '1');
      $('.cnt').spincrement({
        thousandSeparator: " ",
        duration: 1500
      });

      show = false;
    }
  });


// меню октрыть/закрыть
  $('.menu-btn').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('menu-btn_active');
    $('.menu').toggleClass('active')
    if($('.menu').hasClass('active')){
      $('.header').css('background','rgba(11, 55, 91, 1)');
      $('.search-lang').css('display','block');
    }
    else{
      $('.header').css('background','rgba(11, 55, 91, 0.702)');
      $('.search-lang').css('display','inline-block');
    }
  });  


// маленький слайдер "О нас"
  $('.slider-img').slick({
    arrows: false,
    swipeToSlid: true,
    dots: true,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 4000,
  });


// большой слайдер с кнопками reply
  $('.reply-slider').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: '<button class="sliderPrev"></button>',
    nextArrow: '<button class="sliderNext"></button>'
  });
});