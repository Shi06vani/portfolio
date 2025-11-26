import { motion } from 'framer-motion';
import { FaCode,  } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs,  } from 'react-icons/si';

const About = () => {
  const skills = [
    { name: 'Frontend Development', icon: <FaCode className="text-blue-400 text-2xl" />, items: ['React.js', 'Next.js', 'Redux', 'Tailwind CSS', 'Material UI'] },
    { name: 'Backend Development', icon: <SiNodedotjs className="text-green-500 text-2xl" />, items: ['Node.js', 'Express.js', 'RESTful APIs', 'Authentication'] },
    { name: 'Database', icon: <SiMongodb className="text-green-600 text-2xl" />, items: ['MongoDB', 'Mongoose', 'Database Design'] },
    { name: 'DevOps & Tools', icon: <FaCode className="text-purple-500 text-2xl" />, items: ['Git', 'GitHub', 'Docker', 'AWS', 'CI/CD'] },
  ];

  const experience = [
    {
      role: 'MERN Stack Developer',
      company: 'Your Company',
      duration: '2021 - Present',
      description: 'Developing and maintaining web applications using the MERN stack, implementing responsive designs, and optimizing application performance.'
    },
    {
      role: 'Frontend Developer',
      company: 'Previous Company',
      duration: '2020 - 2021',
      description: 'Built responsive user interfaces with React and implemented state management solutions.'
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/3 -right-1/4 w-full h-full bg-gradient-to-br from-cyan-500/5 to-transparent rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/3 -left-1/4 w-full h-full bg-gradient-to-tl from-purple-500/5 to-transparent rounded-full filter blur-3xl" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 text-sm font-medium bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/10"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6"
          >
            MERN Stack Developer
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Passionate about crafting exceptional digital experiences with clean, efficient code and modern web technologies.
          </motion.p>
        </motion.div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Who I Am
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                I'm a passionate MERN Stack Developer with 2+ years of experience in building modern web applications. 
                I specialize in creating responsive, user-friendly interfaces and robust backend systems.
              </p>
              <p>
                My journey in web development started with a curiosity to understand how things work behind the scenes. 
                This led me to dive deep into full-stack development, where I found my passion for creating seamless 
                digital experiences that solve real-world problems.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or sharing my knowledge with the developer community.
              </p>
            </div>

            {/* Experience Section */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Experience
              </h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.2 + (index * 0.1) }}
                    className="relative pl-8 border-l-2 border-cyan-500/30"
                  >
                    <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 -left-2"></div>
                    <h4 className="text-lg font-semibold">{exp.role}</h4>
                    <p className="text-cyan-400 text-sm mb-2">{exp.company} • {exp.duration}</p>
                    <p className="text-gray-400">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                My Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.1 * index }}
                    className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      {skill.icon}
                      <h3 className="text-lg font-semibold">{skill.name}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 text-sm bg-white/5 text-gray-300 rounded-full border border-white/10"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* MERN Stack Showcase */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-cyan-500/5 to-blue-500/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                MERN Stack Expertise
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {[
                  { icon: <SiMongodb className="w-10 h-10 mx-auto text-green-500" />, name: 'MongoDB' },
                  { icon: <SiExpress className="w-10 h-10 mx-auto text-gray-100" />, name: 'Express' },
                  { icon: <SiReact className="w-10 h-10 mx-auto text-blue-400" />, name: 'React' },
                  { icon: <SiNodedotjs className="w-10 h-10 mx-auto text-green-600" />, name: 'Node.js' },
                ].map((tech, i) => (
                  <motion.div 
                    key={tech.name}
                    whileHover={{ y: -5 }}
                    className="flex flex-col items-center gap-2"
                  >
                    {tech.icon}
                    <span className="text-sm font-medium">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.6 }}
              className="text-center p-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl border border-white/10"
            >
              <h3 className="text-xl font-semibold mb-4">Let's Work Together</h3>
              <p className="text-gray-300 mb-6">
                Have a project in mind? I'd love to hear about it!
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-cyan-500/20"
              >
                Get In Touch
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
