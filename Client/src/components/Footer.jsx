import {
  FaGithub,
  FaLinkedin,
  FaInstagram
} from "react-icons/fa";

function Footer() {

  return (

    <footer className="w-full border-t border-white/10 bg-[#111827] py-10 px-6">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left */}

        <div>

          <h2 className="text-2xl font-bold text-white">
            Inturi Manikanta Naidu
          </h2>

          <p className="text-gray-400 mt-2">
            Full Stack Developer
          </p>

        </div>

        {/* Center */}

        <div className="flex gap-6 text-gray-400">

          <a
            href="https://github.com/mani20125"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition text-2xl"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/inturi-manikanta-naidu/"
            className="hover:text-purple-400 transition text-2xl"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/__mani_5_/"
            className="hover:text-purple-400 transition text-2xl"
          >
            <FaInstagram />
          </a>

        </div>

        {/* Right */}

        <p className="text-gray-500 text-sm">
          © 2026 Mani. All rights reserved.
        </p>

      </div>

    </footer>

  )
}

export default Footer