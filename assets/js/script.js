console.log('conexion')
   
$(document).ready(function(){
    $(document).keydown(function(l) {
        if (l.which === 65){//izquierda
             $("#personaje")
             .stop(true, true) // Detiene animaciones anteriores
             .animate({ right: '+=200px' }, 200);;
        }
        if (l.which === 68) {//derecha
            $("#personaje")
             .stop(true, true) 
             .animate({ left: '+=200px' }, 200);;
        
        }
         if (l.which === 83) {
            $("#personaje")
             .stop(true, true) 
             .animate({ right: '+=200px' }, 200);;
         
        }
         if (l.which === 87) {
            $("#personaje")
             .stop(true, true) // Detiene animaciones anteriores
             .animate({ right: '+=200px' }, 200);;
          
        }
      });
   
}) 