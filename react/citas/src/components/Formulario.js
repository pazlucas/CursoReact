import React, {Fragment, useState} from 'react';
//Librerira para generador de ids
import uuid from 'uuid/dist/v4';
import PropType from 'prop-types';//Sirve para documentar los componentes

const Formulario = ({crearCita}) => {

    //crear state de Citas

    const [cita,actualizarCita] = useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''

    })

    //State para el error
    const [error,actualizarError] = useState(false)

    //Funcion que se ejecuta cada vez que se escribe en el input

    const actualizarState = e =>{
        //le pasamos el evento a la funcion con la letra "e" y en "e.target.value" tenes el valor 
        //que se escribio en input.

        actualizarCita({
            ...cita,
            [e.target.name]:e.target.value
        });
        
    }

    //Extraer los valores del state de citas.

    const {mascota, propietario, fecha, hora, sintomas} = cita;

    //Cuando el usuario presiona agregar cita

    const submitCita = e =>{
        //Evita el get por defecto del submit.
        e.preventDefault();
        
        //Validar
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === ''
        || hora.trim() === '' || sintomas.trim() === '')
        {
            actualizarError(true);
            return;
        }

        //Eliminar mensaje de validacion
        actualizarError(false);
        //Asignar un Id
        cita.id = uuid();
        //Crear la cita

        crearCita(cita);

        //Reiniciar el form

        actualizarCita({
            mascota:'',
            propietario:'',
            fecha:'',
            hora:'',
            sintomas:''
        })
    }


    return ( 
        <Fragment>
            <h2>
                Crear Cita
            </h2>
            
            {error?<p className="alerta-error">Todos los campos son obligatorios</p>:null}

            <form
                onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    value={mascota}
                />

                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre dueño de la mascota"
                    onChange={actualizarState}
                    value={propietario}
                />

                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />

                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />

                <label>Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                >

                </textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >
                    Agregar Cita
                </button>
            </form>
        </Fragment>
     );
}

Formulario.propType = {
    //Se valida los props que se pasan a los componentes de modo que se validen y queden documentados
    crearCita:PropType.func.isRequired
}
 
export default Formulario;