import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-400">&copy; 2025 Ankit Kumar. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/AABarnawal" className="text-gray-400 hover:text-blue-400 transition-colors">
              <FaGithub className="text-2xl" />
            </a>
            <a href="https://www.linkedin.com/in/ankit-kumar-5a56071a7/" className="text-gray-400 hover:text-blue-400 transition-colors">
              <FaLinkedin className="text-2xl" />
            </a>
            <a href="https://www.instagram.com/ankitbarnawal_/#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <FaInstagram className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

