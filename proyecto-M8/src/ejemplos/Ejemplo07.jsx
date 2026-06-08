/**
 * 📌 EJEMPLO 07 · Listas con .map() y prop "key"
 *
 * Para renderizar una lista de cosas, usamos .map() para transformar
 * cada dato en un elemento JSX.
 *
 * 🎯 Conceptos: .map(), prop "key", renderizar arrays
 */

function Ejemplo07() {
  // Un array de datos. En una app real vendría de una API o del estado.
  const productos = [
    { id: 1, nombre: 'Manzana', precio: 350, emoji: '🍎' },
    { id: 2, nombre: 'Banana', precio: 200, emoji: '🍌' },
    { id: 3, nombre: 'Sandía', precio: 1500, emoji: '🍉' },
    { id: 4, nombre: 'Pera', precio: 400, emoji: '🍐' },
    { id: 5, nombre: 'Frutilla', precio: 800, emoji: '🍓' },
  ];

  return (
    <div>
      <h3>🛒 Lista de productos</h3>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {/* .map() recorre el array y devuelve un <li> por cada producto.
            La prop "key" es OBLIGATORIA: ayuda a React a identificar
            cada item cuando la lista cambia. Debe ser ÚNICA. */}
        {productos.map((producto) => (
          <li
            key={producto.id}
            style={{
              padding: '12px 16px',
              marginBottom: '8px',
              background: '#f6f8fa',
              borderRadius: '6px',
              border: '1px solid #d0d7de',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span>
              {producto.emoji} {producto.nombre}
            </span>
            <strong>${producto.precio}</strong>
          </li>
        ))}
      </ul>

      <p style={{ textAlign: 'right', marginTop: '12px' }}>
        Total: <strong>${productos.reduce((acc, p) => acc + p.precio, 0)}</strong>
      </p>
    </div>
  );
}

export default Ejemplo07;

export const meta = {
  numero: '07',
  titulo: 'Listas con .map()',
  descripcion: 'Renderizar arrays como elementos JSX usando .map() y la prop key.',
  conceptos: ['.map()', 'Prop key', 'Renderizar arrays'],
  explicacion: `
Para mostrar una lista en React, usamos el método .map() de los arrays.
.map() transforma cada elemento del array en otra cosa (en este caso, JSX).

Reglas importantes:
• Cada elemento de la lista DEBE tener una prop "key" única.
• La key ayuda a React a optimizar los re-renders cuando la lista cambia.
• Idealmente la key es un id estable. NO uses el índice del array si la lista puede reordenarse.

Errores comunes:
❌ <li>{producto.nombre}</li>           ← falta key
❌ <li key={index}>...</li>             ← evitar si la lista cambia
✅ <li key={producto.id}>...</li>       ← correcto
  `.trim(),
};
