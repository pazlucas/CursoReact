import React from 'react';


const Producto = ({producto,carrito,agregarProducto,productos}) => {

    const {nombre,precio,id} = producto;


    //Agregar producto al carrito

    const seleccionarProducto = (id)=>{
        const producto = productos.filter(producto => producto.id === id);
        agregarProducto([
            //Se realiza una copia de carrito
            ...carrito,
            //Como segundo parametro el producto nuevo
            producto
        ]);
    }

    //Eliminar producto del carrito
    const eliminarProducto = (id) =>{
        const productos = carrito.filter(producto => producto[0].id !== id)
        
        //Colocar los restantes en el state

        agregarProducto(productos);
    } 

    return ( <div>

        <h2>{nombre}</h2>
        <p>{precio}</p>
            {productos
            ?
                (
                    <button 
                        type="button"
                        onClick={()=> seleccionarProducto(id)}//Los eventos en React inician con el prfijo "on"
                        >Comprar
                    </button>
                )
            :   
                (
                    <button 
                        type="button"
                        onClick={()=> eliminarProducto(id)}
                        >Eliminar
                    </button>
                )
            }

    </div> );
}
 
export default Producto;