# Proyecto M8 · Ejemplos de React

Proyecto React (Vite) con **10 ejemplos progresivos** pensados para mostrar en clase.
Cada ejemplo es un componente independiente, comentado y funcional.

La app es un **SPA** con sidebar a la izquierda (lista de ejemplos) y panel a la
derecha que muestra:

- 🎮 **Demo en vivo** del componente
- 📝 **Explicación** didáctica
- 💻 **Código fuente** del archivo `.jsx`

## 🚀 Correrlo en local

```bash
cd proyecto-M8
npm install
npm run dev
```

Después abrís `http://localhost:5173`.

## 📦 Generar la build para Vercel

Como el repo se sirve estático en Vercel, hay que generar `dist/` localmente:

```bash
npm run build
```

> ⚠️ El `.gitignore` **NO ignora `dist/`** a propósito. La carpeta debe quedar
> versionada para que Vercel la sirva.

## 📁 Estructura

```
proyecto-M8/
├── src/
│   ├── ejemplos/
│   │   ├── Ejemplo01.jsx      ← Hola Mundo
│   │   ├── Ejemplo02.jsx      ← Props básicas
│   │   ├── Ejemplo03.jsx      ← children prop
│   │   ├── Ejemplo04.jsx      ← useState · Contador
│   │   ├── Ejemplo05.jsx      ← Render condicional
│   │   ├── Ejemplo06.jsx      ← Inputs controlados
│   │   ├── Ejemplo07.jsx      ← Listas con .map()
│   │   ├── Ejemplo08.jsx      ← Eventos varios
│   │   ├── Ejemplo09.jsx      ← Padre ↔ Hijo
│   │   ├── Ejemplo10.jsx      ← Mini app de tareas
│   │   └── index.js           ← Registro central
│   ├── components/
│   │   ├── Sidebar.jsx        ← Lista lateral de ejemplos
│   │   └── ContenidoEjemplo.jsx ← Panel derecho con demo + código + explicación
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

## ➕ Agregar un ejemplo nuevo

1. Crear `src/ejemplos/Ejemplo11.jsx` siguiendo el mismo patrón:

   ```jsx
   function Ejemplo11() {
     return <div>Mi ejemplo</div>;
   }

   export default Ejemplo11;

   export const meta = {
     numero: '11',
     titulo: 'Mi ejemplo',
     descripcion: 'Qué muestra el ejemplo.',
     conceptos: ['Concepto 1', 'Concepto 2'],
     explicacion: `Texto explicativo para mostrar en clase...`,
   };
   ```

2. Registrarlo en `src/ejemplos/index.js`:

   ```js
   import Ejemplo11, { meta as meta11 } from './Ejemplo11.jsx';
   import codigo11 from './Ejemplo11.jsx?raw';

   export const ejemplos = [
     // ...
     { ...meta11, Componente: Ejemplo11, codigo: codigo11 },
   ];
   ```

¡Listo! El sidebar y el panel se actualizan automáticamente.

## 🎓 Conceptos cubiertos por los ejemplos

| Ejemplo | Concepto principal |
| --- | --- |
| 01 | Componente funcional, JSX |
| 02 | Props básicas, destructuring |
| 03 | children prop, composición |
| 04 | useState, eventos onClick |
| 05 | Render condicional (`&&`, ternario) |
| 06 | Inputs controlados, onChange |
| 07 | .map() y prop `key` |
| 08 | onClick, onMouseEnter, onKeyDown, onFocus |
| 09 | Lifting state up, callbacks padre-hijo |
| 10 | Estado complejo, mini app TODO |

## 💡 Tip para usar en clase

Abrí el proyecto en **VS Code** (`code .`), tené el navegador con `npm run dev` al
costado y andá mostrando cada `EjemploXX.jsx` en VS Code mientras lo probás en vivo
en el navegador. El SPA mismo muestra el código exacto de cada archivo.
