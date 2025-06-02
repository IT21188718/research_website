'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  'Home', 'Introduction', 'Domain', 'Milestones', 'Features',
  'Documents', 'Tools & Technologies', 'Publication Details', 'Team', 'Contact Us'
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const formatId = (item: string) =>
    item.toLowerCase().replace(/[^a-z0-9]/g, '');

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full bg-white shadow z-50"
    >
      {/* Full-width container with no side white space */}
      <div className="w-full pl-4 pr-4 py-3 flex items-center justify-between">
        {/* Logo + Website name aligned to the far left */}
        <div className="flex items-center space-x-2">
          <img src="/assets/Logo.png" alt="Logo" className="h-10 w-auto" />
          <span className="text-xl font-bold text-orange-300">Nextgen Solution</span>
        </div>

        {/* Desktop nav links centered with proper spacing */}
        <div className="hidden lg:flex flex-1 justify-center gap-x-6 ml-6">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={`#${formatId(item)}`}
              className="text-sm font-bold text-gray-700 hover:text-blue-900 transition duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile menu toggle button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? (
              <X className="w-6 h-6 text-gray-800" />
            ) : (
              <Menu className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: '100vh', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white px-4 pt-4 pb-10 shadow overflow-y-auto"
          >
            <div className="flex flex-col space-y-4 max-h-screen overflow-y-auto">
              {navItems.map((item, idx) => (
                <motion.a
                  key={idx}
                  href={`#${formatId(item)}`}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-normal text-gray-700 hover:text-blue-500 transition duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
