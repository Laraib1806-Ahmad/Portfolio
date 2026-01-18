import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaPalette, FaCog, FaDatabase, FaTools, FaLaptopCode } from 'react-icons/fa'
import { FaChevronRight } from 'react-icons/fa6'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const skillCategories = [
    {
      title: 'Frontend',
      icon: FaPalette,
      skills: [
        'React.js',
        'JavaScript (ES6+)',
        'HTML5 & CSS3',
        'Tailwind CSS',
        'Bootstrap',
        'Axios / Fetch API',
      ],
    },
    {
      title: 'Backend',
      icon: FaCog,
      skills: [
        'Node.js',
        'Express.js',
        'RESTful APIs',
        'JWT Authentication',
        'Middleware',
        'Error Handling',
      ],
    },
    {
      title: 'Database',
      icon: FaDatabase,
      skills: [
        'MongoDB',
        'Mongoose',
        'Database Design',
        'Data Modeling',
      ],
    },
    {
      title: 'Tools & Platforms',
      icon: FaTools,
      skills: [
        'Git & GitHub',
        'Postman',
        'VS Code',
        'Vercel',
        'Render',
      ],
    },
    {
      title: 'Other Languages',
      icon: FaLaptopCode,
      skills: [
        'C++',
        'Java (OOPS)',
        'Python (Data Analysis)',
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
      
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {skillCategories.map((category, index) => (
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
        ))}
      </motion.div>
    </section>
  )
}

export default Skills
