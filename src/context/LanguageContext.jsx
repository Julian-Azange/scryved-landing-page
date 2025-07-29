import { createContext, useState, useEffect, useContext, useMemo } from 'react';

// Importa los archivos de traducción que crearemos en el siguiente paso
import en from '../locales/en.json';
import es from '../locales/es.json';

const translations = { en, es };

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        // Revisa si hay un idioma guardado, si no, usa el del navegador o 'en' por defecto
        const savedLang = typeof localStorage !== 'undefined' ? localStorage.getItem('language') : null;
        if (savedLang) return savedLang;
        const browserLang = typeof navigator !== 'undefined' ? navigator.language.split('-')[0] : 'en';
        return browserLang === 'es' ? 'es' : 'en';
    });

    useEffect(() => {
        // Guarda la preferencia del usuario en localStorage
        localStorage.setItem('language', language);
    }, [language]);

    const toggleLanguage = () => {
        setLanguage((prevLang) => (prevLang === 'en' ? 'es' : 'en'));
    };

    // El objeto 't' contendrá todas las traducciones del idioma actual
    const t = useMemo(() => translations[language], [language]);

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

// Hook personalizado para acceder fácilmente al contexto
export const useLanguage = () => useContext(LanguageContext);