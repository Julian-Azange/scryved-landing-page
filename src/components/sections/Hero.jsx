import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary/30 z-0"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        {[1, 2, 3, 4, 5].map((id) => {
          // Use a fixed ID for each element
          return (
            <motion.div
              key={`bg-element-${id}`}
              className="absolute rounded-full bg-accent/10"
              style={{
                width: `${(id * 50) + 50}px`,
                height: `${(id * 50) + 50}px`,
                top: `${(id * 15) % 100}%`,
                left: `${(id * 20) % 100}%`,
              }}
              animate={{
                x: [0, (id * 10) - 25],
                y: [0, (id * 10) - 25],
              }}
              transition={{
                repeat: Infinity,
                repeatType: 'reverse',
                duration: (id * 2) + 10,
              }}
            />
          );
        })}
      </div>
      
      <div className="container-custom relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="block">{t.hero.title_line1}</span>
          <span className="block mt-2">{t.hero.title_line2} <span className="text-accent">{t.hero.title_business}</span></span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          {t.hero.subtitle}
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
        >
          <a href="#contact" className="btn-primary">
            {t.hero.get_started}
          </a>
          <a 
            href="#services" 
            className="bg-transparent border-2 border-white text-white font-semibold py-2 px-4 rounded-md hover:bg-white/10 transition-colors duration-300"
          >
            {t.hero.learn_more}
          </a>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1, 
          delay: 1.2,
          repeat: Infinity,
          repeatType: 'reverse',
          repeatDelay: 0.2
        }}
      >
        <svg 
          className="w-6 h-10 text-white/70" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;