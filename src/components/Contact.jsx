import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-8 md:px-16 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8">
          Let’s Connect
        </h2>

        <p className="text-lg text-gray-700 mb-6">
          I’d love to hear from you! Whether it's about a project, collaboration, or just to say hi 👋
        </p>

        <div className="flex justify-center gap-6 flex-wrap mb-10">
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://github.com/zimalshahriar"
            target="_blank"
            className="text-blue-600 text-2xl hover:text-blue-800"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://www.linkedin.com/in/shahriar-zim-299b58375/" // replace
            target="_blank"
            className="text-blue-600 text-2xl hover:text-blue-800"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="mailto:alshahriarzim@gmail.com"
            className="text-blue-600 text-2xl hover:text-blue-800"
          >
            <FaEnvelope />
          </motion.a>
        </div>

        <motion.a
          whileHover={{ scale: 1.05 }}
          href="/Résumé of Shahriar Zim.pdf" // replace with your actual resume path
          download
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition text-lg"
        >
          <FaFileDownload className="mr-2" />
          Download Resume
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;
