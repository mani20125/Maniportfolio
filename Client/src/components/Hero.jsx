import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { degrees, motion } from "framer-motion";
import ShinyText from "./ShinyText";
import SplitText from "./SplitText";
import ColorBends from "./ColorBends";
import TextType from "./TextType";
function Hero() {
    return (

        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
        >
            <div className="absolute inset-0 z-0">
                <ColorBends
                    colors={[
                        "#4c1d95",
                        "#6d28d9",
                        "#7c3aed",
                        "#9333ea",
                        "#c084fc",
                    ]}
                    speed={0.25}
                    frequency={1}
                    noise={0.08}
                    iterations={1}
                    intensity={1.3}
                    bandWidth={6}
                    mouseInfluence={1.2}
                    rotation={90}
                />
            </div>
            <div className="relative z-10 max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
                {/* Left Side */}
                <div>

                    <ShinyText
                        text="Full Stack Developer"
                        className="font-medium mb-4 text-base md:text-5xl"
                        color="#a855f7"
                        shineColor="#ffffff"
                        speed={3.5}
                    />

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 flex items-center flex-wrap">
                        <span>Hi, I'm&nbsp;</span>

                        <SplitText
                            text="Manikanta"
                            className="text-purple-500"
                            delay={75}
                            duration={1}
                            splitType="chars"
                            from={{ opacity: 0, y: 60 }}
                            to={{ opacity: 1, y: 0 }}
                            textAlign="left"
                            tag="span"
                        />
                    </h1>

                    <TextType
                        text={[
                            "I build modern full stack web applications.",
                            "I create responsive and interactive user interfaces.",
                            "I develop scalable backend APIs.",
                            "I love turning ideas into real-world products."
                        ]}
                        typingSpeed={60}
                        deletingSpeed={35}
                        pauseDuration={1800}
                        showCursor={true}
                        cursorCharacter="|"
                        className="text-white text-2xl leading-8 max-w-xl mb-8"
                    />

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