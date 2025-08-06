import { useLanguage } from '../../context/LanguageContext';

const PageLoader = () => {
  // Usamos el hook de idioma, pero con un fallback por si se renderiza antes de que el contexto esté listo.
  const { t } = useLanguage() || { t: { loader: { loading_text: 'Loading...' } } };

  return (
    <div className="terminal-loader-container">
      <div className="terminal-loader">
        <div className="terminal-header">
          <div className="terminal-title">Status</div>
          <div className="terminal-controls">
            <div className="control close"></div>
            <div className="control minimize"></div>
            <div className="control maximize"></div>
          </div>
        </div>
        <div className="text">{t.loader?.loading_text || 'Loading...'}</div>
      </div>
    </div>
  );
};

export default PageLoader;