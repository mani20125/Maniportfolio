import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaPython,
    FaBootstrap,
    FaCode
} from "react-icons/fa";
import {
    SiMongodb,
    SiMysql,
    SiDjango,
} from "react-icons/si";


function Skills() {

    const skills = [
        { icon: <FaHtml5 />, name: "HTML" },
        { icon: <FaCss3Alt />, name: "CSS" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <FaReact />, name: "React" },
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <FaPython />, name: "Python" },
        { icon: <SiDjango />, name: "Django" },
        { icon: <FaBootstrap />, name: "Bootstrap" },
        { icon: <SiMysql />, name: "MySQL" },
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <FaGitAlt />, name: "Git" },
        { icon: <FaCode />, name: "VS Code" },
    ];

    return (

        <section id="skills" className="w-full py-24 px-6 bg-[#0B0F19]">

            <div className="max-w-7xl mx-auto">

                {/* Heading */}

                <div className="text-center mb-16">

                    <p className="text-purple-400 font-semibold mb-4">
                        SKILLS
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold">
                        Technologies I Work With
                    </h2>

                </div>

                {/* Skills Grid */}

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                    {skills.map((skill, index) => (

                        <div
                            key={index}
                            className="bg-[#111827] border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center hover:border-purple-500 hover:-translate-y-2 transition duration-300"
                        >

                            <div className="text-5xl text-purple-400 mb-4">
                                {skill.icon}
                            </div>

                            <h3 className="text-lg font-semibold">
                                {skill.name}
                            </h3>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    )
}

export default Skills