"use client"

import { motion } from "framer-motion"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FaMobile, FaUserShield, FaHelmetSafety, FaComments, FaCode, FaDatabase } from "react-icons/fa6"

const projects = [
  {
    title: "Personal Development Management App",
    description: "A React Native application for personal development tracking with Android widget integration using native bridge for data sharing. Implemented Async Storage for local data management.",
    icon: FaMobile,
    color: "bg-blue-600",
    tech: ["React Native", "Android Native", "Async Storage", "Native Bridge"],
    link: "#",
  },
  {
    title: "Blockchain Identity Management",
    description: "A secure identity management system using blockchain technology. Built with React.js, Node.js, and Solidity smart contracts. Features JWT authentication and MongoDB integration.",
    icon: FaUserShield,
    color: "bg-indigo-600",
    tech: ["React.js", "Node.js", "Solidity", "MongoDB", "Ether.js", "JWT"],
    link: "#",
  },
  {
    title: "Smart Helmet Detection System",
    description: "IoT-based helmet detection system with React.js frontend and Node.js backend. Uses NodeMcu ESP8266 WiFi module and IR sensor for real-time detection and alerts.",
    icon: FaHelmetSafety,
    color: "bg-green-600",
    tech: ["React.js", "Node.js", "IoT", "ESP8266", "IR Sensor"],
    link: "#",
  },
  {
    title: "Cloud-Based Group Chat",
    description: "Real-time group chat application hosted on Linux server. Features multiple chat rooms and message persistence using MongoDB.",
    icon: FaComments,
    color: "bg-purple-600",
    tech: ["Node.js", "Socket.io", "MongoDB", "HTML/CSS", "Linux"],
    link: "#",
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features responsive design, animations, and 3D elements.",
    icon: FaCode,
    color: "bg-blue-500",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion"],
    link: "#",
  },
  {
    title: "Data Duplication Software",
    description: "System to detect and manage duplicate data downloads. Interprets data and prevents redundant downloads through intelligent detection.",
    icon: FaDatabase,
    color: "bg-red-600",
    tech: ["Node.js", "Database", "File System", "Data Analysis"],
    link: "#",
  },
]

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const projectGroups = []
  for (let i = 0; i < projects.length; i += 2) {
    projectGroups.push(projects.slice(i, i + 2))
  }

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <Slider {...settings}>
          {projectGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="px-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {group.map((project, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-900 rounded-xl overflow-hidden shadow-xl border border-gray-800"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className={`${project.color} p-4`}>
                      <project.icon className="text-white text-3xl" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                      <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs font-medium bg-blue-900/30 text-blue-400 px-2.5 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.link}
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 text-sm"
                      >
                        View Project
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Projects

