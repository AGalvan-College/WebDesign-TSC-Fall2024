$(document).ready(function() {
    
    $('.hamburger-menu').click(function(){
        event.stopPropagation();
        
        if ($('main').hasClass('active')) {
            $('main').removeClass('active');
        } else {
            $('main').addClass('active');
        }
    });
    
    $('main').click(function(){
        $('main').removeClass('active');
    });
    
    /* STICKY NAV */
    $('#blog').waypoint(function(direction) {
        if (direction == 'down') {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    });

});