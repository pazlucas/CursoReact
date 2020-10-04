//Sprear operator

let lenguajes = ['JavaScript','PHP','Python'];
let frameworks = ['ReactJS','Laravel','Django'];

//Unir los arreglos en 1 solo


//Vieja Forma
//let conbinacion  = lenguajes.concat(frameworks);

//Forma Nueva

let conbinacion  = [...lenguajes,...frameworks];
console.log(conbinacion);