var miAuto = {
marca: "Ford",
color: "Rojo",
modelo: "Ranger",
annio: 2020,
detalleAuto: function(){
    console.log(`Auto, ${this.modelo}, ${this.annio}.`);
    }
};

    miAuto.detalleAuto();


    // CONTRUCTORA

var autosArray = [];

function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

function crearAuto(marca, modelo, annio){
    autosArray.push(new auto(marca, modelo, annio));  
    console.log(`Se ha creado el veiculo: ${marca}, ${modelo}, ${annio}.`)
}

const  generateRandomString = (num) => {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result1= ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < num; i++ ) {
        result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result1;
}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


for (i=0; i <= 30; i++){
    crearAuto(generateRandomString(5), generateRandomString(5), getRandomInt(4));
}

