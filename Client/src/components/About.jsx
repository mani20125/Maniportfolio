import GradientText from "./GradientText";
import ShinyText from "./ShinyText";
function About() {
    return (

        <section id="about" className="w-full py-24 px-6 bg-[#111827]">

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                {/* Left Side */}

                <div className="relative flex justify-center order-2 md:order-1 mt-10 md:mt-0">
                    <div className="absolute inset-4 bg-purple-600/20 blur-xl rounded-3xl"></div>
                    <img
                        src="/manigpt.webp"
                        alt="Mani"
                        className="w-56 sm:w-64 md:w-[380px] h-72 sm:h-80 md:h-[500px] object-cover rounded-3xl border border-white/10 shadow-3xl relative z-10"
                    />
                </div>

                {/* Right Side */}

                <div className="order-1 md:order-2">

                    <GradientText
                        colors={["#a855f7", "#c084fc", "#ffffff", "#a855f7"]}
                        animationSpeed={4}
                        showBorder={false}
                        className="font-semibold mb-4 text-lg"
                    >
                        ABOUT ME
                    </GradientText>

                    <div className="mb-6">
                        <ShinyText
                            text="Passionate About Building"
                            speed={5}
                            className="block text-4xl md:text-5xl font-bold text-purple-400"
                        />

                        <ShinyText
                            text="Modern Web Experiences"
                            speed={5}
                            className="block text-4xl md:text-5xl font-bold text-purple-400"
                        />
                    </div>


                    <p className="text-gray-400 leading-8 text-lg mb-6">
                        I'm a B.Tech student passionate about full stack development,
                        responsive UI design, and backend engineering. I enjoy creating
                        modern and scalable web applications with clean user experiences.
                    </p>

                    <p className="text-gray-400 leading-8 text-lg">
                        Currently focusing on React, Node.js, MongoDB, Pyhton programming and modern frontend
                        technologies while building real-world projects.
                    </p>

                </div>

            </div>

        </section>

    )
}

export default About