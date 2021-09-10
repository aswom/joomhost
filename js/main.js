$(document).ready(function () { 
$('.single-item').slick({
      infinite: true,
      dots: true,
      slidesToShow: 2,
      slidesToScroll: 1,
       autoplay: true,
   autoplaySpeed: 2000,
  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 1,
	      }
	    }
    ]

});
});
   // jquery menu
$(function () {
   $('.burger__menu').on('click', function (e) {
      e.preventDefault;
      //$(this).toggleClass('burger__menu-active');
      
   });

});

const burger = burger__menu = document.querySelector('.burger__menu');
//const burger__menu = document.querySelector('.burger__menu');
const headerList = document.querySelector('.headerList');

burger.addEventListener("click", () => {
   headerList.classList.toggle('active');
   burger__menu.classList.toggle('active');

});