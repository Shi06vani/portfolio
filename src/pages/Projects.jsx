import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaMobileAlt } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiRedux, SiFirebase, SiExpress, SiSocketdotio } from 'react-icons/si';
import { useState, useMemo } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const projectCategories = ['All', 'Full Stack', 'Frontend', 'Mobile'];

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'Full Stack',
      description: 'A full-stack e-commerce platform with user authentication, product catalog, and payment integration.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      github: '#',
      demo: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'Frontend',
      description: 'A collaborative task management tool with real-time updates and team collaboration features.',
      tags: ['React', 'Firebase', 'Material UI'],
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      github: '#',
      demo: '#'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      category: 'Frontend',
      description: 'A modern portfolio website built with React and Framer Motion animations.',
      tags: ['React', 'Tailwind CSS', 'Framer Motion'],
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      github: '#',
      demo: '#'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      category: 'Frontend',
      description: 'Real-time weather information with 5-day forecast and location-based services.',
      tags: ['React', 'OpenWeather API', 'Geolocation'],
      image: 'https://images.unsplash.com/photo-1601134467661-3d775b99c7b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      github: '#',
      demo: '#'
    },
    {
      id: 5,
      title: 'Recipe Finder',
      category: 'Mobile',
      description: 'Search and discover recipes with nutritional information and step-by-step instructions.',
      tags: ['React Native', 'Spoonacular API', 'Redux'],
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      github: '#',
      demo: '#'
    },
    {
      id: 6,
      title: 'Chat Application',
      category: 'Full Stack',
      description: 'Real-time chat application with private messaging and group chats.',
      tags: ['Socket.io', 'Node.js', 'MongoDB', 'Express'],
      image: 'https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      github: '#',
      demo: '#'
    }
  ];

  const getTechIcon = (tech) => {
    const techLower = tech.toLowerCase();
    switch(techLower) {
      case 'react':
        return <SiReact className="text-blue-400" title="React" />;
      case 'react native':
        return <FaMobileAlt className="text-blue-400" title="React Native" />;
      case 'node.js':
        return <SiNodedotjs className="text-green-500" title="Node.js" />;
      case 'mongodb':
        return <SiMongodb className="text-green-600" title="MongoDB" />;
      case 'tailwind css':
      case 'tailwind':
        return <SiTailwindcss className="text-cyan-400" title="Tailwind CSS" />;
      case 'redux':
        return <SiRedux className="text-purple-500" title="Redux" />;
      case 'firebase':
        return <SiFirebase className="text-yellow-500" title="Firebase" />;
      case 'express':
        return <SiExpress className="text-gray-300" title="Express" />;
      case 'socket.io':
        return <SiSocketdotio className="text-white" title="Socket.io" />;
      default:
        return <FaCode className="text-gray-400" title={tech} />;
    }
  };

  const filteredProjects = useMemo(() => 
    activeFilter === 'All' 
      ? projects 
      : projects.filter(project => project.category === activeFilter),
    [activeFilter, projects]
  );

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 w-full h-full bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent -translate-x-1/2 -translate-y-1/2 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-purple-500/5 to-transparent rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-block text-sm font-medium text-cyan-400 mb-4 tracking-widest"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            MY WORK
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Projects</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Explore my latest projects and see how I bring ideas to life with code.
          </motion.p>

          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            {projectCategories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2 text-sm font-medium rounded-full transition-all will-change-transform ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        <LayoutGroup>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } }}
                  exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
                >
                  {/* Project Image */}
                  <div className="h-52 overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                        <span className="text-sm text-cyan-400">{project.category}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400">
                        {project.category}
                      </span>
                    </div>
                    
                    <p className="text-gray-400 text-sm mb-5">{project.description}</p>
                    
                    {/* Tech Stack */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                        <FaCode className="w-3.5 h-3.5" />
                        <span>Built with:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-white/5 text-gray-300 rounded-full border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                            title={tag}
                          >
                            {getTechIcon(tag)}
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Project Links */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors group-hover:text-cyan-400"
                      >
                        <FaGithub className="w-4 h-4" />
                        Code
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 rounded-lg hover:opacity-90 transition-opacity hover:shadow-lg hover:shadow-cyan-500/20"
                      >
                        Live Demo
                        <FaExternalLinkAlt className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <motion.p 
            className="text-gray-400 mb-8 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Interested in seeing more of my work?
          </motion.p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3.5 text-base font-medium rounded-lg text-white bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-cyan-500/20"
          >
            <FaGithub className="mr-3 text-lg" />
            Explore My GitHub
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;