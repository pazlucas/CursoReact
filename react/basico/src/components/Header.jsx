//Siempre se debe importar React
import React from 'react';

//Primer componente
function Header(props){ //Los prors son propiedades que se pueden pasar del componeneten principal
    //Antes del return se puede poner cod java tradicional

    console.log(props);
    //Dentro del return es todo lo que se va aver en la pantall
    //Lo que se encuentre dentro del return en {} es codigo JS
    //Para las clases de html se pone className
    return (
        <h1>Desde el header</h1>    
    )
}

export default Header;