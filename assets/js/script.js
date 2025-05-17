console.log('conexion')

 document.getElementById('comenzar').addEventListener('click', function(){
 let ocultar = document.getElementById('ocultarIns')
 ocultar.style.display="none";
})


function start(){
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
        });//funcion keydown

      function moverMata() {
    const sonido = document.getElementById("audioExplosion");
    const perdiste = document.getElementById("lastaudio");

    $("#mata")
        .show()
        .animate({ left: "300px" }, 2000, function () {
            $("#explosion").fadeIn(200); // Muestra la imagen

            sonido.currentTime = 0;
            sonido.play();

            perdiste.currentTime = 0;
            perdiste.play();

           setTimeout(() => {
                console.log("Mostrando mensaje final...");
                $("#final").fadeIn(400);
            }, 1500);

        });
}

setTimeout(moverMata, 10000);




      


        
      

           




        


        

    });//funcion ready
}//funcion start
