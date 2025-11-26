import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub className="w-5 h-5" />,
      href: 'https://github.com/yourusername',
      label: 'GitHub profile',
      color: 'hover:bg-gray-800'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="w-5 h-5" />,
      href: 'https://linkedin.com/in/yourusername',
      label: 'LinkedIn profile',
      color: 'hover:bg-blue-600'
    },
    {
      name: 'Twitter',
      icon: <FaTwitter className="w-5 h-5" />,
      href: 'https://twitter.com/yourusername',
      label: 'Twitter profile',
      color: 'hover:bg-blue-400'
    },
    {
      name: 'Email',
      icon: <FaEnvelope className="w-5 h-5" />,
      href: 'mailto:your.email@example.com',
      label: 'Send email',
      color: 'hover:bg-red-500'
    }
  ];

  const footerLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Skills', href: '/skills' },
    { name: 'Experience', href: '/experience' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-full h-full bg-gradient-to-br from-cyan-500/5 to-transparent rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/4 w-full h-full bg-gradient-to-tl from-purple-500/5 to-transparent rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left side content */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Brand and description */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Let's Work Together
                  </h2>
                  <p className="text-gray-400 text-lg leading-relaxed mb-6">
                    Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
                  </p>
                  <motion.div 
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="space-y-1 mb-6">
                <h3 className="text-xl font-semibold text-white">Contact Info</h3>
                <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></div>
              </div>
              
              <ul className="space-y-5">
                <motion.li 
                  className="flex items-start group"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <FaEnvelope className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-400">Email me at</p>
                    <a 
                      href="mailto:your.email@example.com" 
                      className="text-cyan-400 hover:text-cyan-300 hover:underline transition-colors duration-300"
                    >
                      your.email@example.com
                    </a>
                  </div>
                </motion.li>
                
                <motion.li 
                  className="flex items-start group"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <FaGithub className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-400">Find me on</p>
                    <a 
                      href="https://github.com/yourusername" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 hover:underline transition-colors duration-300"
                    >
                      github.com/yourusername
                    </a>
                  </div>
                </motion.li>
              </ul>
            </motion.div>
                  <div className="flex flex-wrap gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 hover:border-cyan-500/30 ${social.color}`}
                        aria-label={social.name}
                        whileHover={{ y: -3, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {React.cloneElement(social.icon, { className: 'w-5 h-5' })}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Quick Links */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="space-y-6"
                >
                  <h3 className="text-xl font-semibold text-white">Quick Links</h3>
                  <ul className="space-y-4">
                    {[/* eslint-disable @typescript-eslint/no-unused-vars */
                      { name: 'Home', href: '/' },
                      { name: 'About', href: '/about' },
                      { name: 'Projects', href: '/projects' },
                      { name: 'Experience', href: '/experience' },
                      { name: 'Skills', href: '/skills' },
                    ].map((link, index) => (
                      <motion.li 
                        key={link.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.1 + (index * 0.05) }}
                      >
                        <a
                          href={link.href}
                          className="group flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                        >
                          <span className="w-2 h-2 rounded-full bg-cyan-500 mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1"></span>
                          <span className="group-hover:translate-x-1 transition-transform duration-300">
                            {link.name}
                          </span>
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right side - Contact Form & Info */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-2xl"
            >
              <div className="space-y-1 mb-6">
                <h3 className="text-xl font-semibold text-white">Get In Touch</h3>
                <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></div>
              </div>
              
              <form className="space-y-5">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                  <textarea
                    id="message"
                    rows="3"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            
          </div>
        </div>

        {/* Copyright and Back to Top */}
        <div className="pt-12 mt-12 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              &copy; {currentYear} Your Name. All rights reserved.
            </p>
            
            <button 
              onClick={scrollToTop}
              className="mt-4 md:mt-0 flex items-center px-5 py-2.5 rounded-full text-sm font-medium text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 transition-all duration-300 group"
              aria-label="Back to top"
            >
              Back to top
              <FaArrowUp className="ml-2 w-3.5 h-3.5 transform group-hover:-translate-y-0.5 transition-transform duration-300" />
            </button>
            
            <div className="mt-4 md:mt-0">
              <p className="text-sm text-gray-500">
                Built with <span className="text-cyan-400">React</span> & <span className="text-cyan-400">Tailwind CSS</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
