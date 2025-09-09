import Navbar from "@/Components/Navbar"
import './globals.css';
import { title } from "process";
import { ReactNode } from "react";

export const metadata={
  title: 'clase lista y renderizado',
  description: 'Aprendiendo React con Next.js'
}
/*
function suma(a, b) {
  return a + b;
}

Función tipada
function sumaTipada(a: number, b: number): number {
  return a + b;
}


Componete padre -> Componente hijo

const numeros = [1, 2, 3, 4, 5];

const dobles = numeros.map(n => n * 2);

*/
// Opcion 1: tipar el children
interface RootLayoutProps{
  children: ReactNode;
}

export default function RootLayout({children}: RootLayoutProps){
  return(
    <html lang="en">
    <body>
      <Navbar /> 
      {children}
    </body>
    </html>
  )
}
/*
 ternarios
if - else
ondicion ? "si es verdadero" : "si es falso"
roductos. length ›

productos.length > 0
? <p>Hay productos disponibles</p>
: <p>No hay productos</p>
*/
