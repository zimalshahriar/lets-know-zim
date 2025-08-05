import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-8 md:px-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-8">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Side: Text */}
          <motion.div
            className="max-w-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-gray-700">
              Hello! I'm Zim, a passionate frontend developer with a love for
              crafting beautiful and intuitive user experiences. I specialize in
              creating responsive, interactive websites using modern technologies like
              React, JavaScript, and Tailwind CSS.
            </p>

            <p className="mt-4 text-lg text-gray-700">
              When I'm not coding, you can find me exploring new design trends, reading
              about the latest in tech, or working on personal projects. Let's build something amazing together!
            </p>
          </motion.div>

          {/* Right Side: Photo */}
          <motion.div
            className="w-64 h-64 rounded-full overflow-hidden shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src="your-photo.jpg" // Replace with your actual photo or a placeholder
              alt="Zim's Photo"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Skills</h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            <motion.div
              className="bg-gray-100 p-4 rounded-lg shadow-md"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-xl font-semibold text-blue-600">React</h4>
            </motion.div>
            <motion.div
              className="bg-gray-100 p-4 rounded-lg shadow-md"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-xl font-semibold text-blue-600">JavaScript</h4>
            </motion.div>
            <motion.div
              className="bg-gray-100 p-4 rounded-lg shadow-md"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-xl font-semibold text-blue-600">Tailwind CSS</h4>
            </motion.div>
            <motion.div
              className="bg-gray-100 p-4 rounded-lg shadow-md"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-xl font-semibold text-blue-600">HTML & CSS</h4>
            </motion.div>
            {/* Add more skills as you like */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
