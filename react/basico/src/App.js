import React, {Fragment,useState} from 'react';//Fragment deja importar los componentes sin tenes que poner un DIV
//con useState obtenermos el manejo de estados
//importamos nuestro componente
import Header from './components/Header.jsx';
import Footer from './components/Footer.js';
import Producto from './components/Producto.js';
import Carrito from './components/Carrito.js';

function App() {

  //Crear listado de productos
  //Sintaxis basica de uso de States
  //primer valor de array el nombre de los objetos a manipuolar y el segundo nombre de funcion para
  //actualizar el listado
  //parametros de la funcion con valores iniciales.
  const [productos,guardarProductos]=useState([
    {id:1, nombre:'camisa ReactJs', precio:50},
    {id:2, nombre:'camisa VUJs', precio:20},
    {id:3, nombre:'camisa NodeJs', precio:30},
    {id:4, nombre:'camisa Angular', precio:40},
  ]);

  //State para un carrito de compras
  const [carrito,agregarProducto] = useState([]);

  //Obtener la fecha
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header 
      titulo='Tienda Virtual'
      numero={20}
      />

       <h1>Lista de productos</h1>
       {productos.map(producto =>(
         <Producto 
           key={producto.id}
           producto={producto}
           carrito={carrito}
           productos={productos}
           agregarProducto={agregarProducto}
         />
       ))}

       <Carrito
          carrito = {carrito}
          agregarProducto = {agregarProducto}
       />
      <Footer 
        fecha={fecha}
      />
      </Fragment>
  );
}

export default App;
