import { Github, Linkedin, Heart } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-dark-bgSecondary text-dark-textMuted py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-dark-text mb-4">
              <span className="text-primary">Laraib</span> Ahmad
            </h3>
            <p className="text-dark-textMuted leading-relaxed">
             A passionate Data Science student with a strong drive for turning data into meaningful insights.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-dark-text mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('home')
                    element?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="text-dark-textMuted hover:text-primary transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('projects')
                    element?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="text-dark-textMuted hover:text-primary transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('contact')
                    element?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="text-dark-textMuted hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold text-dark-text mb-4">Connect</h3>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/Laraib1806-Ahmad"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dark-bg hover:bg-dark-bgSecondary p-3 rounded-lg transition-colors border border-gray-800 hover:border-primary/50"
                aria-label="GitHub"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="text-primary" size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/laraib-ahmad-712238360/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-dark-bg hover:bg-dark-bgSecondary p-3 rounded-lg transition-colors border border-gray-800 hover:border-primary/50"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="text-primary" size={20} />
              </motion.a>
            </div>
          </div>
        </motion.div>
        
        {/* Copyright */}
        <motion.div
          className="border-t border-gray-800 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="text-dark-textMuted mb-2">
            © 2026 <span className="text-dark-text font-semibold">Laraib Ahmad</span>. All rights reserved.
          </p>
         
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
