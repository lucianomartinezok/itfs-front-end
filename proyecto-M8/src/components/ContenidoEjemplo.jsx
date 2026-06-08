/**
 * 🧩 COMPONENTE: ContenidoEjemplo
 *
 * Panel derecho del SPA. Muestra:
 *  - Header con número, título y conceptos.
 *  - 🎮 Demo en vivo: el componente del ejemplo funcionando.
 *  - 📝 Explicación didáctica.
 *  - 💻 Código fuente exacto (mismo que está en el archivo .jsx).
 */
import { useState } from 'react';

function ContenidoEjemplo({ ejemplo }) {
  const [copiado, setCopiado] = useState(false);
  const Componente = ejemplo.Componente;

  const copiarCodigo = async () => {
    try {
      await navigator.clipboard.writeText(ejemplo.codigo);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch (err) {
      console.error('No se pudo copiar:', err);
    }
  };

  return (
    <main className="contenido">
      {/* Header */}
      <header className="contenido-header">
        <div className="contenido-header-titulo">
          <span className="contenido-numero">{ejemplo.numero}</span>
          <div>
            <h2>{ejemplo.titulo}</h2>
            <p className="contenido-descripcion">{ejemplo.descripcion}</p>
          </div>
        </div>

        <div className="contenido-conceptos">
          {ejemplo.conceptos.map((c) => (
            <span key={c} className="chip">{c}</span>
          ))}
        </div>
      </header>

      {/* 🎮 Demo en vivo */}
      <section className="seccion">
        <h3 className="seccion-titulo">🎮 Demo en vivo</h3>
        <div className="seccion-cuerpo demo-cuerpo">
          <Componente />
        </div>
      </section>

      {/* 📝 Explicación */}
      <section className="seccion">
        <h3 className="seccion-titulo">📝 Explicación</h3>
        <div className="seccion-cuerpo">
          <pre className="explicacion">{ejemplo.explicacion}</pre>
        </div>
      </section>

      {/* 💻 Código fuente */}
      <section className="seccion">
        <div className="seccion-codigo-header">
          <h3 className="seccion-titulo">💻 Código fuente · <code>Ejemplo{ejemplo.numero}.jsx</code></h3>
          <button
            type="button"
            className="btn-copiar"
            onClick={copiarCodigo}
          >
            {copiado ? '✅ Copiado' : '📋 Copiar'}
          </button>
        </div>
        <pre className="codigo">
          <code>{ejemplo.codigo}</code>
        </pre>
      </section>
    </main>
  );
}

export default ContenidoEjemplo;
