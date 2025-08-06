// src/components/Header.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="text-2xl font-bold text-blue-600">
          Zim.dev
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf" // Update with your real resume file path
            download
            className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition text-sm"
          >
            Resume
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden px-6 pb-4 bg-white shadow-sm"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/resume.pdf"
                download
                className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm text-center"
              >
                Resume
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
