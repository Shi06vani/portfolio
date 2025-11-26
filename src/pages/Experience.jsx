import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaCertificate, FaLaptopCode, FaServer, FaAws } from 'react-icons/fa';
import { SiJavascript, SiReact, SiNodedotjs, SiMongodb } from 'react-icons/si';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      type: 'experience',
      icon: <FaBriefcase className="text-blue-400 text-xl" />,
      title: 'Senior MERN Stack Developer',
      company: 'Tech Innovations Inc.',
      duration: '2022 - Present',
      description: 'Leading a team of developers in building scalable web applications using the MERN stack. Implemented CI/CD pipelines and cloud solutions.',
      tags: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker'],
      iconColors: 'from-blue-500 to-cyan-400'
    },
    {
      id: 2,
      type: 'experience',
      icon: <FaLaptopCode className="text-purple-400 text-xl" />,
      title: 'Frontend Developer',
      company: 'Digital Creations',
      duration: '2020 - 2022',
      description: 'Developed responsive user interfaces and implemented state management solutions. Collaborated with UX/UI designers to create intuitive user experiences.',
      tags: ['React', 'Redux', 'TypeScript', 'Material-UI'],
      iconColors: 'from-purple-500 to-pink-400'
    },
    {
      id: 3,
      type: 'education',
      icon: <FaGraduationCap className="text-green-400 text-xl" />,
      title: 'Master of Computer Applications (MCA)',
      company: 'Tech University',
      duration: '2018 - 2020',
      description: 'Specialized in Web Technologies and Software Development. Graduated with honors.',
      tags: ['Web Development', 'Algorithms', 'Database Systems'],
      iconColors: 'from-green-500 to-emerald-400'
    },
    {
      id: 4,
      type: 'certification',
      icon: <FaCertificate className="text-yellow-400 text-xl" />,
      title: 'AWS Certified Developer',
      company: 'Amazon Web Services',
      duration: '2021',
      description: 'Certified in developing and maintaining applications on the AWS platform.',
      tags: ['AWS', 'Cloud Computing', 'Serverless'],
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
                    <div className="flex flex-wrap gap-2">
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
