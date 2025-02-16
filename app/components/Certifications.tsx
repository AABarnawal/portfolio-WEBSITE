"use client"

import { motion } from "framer-motion"
import { FaAward, FaAws, FaDatabase, FaReact } from "react-icons/fa"

const certifications = [
  {
    name: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    date: "May 2022",
    icon: FaAws,
    color: "bg-orange-500",
  },
  {
    name: "MongoDB Certified Developer",
    issuer: "MongoDB University",
    date: "September 2021",
    icon: FaDatabase,
    color: "bg-green-500",
  },
  {
    name: "React Developer Certification",
    issuer: "Meta",
    date: "January 2023",
    icon: FaReact,
    color: "bg-blue-500",
  },
]

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Certifications
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className={`${cert.color} p-6 rounded-lg shadow-lg`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <FaAward className="text-4xl text-white mr-4" />
                <div>
                  <h3 className="text-xl font-semibold text-white">{cert.name}</h3>
                  <p className="text-gray-200">{cert.issuer}</p>
                </div>
              </div>
              <p className="text-gray-200">Issued: {cert.date}</p>
              <div className="mt-4">
                <cert.icon className="text-white text-6xl opacity-20" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications

