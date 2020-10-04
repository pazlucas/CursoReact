//Objetos

//Object Constructor

//Nombre de la funcion inicia con mayus
function Tarea(nombre,urgencia)
{
    this.nombre = nombre;
    this.urgencia = urgencia;
}

//crear una nueva tarea:

const tarea1 = new Tarea('Aprender JavaScript','Urgente');
const tarea2 = new Tarea('Preparar Cafe','Medio');
console.log(tarea1);
console.log(tarea2);