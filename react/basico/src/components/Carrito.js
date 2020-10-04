import React from 'react';
import './carrito.css';
import Producto from './Producto';

const Carrito = ({carrito,agregarProducto}) => (
    <div className="carrito">
        <h2>
            Tu Carrito de Compras
        </h2>
        {           
            carrito.length === 0
            ?
                <p>No hay elementos</p>
            :carrito.map(producto =>(
        
                <Producto 
                    key={producto[0].id}
                    producto={producto[0]}
                    carrito={carrito}
                    agregarProducto={agregarProducto}
                 />
                ))
        }
    </div>
);
 
export default Carrito;