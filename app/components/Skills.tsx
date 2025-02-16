"use client"

import { motion } from "framer-motion"
import { FaReact, FaNodeJs, FaDatabase, FaAws } from "react-icons/fa"
import { SiTypescript, SiNextdotjs, SiGraphql, SiDocker } from "react-icons/si"

const skills = [
  { name: "React", icon: FaReact, color: "text-blue-400" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "GraphQL", icon: SiGraphql, color: "text-pink-600" },
  { name: "Databases", icon: FaDatabase, color: "text-yellow-400" },
  { name: "AWS", icon: FaAws, color: "text-orange-500" },
  { name: "Docker", icon: SiDocker, color: "text-blue-300" },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills & Technologies
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <skill.icon className={`text-6xl ${skill.color} mb-4`} />
              <h3 className="text-xl font-semibold">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

