"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="relative">
          <motion.div 
            className="relative lg:absolute lg:-top-16 lg:left-8 z-20 mx-auto lg:mx-0 max-w-sm lg:max-w-none mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-full h-[400px] lg:w-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/final.jpg"
                alt="Ankit Kumar"
                width={384}
                height={500}
                className="object-cover object-center w-full h-full"
                priority
              />
              <Image
                src={`/final.jpg`}
                alt="Ankit Kumar"
                width={384}
                height={500}
                className="object-cover object-center w-full h-full"
                priority
              />
               <Image
                src={`./final.jpg`}
                alt="Ankit Kumar"
                width={384}
                height={500}
                className="object-cover object-center w-full h-full"
                priority
              />
               <Image
                src="./final.jpg"
                alt="Ankit Kumar"
                width={384}
                height={500}
                className="object-cover object-center w-full h-full"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            className="bg-gray-800 rounded-2xl p-6 sm:p-8 lg:p-12 lg:pl-[450px] shadow-xl relative z-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="max-w-2xl">
              <h3 className="text-2xl lg:text-3xl font-semibold mb-3 lg:mb-4 text-blue-400">
                Ankit Kumar
              </h3>
              <h4 className="text-lg lg:text-xl mb-4 lg:mb-6 text-gray-300">
                MCA Student at Amity University, Ranchi
              </h4>
              <p className="text-base lg:text-lg mb-6 lg:mb-8 text-gray-200 leading-relaxed">
                Smart India Hackathon 2024 Grand Finalist, representing Team HaltX for problem statement SH1659 DDAS. 
                Published researcher in blockchain technology with expertise in identity management systems.
              </p>
              <p className="text-base lg:text-lg mb-6 lg:mb-8 text-gray-200 leading-relaxed">
                Currently working as a Junior Developer at DreamWorks Infotech, focusing on React.js development and API integration.
                Previously interned as an Android Developer at 366pi, where I worked with Kotlin and Material 3 Design.
              </p>
              <div className="flex flex-wrap gap-3 lg:gap-4">
                {[
                  "React.js",
                  "React Native",
                  "Node.js",
                  "Blockchain",
                  "Kotlin",
                  "Database"
                ].map((skill) => (
                  <span 
                    key={skill}
                    className="bg-blue-600/20 text-blue-400 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full text-sm font-medium border border-blue-500/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
