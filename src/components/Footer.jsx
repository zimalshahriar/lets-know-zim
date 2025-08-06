// src/components/Footer.jsx
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center">
        {/* Left: Text */}
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Made with ❤️ by <span className="font-medium text-blue-600">Shahriar Zim</span>
        </p>

        {/* Right: Social Icons */}
        <div className="flex gap-4 text-xl text-gray-600">
          <a
            href="https://github.com/zimalshahriar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/your-link" // replace this
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:your@email.com" // replace this
            className="hover:text-blue-600 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
