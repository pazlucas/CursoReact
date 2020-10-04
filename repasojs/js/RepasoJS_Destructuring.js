//Destructuring de objetos

const aprendiendoJS = {
    version:{
        nueva:'ES6',
        anterior:'ES5'
    },
    frameworks:['React','VueJS','AngularJS']
}

//Destructuring es extraer valores de los objetos

//console.log(aprendiendoJS);

//Version anterior

// let version = aprendiendoJS.version.nueva;
// let framework = aprendiendoJS.frameworks;

//Destructuring forma nueva
let {anterior} = aprendiendoJS.version;

console.log(anterior);
