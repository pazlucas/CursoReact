//clases

class Tarea{

    constructor(nombre,prioridad){

        this.nombre = nombre;
        this.prioridad = prioridad;
    }

    mostrar(){
        return `${this.nombre} tiene una prioridad de ${this.prioridad}`;

    }
}

let tarea1 = new Tarea('Aprender JavaScript','Alta');

console.log(tarea1.mostrar());