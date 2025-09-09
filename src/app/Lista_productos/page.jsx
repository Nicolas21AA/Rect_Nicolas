'use client'

import { useEffect, useState } from 'react';

function ListaProductos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProductos(data));
  }, []); // Solo se ejecuta una vez

  return (
    <div style={{textAlign: 'center', marginTop: '30px'}}>
    <ul style={{listStyleType: 'none', padding: 0}}>
      {productos.map(p => (
        <li key={p.id}
        style={{
                    margin: '10px',
                    padding: '10px',
                    border: '1px solid gray',
                    borderRadius: '8px'
                }}
        > 
            {p.title} - ${p.price}
        </li>
      ))}
    </ul>
    </div>
  );
}
export default ListaProductos;