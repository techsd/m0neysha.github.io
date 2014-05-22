$(document).ready(function(){

//CAROUSEL SLIDE RIGHT

$('#carousel-next').click(function(){
		var currentMargin = parseInt($('#carousel').css('margin-left').replace("px", ""));
		if (currentMargin == -3840) {
			return false;
		} else {
			$('#carousel').animate({'margin-left': currentMargin - 960});		
		}
	});


//CAROUSEL SLIGHT LEFT 

$('#carousel-prev').click(function(){
	var currentMargin = parseInt($('#carousel').css('margin-left').replace("px", ""));
	if (currentMargin == 0) {
		return false;
	} else {
		$('#carousel').animate({'margin-left': currentMargin + 960});		
	}
	});

// MUSIC PAGE




$('#item1').click(function(item1) {
	$('#info1')
  			.html( "<div class='review'><div id='review'>REVIEW </div>Gambino! Gambino! Gambino! Gambino! Gambino! Gambino! Gambino! Gambino! Gambino! Gambino! Gambino! Gambino! Gambino! Gambino! Gambino! Gambino! Gambino! Gambino! Gambino! Gambino! Gambino! Gambino! Gambino! Gambino! Gambino! Gambino! Gambino! Gambino! Gambino! Gambino! Gambino! Gambino! Gambino! Gambino! Gambino! Gambino!</div> <div class='track-list'><div id='fav-tracks'>FAVORITE TRACKS</div>1. Telegraph Ave. <br> 2. sweatpants <br>3. 3005 </div>"  ); 
	if ($(this).hasClass('clicked')) { 
		if (($('#item2').hasClass('clicked')) || ($('#item3').hasClass('clicked'))
		   || ($('#item4').hasClass('clicked')))  {
			$('#info1').show(); // keep the info showing
			//$('.row1').addClass('clicked');
		}
  		else {
  		$('#info1').slideUp(200);
  		$(this).removeClass('clicked');
  		//$('.row1').removeClass('clicked');

  		}		   	
	} else { 				
		if ($('.row1').hasClass('clicked')) {
			item1.stopPropagation();
	  	} else { // first click
	  		$('#info1').slideDown(200);
	  	}
	  	$(this).addClass('clicked');	
  }

  });


$('#item2').click(function(item2) {
	$('#info1')
  			.html( "<div class='review'><div id='review'>REVIEW </div>Cashmere Cat! Cashmere Cat! Cashmere Cat! Cashmere Cat! Cashmere Cat! Cashmere Cat! Cashmere Cat! Cashmere Cat! Cashmere Cat! Cashmere Cat! Cashmere Cat! Cashmere Cat!</div> <div class='track-list'><div id='fav-tracks'>FAVORITE TRACKS</div>1. Telegraph Ave. <br> 2. sweatpants <br>3. 3005 </div>"  ); 
	if ($(this).hasClass('clicked')) { 
		if (($('#item1').hasClass('clicked')) || ($('#item3').hasClass('clicked'))
		   || ($('#item4').hasClass('clicked')))  {
			$('#info1').show(); // keep the info showing
			//$('.row1').addClass('clicked');
		}
  		else {
  		$('#info1').slideUp(200);
  		$(this).removeClass('clicked');
  		//$('.row1').removeClass('clicked');

  		}		   	
	} else { 				
		if ($('.row1').hasClass('clicked')) {
			item2.stopPropagation();
	  	} else { // first click
	  		$('#info1').slideDown(200);
	  	}
	  	$(this).addClass('clicked');	
	
  }

  });


$('#item3').click(function(item3) {
	$('#info1')
  			.html( "<div class='review'><div id='review'>REVIEW </div>Coachella! Coachella! Coachella! Coachella! Coachella! Coachella! Coachella! Coachella! Coachella! Coachella! Coachella! Coachella! Coachella! Coachella! Coachella! Coachella!</div> <div class='track-list'><div id='fav-tracks'>FAVORITE TRACKS</div>1. Telegraph Ave. <br> 2. sweatpants <br>3. 3005 </div>"  ); 
	if ($(this).hasClass('clicked')) { 
		if (($('#item1').hasClass('clicked')) || ($('#item2').hasClass('clicked'))
		   || ($('#item4').hasClass('clicked')))  {
			$('#info1').show(); // keep the info showing
			//$('.row1').addClass('clicked');
		}
  		else {
  		$('#info1').slideUp(200);
  		$(this).removeClass('clicked');
  		//$('.row1').removeClass('clicked');

  		}		   	
	} else { 				
		if ($('.row1').hasClass('clicked')) {
			item3.stopPropagation();
	  	} else { // first click
	  		$('#info1').slideDown(200);
	  	}
	  	$(this).addClass('clicked');	
  }

  });


$('#item4').click(function(item4) {
	$('#info1')
  			.html( "<div class='review'><div id='review'>REVIEW </div>Schoolboy Q! Schoolboy Q! Schoolboy Q! Schoolboy Q! Schoolboy Q! Schoolboy Q! Schoolboy Q! Schoolboy Q! Schoolboy Q! Schoolboy Q! Schoolboy Q! Schoolboy Q! Schoolboy Q!</div> <div class='track-list'><div id='fav-tracks'>FAVORITE TRACKS</div>1. Los Awesome <br> 2. Gangsta<br>3. Studio </div> "); 
	if ($(this).hasClass('clicked')) { 
		if (($('#item1').hasClass('clicked')) || ($('#item2').hasClass('clicked'))
		   || ($('#item3').hasClass('clicked')))  {
			$('#info1').show(); // keep the info showing
			//$('.row1').addClass('clicked');
		}
  		else {
  		$('#info1').slideUp(200);
  		$(this).removeClass('clicked');
  		//$('.row1').removeClass('clicked');

  		}		   	
	} else { 				
		if ($('.row1').hasClass('clicked')) {
			item4.stopPropagation();
	  	} else { // first click
	  		$('#info1').slideDown(200);
	  	}
	  	$(this).addClass('clicked');	
  }
	

  });

$('#item5').click(function(item5) {
	$('#info2')
  			.html( "<div class='review'><div id='review'>REVIEW </div>Floss! Floss! Floss! Floss! Floss! Floss! Floss! Floss! Floss! Floss! Floss! Floss! Floss! Floss! Floss! Floss! Floss! Floss! Floss! Floss! Floss! Floss! Floss! Floss! Floss! Floss! Floss! Floss! Floss! Floss! Floss! Floss! Floss! Floss! Floss! Floss! Floss! Floss! Floss! Floss! Floss! Floss! Floss! Floss! Floss! Floss! Floss! Floss! Floss! Floss! Floss! Floss! Floss! Floss! Floss! Floss!</div> <div class='track-list'><div id='fav-tracks'>FAVORITE TRACKS</div>1. Roll up <br> 2. Drop Top <br>3. PILLZ </div>"  ); 
	if ($(this).hasClass('clicked')) { // it's clicked
		if ($('.row2').hasClass('clicked')) {
  			if ($('#item4').hasClass('clicked')) {
	  		$('.row2').removeClass('clicked');
	  		}
	  		else {
	  		$('#info2').slideUp(200);
	  		}	
	  	} else {
	  		$('.row2').addClass('clicked');
	  	}		
	 $(this).removeClass('clicked');  	
	} else { // not clicked	

		if ($('.row2').hasClass('clicked')) {
			item5.stopPropagation();
  			$('.row2').removeClass('clicked');
  			$(this).addClass('clicked');

	  	} else { // first click 
	  	}
	
  }

  });




$('.row1').click(function(row1) { 
	if ($(this).hasClass('clicked')) {
		$('#info1').slideUp(200);
		$(this).removeClass('clicked');	
	} else {
		$('#info1').slideDown(200);
		$('#info2').slideUp(200);
		$('#info3').slideUp(200);
		$('#info4').slideUp(200);
		$(this).addClass('clicked');
	}
}); 



$('.row2').click(function(row2) { 
	if ($(this).hasClass('clicked')) {
		$('#info2').slideUp(200);
		$(this).removeClass('clicked');	
	} else {
		$('#info2').slideDown(200);
		$('#info1').slideUp(200);
		$('#info3').slideUp(200);
		$('#info4').slideUp(200);
		$(this).addClass('clicked');
	}
}); 

$('.row3').click(function(row3) { 
	if ($(this).hasClass('clicked')) {
		$('#info3').slideUp(200);
		$(this).removeClass('clicked');	
	} else {
		$('#info3').slideDown(200);
		$('#info1').slideUp(200);
		$('#info2').slideUp(200);
		$('#info4').slideUp(200);
		$(this).addClass('clicked');
	}
}); 

$('.row4').click(function(row4) { 
	if ($(this).hasClass('clicked')) {
		$('#info4').slideUp(200);
		$(this).removeClass('clicked');	
	} else {
		$('#info4').slideDown(200);
		$('#info1').slideUp(200);
		$('#info2').slideUp(200);
		$('#info3').slideUp(200);
		$(this).addClass('clicked');
	}
}); 

$('#blog-pic1').hover(function() {
	$('#mini-banner').show(); 
}, function() {
	$('#mini-banner').hide();
	}
);

$('#blog-pic2').hover(function() {
	$('#mini-banner').show(); 
}, function() {
	$('#mini-banner').hide();
	}
);





}); 
