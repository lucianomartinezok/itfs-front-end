/**
 * 🚪 PUNTO DE ENTRADA
 * Acá React "monta" el componente raíz <App /> dentro del <div id="root"> del index.html.
 * Esta es la línea que conecta el mundo HTML con el mundo React.
 */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './App.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
