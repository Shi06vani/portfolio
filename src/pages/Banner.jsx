import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowRight, FaDownload } from 'react-icons/fa';
import { HiOutlineMail, HiOutlineCode } from 'react-icons/hi';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { useRef } from 'react';

const Banner = () => {
  const targetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={targetRef} className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-white overflow-hidden min-h-screen flex items-center">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-[0.02]"></div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-100 to-transparent dark:from-blue-900/20 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute bottom-1/4 -left-1/4 w-[700px] h-[700px] bg-gradient-to-tr from-purple-100 to-transparent dark:from-purple-900/20 rounded-full blur-3xl opacity-70"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 lg:col-span-7 space-y-8"
          >
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
              className="inline-flex items-center space-x-2 px-4 py-2 text-sm font-medium bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700 shadow-sm"
            >
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent font-medium">
                MERN STACK DEVELOPER
              </span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
            >
              <span className="text-gray-900 dark:text-gray-100">Hi, I'm </span>
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Shivani Suryavanshi
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed"
            >
              I craft <span className="font-medium text-gray-800 dark:text-gray-100">exceptional digital experiences</span> with modern web technologies. 
              Focused on clean code, intuitive interfaces, and scalable solutions that deliver real value.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
              className="flex flex-wrap gap-4 mt-10"
            >
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="px-6 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 group"
              >
                <span>Get In Touch</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="px-6 py-3.5 bg-white text-gray-800 font-medium rounded-lg border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow transition-all duration-300 flex items-center gap-2 group dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 dark:hover:border-gray-600"
              >
                <span>View Projects</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="/resume.pdf"
                download
                className="px-5 py-3.5 text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2 group dark:text-gray-300 dark:hover:bg-gray-700"
              >
                <FaDownload className="text-blue-600 dark:text-blue-400" />
                <span>Download CV</span>
              </motion.a>
            </motion.div>
            
            {/* Tech Stack */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, type: 'spring', stiffness: 100 }}
              className="mt-14"
            >
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">TECH STACK</p>
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
                  { icon: <SiExpress className="text-gray-800 dark:text-gray-200" />, name: "Express" },
                  { icon: <SiReact className="text-blue-500" />, name: "React" },
                  { icon: <SiNodedotjs className="text-green-600" />, name: "Node.js" },
                  { icon: <SiTypescript className="text-blue-600" />, name: "TypeScript" },
                  { icon: <SiTailwindcss className="text-cyan-500" />, name: "Tailwind CSS" }
                ].map((tech, index) => (
                  <motion.div 
                    key={tech.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + (index * 0.1) }}
                    className="flex items-center space-x-2 bg-white dark:bg-gray-800 px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow transition-all duration-300"
                  >
                    <span className="text-xl">{tech.icon}</span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Illustration/Image */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative z-10 mt-12 lg:mt-0"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full filter blur-xl -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-tl from-purple-500/20 to-transparent rounded-full filter blur-xl -z-10"></div>
              
              {/* Terminal card */}
              <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-3xl border border-white/10 shadow-2xl overflow-hidden transform transition-all duration-500 hover:shadow-cyan-500/20">
                {/* Terminal header */}
                <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-gray-800/80 to-gray-900/80 border-b border-white/5">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer"></div>
                  </div>
                  <div className="text-xs font-mono text-gray-400">shivani@portfolio: ~</div>
                </div>
                
                {/* Terminal content */}
                <div className="p-6 font-mono text-sm bg-gradient-to-br from-gray-900 to-gray-800/90">
                  <div className="mb-3">
                    <span className="text-green-400">$</span> <span className="text-white">npm start</span>
                  </div>
                  <div className="mb-3 text-cyan-300"> Starting development server...</div>
                  <div className="mb-3 text-cyan-300"> Compiled successfully!</div>
                  <div className="mb-3 text-cyan-300"> Ready on http://localhost:3000</div>
                  <div className="mb-3">
                    <span className="text-green-400">$</span> <span className="text-white">git status</span>
                  </div>
                  <div className="mb-3 text-yellow-300">On branch main</div>
                  <div className="mb-3 text-green-300">Your branch is up to date with 'origin/main'.</div>
                  <div className="mb-3">
                    <span className="text-green-400">$</span> <span className="text-white">ls -la</span>
                  </div>
                  <div className="text-gray-400">
                    <div>drwxr-xr-x  12 shivani  staff    384B Nov 25 18:30 <span className="text-cyan-300">.</span></div>
                    <div>drwxr-xr-x   5 shivani  staff    160B Nov 25 18:30 <span className="text-cyan-300">..</span></div>
                    <div>-rw-r--r--   1 shivani  staff    1.1K Nov 25 18:30 <span className="text-blue-300">package.json</span></div>
                    <div>drwxr-xr-x   6 shivani  staff    192B Nov 25 18:30 <span className="text-blue-300">src</span></div>
                    <div>drwxr-xr-x   3 shivani  staff     96B Nov 25 18:30 <span className="text-blue-300">public</span></div>
                  </div>
                  <div className="mt-4 flex items-center">
                    <div className="w-2 h-5 bg-gradient-to-b from-cyan-400 to-blue-500 mr-2 rounded-sm animate-pulse"></div>
                    <span className="text-cyan-300">Happy coding! 🚀</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-full filter blur-lg -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Social Links */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, type: 'spring', stiffness: 100 }}
          className="flex items-center space-x-6 bg-gray-900/80 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10 shadow-xl"
        >
          {[
            { 
              icon: <FaGithub className="text-xl" />, 
              url: "https://github.com/yourusername",
              color: "hover:text-white",
              tooltip: "GitHub"
            },
            { 
              icon: <FaLinkedin className="text-xl" />, 
              url: "https://linkedin.com/in/yourusername",
              color: "hover:text-[#0A66C2]",
              tooltip: "LinkedIn"
            },
            { 
              icon: <FaTwitter className="text-xl" />, 
              url: "https://twitter.com/yourusername",
              color: "hover:text-[#1DA1F2]",
              tooltip: "Twitter"
            },
            { 
              icon: <HiOutlineMail className="text-xl" />, 
              url: "mailto:your.email@example.com",
              color: "hover:text-red-400",
              tooltip: "Email me"
            }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`relative group text-gray-400 ${social.color} transition-colors duration-300`}
              aria-label={social.tooltip}
              data-tooltip-target="tooltip-default"
            >
              {social.icon}
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {social.tooltip}
                <span className="absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></span>
              </span>
            </motion.a>
          ))}
          
          {/* Scroll indicator */}
          <motion.div 
            className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400 text-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ 
              opacity: [0.6, 1, 0.6],
              y: [0, 5, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span>Scroll down</span>
            <svg className="w-4 h-4 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;

// Add these styles to your global CSS file
const styles = `
  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  .animate-gradient {
    background-size: 200% 200%;
    animation: gradient 8s ease infinite;
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(1deg); }
  }
`;

// Add the styles to the document head
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = styles;
  document.head.appendChild(styleElement);
}