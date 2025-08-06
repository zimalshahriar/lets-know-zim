import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 sm:px-16 md:px-36 py-8 bg-gradient-to-br from-white to-blue-50 gap-12 md:gap-0"
      style={{ marginTop: "-48px" }}
    >
      {/* Left Side */}
      <motion.div
        className="w-full md:max-w-3xl text-center md:text-left space-y-10 order-2 md:order-1"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight">
          Hi, I'm <span className="text-blue-600">Shahriar Zim</span> 👋
        </h1>

        <div className="mt-8 text-xl sm:text-2xl md:text-3xl text-gray-700 h-[56px]">
          <Typewriter
            options={{
              strings: [
                "Frontend Alchemist ✨",
                "React Wizard 🔮",
                "Backend Sorcerer 🧙‍♂️",
                "Python Hunter 🐍",
                "Design + Code = ❤️",
                "Your Next Developer 🚀",
                "Building the Future, One Line of Code at a Time 🌍",
                "Let's Create Something Amazing Together! 🎨",
              ],
              autoStart: true,
              loop: true,
              delay: 60,
              deleteSpeed: 40,
            }}
          />
        </div>

        <p className="mt-8 text-lg md:text-xl text-gray-600">
          Let's build something bold, beautiful, and <span className="italic font-semibold">uniquely yours</span>.
        </p>

        <div className="mt-14 flex flex-col sm:flex-row justify-center md:justify-start gap-6 sm:gap-10">
          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
            href="#projects"
            className="px-8 py-4 bg-blue-600 text-white text-lg rounded-2xl hover:bg-blue-700 transition"
          >
            View My Work
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
            href="https://github.com/zimalshahriar/"
            className="px-8 py-4 border border-blue-600 text-blue-600 text-lg rounded-2xl hover:bg-blue-50 transition"
          >
            GitHub
          </motion.a>
        </div>
      </motion.div>

      {/* Right Side */}
      <motion.div
        className="w-full flex justify-center mb-10 md:mb-0 md:block md:w-1/3 order-1 md:order-2 md:justify-end md:pl-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <motion.div
          className="relative w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-8 border-white flex items-center justify-center"
          animate={{
            scale: [1, 1.03, 1],
            rotate: [0, 0.8, -0.8, 0],
            boxShadow: [
              "0 0 80px rgba(236,72,153,0.6)",
              "0 0 80px rgba(255, 0, 0, 0.6)",
              "0 0 80px rgba(37,99,235,0.6)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img
            src="/my-pic.jpg"
            alt="Zim the Flame"
            className="w-full h-full object-cover rounded-full"
            style={{ aspectRatio: "1 / 1" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;