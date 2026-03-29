import { Mail, Github, Linkedin, Phone, MapPin } from 'lucide-react'
import { FaCheck } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="contact" className="section-container bg-dark-bg" ref={ref}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Get In <span className="text-primary">Touch</span>
      </motion.h2>
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-dark-textMuted max-w-2xl mx-auto">
            Feel free to reach out for collaboration, internship opportunities, or project discussions. 
            I'm always open to discussing new projects and opportunities.
          </p>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Contact Information */}
          <motion.div className="card" variants={itemVariants}>
            <h3 className="text-2xl font-bold text-dark-text mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <motion.a
                href="mailto:laraibsheikh1806@gmail.com"
                className="flex items-center gap-4 text-dark-textMuted hover:text-primary transition-colors group"
                whileHover={{ x: 5 }}
              >
                <motion.div
                  className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Mail className="text-primary" size={20} />
                </motion.div>
                <div>
                  <p className="text-sm text-dark-textMuted">Email</p>
                  <p className="font-medium text-dark-text">laraibsheikh1806@gmail.com</p>
                </div>
              </motion.a>
              
              <motion.a
                href="tel:+9230166405150"
                className="flex items-center gap-4 text-dark-textMuted hover:text-primary transition-colors group"
                whileHover={{ x: 5 }}
              >
                <motion.div
                  className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Phone className="text-primary" size={20} />
                </motion.div>
                <div>
                  <p className="text-sm text-dark-textMuted">Phone</p>
                  <p className="font-medium text-dark-text">+92 304 1515012</p>
                </div>
              </motion.a>
              
              <div className="flex items-center gap-4 text-dark-textMuted">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-dark-textMuted">Location</p>
                  <p className="font-medium text-dark-text">Punjab, Pakistan</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-800">
              <p className="text-sm font-semibold text-dark-text mb-4">Connect with me:</p>
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
                  <Github className="text-primary" size={24} />
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
                  <Linkedin className="text-primary" size={24} />
                </motion.a>
              </div>
            </div>
          </motion.div>
          
          {/* GitHub Proof of Work */}
          <motion.div className="card" variants={itemVariants}>
            <h3 className="text-2xl font-bold text-dark-text mb-6">GitHub & Proof of Work</h3>
            
            <div className="space-y-4">
              <p className="text-dark-textMuted leading-relaxed">
                All my projects are available on GitHub with clean, well-documented code. 
                I maintain regular commits and follow best practices for version control.
              </p>
              
              <div className="bg-dark-bg p-4 rounded-lg border border-gray-800">
                <p className="text-sm font-semibold text-dark-text mb-2">What you'll find:</p>
                <ul className="space-y-2 text-sm text-dark-textMuted">
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-primary" size={14} />
                    Multiple Data Science , ML and MERN stack repositories
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-primary" size={14} />
                    Clean, readable code
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-primary" size={14} />
                    Regular commits and updates
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-primary" size={14} />
                    Well-structured projects
                  </li>
                </ul>
              </div>
              
              <motion.a
                href="https://github.com/Laraib1806-Ahmad"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} />
                Visit My GitHub Profile
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
