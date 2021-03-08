$(document).ready(function(){
   $('.dropdown').mouseenter(function() {
       $(this).find('.shadow').addClass('active')
    });
   
   $('.dropdown').mouseleave(function() {
       $(this).find('.shadow').removeClass('active')
    });

});