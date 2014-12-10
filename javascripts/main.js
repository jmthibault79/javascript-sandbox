/* standard JS */
window.onload = function() {
    //alert( "alert box after rendering" );
};

var makebold = false;

/* jQuery */
$( document ).ready(function() {
    //alert( "alert box ASAP" );

    $( "a" ).click(function( event ) {
        //alert( "alert box on click" );
        makebold = !makebold;
        if (makebold) {
            $( "a" ).addClass( "makebold" );
        }
        else {
            $( "a" ).removeClass( "makebold" );
        }
    });
});