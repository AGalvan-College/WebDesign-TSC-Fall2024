$(document).ready(function() {
    
    $('#mobilenav_id').load('mobile_headers.html');
    $('#footer_id').load('footers.html');

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
});