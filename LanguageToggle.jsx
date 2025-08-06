import { useLanguage } from '../../context/LanguageContext';
import ColombiaFlag from '../icons/ColombiaFlag';
import UsaFlag from '../icons/UsaFlag';

const LanguageToggle = () => {
    const { language, changeLanguage } = useLanguage();

    const handleToggle = () => {
        const newLang = language === 'en' ? 'es' : 'en';
        changeLanguage(newLang);
    };

    const isEnglish = language === 'en';

    return (
        <button
            onClick={handleToggle}
            className="flex items-center space-x-2 text-white hover:text-accent transition-colors duration-300"
            aria-label="Change language"
        >
            {isEnglish ? <UsaFlag className="w-6 h-auto rounded-sm" /> : <ColombiaFlag className="w-6 h-auto rounded-sm" />}
            <span className="font-semibold uppercase">{isEnglish ? 'en' : 'es'}</span>
        </button>
    );
};

export default LanguageToggle;