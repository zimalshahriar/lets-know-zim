import { motion } from "framer-motion";
import projects from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-8 md:px-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-12">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
              <p className="mt-4 text-gray-700">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm font-medium text-blue-600 border border-blue-600 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex justify-between">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.github}
                  target="_blank"
                  className="text-blue-600 hover:text-blue-800 transition"
                >
                  GitHub
                </motion.a>
                {project.demo && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.demo}
                    target="_blank"
                    className="text-blue-600 hover:text-blue-800 transition"
                  >
                    Live Demo
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
