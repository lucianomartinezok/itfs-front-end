/**
 * 📌 EJEMPLO 04 · Estado con useState (Contador)
 *
 * "Estado" es la memoria interna de un componente: datos que pueden cambiar.
 * Cuando el estado cambia, React vuelve a renderizar el componente automáticamente.
 *
 * 🎯 Conceptos: useState, eventos onClick, re-render
 */
import { useState } from 'react';

function Ejemplo04() {
  // useState devuelve un array: [valorActual, funciónParaActualizarlo]
  // El argumento (0) es el valor inicial.
  const [count, setCount] = useState(0);

  // Funciones que actualizan el estado.
  // OJO: nunca hagas count = count + 1, siempre usá el "setter" (setCount).
  const sumar = () => setCount(count + 1);
  const restar = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ fontSize: '4rem', margin: '20px 0' }}>{count}</h2>

      <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
        <button onClick={restar}>➖ Restar</button>
        <button onClick={reset}>🔄 Reset</button>
        <button onClick={sumar}>➕ Sumar</button>
      </div>

      <p style={{ marginTop: '20px', color: '#656d76' }}>
        Cada click cambia el estado <code>count</code>.
        <br />
        Cuando el estado cambia, React redibuja este componente con el nuevo valor.
      </p>
    </div>
  );
}

export default Ejemplo04;

export const meta = {
  numero: '04',
  titulo: 'useState · Contador',
  descripcion: 'El primer hook: useState. Datos que cambian con el tiempo.',
  conceptos: ['useState', 'Eventos onClick', 'Re-render automático'],
  explicacion: `
useState es un "hook" de React que le da MEMORIA a un componente.

Sintaxis:
  const [valor, setValor] = useState(valorInicial);

• valor → el dato actual (lo usás en el JSX).
• setValor → la función para cambiarlo.

REGLA DE ORO: nunca asignás directamente (valor = ...). Siempre usás el setter.
Cuando llamás al setter, React ejecuta de nuevo la función del componente y
actualiza la pantalla con el nuevo valor.

Este es EL concepto más importante de React: la UI es un reflejo del estado.
  `.trim(),
};
