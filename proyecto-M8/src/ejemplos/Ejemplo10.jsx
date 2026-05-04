/**
 * 📌 EJEMPLO 10 · Mini app de tareas (TODO)
 *
 * Junta TODO lo que aprendimos:
 * useState con array + .map() con key + onSubmit + render condicional + onClick.
 *
 * 🎯 Conceptos: estado complejo, agregar/borrar/marcar, formulario
 */
import { useState } from 'react';

function Ejemplo10() {
  const [tareas, setTareas] = useState([
    { id: 1, texto: 'Aprender React', completada: true },
    { id: 2, texto: 'Hacer este ejemplo en clase', completada: false },
    { id: 3, texto: 'Tomar mate ☕', completada: false },
  ]);
  const [texto, setTexto] = useState('');

  // AGREGAR una tarea nueva (sin mutar el array original: usamos spread).
  const agregar = (e) => {
    e.preventDefault();
    if (!texto.trim()) return;
    const nueva = { id: Date.now(), texto: texto.trim(), completada: false };
    setTareas([...tareas, nueva]);
    setTexto('');
  };

  // BORRAR: filter devuelve un array nuevo sin la tarea borrada.
  const borrar = (id) => {
    setTareas(tareas.filter((t) => t.id !== id));
  };

  // MARCAR como completada (toggle): map devuelve un array nuevo
  // con esa tarea modificada y las demás iguales.
  const toggleCompletada = (id) => {
    setTareas(
      tareas.map((t) =>
        t.id === id ? { ...t, completada: !t.completada } : t
      )
    );
  };

  const totalPendientes = tareas.filter((t) => !t.completada).length;

  return (
    <div>
      <form onSubmit={agregar} style={{ display: 'flex', gap: '8px' }}>
        <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Nueva tarea..."
          style={{ flex: 1 }}
        />
        <button type="submit">➕ Agregar</button>
      </form>

      {tareas.length === 0 ? (
        <p style={{ marginTop: '16px', textAlign: 'center', color: '#656d76' }}>
          No hay tareas. ¡Agregá una!
        </p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0, marginTop: '16px' }}>
          {tareas.map((tarea) => (
            <li
              key={tarea.id}
              style={{
                padding: '10px 14px',
                marginBottom: '6px',
                background: '#f6f8fa',
                border: '1px solid #d0d7de',
                borderRadius: '6px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <label style={{ display: 'flex', gap: '8px', cursor: 'pointer', flex: 1 }}>
                <input
                  type="checkbox"
                  checked={tarea.completada}
                  onChange={() => toggleCompletada(tarea.id)}
                />
                <span
                  style={{
                    textDecoration: tarea.completada ? 'line-through' : 'none',
                    color: tarea.completada ? '#656d76' : 'inherit',
                  }}
                >
                  {tarea.texto}
                </span>
              </label>
              <button
                onClick={() => borrar(tarea.id)}
                style={{
                  background: 'transparent',
                  border: '1px solid #d0d7de',
                  color: '#d1242f',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  padding: '2px 8px',
                }}
                aria-label={`Borrar ${tarea.texto}`}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}

      <p style={{ marginTop: '12px', textAlign: 'right', color: '#656d76' }}>
        {totalPendientes === 0
          ? '🎉 ¡Todo listo!'
          : `📌 Quedan ${totalPendientes} pendiente${totalPendientes === 1 ? '' : 's'}`}
      </p>
    </div>
  );
}

export default Ejemplo10;

export const meta = {
  numero: '10',
  titulo: 'Mini app de tareas',
  descripcion: 'Mini app completa: agregar, borrar y marcar tareas. Junta todo lo aprendido.',
  conceptos: ['useState con array', 'Spread', 'filter / map', 'Formulario'],
  explicacion: `
Este ejemplo combina varios conceptos en una mini-app real:

• useState con un array de objetos
• Agregar: setTareas([...tareas, nueva])  → spread para no mutar
• Borrar: setTareas(tareas.filter(...))   → filter devuelve array nuevo
• Toggle: setTareas(tareas.map(...))      → map devuelve array nuevo
• Render condicional: si no hay tareas, muestra un mensaje
• Formulario controlado con onSubmit y e.preventDefault()
• Listas con .map() y key={tarea.id}

REGLA CLAVE: nunca mutamos el array directamente.
❌ tareas.push(nueva)        → mal, muta
❌ tareas[0].completada = true → mal, muta
✅ setTareas([...tareas, nueva])
✅ setTareas(tareas.map(...))

React solo detecta cambios si el array es uno NUEVO.
  `.trim(),
};
