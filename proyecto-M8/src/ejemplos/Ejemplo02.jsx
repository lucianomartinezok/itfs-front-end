/**
 * 📌 EJEMPLO 02 · Props básicas
 *
 * Un componente puede recibir datos del exterior a través de "props".
 * Las props son siempre de SOLO LECTURA dentro del componente.
 *
 * 🎯 Conceptos: props, destructuring, reutilización
 */

// El componente "Saludo" recibe un objeto props con la propiedad "nombre".
// Usamos destructuring directo en el parámetro: { nombre, emoji }
function Saludo({ nombre, emoji }) {
  return (
    <p style={{ fontSize: '1.2rem' }}>
      {emoji} Hola, <strong>{nombre}</strong>!
    </p>
  );
}

// El componente principal usa <Saludo /> tres veces con props distintas.
// Mismo componente, distintos datos → REUTILIZACIÓN.
function Ejemplo02() {
  return (
    <div>
      <Saludo nombre="Luciano" emoji="👋" />
      <Saludo nombre="María" emoji="✨" />
      <Saludo nombre="el grupo del M8" emoji="⚛️" />
    </div>
  );
}

export default Ejemplo02;

export const meta = {
  numero: '02',
  titulo: 'Props básicas',
  descripcion: 'Pasar datos a un componente para reutilizarlo con distintos valores.',
  conceptos: ['Props', 'Destructuring', 'Reutilización'],
  explicacion: `
Las "props" (propiedades) son cómo un componente padre le pasa datos a un componente hijo.
Funcionan igual que los argumentos de una función.

En este ejemplo, el componente <Saludo /> se reutiliza 3 veces con datos distintos:
solo cambian las props "nombre" y "emoji".

📌 Importante: las props son INMUTABLES. El componente que las recibe NO puede modificarlas.
Si necesita cambiarlas, debe avisarle al padre con una función callback (ver Ejemplo 09).
  `.trim(),
};
