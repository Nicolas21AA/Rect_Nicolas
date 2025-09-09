'use client';
import { useState } from "react";
import Boton from '../../Components/Boton'



// vamos a crear una lista basica con map

export default function Page(){
    const [tareas, setTareas] = useState(["Estudiar React", "Hacer ejercicio","Leer libro"])

    

  const [modoEditar, setModoEditar] = useState(false); // si estamos editando o no
  const [tareasEditadas, setTareasEditadas] = useState([]); // copia para edición

  // Activar edición
  function activarEdicion() {
    setModoEditar(true);
    setTareasEditadas([...tareas]); // clonar las tareas
  }

  // Guardar cambios
  function guardarCambios() {
    setTareas(tareasEditadas);
    setModoEditar(false);
  }

  // Cambiar una tarea específica
  function modificarTarea(index, nuevoTexto) {
    const nuevas = [...tareasEditadas];
    nuevas[index] = nuevoTexto;
    setTareasEditadas(nuevas);
  }

    return(

        <div style={{textAlign: 'center', marginTop: '30px'}}>
           <h1>Lista de Tareas</h1>
           <ul style={{listStyleType: 'none', padding: 0}}>
              {tareas.map((tarea, index) =>(
                <li key={index}
                style={{
                    margin: '10px',
                    padding: '10px',
                    border: '1px solid gray',
                    borderRadius: '8px'

                }}
                > {modoEditar ? (
              <input
                type="text"
                value={tarea}
                onChange={(e) => modificarTarea(index, e.target.value)}
              />
            ) : (
              tarea
            )}
            </li>
              ))}
           </ul>
           {modoEditar ? (
        <Boton texto="Guardar cambios" onClick={guardarCambios} />
      ) : (
        <Boton texto="Editar lista" onClick={activarEdicion} />
      )}
          

        </div>

    );
}

