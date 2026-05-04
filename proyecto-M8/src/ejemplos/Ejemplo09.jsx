/**
 * 📌 EJEMPLO 09 · Comunicación Padre ↔ Hijo
 *
 * Los componentes se comunican así:
 * • Padre → Hijo: pasándole datos por props.
 * • Hijo → Padre: el padre le pasa una FUNCIÓN, el hijo la llama.
 *
 * 🎯 Conceptos: lifting state up, callbacks, flujo unidireccional
 */
import { useState } from 'react';

// 👶 HIJO 1: input que NO tiene estado propio.
//    Recibe el valor y la función para cambiarlo desde el padre.
function CajaInput({ etiqueta, valor, onCambiar }) {
  return (
    <div style={{ marginBottom: '12px' }}>
      <label style={{ display: 'block', marginBottom: '4px' }}>{etiqueta}</label>
      <input
        type="text"
        value={valor}
        onChange={(e) => onCambiar(e.target.value)}
      />
    </div>
  );
}

// 👶 HIJO 2: solo MUESTRA datos. No tiene estado propio.
function VistaPrevia({ nombre, apellido }) {
  return (
    <div
      style={{
        padding: '16px',
        background: '#ddf4ff',
        border: '2px solid #0969da',
        borderRadius: '8px',
        marginTop: '12px',
      }}
    >
      <strong>👋 Vista previa (otro componente):</strong>
      <p style={{ fontSize: '1.3rem', marginTop: '8px' }}>
        {nombre || '...'} {apellido || '...'}
      </p>
    </div>
  );
}

// 👨 PADRE: tiene el estado y se lo pasa a los dos hijos.
function Ejemplo09() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');

  return (
    <div>
      {/* El padre baja datos (valor) y funciones (onCambiar) a los hijos */}
      <CajaInput
        etiqueta="Nombre:"
        valor={nombre}
        onCambiar={(nuevo) => setNombre(nuevo)}
      />
      <CajaInput
        etiqueta="Apellido:"
        valor={apellido}
        onCambiar={(nuevo) => setApellido(nuevo)}
      />

      {/* Otro hijo, hermano del anterior, recibe los mismos datos */}
      <VistaPrevia nombre={nombre} apellido={apellido} />

      <p style={{ marginTop: '16px', color: '#656d76', fontSize: '0.9rem' }}>
        💡 Los dos inputs y la vista previa son componentes <strong>hermanos</strong>.
        Comparten datos a través del estado del padre. Esto se llama{' '}
        <strong>"lifting state up"</strong>.
      </p>
    </div>
  );
}

export default Ejemplo09;

export const meta = {
  numero: '09',
  titulo: 'Padre ↔ Hijo',
  descripcion: 'Cómo se comunican los componentes: props para bajar datos, callbacks para subir.',
  conceptos: ['Lifting state up', 'Callbacks', 'Flujo unidireccional'],
  explicacion: `
En React los datos fluyen SIEMPRE hacia abajo (de padre a hijo) por props.
Para que un hijo le avise al padre, el padre le pasa una función como prop
y el hijo la llama cuando algo pasa.

Cuando dos componentes hermanos necesitan compartir datos, el estado se
"levanta" (lifting state up) hasta el primer ancestro común que los contiene
a ambos. Ese ancestro maneja el estado y se lo baja a cada hijo.

Este patrón es la base de la comunicación en React.
Para apps grandes, cuando esto se vuelve incómodo (prop drilling), se usan
herramientas como Context API, Redux o Zustand.
  `.trim(),
};
