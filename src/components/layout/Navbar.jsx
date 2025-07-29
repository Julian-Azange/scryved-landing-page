import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../ui/ThemeToggle';
import LanguageToggle from '../ui/LanguageToggle';
import { useLanguage } from '../../context/LanguageContext';

import logoLight from '../../assets/images/scryved-logo-light.png';

const Navbar = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-primary/90 backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-4'}`;

  const navItems = t ? [
    { id: 'nav-home', name: t.navbar.home, href: '#home' },
    { id: 'nav-services', name: t.navbar.services, href: '#services' },
    { id: 'nav-about', name: t.navbar.about, href: '#about' },
    { id: 'nav-portfolio', name: t.navbar.portfolio, href: '#portfolio' },
    { id: 'nav-contact', name: t.navbar.contact, href: '#contact' },
  ] : [];

  return (
    <nav className={navbarClasses}>
      <div className="container-custom flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <a href="#home">
            <img 
              src={logoLight} 
              alt="Scryved Logo" 
              className="h-8 w-auto" 
            />
          </a>
        </motion.div>

        {/* Desktop Menu */}
        <motion.ul 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          className="hidden md:flex space-x-8 items-center"
        >
          {navItems.map((item, index) => (
            <motion.li 
              key={item.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <a 
                href={item.href} 
                className="text-white hover:text-accent transition-colors duration-300"
              >
                {item.name}
              </a>
            </motion.li>
          ))}
          <LanguageToggle />
          <ThemeToggle />
        </motion.ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <LanguageToggle />
          <ThemeToggle />
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 right-0 bg-primary/95 backdrop-blur-md shadow-lg md:hidden"
            >
              <ul className="flex flex-col items-center py-4 space-y-4">
                {navItems.map((item, index) => (
                  <motion.li 
                    key={item.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <a 
                      href={item.href} 
                      className="text-white hover:text-accent transition-colors duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;