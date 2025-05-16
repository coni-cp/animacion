console.log('conexion')
   
$(document).ready(function () {
     const $personaje = $("#personaje");
    $(document).keydown(function (l) {
        if (l.which === 65) { // A - izquierda
            $personaje.stop(true, true).animate({ left: '-=20px' }, 100);
        } 
        else if (l.which === 68) { // D - derecha
            $personaje.stop(true, true).animate({ left: '+=20px' }, 100);
        } 
        else if (l.which === 83) { // S - abajo
            $personaje.stop(true, true).animate({ top: '+=20px' }, 100);
        } 
        else if (l.which === 87) { // W - arriba
            $personaje.stop(true, true).animate({ top: '-=20px' }, 100);
        }
        else if (l.which === 80) { // P- desaparece
            $personaje.toggle(400);
        }
    });
     setTimeout(function () {
        $("#mata")
            .show() // primero lo mostramos
            .animate({ left: "300px" }, 2000); // luego lo deslizamos hacia la derecha
    }, 8000);
        

});


