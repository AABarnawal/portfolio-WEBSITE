"use client"

import { motion } from "framer-motion"
import { 
  FaReact, 
  FaNodeJs, 
  FaJava, 
  FaGitAlt, 
  FaLinux, 
  FaNpm, 
  FaHtml5, 
  FaCss3Alt, 
  FaAndroid,
  FaJs,
  FaBootstrap,
  FaDatabase,
  FaTerminal
} from "react-icons/fa"
import { 
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiSolidity,
  SiKotlin,
  SiMongodb,
  SiMysql,
  SiReact,
  SiPostman,
  SiAmazon
} from "react-icons/si"

const skills = [
  // Frontend
  { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-500" },
  { name: "React.js", icon: FaReact, color: "text-blue-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  
  // Backend
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  
  // Database
  { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-300" },
  
  // Programming Languages
  { name: "Java", icon: FaJava, color: "text-red-500" },
  { name: "Solidity", icon: SiSolidity, color: "text-gray-400" },
  
  // Mobile Development
  { name: "React Native", icon: SiReact, color: "text-blue-400" },
  { name: "Kotlin", icon: SiKotlin, color: "text-purple-400" },
  { name: "Android", icon: FaAndroid, color: "text-green-500" },
  
  // Tools & Others
  { name: "NPM", icon: FaNpm, color: "text-red-500" },
  { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
  { name: "API", icon: SiPostman, color: "text-orange-500" },
  { name: "Linux", icon: FaLinux, color: "text-yellow-200" },
  // { name: "VS Code", icon: SiVscode, color: "text-blue-500" },
  { name: "Terminal", icon: FaTerminal, color: "text-yellow-300" },
  { name: "Cloud", icon: SiAmazon, color: "text-orange-400" },
]

const SkillsMarquee = () => {
  return (
    <div className="bg-gray-800 py-8 overflow-hidden">
      <motion.div
        className="flex space-x-16"
        animate={{ x: [0, -2000] }}
        transition={{ 
          repeat: Number.POSITIVE_INFINITY, 
          duration: 30,
          ease: "linear" 
        }}
      >
        {[...skills, ...skills].map((skill, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center group cursor-pointer"
          >
            <skill.icon 
              className={`text-4xl ${skill.color} mb-2 transition-transform group-hover:scale-125`} 
            />
            <span className="text-sm text-gray-300 opacity-80 group-hover:opacity-100">
              {skill.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default SkillsMarquee

