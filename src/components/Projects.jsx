// src/components/Projects.jsx
import { motion } from "framer-motion";

const projects = [
  {
    title: "SIPI-CST-Portal",
    description:
      "A web portal for the CST department of SIPI to manage user accounts, class schedules, announcements, and subjects. Built for administrative efficiency and academic management.",
    github: "https://github.com/zimalshahriar/SIPI-CST-Portal",
    skills: ["HTML", "CSS", "Bootstrap 5.3", "JavaScript", "PHP", "MySQL"],
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive, dynamic, and beautiful personal portfolio built with React, Tailwind, and Framer Motion. Highlights projects, skills, and contact links.",
    github: "https://github.com/zimalshahriar/lets-know-zim",
    skills: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Remember Me Project",
    description:
      "A reminder web application built with Django. Allows users to set and manage reminders. Clean UI with Bootstrap.",
    github: "https://github.com/zimalshahriar/remember-me-project",
    skills: ["Django", "Python", "HTML", "CSS", "Bootstrap"],
  },
  {
    title: "TigerCommerce",
    description:
      "A multivendor eCommerce platform built using PHP and MySQL. Designed for the Polytechnic 2024 batch. Supports product listings and vendor management.",
    github: "https://github.com/asamamun/tigercommerce",
    skills: ["PHP", "MySQL", "CSS", "Hack", "JavaScript"],
  },
  {
    title: "Lemon Quiz",
    description:
      "A lightweight quiz app with random multiple-choice questions. Built using PHP and Bootstrap for a smooth UX.",
    github: "https://github.com/zimalshahriar/lemon-quiz",
    skills: ["PHP", "MySQL", "Bootstrap"],
  },
];


const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 sm:px-10 md:px-20"
      style={{
        background: "linear-gradient(70deg, #e0f2fe 0 50%, #f4f0fd 50% 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">My Projects 🚀</h2>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-left hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-blue-600">
                {project.title}
              </h3>
              <p className="text-gray-700 mt-2 mb-4">{project.description}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-sm"
              >
                View on GitHub
              </a>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
