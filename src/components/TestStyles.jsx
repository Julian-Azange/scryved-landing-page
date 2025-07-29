const TestStyles = () => {
  return (
    <div className="bg-primary text-white min-h-screen flex flex-col items-center justify-center p-8 font-sans">
      <h1 className="text-4xl font-bold mb-4">Página de Prueba de Estilos</h1>
      <p className="mb-8 text-center text-lg">
        Si ves esta página con estilos, la configuración de CSS y Tailwind está funcionando correctamente.
      </p>

      <div className="space-y-6 text-center p-6 border border-dashed border-gray-600 rounded-lg">
        <p>
          Clase de Tailwind (`text-accent`):
          <span className="ml-2 text-accent font-bold">Texto Color Acento (naranja)</span>
        </p>

        <p>
          Clase de `index.css` (`@apply`):
          <button className="btn-primary ml-2">Botón Primario (cian)</button>
        </p>

        <p>
          Clase de `App.css` (`@keyframes`):
          <span className="text-gradient ml-2 font-bold text-2xl animate-pulse">Texto con Gradiente y Pulso</span>
        </p>
      </div>

      <p className="mt-8 text-gray-400">Si esto no funciona, el problema es la configuración global.</p>
    </div>
  );
};

export default TestStyles;