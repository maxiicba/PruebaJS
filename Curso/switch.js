var numero = 1;

switch (Numero){
    case 1:
        console.log("Soy 1");
        break;
    case 10:
        console.log("Soy 10");
        break;
    default:
        console.log("No soy nada");
}

let manos = ["piedra", "papel", "tijera"];

function jugar (jugador){
    let enemigo = manos[getRandomInt(3)];
    if (jugador === enemigo) {
        console.log("Empate");
    }else{
        switch (true) {
        case jugador == "tijera" && enemigo == "papel":
        case jugador == "piedra" && enemigo =="tijera":
        case jugador == "papel" &&  enemigo =="piedra":
            console.log("Ganaste");
            break;
        default:
            console.log("Perdiste");
            break;
        }
    }
    console.log("CPU jugo: " + enemigo);
}
    

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  if (false === !true) { 
    console.log(false == true) } 
  else
   { console.log(true === !false) }