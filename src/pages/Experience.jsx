import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaCertificate, FaLaptopCode, FaServer, FaAws } from 'react-icons/fa';
import { SiJavascript, SiReact, SiNodedotjs, SiMongodb } from 'react-icons/si';

const Experience = () => {
  const experiences = [
    // Professional Experience
    {
      id: 1,
      type: 'experience',
      icon: <FaBriefcase className="text-blue-400 text-xl" />,
      title: 'Mern Stack Developer',
      company: 'Mactoys Software Technology',
      duration: '02/2024 – Present',
      location: 'Indore, India',
      description: 'Working on various projects with a focus on full-stack development using the MERN stack.',
      projects: [
        'ERS-System: Developed the ERS (Employee Record System) with a focus on both frontend and backend, ensuring a user-friendly interface and efficient data management.',
        'Formaxi: Focused on frontend development, including UI design and API integration, to provide a smooth and responsive user experience.',
        'Oncotree: Contributed to the development of Oncotree, a web platform for doctors and patients. Handled both frontend and backend tasks, including UI design, API creation, and full integration.'
      ],
      tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'RESTful APIs', 'UI/UX Design'],
      iconColors: 'from-blue-500 to-cyan-400'
    },
    {
      id: 2,
      type: 'experience',
      icon: <FaBriefcase className="text-purple-400 text-xl" />,
      title: 'Mern Stack Intern',
      company: 'Dwellfox Private Limited',
      duration: '09/2023 – 01/2024',
      location: 'Indore, India',
      description: 'Gained hands-on experience in full-stack development through various projects.',
      projects: [
        'Knock the builder: Worked as a fullstack developer, handling both frontend and backend development. Designed and integrated responsive frontend interfaces. Developed and implemented RESTful backend APIs.',
        'Salem Ag Dubai: Developed a chat application focused on real-time communication. Worked on both the frontend design and backend development, including API integration and creation.'
      ],
      tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'WebSockets', 'REST APIs'],
      iconColors: 'from-purple-500 to-pink-400'
    },
    // Education
    {
      id: 3,
      type: 'education',
      icon: <FaGraduationCap className="text-green-400 text-xl" />,
      title: 'Bachelor of Technology (BTech CSE)',
      company: 'ShivajiRao Kadam Institute Of Technology and Management',
      duration: '08/2020 – 05/2024',
      location: 'Indore, India',
      description: 'Pursuing a degree in Computer Science and Engineering with a focus on software development and web technologies.',
      tags: ['Computer Science', 'Data Structures', 'Algorithms', 'Web Development'],
      iconColors: 'from-green-500 to-emerald-400'
    },
    {
      id: 4,
      type: 'education',
      icon: <FaGraduationCap className="text-yellow-400 text-xl" />,
      title: 'Higher Secondary Education',
      company: 'Excellence Bal Vinay Mandir',
      duration: '04/2019 – 03/2020',
      location: 'Indore, India',
      description: 'Completed higher secondary education with a focus on science and mathematics.',
      tags: ['Science', 'Mathematics', 'Physics', 'Chemistry'],
      iconColors: 'from-yellow-500 to-amber-400'
    }
  ];

  const getTagIcon = (tag) => {
    switch(tag.toLowerCase()) {
      case 'react':
        return <SiReact className="text-blue-400" />;
      case 'node.js':
        return <SiNodedotjs className="text-green-500" />;
      case 'mongodb':
        return <SiMongodb className="text-green-600" />;
      case 'aws':
        return <FaAws className="text-yellow-500" />;
      case 'javascript':
        return <SiJavascript className="text-yellow-400" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-full h-full bg-gradient-to-br from-cyan-500/5 to-transparent rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-full h-full bg-gradient-to-tl from-purple-500/5 to-transparent rounded-full filter blur-3xl" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 text-sm font-medium bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/10"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              My Journey
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6"
          >
            Experience & Education
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            A timeline of my professional journey, education, and certifications that shaped my career.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-500/30 via-purple-500/30 to-transparent -translate-x-1/2"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start gap-8`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center z-10">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                
                {/* Content */}
                <div className="w-full md:w-5/12 mt-3">
                  <div className={`p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${item.iconColors} bg-opacity-20`}>
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p className="text-cyan-400">{item.company}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{item.description}</p>
                    {item.projects && item.projects.length > 0 && (
                      <div className="mt-6 space-y-4">
                        <h4 className="text-sm font-medium text-cyan-400">Key Projects:</h4>
                        <ul className="space-y-3 list-disc list-inside">
                          {item.projects.map((project, idx) => (
                            <li key={idx} className="text-gray-300 text-sm">
                              {project}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className="flex flex-wrap gap-2 mt-6">
                      {item.tags.map((tag, i) => (
                        <span 
                          key={i}
                          className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                        >
                          {getTagIcon(tag)}
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 text-sm text-gray-400">
                      {item.duration}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: '4+', label: 'Years Experience' },
            { number: '50+', label: 'Projects Completed' },
            { number: '30+', label: 'Happy Clients' },
            { number: '10+', label: 'Technologies' }
          ].map((stat, index) => (
            <div key={index} className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 text-center hover:border-cyan-500/30 transition-all">
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
