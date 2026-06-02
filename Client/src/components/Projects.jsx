function Projects() {

  const projects = [

    {
      title: "YOLOv8 Object Detection",
      description:
        "Real-time object detection system built using YOLOv8 and Python capable of identifying and tracking multiple objects with high accuracy.",

      tech: ["Python", "YOLOv8", "OpenCV", "Machine Learning"],

      image: "/yolov8.png",

      github: "https://github.com/mani20125/YoloV8-object-detection.git",
    },

    {
      title: "SecureTrack",

      description:
        "Security and tracking based application focused on monitoring and managing secure tracking operations with efficient backend logic.",

      tech: ["Python", "Django", "MySQL"],

      image: "/securetrack.png",

      github: "https://github.com/mani20125/SECURETRACK.git",
    },

    {
      title: "ParkConcierge",

      description:
        "Modern premium parking management landing page designed with responsive UI and clean frontend architecture.",

      tech: ["HTML", "CSS", "Responsive Design"],

      image: "/Parkconcierge.png",

      github: "https://github.com/mani20125/Parkconcierge.git",
    },

    {
      title: "Portfolio Website",

      description:
        "Personal full stack developer portfolio built with React, Tailwind CSS, and modern responsive design principles.",

      tech: ["React", "Tailwind CSS", "JavaScript"],

      image: "/portfolio.png",

      github: "#",
    },

  ];

  return (

    <section id="projects" className="w-full py-24 px-6 bg-[#111827]">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="text-purple-400 font-semibold mb-4">
            PROJECTS
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Some Things I’ve Built
          </h2>

        </div>

        {/* Grid */}

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (

            <div
              key={index}
              className="bg-[#0B0F19] border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-2 hover:border-purple-500 transition duration-300"
            >

              {/* Image */}

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[370px] object-cover"
              />

              {/* Content */}

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-7 mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}

                <div className="flex flex-wrap gap-3 mb-6">

                  {project.tech.map((item, i) => (

                    <span
                      key={i}
                      className="px-4 py-2 rounded-full bg-purple-600/20 text-purple-300 text-sm"
                    >
                      {item}
                    </span>

                  ))}

                </div>

                {/* Buttons */}

                <div className="flex gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >

                    <button className="bg-purple-600 hover:bg-purple-700 transition px-5 py-2 rounded-full">
                      GitHub
                    </button>

                  </a>


                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  )
}

export default Projects