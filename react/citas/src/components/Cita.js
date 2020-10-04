import React from 'react';
import PropType from 'prop-types';//Sirve para documentar los componentes

const Cita = ({cita,eliminarCita}) => (
    <div className="cita">
        <p>Mascota:<span>{cita.mascota}</span></p>
        <p>Dueño:<span>{cita.propietario}</span></p>
        <p>Fecha:<span>{cita.fecha}</span></p>
        <p>Hora:<span>{cita.hora}</span></p>
        <p>Sintomas:<span>{cita.sintomas}</span></p>

        <button
            className="button eliminar u-full-width"
            onClick={()=> eliminarCita(cita.id)}
        >Eliminar &times;</button>
    </div>
);
 
Cita.propType = {
    //Se valida los props que se pasan a los componentes de modo que se validen y queden documentados
    crearCita:PropType.object.isRequired,
    eliminarCita:PropType.func.isRequired
}
export default Cita;