jQuery(document).ready(function(){
didScroll = true;


 // Transition effect for navbar
          $(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
          
          if($(this).scrollTop() > 70) { 
              $('.navbar-home').addClass('bg-dark');
              $('.navbar-home').removeClass('bg-transparent')
           
          } 

          else {
              $('.navbar-home').removeClass('bg-dark');
            $('.navbar-home').addClass('bg-transparent');
          }


        });
	
	//SUBMIT BUTTON
	
     $("#gform").on('submit',function(e){
        alert("Form submitted");
   

    });

//scroll animation
    $('#scrolldown').click (function() {
      $('html, body').animate({scrollTop: $('#about').offset().top }, 'slow');
      return false;
    });
 

    $('#scrollup-load').click (function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
   return false;
});



//skillbar
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});

});

