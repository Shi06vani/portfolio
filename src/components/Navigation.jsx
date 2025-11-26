// import { Link } from 'react-router-dom';

// const Navigation = () => {
//   return (
//     <nav className="bg-white shadow-md">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="flex justify-between h-16">
//           <div className="flex">
//             <div className="flex-shrink-0 flex items-center">
//               <span className="text-xl font-bold text-gray-800">MyPortfolio</span>
//             </div>
//             <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
//               <Link
//                 to="/"
//                 className={({ isActive }) =>
//                   `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
//                     isActive
//                       ? 'border-indigo-500 text-gray-900'
//                       : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
//                   }`
//                 }
//                 end
//               >
//                 Home
//               </Link>
//               <Link
//                 to="/about"
//                 className={({ isActive }) =>
//                   `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
//                     isActive
//                       ? 'border-indigo-500 text-gray-900'
//                       : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
//                   }`
//                 }
//               >
//                 About
//               </Link>
//               <Link
//                 to="/projects"
//                 className={({ isActive }) =>
//                   `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
//                     isActive
//                       ? 'border-indigo-500 text-gray-900'
//                       : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
//                   }`
//                 }
//               >
//                 Projects
//               </Link>
//               <Link
//                 to="/skills"
//                 className={({ isActive }) =>
//                   `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
//                     isActive
//                       ? 'border-indigo-500 text-gray-900'
//                       : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
//                   }`
//                 }
//               >
//                 Skills
//               </Link>
//               <Link
//                 to="/experience"
//                 className={({ isActive }) =>
//                   `inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
//                     isActive
//                       ? 'border-indigo-500 text-gray-900'
//                       : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
//                   }`
//                 }
//               >
//                 Experience
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navigation;




import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const navItems = [
    { to: '/', label: 'Home', end: true },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/skills', label: 'Skills' },
    { to: '/experience', label: 'Experience' },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              DevPortfolio
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-cyan-500 to-blue-500 shadow-md'
                      : 'text-gray-600 hover:text-cyan-600 hover:bg-gray-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? 'text-white bg-gradient-to-r from-cyan-500 to-blue-500'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-cyan-600'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
