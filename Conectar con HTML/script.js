
const camp1 = document.querySelector('#camp1');
const form = document.querySelector('#form');
const camp2 = document.querySelector('#camp1');
const btn = document.querySelector('#btn');
const result = document.querySelector('#resultado');

form.addEventListener('click', btnOnClick)    

function btnOnClick(event){
    event.preventDefault();
    let resultado = Number(camp1.value) + Number(camp2.value);
    result.innerText = "El resultado es: " + resultado;
}

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
