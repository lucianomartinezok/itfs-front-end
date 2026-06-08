/**
 * 📌 EJEMPLO 06 · Inputs controlados
 *
 * Un input "controlado" tiene su valor MANEJADO por React (en el estado).
 * Cada vez que el usuario tipea, dispara onChange y actualizamos el estado.
 *
 * 🎯 Conceptos: input controlado, evento onChange, e.target.value
 */
import { useState } from 'react';

function Ejemplo06() {
  // Estados separados para cada input
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');

  return (
    <div>
      <div style={{ marginBottom: '12px' }}>
        <label style={{ display: 'block', marginBottom: '4px' }}>
          Nombre:
        </label>
        <input
          type="text"
          // value: el input muestra SIEMPRE lo que dice el estado
          value={nombre}
          // onChange: cuando el usuario tipea, actualizamos el estado
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Escribí tu nombre"
        />
      </div>

      <div style={{ marginBottom: '12px' }}>
        <label style={{ display: 'block', marginBottom: '4px' }}>Edad:</label>
        <input
          type="number"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
          placeholder="Escribí tu edad"
        />
      </div>

      {/* La UI se actualiza en TIEMPO REAL con cada tecla */}
      <div
        style={{
          marginTop: '20px',
          padding: '16px',
          background: '#f6f8fa',
          borderRadius: '6px',
          borderLeft: '4px solid #0969da',
        }}
      >
        <strong>Vista previa:</strong>
        <p>
          Hola, soy <strong>{nombre || '...'}</strong> y tengo{' '}
          <strong>{edad || '...'}</strong> años.
        </p>
      </div>
    </div>
  );
}

export default Ejemplo06;

export const meta = {
  numero: '06',
  titulo: 'Inputs controlados',
  descripcion: 'Inputs cuyo valor lo controla React. La UI refleja el estado en tiempo real.',
  conceptos: ['onChange', 'e.target.value', 'Inputs controlados'],
  explicacion: `
Un input "controlado" en React tiene dos partes:

1) value={estado}      → el valor que muestra el input lo dicta el estado.
2) onChange={handler}  → cada vez que el usuario tipea, actualizamos el estado.

Esto convierte al estado en la "única fuente de verdad" (single source of truth).
Si querés saber qué hay en el input, mirás el estado, no el DOM.

Beneficios:
• Validación en vivo
• Limpiar el input fácilmente (setNombre(''))
• Compartir el valor con otros componentes
• Botón "Submit" puede leer todos los valores del estado

Patrón opuesto: "uncontrolled inputs" usando ref. Se usa menos.
  `.trim(),
};
