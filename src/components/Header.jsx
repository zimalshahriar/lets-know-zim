// src/components/Header.jsx
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 pt-4 pb-8 flex items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text animate-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-center drop-shadow-lg"
        >
          I Turn Ideas Into Interfaces
        </motion.h1>
      </div>
    </header>
  );
};

export default Header;
