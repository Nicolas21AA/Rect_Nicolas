

/*  
   useEffect (()=>{
      --accion que quiero ejecutar
    }, [dependencias])--array de dependencias
*/


//Generar una vista al ejecutar un efecto secundario me muestre el contenido
// en consola

'use client'
import { use } from "react";
import { useState, useEffect } from "react"

export default function Mensaje(){
    const[nombre, setNombre] =("");

    //useEffect
    useEffect(()=>{
        console.log("El nombre es:", nombre);
    },[nombre]);

    return(
        <div style={{textAlign:'center'}}>
            <input 
               type="text" 
               placeholder="Escribir tu nombre"
               value={nombre}
               onChange={(e)=>setNombre(e.target.value)}
            />

            <p>Hola {nombre||"invitado"}</p>

        </div>
    );
}
