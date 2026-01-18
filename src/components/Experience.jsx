import { Briefcase, Calendar } from 'lucide-react'
import { FaChevronRight } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const experiences = [
    {
      company: 'Hello World Technologies',
      role: 'Intern - MERN Stack Developer',
      duration: '07/2025 - 09/2025',
      responsibilities: [
        'Showcased ability to create effective, user-friendly web applications using the MERN stack',
        'Managed both frontend and backend tasks to deliver a seamless and engaging user experience',
        'Designed interactive interfaces, implemented robust user authentication, and integrated dynamic features',
        'Collaborated with senior developers to debug, optimize, and enhance application performance',
      ],
    },
  ]

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
    <section id="experience" className="section-container bg-dark-bgSecondary" ref={ref}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Work <span className="text-primary">Experience</span>
      </motion.h2>
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="card mb-6 relative pl-8 border-l-2 border-primary/30"
              variants={itemVariants}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-6 -translate-x-1/2">
                <div className="w-4 h-4 bg-primary rounded-full border-4 border-dark-bgSecondary"></div>
              </div>

              <div className="flex items-start gap-4 mb-4">
                <motion.div
                  className="bg-primary/10 p-3 rounded-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Briefcase className="text-primary" size={24} />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-dark-text mb-1">{exp.role}</h3>
                  <p className="text-lg text-primary font-semibold mb-2">{exp.company}</p>
                  <div className="flex items-center gap-2 text-dark-textMuted mb-4">
                    <Calendar size={18} />
                    <span>{exp.duration}</span>
                  </div>
                </div>
              </div>
              
              <div className="ml-14">
                <h4 className="font-semibold text-dark-text mb-3">Key Responsibilities:</h4>
                <ul className="space-y-2">
                  {exp.responsibilities.map((responsibility, respIndex) => (
                    <motion.li
                      key={respIndex}
                      className="flex items-start gap-2 text-dark-textMuted"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + respIndex * 0.1 }}
                    >
                      <FaChevronRight className="text-primary mt-1 text-sm" />
                      <span>{responsibility}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
          
          {/* Education Section */}
          <motion.div
            className="card relative pl-8 border-l-2 border-primary/30"
            variants={itemVariants}
          >
            {/* Timeline dot */}
            <div className="absolute left-0 top-6 -translate-x-1/2">
              <div className="w-4 h-4 bg-primary rounded-full border-4 border-dark-bgSecondary"></div>
            </div>

            <div className="flex items-start gap-4 mb-4">
              <motion.div
                className="bg-primary/10 p-3 rounded-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Calendar className="text-primary" size={24} />
              </motion.div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-dark-text mb-1">BS Data Science</h3>
                <p className="text-lg text-primary font-semibold mb-2">Khwaja Fareed UEIT</p>
                <div className="flex items-center gap-2 text-dark-textMuted">
                  <Calendar size={18} />
                  <span>2023 - Present</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
