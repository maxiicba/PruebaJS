function presionada(event){
    if (event.keyCode == 112) {
        event.preventDefault();
    }
    if(event.keyCode == 112){ //Tecla con la flecha hacia abajo
        cerrarVenta();
    }
 }
 window.onkeydown = presionada;

 function cerrarVenta(){
    console.log("La venta ha sido realizada");
 }
//https://www.toptal.com/developers/keycode/for/alt <---- ver el codigo de tecla