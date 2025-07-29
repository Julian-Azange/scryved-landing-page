import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext'; // Importa el hook de idioma

const About = () => {
  const { t } = useLanguage(); // Obtén el objeto de traducciones

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Define las estadísticas usando claves de traducción para los labels
  const stats = [
    { id: 1, value: '10+', labelKey: 'about.stats_years_experience' },
    { id: 2, value: '200+', labelKey: 'about.stats_projects_completed' },
    { id: 3, value: '50+', labelKey: 'about.stats_team_members' },
    { id: 4, value: '98%', labelKey: 'about.stats_client_satisfaction' },
  ];


  return (
    <section id="about" ref={sectionRef} className="section-padding bg-white dark:bg-primary">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {t.about.title_part1} <span className="text-secondary">{t.about.title_part2}</span>
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {t.about.description_paragraph1}
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {t.about.description_paragraph2}
            </p>

            {/* Listado de características con íconos */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">{t.about.feature_innovative_solutions}</span>
              </div>

              <div className="flex items-center">
                <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">{t.about.feature_cutting_edge_technology}</span>
              </div>

              <div className="flex items-center">
                <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">{t.about.feature_agile_development}</span>
              </div>

              <div className="flex items-center">
                <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">{t.about.feature_client_focused_approach}</span>
              </div>
            </div>

            <motion.a
              href="#contact"
              className="btn-primary inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.about.get_in_touch_button}
            </motion.a>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          >
            {/* Background decorative elements - no translation needed here */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/10 rounded-full z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full z-0"></div>

            <div className="relative z-10 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  {t.about.features_title}
                </h3>

                <ul className="space-y-4">
                  {/* Aquí es donde haremos las llamadas directas, ya no con .map */}

                  <li className="flex">
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                        <span className="text-white font-bold">1</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{t.about.reason_technical_excellence_title}</h4>
                      <p className="text-gray-700 dark:text-gray-300">{t.about.reason_technical_excellence_description}</p>
                    </div>
                  </li>

                  <li className="flex">
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                        <span className="text-white font-bold">2</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{t.about.reason_tailored_solutions_title}</h4>
                      <p className="text-gray-700 dark:text-gray-300">{t.about.reason_tailored_solutions_description}</p>
                    </div>
                  </li>

                  <li className="flex">
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                        <span className="text-white font-bold">3</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{t.about.reason_transparent_process_title}</h4>
                      <p className="text-gray-700 dark:text-gray-300">{t.about.reason_transparent_process_description}</p>
                    </div>
                  </li>

                  <li className="flex">
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                        <span className="text-white font-bold">4</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{t.about.reason_long_term_support_title}</h4>
                      <p className="text-gray-700 dark:text-gray-300">{t.about.reason_long_term_support_description}</p>
                    </div>
                  </li>

                </ul>
              </div>

              {/* Stats section */}
              <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.id}
                    className="p-6 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                  >
                    <div className="text-3xl font-bold text-secondary mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{t[stat.labelKey]}</div> {/* Translate the label */}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;