$(document).ready(function () { 
$('.single-item').slick({
      infinite: true,
      dots: true,
      slidesToShow: 2,
      slidesToScroll: 1,
       autoplay: true,
  autoplaySpeed: 2000
});
});
   // jquery menu
$(function () {
   $('.burger__menu').on('click', function (e) {
      e.preventDefault;
      //$(this).toggleClass('burger__menu-active');
      $(this).toggleClass('header__list-active');
   });

});

const burger = document.querySelector('.burger__menu');
const headerList = document.querySelector('.headerList');

burger.addEventListener("click", () => {
   headerList.classList.toggle('active');
});