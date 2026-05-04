/**
 * 📌 EJEMPLO 01 · Hola Mundo
 *
 * El componente más simple posible en React: una función que devuelve JSX.
 * Sin estado, sin props, sin nada extra.
 *
 * 🎯 Conceptos: componente funcional, JSX, export default
 */

function Ejemplo01() {
  // Un componente es simplemente una función que retorna JSX (HTML "con superpoderes")
  return (
    <div>
      <h2>👋 Hola, Mundo!</h2>
      <p>Este es el componente más simple de React.</p>
      <p>Solo una función que retorna lo que querés mostrar.</p>
    </div>
  );
}

export default Ejemplo01;

// Información que el sidebar usa para mostrar este ejemplo
export const meta = {
  numero: '01',
  titulo: 'Hola Mundo',
  descripcion: 'El componente más simple posible: una función que retorna JSX.',
  conceptos: ['Componente funcional', 'JSX', 'export default'],
  explicacion: `
Un componente de React es, en esencia, una función de JavaScript que devuelve JSX.
JSX es la sintaxis que parece HTML pero se transforma en código JS.

Reglas básicas:
• El nombre del componente arranca con mayúscula (PascalCase).
• Debe devolver un único elemento raíz (o un Fragment <>...</>).
• Se exporta con "export default" para poder usarlo en otros archivos.

Para usarlo en otro lado: <Ejemplo01 />
  `.trim(),
};
