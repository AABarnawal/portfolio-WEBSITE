"use client"

import { motion } from "framer-motion"
import { BsBriefcase } from "react-icons/bs"

const experiences = [
  {
    title: "Junior Developer",
    company: "DreamWorks Infotech",
    period: "June 2024 - Present",
    description: "Working as a frontend developer focusing on React.js development and API integration.",
    achievements: [
      "Collaborated with a team of developers to build and maintain frontend components using React.js",
      "Engaged in testing and debugging APIs to ensure seamless integration and functionality",
      "Contributed to the development of user-friendly interfaces and optimized performance",
    ],
  },
  {
    title: "Android Developer Intern",
    company: "366pi, Ranchi",
    period: "July 2023 - September 2023",
    description: "Worked on the KidCare app development using Kotlin and Material 3 Design.",
    achievements: [
      "Developed Material 3 Design using Kotlin, contributing to the KidCare app's design and functionality",
      "Connected database (RoomDB) & API (Retrofit), improving data access",
      "Reduced loading time by 25% through optimized data handling",
    ],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Work Experience
        </motion.h2>
        <div className="relative max-w-[1400px] mx-auto">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-8 md:left-1/2 md:-ml-0.5 w-0.5 bg-blue-500" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`mb-12 flex flex-col md:flex-row relative ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 -ml-2 mt-2 md:mt-0 w-4 h-4 bg-blue-500 rounded-full z-10" />

              {/* Content */}
              <div className={`ml-20 md:ml-0 md:w-[calc(50%-2rem)] lg:w-[calc(50%-4rem)] ${
                index % 2 === 0 ? 'md:pr-8 lg:pr-20' : 'md:pl-8 lg:pl-20'
              }`}>
                <div className="bg-black p-6 lg:p-10 rounded-lg shadow-lg border border-gray-800 h-full">
                  <div className="flex items-start mb-4 lg:mb-8">
                    <BsBriefcase className="text-blue-400 text-2xl lg:text-3xl mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-400">{exp.title}</h3>
                      <p className="text-lg md:text-xl lg:text-2xl text-gray-300">{exp.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-4 lg:mb-6 lg:text-lg">{exp.period}</p>
                  <p className="text-gray-300 mb-4 lg:mb-6 lg:text-lg leading-relaxed">{exp.description}</p>
                  <h4 className="text-lg lg:text-xl font-semibold text-blue-300 mb-2 lg:mb-4">Key Responsibilities:</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 lg:space-y-4">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm md:text-base lg:text-lg leading-relaxed">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Empty div for layout on desktop */}
              <div className="hidden md:block md:w-[calc(50%-2rem)] lg:w-[calc(50%-4rem)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

