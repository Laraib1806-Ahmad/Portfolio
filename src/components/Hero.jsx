import { Github, Linkedin, Download, ArrowRight } from 'lucide-react'
import { HiOutlineHand } from 'react-icons/hi'
import { motion } from 'framer-motion'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-bgSecondary via-dark-bg to-dark-bgSecondary pt-20 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="section-container text-center relative z-10">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-primary mb-4 font-medium flex items-center justify-center gap-2"
          >
            <HiOutlineHand className="text-primary" size={24} />
            Hi, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-dark-text mb-4"
          >
            <span className="text-primary">Laraib</span> Ahmad
          </motion.h1>

          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl lg:text-4xl text-primary mb-6 font-semibold"
          >
            MERN Stack Developer
          </motion.h2>

          {/* Summary */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-dark-textMuted mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            I build full-stack web applications using MongoDB, Express, React, and Node.js, 
            with a focus on clean UI and scalable backend systems.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              onClick={() => scrollToSection('projects')}
              className="btn-primary flex items-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Projects
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </motion.button>
           <motion.a
  href="https://drive.google.com/file/d/1tpv0Vx5jkmpdgl6-YXDlseaWii1LoCaX/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="btn-secondary flex items-center gap-2"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <Download size={20} />
  View Resume
</motion.a>

          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6"
          >
            <motion.a
              href="https://github.com/Laraib1806-Ahmad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-textMuted hover:text-primary transition-colors p-3 rounded-full hover:bg-dark-bgSecondary border border-gray-800 hover:border-primary/50"
              aria-label="GitHub"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={28} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/laraib-ahmad-712238360/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-textMuted hover:text-primary transition-colors p-3 rounded-full hover:bg-dark-bgSecondary border border-gray-800 hover:border-primary/50"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={28} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
