import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import ColombiaFlag from '../icons/ColombiaFlag';
import UsaFlag from '../icons/UsaFlag';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  const isEnglish = language === 'en';

  return (
    <motion.button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 text-white hover:text-accent transition-colors duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Change language"
    >
      {isEnglish ? <UsaFlag className="w-6 h-auto rounded-sm" /> : <ColombiaFlag className="w-6 h-auto rounded-sm" />}
      <span className="font-semibold uppercase">{isEnglish ? 'en' : 'es'}</span>
    </motion.button>
  );
};

export default LanguageToggle;