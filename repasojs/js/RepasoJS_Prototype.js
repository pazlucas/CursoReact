//Prototype

const persona = {
    nombre:'Juan',
    profesion:'Desarrollo Web',
    edad:500
}

console.log(persona);
console.log(persona.mostrarInformacionTarea());

//Object Constructor

//Nombre de la funcion inicia con mayus
function Tarea(nombre,urgencia)
{
    this.nombre = nombre;
    this.urgencia = urgencia;
}

//Prototype
Tarea.prototype.mostrarInformacionTarea = function()
{
    return `La tarea ${this.nombre} tiene prioridad de ${this.urgencia}`;
}

//crear una nueva tarea:

const tarea1 = new Tarea('Aprender JavaScript','Urgente');


// console.log(tarea1);
console.log(tarea1);
console.log(tarea1.mostrarInformacionTarea());
