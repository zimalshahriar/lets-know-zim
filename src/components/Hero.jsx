import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 md:px-16 bg-gradient-to-br from-white to-blue-50">
      {/* Left Side */}
      <motion.div
        className="max-w-xl text-center md:text-left space-y-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Hi, I’m <span className="text-blue-600">Zim</span> 👋
        </h1>

        <div className="mt-4 text-xl text-gray-700 h-[40px]">
          <Typewriter
            options={{
              strings: [
                "Frontend Alchemist ✨",
                "React Wizard 🔮",
                "Design + Code = ❤️",
              ],
              autoStart: true,
              loop: true,
              delay: 60,
              deleteSpeed: 40,
            }}
          />
        </div>

        <p className="mt-4 text-gray-600">
          Let’s build something bold, beautiful, and *uniquely yours*.
        </p>

        <div className="mt-8 flex justify-center md:justify-start gap-6">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition"
          >
            View My Work
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/zimalshahriar/" // Change to your actual GitHub link
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-2xl hover:bg-blue-50 transition"
          >
            GitHub
          </motion.a>
        </div>
      </motion.div>

      {/* Right Side */}
      <motion.div
        className="hidden md:block w-1/3"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="relative w-full aspect-square rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 animate-pulse shadow-xl" />
      </motion.div>
    </section>
  );
};

export default Hero;
