// import TweenMax '.'

import $ from 'jquery';
import './jquery.easing.1.3'
$(function () {
    // TweenMax.staggerFrom($('.animation-banner-text'),3,{top:100,opacity:0},0.5)
    $('.tdbox').click(function(event) {
		/* Act on the event */
		$(this).toggleClass('xanh');//thêm class xanh vào html
		$(this).next().slideToggle(800);
    });
    $('.list-services').slideUp()
    $(".a").click(function(){
      $(".a.turn-right").removeClass("turn-right");
       $(this).addClass('turn-right');
   });

   $('.information-customer').click(function(event){
     $('.service').addClass('show-service')
   })
   $('.close-box').click(function(event){
    $('.service').removeClass('show-service')
   })
   setInterval(function(){
    $('.service').removeClass('show-service')
   },10000)


   $('.sl1').on('click', function(event) {
		event.preventDefault();
		$('html').animate({scrollTop: $('.title-detail').offset().top}, 1000,'easeInQuart')
		/* Act on the event */
    });
    $('.sl2').on('click', function(event) {
      event.preventDefault();
      $('html').animate({scrollTop: $('.room-services-detail').offset().top}, 1000,'easeInCirc')
      /* Act on the event */
      });
});
