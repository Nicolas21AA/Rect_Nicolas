'use client'
import Link from "next/link";

export default function Navbar(){
    return(
        <nav style={{
            backgroundColor: '#a5a5a5ff',
            padding: '15px',
            display: 'flex',
            justifyContent: 'space-around',
        }}>
    <Link href="/"  style={{color:'withe', textDecoration: 'none'}}>Inicio</Link>
    <Link href="/Lista"  style={{color:'withe', textDecoration: 'none'}}>Lista Basica</Link>
    <Link href="/Productos"  style={{color:'withe', textDecoration: 'none'}}>Productos API</Link>
    <Link href="/Lista_productos"  style={{color:'withe', textDecoration: 'none'}}>Lista Estatica</Link>

        </nav>

    );
}