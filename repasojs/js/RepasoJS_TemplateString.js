//TemplateStrings


const nombre = 'juan';
const trabajo = 'Desarrollador Web';

console.log('Nombre: '+ nombre + ' Trabajo: ' + trabajo);
console.log(`Nombre: ${nombre} Trabajo: ${trabajo}`);


const contenedorApp = document.querySelector("#app");

let html = `<ul>
                <li>Nombre: ${nombre}</li>
                <li>Trabajo: ${trabajo}</li>
            </ul>`;

contenedorApp.innerHTML = html;


