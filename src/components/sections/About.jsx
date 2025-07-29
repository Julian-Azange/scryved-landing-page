import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const stats = [
    { id: 1, value: '10+', label: 'Years Experience' },
    { id: 2, value: '200+', label: 'Projects Completed' },
    { id: 3, value: '50+', label: 'Team Members' },
    { id: 4, value: '98%', label: 'Client Satisfaction' },
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
              About <span className="text-secondary">Scryved</span>
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Founded in 2013, Scryved has been at the forefront of custom software development, delivering innovative solutions to businesses across various industries. Our mission is to transform your ideas into powerful, scalable, and user-friendly software applications.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              We pride ourselves on our technical expertise, creative problem-solving, and commitment to delivering high-quality software that exceeds our clients' expectations. Our team of experienced developers, designers, and project managers work collaboratively to ensure your project's success.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Innovative Solutions</span>
              </div>
              
              <div className="flex items-center">
                <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Cutting-edge Technology</span>
              </div>
              
              <div className="flex items-center">
                <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Agile Development</span>
              </div>
              
              <div className="flex items-center">
                <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">Client-focused Approach</span>
              </div>
            </div>
            
            <motion.a 
              href="#contact" 
              className="btn-primary inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          >
            {/* Background decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/10 rounded-full z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full z-0"></div>
            
            <div className="relative z-10 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Why Choose Us?</h3>
                
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                        <span className="text-white font-bold">1</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Technical Excellence</h4>
                      <p className="text-gray-700 dark:text-gray-300">Our team consists of top-tier developers with expertise in the latest technologies.</p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                        <span className="text-white font-bold">2</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Tailored Solutions</h4>
                      <p className="text-gray-700 dark:text-gray-300">We create custom software that perfectly aligns with your business goals and requirements.</p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                        <span className="text-white font-bold">3</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Transparent Process</h4>
                      <p className="text-gray-700 dark:text-gray-300">We maintain clear communication and keep you involved throughout the development process.</p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                        <span className="text-white font-bold">4</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Long-term Support</h4>
                      <p className="text-gray-700 dark:text-gray-300">Our relationship doesn't end at deployment; we provide ongoing maintenance and support.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
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
                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
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