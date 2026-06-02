function Navbar() {
    return (
        <nav className="w-full border-b border-white/10 bg-[#0B0F19]">

            <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

                {/* Logo */}
                <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-700 bg-clip-text text-transparent font-['Space_Grotesk']">

                    Inturi Manikanta Naidu
                </h1>

                {/* Nav Links */}
                <div className="hidden md:flex items-center gap-8 text-gray-300">

                    <a href="#about" className="hover:text-purple-400 transition">
                        About
                    </a>

                    <a href="#projects" className="hover:text-purple-400 transition">
                        Projects
                    </a>

                    <a href="#skills" className="hover:text-purple-400 transition">
                        Skills
                    </a>

                    <a href="#contact" className="hover:text-purple-400 transition">
                        Contact
                    </a>

                </div>

                {/* Resume Button */}
                <button className="bg-purple-600 hover:bg-purple-700 transition px-5 py-2 rounded-full text-white font-medium">
                    Resume
                </button>

            </div>

        </nav>
    )
}

export default Navbar