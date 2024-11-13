
$(function(){
      $("#header_id").load("header.html");
        $('#mobilenav_id').load('mobile_header.html');
        $('#footer_id').load('footers.html');
    });

$(document).ready(function() {
	// load header html
	$( "#header_id" ).load( "header.html", function() {
		console.log( "external header loaded" );
	});

	// includes/footer-nav.html
	$( "#footer_id" ).load( "footers.html", function() {
		console.log( "external footer loaded" );
	});

    // includes/footer-nav.html
	$( "#mobilenav_id" ).load( "mobile_header.html", function() {
		console.log( "external mobile header loaded" );
	});
    
	// load external styles
	$("head").append('<script src="js/hamburger.js"></script>');

//END DOC READY
});