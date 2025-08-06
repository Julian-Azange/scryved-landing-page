import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

import * as THREE from 'three';
import CELLS from 'vanta/dist/vanta.cells.min';

const Hero = () => {
  const { t } = useLanguage();
  const vantaRef = useRef(null);

  useEffect(() => {
    let vantaEffect = null;
    // Llama a la función de VANTA, pasándole THREE
    vantaEffect = CELLS({
      el: vantaRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 3.00,
      color1: 0x707,
      color2: 0x508c07,
      size: 2.00
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <section
      id="home"
      ref={vantaRef}
      className="relative min-h-screen flex items-center justify-center bg-white dark:bg-primary  overflow-hidden"
    >
      {/* Contenido principal del hero */}
      <div className="container-custom relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="block">{t.hero.title_line1}</span>
          <span className="block mt-2">{t.hero.title_line2} <span className="text-accent [text-shadow:0_0_4px_currentColor,0_0_5px_currentColor]">{t.hero.title_business}</span></span>
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
          <a href="#contact" className="btn-primary transition-shadow duration-300 shadow-[0_0_8px_theme(colors.accent),0_0_20px_theme(colors.accent)] hover:shadow-[0_0_12px_theme(colors.accent),0_0_30px_theme(colors.accent)]">
            {t.hero.get_started}
          </a>
          <a
            href="#services"
            className="bg-transparent border-2 border-white text-white font-semibold py-2 px-4 rounded-md hover:bg-white/10 transition-all duration-300 [text-shadow:0_0_5px_#fff] shadow-[0_0_8px_#fff,inset_0_0_8px_#fff] hover:shadow-[0_0_15px_#fff,inset_0_0_10px_#fff]"
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