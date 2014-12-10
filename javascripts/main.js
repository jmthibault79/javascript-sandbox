/* standard JS */
window.onload = function() {
    //alert( "alert box after fully rendering" );
};

var makebold = false;

/* jQuery */
$( document ).ready(function() {
    //alert( "alert box ASAP after DOM existence" );

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

// $( document ).ready() can also be written as the shorthand $()

$( window ).load(function() {
    //alert( "also an alert box after fully rendering" );
});
