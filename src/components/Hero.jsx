import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 md:px-12 lg:px-24 py-8 gap-10 lg:gap-0 overflow-hidden"
      style={{
        marginTop: "-48px",
      }}
    >
      {/* Full section background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      />
      {/* Light deep background overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at 60% 40%, rgba(37,99,235,0.08) 0%, transparent 70%), radial-gradient(ellipse at 20% 80%, rgba(236,72,153,0.07) 0%, transparent 80%)",
          width: "100%",
          height: "100%",
        }}
      />
      {/* Left Side */}
      <motion.div
        className="relative w-full lg:w-2/3 text-center lg:text-left space-y-8 order-2 lg:order-1 z-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
          Hi, I'm <span className="text-blue-600">Shahriar Zim</span> 👋
        </h1>

        <div className="mt-6 text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 min-h-[48px] md:min-h-[56px]">
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

        <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-600">
          Let's build something bold, beautiful, and <span className="italic font-semibold">uniquely yours</span>.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-8">
          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white text-base sm:text-lg rounded-2xl hover:bg-blue-700 transition"
          >
            View My Work
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
            href="https://github.com/zimalshahriar/"
            className="px-6 py-3 border border-blue-600 text-blue-600 text-base sm:text-lg rounded-2xl hover:bg-blue-50 transition"
          >
            GitHub
          </motion.a>
        </div>
      </motion.div>

      {/* Right Side */}
      <motion.div
        className="relative w-full flex justify-center mb-8 lg:mb-0 lg:block lg:w-1/3 order-1 lg:order-2 lg:justify-end lg:pl-12 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <motion.div
          className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden shadow-2xl border-8 border-white flex items-center justify-center"
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