/**
 * 📌 EJEMPLO 03 · La prop especial "children"
 *
 * Cualquier cosa que escribas ENTRE las etiquetas de apertura y cierre
 * de un componente, llega como la prop "children".
 *
 * 🎯 Conceptos: children, composición, componentes "wrapper"
 */

// Un componente "Caja" que envuelve cualquier contenido con un estilo de tarjeta.
// Recibe "titulo" como prop normal y "children" como prop especial.
function Caja({ titulo, children }) {
  const estilo = {
    border: '2px solid #0969da',
    borderRadius: '8px',
    padding: '16px',
    margin: '12px 0',
    background: '#f6f8fa',
  };

  return (
    <div style={estilo}>
      <h3 style={{ marginBottom: '8px' }}>{titulo}</h3>
      <div>{children}</div>
    </div>
  );
}

function Ejemplo03() {
  return (
    <div>
      <p>El mismo componente "Caja" envuelve contenidos distintos:</p>

      <Caja titulo="📦 Caja con texto">
        <p>Lo que hay acá adentro llega como la prop <code>children</code>.</p>
      </Caja>

      <Caja titulo="🎨 Caja con varios elementos">
        <p>Puedo poner cualquier cosa adentro:</p>
        <ul>
          <li>Una lista</li>
          <li>Otro componente</li>
          <li>Lo que se te ocurra</li>
        </ul>
      </Caja>

      <Caja titulo="🧩 Caja con otra Caja adentro">
        <Caja titulo="🤯 Inception">
          <p>Las cajas se pueden anidar.</p>
        </Caja>
      </Caja>
    </div>
  );
}

export default Ejemplo03;

export const meta = {
  numero: '03',
  titulo: 'Children prop',
  descripcion: 'Cómo crear componentes "wrapper" que reciben contenido entre sus etiquetas.',
  conceptos: ['children', 'Composición', 'Reutilización avanzada'],
  explicacion: `
"children" es una prop especial: contiene todo lo que pongas entre <Componente> y </Componente>.

Esto permite crear componentes "wrapper" o "contenedores" muy flexibles, como:
• Cajas con borde
• Modales
• Cards
• Layouts (Sidebar + Main)

En este ejemplo, el componente <Caja /> es uno solo pero se reutiliza con contenidos
totalmente distintos. Se basa en COMPOSICIÓN, uno de los principios fundamentales de React.
  `.trim(),
};
