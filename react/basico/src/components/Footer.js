//Siempre se debe importar React- se puede importar con imr
import React from 'react';

//Si hacemos sfc crea una funcion de react para un componente
//El function expresion entiende () como retunr por lo que no es necsario {} ni tampoco poner retunr
const Footer = ({fecha}) => {
    return ( 
        <footer>
            <p>Todos los derechos reservados &copy; {fecha}</p>
        </footer>    
     );
}
 
export default Footer;
