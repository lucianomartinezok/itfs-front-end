/**
 * 📌 EJEMPLO 05 · Render condicional (mostrar / ocultar)
 *
 * En React no escribimos "if (...) document.show()". En lugar de eso,
 * el JSX se renderiza CONDICIONALMENTE según el estado.
 *
 * 🎯 Conceptos: useState booleano, operador &&, operador ternario
 */
import { useState } from 'react';

function Ejemplo05() {
  const [mostrar, setMostrar] = useState(false);

  return (
    <div>
      {/* El texto del botón cambia con el operador ternario (a ? b : c) */}
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? '🙈 Ocultar contenido' : '👀 Mostrar contenido'}
      </button>

      {/* Render condicional con && :
          si "mostrar" es true → se renderiza el div.
          si es false → no se renderiza nada. */}
      {mostrar && (
        <div
          style={{
            marginTop: '16px',
            padding: '20px',
            background: '#fff8c5',
            borderLeft: '4px solid #d4a72c',
            borderRadius: '6px',
          }}
        >
          <h3>🎉 ¡Sorpresa!</h3>
          <p>Este contenido aparece y desaparece según el estado.</p>
          <p>
            Notá que el botón también cambia su texto. Eso es porque el JSX se
            re-renderiza completo cuando el estado cambia.
          </p>
        </div>
      )}

      {/* Otra forma común: el ternario para mostrar A o B */}
      <p style={{ marginTop: '16px', color: '#656d76' }}>
        Estado actual: {mostrar ? '✅ visible' : '❌ oculto'}
      </p>
    </div>
  );
}

export default Ejemplo05;

export const meta = {
  numero: '05',
  titulo: 'Render condicional',
  descripcion: 'Mostrar u ocultar elementos según el estado, sin manipular el DOM directamente.',
  conceptos: ['Estado booleano', 'Operador && (and)', 'Operador ternario'],
  explicacion: `
Hay tres patrones MUY comunes para renderizar condicionalmente en React:

1) Operador && (cuando solo querés mostrar/no mostrar):
     {visible && <Componente />}

2) Operador ternario (cuando hay DOS variantes):
     {logueado ? <Perfil /> : <Login />}

3) Variable o función auxiliar (cuando la lógica es compleja):
     let contenido;
     if (cargando) contenido = <Spinner />;
     else if (error) contenido = <Error />;
     else contenido = <Datos />;
     return <div>{contenido}</div>;

Lo importante: nunca tocás el DOM, solo cambiás el estado y React redibuja.
  `.trim(),
};
