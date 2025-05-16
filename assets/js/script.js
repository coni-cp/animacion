console.log('conexion')
   
$(document).ready(function(){
    $(document).keydown(function(l) {
     
        const $personaje = $("#personaje");

        if (l.which === 65){ // A - izquierda
            $personaje
                .css({ left: '-=20px' }, 100);
        } 
        else if(l.which === 68) { // D - derecha
            $personaje
                .css({ left: '+=20px' }, 100);
        } 
        else if (l.which === 83) { // S - abajo
            $personaje
                .css({ top: '+=20px' }, 100);
        } 
        else if(l.which === 87) { // W - arriba
            $personaje
                .css({ top: '-=20px' }, 100);
        }
    });
});
