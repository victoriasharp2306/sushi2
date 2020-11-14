$("#nigiri").draggable();
$("#edamame").draggable();
$("#sushichop").draggable();

$("#tallerken").droppable( {
       drop: function() {
           $(this).html("Her kommer litt fakta!");
       }
    
} );