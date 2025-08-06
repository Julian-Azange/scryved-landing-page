import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext'; // Importa el hook de idioma

const Portfolio = () => {
  const { t } = useLanguage(); // Obtén el objeto de traducciones

  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });


  const projects = [
    {
      id: 1,
      category: 'web',
      image: 'https://picsum.photos/id/1/600/400',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      link: '#',
    },
    {
      id: 2,
      category: 'mobile',
      image: 'https://picsum.photos/id/2/600/400',
      technologies: ['React Native', 'Firebase', 'Redux', 'Health API'],
      link: '#',
    },
    {
      id: 3,
      category: 'web',
      image: 'https://picsum.photos/id/3/600/400',
      technologies: ['Vue.js', 'D3.js', 'Express', 'PostgreSQL'],
      link: '#',
    },
    {
      id: 4,
      category: 'ui',
      image: 'https://picsum.photos/id/4/600/400',
      technologies: ['Figma', 'Adobe XD', 'Illustrator'],
      link: '#',
    },
    {
      id: 5,
      category: 'web',
      image: 'https://picsum.photos/id/5/600/400',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Mapbox API'],
      link: '#',
    },
    {
      id: 6,
      category: 'mobile',
      image: 'https://picsum.photos/id/6/600/400',
      technologies: ['Flutter', 'Firebase', 'Google Maps API'],
      link: '#',
    },
  ];

  // Función auxiliar para obtener el título o la descripción de un proyecto desde las traducciones
  const getProjectTranslation = (projectId, type) => {
    // Busca el proyecto en el array de traducciones por su ID
    const projectTranslated = t.portfolio.projects.find(p => p.id === projectId);
    return projectTranslated ? projectTranslated[type] : `[Missing ${type} for ID: ${projectId}]`;
  };

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" ref={sectionRef} className="section-padding bg-white dark:bg-primary">
      <div className="container-custom">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.portfolio.title_part1} <span className="text-secondary">{t.portfolio.title_part2}</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t.portfolio.description}
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Botón "All Projects" */}
          <button
            key="all" // Añade una key explícita si no usas map
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-2 rounded-full transition-colors duration-300 ${activeCategory === 'all' ? 'bg-secondary text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
          >
            {t.portfolio.categories.all} 
          </button>

          {/* Botón "Web Development" */}
          <button
            key="web"
            onClick={() => setActiveCategory('web')}
            className={`px-6 py-2 rounded-full transition-colors duration-300 ${activeCategory === 'web' ? 'bg-secondary text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
          >
            {t.portfolio.categories.web} 
          </button>

          {/* Botón "Mobile Apps" */}
          <button
            key="mobile"
            onClick={() => setActiveCategory('mobile')}
            className={`px-6 py-2 rounded-full transition-colors duration-300 ${activeCategory === 'mobile' ? 'bg-secondary text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
          >
            {t.portfolio.categories.mobile}
          </button>

          {/* Botón "UI/UX Design" */}
          <button
            key="ui"
            onClick={() => setActiveCategory('ui')}
            className={`px-6 py-2 rounded-full transition-colors duration-300 ${activeCategory === 'ui' ? 'bg-secondary text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
          >
            {t.portfolio.categories.ui}
          </button>

        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              <div className="relative overflow-hidden h-60">
                <img
                  src={project.image}
                  alt={getProjectTranslation(project.id, 'title')} // Usa la traducción para el alt
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{getProjectTranslation(project.id, 'title')}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{getProjectTranslation(project.id, 'description')}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={`tech-${index}-${project.id}`}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-80">
                <img
                  src={selectedProject.image}
                  alt={getProjectTranslation(selectedProject.id, 'title')} // Usa la traducción aquí también
                  className="w-full h-full object-cover"
                />
                <button
                  className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors duration-300"
                  onClick={closeModal}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{getProjectTranslation(selectedProject.id, 'title')}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{getProjectTranslation(selectedProject.id, 'description')}</p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t.portfolio.modal.technologies_used}</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={`modal-tech-${index}-${selectedProject.id}`}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={selectedProject.link}
                  className="btn-primary inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.portfolio.modal.view_project}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;