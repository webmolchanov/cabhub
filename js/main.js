// JS-ФУНКЦИЯ ОПРЕДЕЛЕНИЯ ПОДДЕРЖКИ WEBP

function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});

// ========================================================================
// hamburger menu

document.querySelector('.menu-icon-wrapper').onclick = function(){
  document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
}

$(document).ready(function(){
  $('.menu-icon-wrapper').click(function(event){
    $('.menu__list').slideToggle();
    $('body').toggleClass('lock');
  });
});



// var $button = $("#menu-btn");

// $button.on("click", function (e) {
//   e.preventDefault();
//   if ($button.hasClass("open")) {
//     $button.removeClass("open");
//     $button.addClass("close");
//   } else {
//     $button.removeClass("close");
//     $button.addClass("open");
//   }
//   $('.header__list').slideToggle();
// });

// ========================================================================



$(function(){

  // $('.header__slider').slick({
  //     infitite: true,
  //     fade: true,
  //     prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt=""></img>',
  //     nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt=""></img>',
  //     asNavFor: '.slider-dots',
  // });

  // $('.menu-icon-wrapper').on('click', function(e) {
  //   e.preventDefault();
  //   $('.menu').toggleClass('menu_active');
  //   $('.header').toggleClass('header_active');
  // })
  
  $('.item-footer__title-about').on('click', function(){
    $('.item-footer__content-about').slideToggle();
});

$('.item-footer__title-download').on('click', function(){
  $('.item-footer__content-download').slideToggle();
});

$('.item-footer__title-contact').on('click', function(){
  $('.item-footer__social-contact').slideToggle();
});

// function burgerMenu(selector) {
//   let menu = $(selector);
//   let button = menu.find('.menu-icon-wrapper');
//   let links = menu.find('.menu__link');
//   let overlay = menu.find('.menu__overlay');
  
//   button.on('click', (e) => {
//       e.preventDefault();
//       toggleMenu();
//   });
  
//   links.on('click', () => toggleMenu());
//   overlay.on('click', () => toggleMenu());
  
//   function toggleMenu() {
//       menu.toggleClass('menu_active');
//       if (menu.hasClass('menu_active')) {
//           $('body').css('overflow', 'hidden');
//       } else {
//           $('body').css('overflow', 'visible');
//       }
//   }
// }

// burgerMenu ('.menu');

  
  });

//   const menuToggle = document.querySelector('#menu-togle');
// const mobileNavContainer = document.querySelector('#mobile-nav');

// menuToggle.onclick = function(){
//     menuToggle.classList.toggle('menu-icon-wrapper-active');
//     mobileNavContainer.classList.toggle('mobile-nav--active');
// }