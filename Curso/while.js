var estudiantes = ["Maxi", "Maria"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`); // Este simbolo se pone con alt+96 `
}

while(estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}