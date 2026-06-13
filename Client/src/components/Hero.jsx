import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
function Hero() {
    return (

        <section id="hero" className="min-h-screen flex items-center justify-center px-6">

            <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">

                {/* Left Side */}
                <div>

                    <p className="text-purple-400 font-medium mb-4">
                        Full Stack Developer
                    </p>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                        Hi, I'm <span className="text-purple-500">Manikanta</span>
                    </h1>

                    <p className="text-gray-400 text-lg leading-8 max-w-xl mb-8">
                        I build modern full stack web applications
                        with clean UI and scalable backend architecture.
                    </p>

                    <div className="flex gap-4">

                        <a href="#projects">

                            <button className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-full">
                                View Projects
                            </button>

                        </a>

                        <a href="#contact">

                            <button className="border border-white/20 hover:border-purple-500 transition px-6 py-3 rounded-full">
                                Contact Me
                            </button>

                        </a>

                    </div>
                    <div className="flex items-center gap-5 mt-10 text-2xl text-gray-400">

                        <a href="https://github.com/mani20125">
                            <FaGithub className="hover:text-purple-500 transition" />
                        </a>

                        <a href="https://www.linkedin.com/in/inturi-manikanta-naidu/">
                            <FaLinkedin className="hover:text-purple-500 transition" />
                        </a>

                        <a href="https://www.instagram.com/__mani_5_/">
                            <FaInstagram className="hover:text-purple-500 transition" />
                        </a>

                    </div>

                </div>

                {/* Right Side */}
                <div className="flex justify-center relative">

                    <div className="absolute w-[300px] h-[500px] bg-purple-600/30 blur-3xl rounded-full"></div>

                    <img
                        src="/mani2.png"
                        alt="Mani"
                        className="w-[280px] md:w-[380px] h-[400px] md:h-[500px] object-cover rounded-3xl border border-white/10 shadow-3xl relative z-10"
                    />

                </div>

            </div>

        </section>
    )
}

export default Hero