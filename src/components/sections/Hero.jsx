import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  const animatedSmokeElements = [
    { id: 1, width: 350, height: 200, top: '10%', left: '100%', opacity: 0.08, duration: 25, delay: 0 },
    { id: 2, width: 450, height: 250, top: '60%', left: '110%', opacity: 0.06, duration: 30, delay: 5 },
    { id: 3, width: 300, height: 180, top: '30%', left: '105%', opacity: 0.09, duration: 27, delay: 2 },
    { id: 4, width: 500, height: 280, top: '80%', left: '120%', opacity: 0.07, duration: 32, delay: 8 },
    { id: 5, width: 400, height: 220, top: '20%', left: '115%', opacity: 0.05, duration: 28, delay: 3.5 },
    { id: 6, width: 250, height: 150, top: '50%', left: '100%', opacity: 0.1, duration: 20, delay: 10 },
    { id: 7, width: 550, height: 300, top: '5%', left: '125%', opacity: 0.07, duration: 35, delay: 6.5 },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-white dark:bg-primary  overflow-hidden"
    >
      {/* Background gradient overlay, will be mostly covered by animated elements */}
      {/* Puedes ajustar 'to-black' si quieres un fondo más oscuro que tu 'primary' */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-black z-0"></div>

      {/* Animated background elements (smoke effect) */}
      <div className="absolute inset-0 z-0">
        {animatedSmokeElements.map((el) => (
          <motion.div
            key={`smoke-element-${el.id}`}
            className="absolute rounded-full filter blur-3xl" // Mantiene el desenfoque para el efecto de humo
            style={{
              width: `${el.width}px`,
              height: `${el.height}px`,
              top: el.top,
              left: el.left, // Posición inicial fuera de la pantalla a la derecha
              opacity: el.opacity,
              // Usamos un gradiente radial de blanco a transparente para el efecto de humo
              // Ajusta la opacidad del rgba para hacer el humo más o menos denso
              background: `radial-gradient(circle, rgba(255, 255, 255, 255) 0%, rgba(255, 255, 255, 255) 70%)`
            }}
            animate={{
              // Animar 'x' para mover de derecha a izquierda
              // Empieza en 0 (su 'left' inicial), va a -1500px (o más si tu pantalla es muy ancha)
              // y luego regresa a 0 para que Framer Motion reinicie la animación
              x: [0, -1500, 0], // Ajusta -1500px según el ancho de tu contenido y cuánto quieres que se desplace
              y: [0, Math.random() * 50 - 25, 0], // Ligero movimiento vertical aleatorio
              scale: [1, 1.05, 1], // Ligera pulsación de escala para darle más vida
              opacity: [el.opacity, el.opacity * 1.5, el.opacity], // Ligera pulsación de opacidad
            }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop', // Usamos 'loop' para que siempre reinicie el movimiento desde la derecha
              duration: el.duration, // Duración para cruzar la pantalla
              ease: 'linear', // 'linear' para un movimiento constante, o 'easeInOut' para uno más suave
              delay: el.delay
            }}
          />
        ))}
      </div>

      {/* Contenido principal del hero */}
      <div className="container-custom relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="block">{t.hero.title_line1}</span>
          <span className="block mt-2">{t.hero.title_line2} <span className="text-accent [text-shadow:0_0_4px_currentColor,0_0_10px_currentColor]">{t.hero.title_business}</span></span>
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