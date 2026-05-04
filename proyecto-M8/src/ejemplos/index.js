/**
 * 📦 REGISTRO DE EJEMPLOS
 *
 * Este archivo importa cada Ejemplo (componente + meta) y también el
 * código fuente del archivo TAL CUAL (gracias a "?raw" de Vite).
 *
 * Así, cuando se selecciona un ejemplo, podemos:
 *   1) Renderizar el componente en vivo
 *   2) Mostrar el código fuente exacto al alumno
 *   3) Mostrar la meta info (título, descripción, conceptos)
 *
 * Para agregar un ejemplo nuevo:
 *   1) Crear src/ejemplos/EjemploXX.jsx
 *   2) Importarlo acá igual que los demás
 *   3) Agregarlo al array `ejemplos`
 */

import Ejemplo01, { meta as meta01 } from './Ejemplo01.jsx';
import Ejemplo02, { meta as meta02 } from './Ejemplo02.jsx';
import Ejemplo03, { meta as meta03 } from './Ejemplo03.jsx';
import Ejemplo04, { meta as meta04 } from './Ejemplo04.jsx';
import Ejemplo05, { meta as meta05 } from './Ejemplo05.jsx';
import Ejemplo06, { meta as meta06 } from './Ejemplo06.jsx';
import Ejemplo07, { meta as meta07 } from './Ejemplo07.jsx';
import Ejemplo08, { meta as meta08 } from './Ejemplo08.jsx';
import Ejemplo09, { meta as meta09 } from './Ejemplo09.jsx';
import Ejemplo10, { meta as meta10 } from './Ejemplo10.jsx';

// "?raw" es una feature de Vite: importa el archivo como STRING.
// Así mostramos en pantalla el mismo código que está en el .jsx.
import codigo01 from './Ejemplo01.jsx?raw';
import codigo02 from './Ejemplo02.jsx?raw';
import codigo03 from './Ejemplo03.jsx?raw';
import codigo04 from './Ejemplo04.jsx?raw';
import codigo05 from './Ejemplo05.jsx?raw';
import codigo06 from './Ejemplo06.jsx?raw';
import codigo07 from './Ejemplo07.jsx?raw';
import codigo08 from './Ejemplo08.jsx?raw';
import codigo09 from './Ejemplo09.jsx?raw';
import codigo10 from './Ejemplo10.jsx?raw';

export const ejemplos = [
  { ...meta01, Componente: Ejemplo01, codigo: codigo01 },
  { ...meta02, Componente: Ejemplo02, codigo: codigo02 },
  { ...meta03, Componente: Ejemplo03, codigo: codigo03 },
  { ...meta04, Componente: Ejemplo04, codigo: codigo04 },
  { ...meta05, Componente: Ejemplo05, codigo: codigo05 },
  { ...meta06, Componente: Ejemplo06, codigo: codigo06 },
  { ...meta07, Componente: Ejemplo07, codigo: codigo07 },
  { ...meta08, Componente: Ejemplo08, codigo: codigo08 },
  { ...meta09, Componente: Ejemplo09, codigo: codigo09 },
  { ...meta10, Componente: Ejemplo10, codigo: codigo10 },
];
