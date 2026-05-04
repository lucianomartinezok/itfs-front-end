/**
 * 📌 EJEMPLO 08 · Eventos varios
 *
 * React envuelve los eventos del DOM en "SyntheticEvents" pero se usan
 * casi igual que en HTML: onClick, onMouseEnter, onKeyDown, etc.
 *
 * 🎯 Conceptos: onClick, onMouseEnter/Leave, onKeyDown, onFocus
 */
import { useState } from 'react';

function Ejemplo08() {
  const [hover, setHover] = useState(false);
  const [tecla, setTecla] = useState('');
  const [enfocado, setEnfocado] = useState(false);
  const [clicks, setClicks] = useState(0);

  return (
    <div>
      {/* onClick */}
      <div style={{ marginBottom: '16px' }}>
        <h4>👆 onClick</h4>
        <button onClick={() => setClicks(clicks + 1)}>
          Hiciste click {clicks} {clicks === 1 ? 'vez' : 'veces'}
        </button>
      </div>

      {/* onMouseEnter / onMouseLeave */}
      <div style={{ marginBottom: '16px' }}>
        <h4>🖱️ onMouseEnter / onMouseLeave</h4>
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            padding: '20px',
            background: hover ? '#0969da' : '#f6f8fa',
            color: hover ? 'white' : 'black',
            borderRadius: '6px',
            cursor: 'pointer',
            transition: 'all 0.2s',
            textAlign: 'center',
          }}
        >
          {hover ? '✨ ¡Hover detectado!' : 'Pasá el mouse por encima'}
        </div>
      </div>

      {/* onKeyDown */}
      <div style={{ marginBottom: '16px' }}>
        <h4>⌨️ onKeyDown</h4>
        <input
          type="text"
          placeholder="Tocá cualquier tecla..."
          onKeyDown={(e) => setTecla(e.key)}
        />
        {tecla && (
          <p style={{ marginTop: '8px' }}>
            Última tecla: <code>{tecla}</code>
          </p>
        )}
      </div>

      {/* onFocus / onBlur */}
      <div>
        <h4>🎯 onFocus / onBlur</h4>
        <input
          type="text"
          placeholder="Hacé click acá adentro"
          onFocus={() => setEnfocado(true)}
          onBlur={() => setEnfocado(false)}
          style={{
            border: enfocado ? '2px solid #1a7f37' : '1px solid #d0d7de',
            outline: 'none',
          }}
        />
        <p style={{ marginTop: '8px', color: '#656d76' }}>
          {enfocado ? '✅ Input enfocado' : '⚪ Input sin foco'}
        </p>
      </div>
    </div>
  );
}

export default Ejemplo08;

export const meta = {
  numero: '08',
  titulo: 'Eventos varios',
  descripcion: 'Click, hover, teclado, foco. Los eventos más usados en React.',
  conceptos: ['onClick', 'onMouseEnter', 'onKeyDown', 'onFocus / onBlur'],
  explicacion: `
React tiene su propio sistema de eventos sintéticos, pero la API es casi
idéntica a la de HTML. La diferencia clave es la sintaxis camelCase.

Eventos más comunes:
• onClick          → click del mouse
• onChange         → cambio en input/select/textarea
• onSubmit         → envío de formulario
• onMouseEnter / onMouseLeave → hover
• onKeyDown / onKeyUp → teclado
• onFocus / onBlur → foco en un input
• onScroll         → scroll en un elemento

Todos los handlers reciben un objeto evento "e" como primer argumento.
Las propiedades más útiles:
• e.target.value   → valor del elemento (inputs)
• e.key            → tecla presionada
• e.preventDefault() → cancelar comportamiento por defecto (típico en forms)
  `.trim(),
};
