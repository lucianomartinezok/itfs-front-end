/**
 * 🧩 COMPONENTE: Sidebar
 *
 * Lista de los ejemplos. Hace de "menú" del proyecto.
 * Recibe el ejemplo activo y un callback para cambiarlo.
 */

function Sidebar({ ejemplos, indiceActivo, onSeleccionar }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1>⚛️ Proyecto M8</h1>
        <p>Ejemplos de React</p>
      </div>

      <nav className="sidebar-nav">
        <ul>
          {ejemplos.map((ej, i) => {
            const activo = i === indiceActivo;
            return (
              <li key={ej.numero}>
                <button
                  type="button"
                  className={`sidebar-item ${activo ? 'activo' : ''}`}
                  onClick={() => onSeleccionar(i)}
                >
                  <span className="sidebar-numero">{ej.numero}</span>
                  <span className="sidebar-textos">
                    <span className="sidebar-titulo">{ej.titulo}</span>
                    <span className="sidebar-descripcion">{ej.descripcion}</span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <a href="../index.html" className="sidebar-volver">
          ← Volver al inicio
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;
