'use client'
import React, {useState} from "react"

// const [valor, setValor]= useState(valorInicial)

export default function VistaNueva(){
    const [valor, setValor]= useState(0);
    return (
        <div style={{textAlign: 'center'}}>
            <h2>{valor}</h2>
            <button onClick={()=>setValor(valor+1)}>Aumentar</button>
            <button onClick={()=>setValor(valor-1)}>Restar</button>
        </div>
    );
}