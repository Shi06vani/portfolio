import { motion, useInView } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaMobile, FaAws, FaServer } from 'react-icons/fa';
import { 
  SiExpress, SiMongodb, SiPostgresql, SiMysql, SiTypescript, 
  SiTailwindcss, SiJavascript, SiRedux, SiGraphql, SiDocker, 
  SiGit, SiNextdotjs, SiNestjs, SiFigma, SiAdobexd, SiGithubactions,
  SiKubernetes, SiWebgl, SiSocketdotio, SiPwa, SiRedis
} from 'react-icons/si';
import { TbBrandThreejs } from 'react-icons/tb';
import { useRef } from 'react';

const SkillCard = ({ category, icon, items, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative group h-full"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-70 transition duration-500"></div>
      <div className="relative h-full bg-gray-900 p-6 rounded-2xl border border-gray-800 group-hover:border-cyan-500/30 transition-all duration-300">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl">
            {icon}
          </div>
          <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {category}
          </h3>
        </div>
        <div className="space-y-5">
          {items.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-gray-300">
                  <span className="text-cyan-400">{skill.icon}</span>
                  <span className="font-medium">{skill.name}</span>
                </div>
                <span className="text-sm text-cyan-400">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-1.5">
                <motion.div 
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.3 + (index * 0.1) }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Skills = ({ compact = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const skills = [
    {
      category: 'Frontend',
      icon: <FaReact className="text-2xl text-cyan-400" />,
      items: [
        { name: 'React.js', level: 92, icon: <FaReact /> },
        { name: 'Next.js', level: 88, icon: <SiNextdotjs /> },
        { name: 'TypeScript', level: 90, icon: <SiTypescript /> },
        { name: 'Redux', level: 85, icon: <SiRedux /> },
        { name: 'Tailwind CSS', level: 95, icon: <SiTailwindcss /> },
      ]
    },
    {
      category: 'Backend',
      icon: <FaServer className="text-2xl text-green-400" />,
      items: [
        { name: 'Node.js', level: 90, icon: <FaNodeJs /> },
        { name: 'Express.js', level: 88, icon: <SiExpress /> },
        { name: 'NestJS', level: 82, icon: <SiNestjs /> },
        { name: 'RESTful APIs', level: 90, icon: <SiGraphql /> },
        { name: 'GraphQL', level: 85, icon: <SiGraphql /> },
      ]
    },
    {
      category: 'Database',
      icon: <FaDatabase className="text-2xl text-yellow-400" />,
      items: [
        { name: 'MongoDB', level: 90, icon: <SiMongodb /> },
        { name: 'PostgreSQL', level: 85, icon: <SiPostgresql /> },
        { name: 'MySQL', level: 80, icon: <SiMysql /> },
        { name: 'Redis', level: 75, icon: <SiRedis /> },
      ]
    },
    {
      category: 'DevOps & Cloud',
      icon: <SiDocker className="text-2xl text-blue-400" />,
      items: [
        { name: 'Docker', level: 88, icon: <SiDocker /> },
        { name: 'AWS', level: 82, icon: <FaAws /> },
        { name: 'CI/CD', level: 85, icon: <SiGithubactions /> },
        { name: 'Kubernetes', level: 75, icon: <SiKubernetes /> },
      ]
    },
    {
      category: 'UI/UX & Design',
      icon: <SiFigma className="text-2xl text-purple-400" />,
      items: [
        { name: 'Figma', level: 90, icon: <SiFigma /> },
        { name: 'Adobe XD', level: 85, icon: <SiAdobexd /> },
        { name: 'UI/UX Principles', level: 88, icon: <SiFigma /> },
        { name: 'Responsive Design', level: 95, icon: <SiJavascript /> },
      ]
    },
    {
      category: 'Other',
      icon: <TbBrandThreejs className="text-2xl text-green-300" />,
      items: [
        { name: 'Three.js', level: 80, icon: <TbBrandThreejs /> },
        { name: 'WebGL', level: 75, icon: <SiWebgl /> },
        { name: 'WebSockets', level: 85, icon: <SiSocketdotio /> },
        { name: 'PWA', level: 82, icon: <SiPwa /> },
      ]
    }
  ];

  return (
    <div 
      ref={ref}
      className={`relative ${compact ? 'py-12' : 'min-h-screen py-20'} bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden px-4 sm:px-6 lg:px-8`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute left-1/2 top-0 h-[500px] w-[1000px] -translate-x-1/2 -translate-y-1/2">
          <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_50%_300px,#3b82f680,transparent)]"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-cyan-500/20 to-blue-600/20 backdrop-blur-sm rounded-full mb-6 border border-cyan-500/30"
          >
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6 bg-300% animate-gradient"
          >
            Technical Proficiencies
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            A comprehensive showcase of my technical skills and expertise across various domains, reflecting my journey and proficiency in modern web technologies.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, index) => (
            <SkillCard 
              key={category.category}
              category={category.category}
              icon={category.icon}
              items={category.items}
              index={index}
            />
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-20 relative"
        >
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-900/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 overflow-hidden">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-cyan-500/10 rounded-full filter blur-3xl"></div>
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
            
            <h3 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 relative z-10">
              Additional Tools & Technologies
            </h3>
            
            <div className="flex flex-wrap gap-3 relative z-10">
              {[
                'Jest', 'Cypress', 'React Testing Library', 'GitHub Actions',
                'CI/CD Pipelines', 'Responsive Design', 'UI/UX Principles', 
                'Agile/Scrum', 'Jira', 'Confluence', 'Postman', 'VS Code',
                'Webpack', 'Vite', 'ESLint', 'Prettier', 'JWT', 'OAuth'
              ].map((skill, index) => (
                <motion.span 
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + (index * 0.03) }}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-cyan-100 bg-white/5 rounded-full border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:bg-cyan-500/10"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 6s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Skills;
