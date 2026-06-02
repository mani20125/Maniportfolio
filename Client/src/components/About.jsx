function About() {
    return (

        <section id="about" className="w-full py-24 px-6 bg-[#111827]">

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                {/* Left Side */}

                <div className="flex justify-center">
                    <div className="absolute w-[300px] h-[500px] bg-purple-600/30 blur-3xl rounded-full"></div>
                    <img
                        src="/manigpt.png"
                        alt="Mani"
                        className="w-[280px] md:w-[380px] h-[400px] md:h-[500px] object-cover rounded-3xl border border-white/10 shadow-3xl relative z-10"
                    />
                </div>

                {/* Right Side */}

                <div>

                    <p className="text-purple-400 font-semibold mb-4">
                        ABOUT ME
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Passionate About Building
                        Modern Web Experiences
                    </h2>

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