import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="about" className="section-container bg-dark-bg" ref={ref}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        About <span className="text-primary">Me</span>
      </motion.h2>
      
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="card"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.p
            variants={itemVariants}
            className="text-lg text-dark-textMuted leading-relaxed mb-6"
          >
            I am a passionate <strong className="text-primary">MERN Stack Developer</strong> with hands-on 
            experience in building full-stack web applications. Currently pursuing my <strong className="text-primary">BS Data Science</strong> 
            at Khwaja Fareed UEIT, I have worked on authentication systems, dashboards, REST APIs, and CRUD-based platforms.
          </motion.p>
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-dark-textMuted leading-relaxed mb-6"
          >
            My expertise includes creating dynamic and responsive web applications using React.js, Node.js, 
            Express.js, and MongoDB. I have experience integrating third-party APIs, writing clean and efficient 
            code, and collaborating on full-stack projects.
          </motion.p>
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-dark-textMuted leading-relaxed"
          >
            With additional knowledge in <strong className="text-primary">C++</strong>, <strong className="text-primary">Java (OOPS)</strong>, and <strong className="text-primary">Python (Data Analysis)</strong>, 
            I bring both development and problem-solving skills. I am passionate about learning new technologies 
            to deliver effective solutions and my goal is to grow as a professional developer and contribute to real-world projects.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default About
