// src/components/About.jsx
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaPhp,
} from "react-icons/fa";
import { SiTailwindcss, SiDjango, SiMysql } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-400" />, description: "Semantic and accessible markup." },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-300" />, description: "Flexible, responsive styling." },
  { name: "JavaScript", icon: <FaJs className="text-yellow-300" />, description: "Dynamic logic & interactivity." },
  { name: "React", icon: <FaReact className="text-cyan-300" />, description: "Reusable components & UIs." },
  { name: "Tailwind", icon: <SiTailwindcss className="text-teal-300" />, description: "Fast utility-first styling." },
  { name: "Python", icon: <FaPython className="text-yellow-400" />, description: "Elegant scripting language." },
  { name: "PHP", icon: <FaPhp className="text-indigo-300" />, description: "Server-side scripting." },
  { name: "SQL", icon: <SiMysql className="text-blue-400" />, description: "Relational data management." },
  { name: "Django", icon: <SiDjango className="text-green-400" />, description: "Python-based web framework." },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 px-6 md:px-16 text-gray-100">
      <div className="max-w-5xl mx-auto space-y-12">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-blue-400"
        >
          Digital DNA of Zim 💾
        </motion.h2>

        {/* About Me */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-xl text-center leading-relaxed"
        >
          <p>
            Hey, I’m Zim — part-time bug squasher, full-time code dreamer. I don't just write JavaScript — I compose it like jazz. I believe the best websites feel like smooth conversations: friendly, responsive, and just a little bit magical. With a diploma in Computer Science and Technology and a love for both the frontend flair and backend brains (hello Python, PHP, SQL, Django 👋), I bring vibes and logic in equal measure. Whether I’m animating buttons or crafting full-stack spells, I’m always chasing that ‘wow, this is nice’ feeling. Let’s build stuff that makes people smile.
          </p>
          <p className="mt-4 italic text-blue-400">
            "Half artist, half engineer."
          </p>
          <p className="mt-4">
            🎓 I hold a <span className="font-semibold text-white">Diploma in Computer Science and Technology</span>, and I'm driven by curiosity,
            creativity, and a relentless pursuit of better solutions.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="group bg-gray-800 rounded-xl p-4 text-center shadow hover:shadow-lg transition"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl flex justify-center">{skill.icon}</div>
              <div className="mt-2 text-lg font-semibold text-gray-100">{skill.name}</div>
              <p className="mt-2 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition duration-300">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
