import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      onClick={toggleLanguage}
      className="p-2 rounded-full text-white hover:bg-white/20 transition-colors duration-300 focus:outline-none focus-ring font-semibold w-10 h-10 flex items-center justify-center"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle language"
    >
      {language === 'en' ? 'ES' : 'EN'}
    </motion.button>
  );
};

export default LanguageToggle;