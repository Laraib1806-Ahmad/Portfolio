import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaPalette, FaCog, FaDatabase, FaTools, FaLaptopCode, FaBrain, FaCode } from 'react-icons/fa'
import { FaChevronRight } from 'react-icons/fa6'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const dsmlCategories = [
    {
      title: 'Machine Learning',
      icon: FaCog,
      skills: [
        'Supervised Learning',
        'Classification Models',
        'Model Evaluation',
        'Feature Engineering',
        'Scikit-learn',
      ],
    },
    {
      title: 'Deep Learning',
      icon: FaLaptopCode,
      skills: [
        'CNN (Convolutional Neural Networks)',
        'Transfer Learning (VGG16)',
        'TensorFlow / Keras',
        'Image Classification',
      ],
    },
    {
      title: 'Data Analysis',
      icon: FaDatabase,
      skills: [
        'Pandas & NumPy',
        'Data Cleaning',
        'EDA (Exploratory Data Analysis)',
        'Data Visualization (Matplotlib, Seaborn)',
      ],
    },
    {
      title: 'Big Data & Databases',
      icon: FaTools,
      skills: [
        'SQL',
        'MySQL',
        'PySpark',
        'Data Processing',
      ],
    },
  ]

  const mernCategories = [
    {
      title: 'MERN Stack',
      icon: FaPalette,
      skills: [
        'React.js',
        'Node.js',
        'Express.js',
        'MongoDB',
        'JWT Authentication',
        'REST APIs',
      ],
    },
    {
      title: 'Tools & Deployment',
      icon: FaTools,
      skills: [
        'Git & GitHub',
        'Postman',
        'Vercel',
        'Render',
        'VS Code',
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  const renderCards = (categories) =>
    categories.map((category, index) => (
      <motion.div
        key={index}
        className="card card-hover"
        variants={cardVariants}
        whileHover={{
          y: -5,
          borderColor: 'rgba(56, 189, 248, 0.5)',
          boxShadow: '0 20px 40px rgba(56, 189, 248, 0.1)',
        }}
      >
        <div className="flex items-center gap-3 mb-4">
          <category.icon className="text-primary text-3xl" />
          <h3 className="text-xl font-bold text-dark-text">{category.title}</h3>
        </div>
        <ul className="space-y-2">
          {category.skills.map((skill, skillIndex) => (
            <li key={skillIndex} className="flex items-center gap-2 text-dark-textMuted">
              <FaChevronRight className="text-primary text-sm" />
              {skill}
            </li>
          ))}
        </ul>
      </motion.div>
    ))

  return (
    <section id="skills" className="section-container bg-dark-bgSecondary" ref={ref}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        My <span className="text-primary">Skills</span>
      </motion.h2>

      {/* Data Science & ML Skills */}
      <motion.h3
        className="text-xl font-semibold text-dark-text mb-6 flex items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <FaBrain className="text-primary" size={20} />
        Data Science & ML <span className="text-primary">Skills</span>
      </motion.h3>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {renderCards(dsmlCategories)}
      </motion.div>

      {/* MERN Stack Skills */}
      <motion.h3
        className="text-xl font-semibold text-dark-text mb-6 flex items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <FaCode className="text-primary" size={20} />
        MERN Stack <span className="text-primary">Skills</span>
      </motion.h3>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {renderCards(mernCategories)}
      </motion.div>
    </section>
  )
}

export default Skills