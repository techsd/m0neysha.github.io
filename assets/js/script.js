$(document).ready(function(){

//Work page animations 
    $('.categorytab').click(function() {
        $('.categoryinfo').hide();
        $('.categorytab').removeClass('selectedtab');
        $(this).addClass('selectedtab');
        var category = $(this).text();
        if (category == 'All') {
            $('.project').show();
        } else if (category == 'Personal') {
            $('.project').hide();
            $('.personal').show();
        } else if (category == 'Web Dev') {
            $('.project').hide();
            $('.webdev').show();
        } else if (category == 'CS 61ABC') {
            $('.project').hide();
            $('.cs61abc').show();
        } else {
            $('.project').hide();
            $('.education').show();
        }
    });


$('.navigation a').click(function() {
        $('.navigation a').removeClass("nav-selectedtab");
        $(this).addClass("nav-selectedtab");
       });   





// MUSIC PAGE


    $(function(){
      // See if this is a touch device
      if ('ontouchstart' in window)
      {
        // Set the correct body class
        $('body').removeClass('no-touch').addClass('touch');
        
        // Add the touch toggle to show text
        $('div.boxInner img').click(function(){
          $(this).closest('.boxInner').toggleClass('touchFocus');
        });
      }
    });

    //music selected year navigation animations

    $('.year-tab').click(function() {
        $('.year-tab').removeClass('selected-year-tab');
        $(this).addClass('selected-year-tab');
        var category = $(this).text();
        if (category == 'All') {
            $('.box').show();
        } else if (category == '2014') {
            $('.box').hide();
            $('.fourteen').show();
        } else if (category == '2013') {
            $('.box').hide();
            $('.thirteen').show();
        } else if (category == '2012') {
            $('.box').hide();
            $('.twelve').show();
        }
    });




  }); 






