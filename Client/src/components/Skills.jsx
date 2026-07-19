import BorderGlow from "./BorderGlow";
import GradientText from "./GradientText";
import ShinyText from "./ShinyText";
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

                    <GradientText
                        colors={["#a855f7", "#c084fc", "#ffffff", "#a855f7"]}
                        animationSpeed={4}
                        showBorder={false}
                        className="font-semibold mb-4 text-lg"
                    >
                        SKILLS
                    </GradientText>

                    <ShinyText
                        text="Technologies I Work With"
                        className="font-bold text-4xl md:text-5xl"
                        color="#a855f7"
                        shineColor="#ffffff"
                        speed={3.5}
                    />

                </div>

                {/* Skills Grid */}

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                    {skills.map((skill, index) => (

                        <BorderGlow
                            key={index}
                            className="group rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-[0_15px_35px_rgba(168,85,247,0.25)]"
                            glowRadius={20}
                            glowIntensity={2.5}
                        >

                            <div className="bg-[#111827] rounded-3xl p-8 flex flex-col items-center justify-center h-52">

                                <div className="text-5xl text-purple-400 mb-4 transition-transform duration-300 group-hover:scale-110">
                                    {skill.icon}
                                </div>

                                <h3 className="text-lg font-semibold">
                                    {skill.name}
                                </h3>

                            </div>

                        </BorderGlow>

                    ))}

                </div>

            </div>

        </section >

    )
}

export default Skills