/**
 * 🧩 COMPONENTE RAÍZ: App
 *
 * Layout SPA con sidebar a la izquierda y contenido a la derecha.
 * Mantiene el estado del ejemplo seleccionado.
 */
import { useState } from 'react';
import { ejemplos } from './ejemplos/index.js';
import Sidebar from './components/Sidebar.jsx';
import ContenidoEjemplo from './components/ContenidoEjemplo.jsx';

function App() {
  const [indiceActivo, setIndiceActivo] = useState(0);
  const ejemploActivo = ejemplos[indiceActivo];

  return (
    <div className="layout">
      <Sidebar
        ejemplos={ejemplos}
        indiceActivo={indiceActivo}
        onSeleccionar={setIndiceActivo}
      />
      <ContenidoEjemplo ejemplo={ejemploActivo} />
    </div>
  );
}

export default App;
