// #4 initial state setup call.
$(document).ready(function () {
	$('#menu-toggle').click(function(){
		if($('#menu').hasClass('open')){
			$('#menu').removeClass('open'); // there is a toggleClass method in jQuery that will handle this logic for free.
			$('#menu-toggle').removeClass('open');
		}else{
			$('#menu').addClass('open');
			$('#menu-toggle').addClass('open');
		}
	});

  // $('a#dream-btn').click(function(event){
  //   event.preventDefault();
  //   if($('#dreams-select').hasClass('open')){
  //     $('#menu').removeClass('open');
  //     $('#dreams-select').removeClass('open');
  //   } else {
  //     $('#dreams-select').addClass('open');
  //   }
  // })
});
