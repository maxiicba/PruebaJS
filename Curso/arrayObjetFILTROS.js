var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "Television", costo: 3500},
    {nombre: "libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700}
];

var articulosFiltrados = articulos.filter(function(articulo){
return articulo.costo <= 500
})
// ESTO TRAE TODOS LOS OBJETOS DE EL ARRAY ARTICULOS QUE TENGAN UN COSTO MENOR A 500


var nombreArticulos = articulos.map(function(articulo){ 
    return articulo.nombre
})
//====esto da este resultado / SOLO TRAE LOS NOMBRES DEL ARRAY ARTICULOS
/*nombreArticulos
(7)[
Bici
Television
libro
Celular
Laptop
Teclado
Audifonos
]*/


// BSUCAR POR UN PARAMETRO EN PARTICULAR
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Celular"
}) 


// for each recorrer el array (traer ciertos datos del array general)
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});


// devuelve true si hay uno o mas articulos con el costo menos de 700
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo < 700
});

/*let i = 0;
while( i <= 5){
    console.log(i)
    i++;
}
*/

let i = 10;
while( i >= 2){
    console.log(i)
    i--;
}

let respuesta;

while(respuesta != "4"){ //SI LA RESPUESTA NO ES 4 EL CODIGO SE SIGUE EJECUTANDO
    let pregunta = prompt("Cuanto es 2+2?");
    respuesta = pregunta;
}

// CAMBIAR DE LUGAR ELEMENTOS DE UN ARRAY
let swap = (val1, val2, arr) => {
    if(!arr.includes(val1) || !arr.includes(val2)) return;
    let val1_index = arr.indexOf(val1);
    let val2_index = arr.indexOf(val2);
    arr.splice(val1_index, 1, val2);
    arr.splice(val2_index, 1, val1);
  }
  let estudiantes = ['Juan', 'Luis', 'Mario','Jessica', 'Marcos'];
  swap('Luis', 'Jessica', estudiantes);
  console.log(estudiantes)
// ==========================================================

let tets = ['Juan', 'Luis', 'Mario','Jessica', 'Marcos'];

function imprimirArray(arry){
    for(i=0; i<arry.length; i++){
        console.log(arry[i]);
    }
}

imprimirArray(tets);

let imprimir = imprimirArray(tets);
console.log(imprimir)

let objt = {
    nombre: "Maxi",
    edad: ""
}

function personas(nbre,ed){
    this.nombre = nbre;
    this.edad = ed;
}

let max = new personas("Maxi", 22);
let pedro = new personas("Pedro", 12);
let juan = new personas("juan", 22);

let perro = {
    nombre: "Scott",
    color: "Negro",
    macho: true,
    edad: 5
  };
  

function imprimir (){
    for (let clave in perro){
        console.log(perro[clave]);
      }
}

const suscripciones = [
    {name: 'one', mensaje: "Te puedes suscribir tu solo"},
    {name: 'duo', mensaje: "Se pueden suscribir ambos"}
]; 


function consultar (suscripcion){
    if(consulta1){
        let resultado = suscripciones.find( susc => susc.name === suscripcion );
        console.log(resultado.mensaje);
        return;
    }
    console.log("No existe")
}


    const inventario = [
        {nombre: 'manzanas', cantidad: 2},
        {nombre: 'bananas', cantidad: 0},
        {nombre: 'cerezas', cantidad: 5}
    ];
    
    const resultado = inventario.find( fruta => fruta.nombre === 'cerezas' );
    
    console.log(resultado);