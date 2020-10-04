
export const nombreTarea = 'Pasear al perro';



export const crearTarea = (tarea,urgencia)=>{
    return `La tarea ${tarea} tiene una urgencia de ${urgencia}`;
}


//Herencia de clases

class Tarea{

    constructor(nombre,prioridad){

        this.nombre = nombre;
        this.prioridad = prioridad;
    }

    mostrar(){
        return `${this.nombre} tiene una prioridad de ${this.prioridad}`;

    }
}

//Herencia de clases
class ComprasPendientes extends Tarea{
    constructor(nombre,prioridad,cantidad){
        super(nombre,prioridad);//para propiedad heredadadas
        this.cantidad = cantidad;
    }

    mostrar(){
        super.mostrar();
        return `y la cantidad ${this.cantidad}`;
    }
}

// let tarea1 = new Tarea('Aprender JavaScript','Alta');

// console.log(tarea1.mostrar());

let compra1 = new ComprasPendientes('Javon','Urgente',3);

// console.log(compra1.mostrar());