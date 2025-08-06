import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const Testimonials = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  // Usa los testimonios del contexto de idioma, con un array vacío como fallback.
  const testimonials = t?.testimonials?.items || [];
  
  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [isInView, testimonials.length]);
  
  const handleDotClick = (index) => {
    setActiveIndex(index);
  };
  
  // Previene errores si las traducciones aún no han cargado.
  if (!t) return null;

  return (
    <section id="testimonials" ref={sectionRef} className="section-padding bg-white dark:bg-primary overflow-hidden">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.testimonials.title} <span className="text-secondary">{t.testimonials.title_highlight}</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div 
              className="flex"
              animate={{ x: `-${activeIndex * 100}%` }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <motion.div 
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 md:p-10"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                  >
                    <div className="flex items-center mb-6">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{testimonial.name}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{testimonial.position}</p>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={`rating-star-${i}`}
                            className={`w-5 h-5 ${i < testimonial.rating ? 'text-secondary' : 'text-gray-300 dark:text-gray-600'}`}
                            fill="currentColor" 
                            viewBox="0 0 20 20" 
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    
                    <blockquote className="text-gray-700 dark:text-gray-300 text-lg italic mb-6">
                      "{testimonial.content}"
                    </blockquote>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((testimonial, index) => (
              <button
                key={`nav-dot-${index}`}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${activeIndex === index ? 'bg-secondary' : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <button 
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-6 md:-translate-x-12 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 focus:outline-none"
            onClick={() => setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)}
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-6 md:translate-x-12 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 focus:outline-none"
            onClick={() => setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)}
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;