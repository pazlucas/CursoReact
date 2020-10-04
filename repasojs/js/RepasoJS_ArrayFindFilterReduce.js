//Sprear operator

const personas = [
    {nombre:'Juan',edad:23,aprendiendo:'JavaScript'},
    {nombre:'Pablo',edad:19,aprendiendo:'PHP'},
    {nombre:'Alejandra',edad:21,aprendiendo:'AdobeXD'},
    {nombre:'Caren',edad:30,aprendiendo:'Python'},
    {nombre:'Miguel',edad:35,aprendiendo:'ReactJS'}
]

console.log(personas);

//Mayores de 28 años

const mayores = personas.filter(persona=>{
    return persona.edad > 28;
});

console.log(mayores);


//Que aprende alejandra

const alejandra = personas.find(persona=>{

    return persona.nombre = 'Alejandra';
});

console.log(alejandra);


let total = personas.reduce((edadTotal,persona)=>{

    return edadTotal + persona.edad;

},0);


console.log(total);