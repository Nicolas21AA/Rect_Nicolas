
'use client';

import { useState, useEffect, use } from 'react';

// useEffect -> para consumir una API
// Renderizado condicional --> cargando...
// mapp() --> renderizar la info
// Diseño grid o flexbox

export default function Productos() {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);

    // useEffect para consumir la API
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                setProductos(data);
                setCargando(false);
            });
        }, []);

        return(
            <div style={{textAlign: 'center', marginTop: '30px'}}>
                <h1> Listado de productos</h1>

                {/* Ternario */}
                {cargando ? (
                    <p>Cargando...</p>
                ) : (
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '20px',
                        padding: '20px'
                    }}>
                        {/* map() */}
                        {productos.map(producto => (
                            <div key={producto.id} 
                            style={{
                                border: '1px solid #ccc',
                                borderRadius: '8px',
                                padding: '10px',
                            }}>
                                <img src={producto.image} alt=
                                {producto.title} width="100" height="100" />
                                <h3>{producto.title}</h3>
                                <p>${producto.price}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
}