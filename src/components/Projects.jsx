import { ExternalLink, Github, Video } from 'lucide-react'
import { FaLightbulb } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const projects = [
  {
    title: 'E-Learning Platform',
    description:
      'Full-stack MERN application with user authentication (sign up/login). Each course contains multiple topics with files, videos, and tests. Integrated Stripe payments for test subscriptions. Built Admin Dashboard to manage users, courses, topics, and test results. Implemented password encryption for secure access.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Stripe', 'JWT'],
    githubUrl: 'https://github.com/Laraib1806-Ahmad/IELTS-eLearning-Website',
    demoUrl: '#',
    hasVideo: true,
    videoUrl:
      'https://drive.google.com/file/d/1rlRk8w4IGXIo3KPrk9MUnifdULwpmLYo/view?usp=sharing',
    highlight: true,
  },
  {
    title: 'Todo List App',
    description:
      'Developed a task management app with full CRUD functionality (Add, Update, Delete, Search). Each task includes time and date tracking. Designed with a responsive UI for better usability.',
    techStack: ['React.js', 'JavaScript', 'CSS3', 'Local Storage'],
    githubUrl: 'https://github.com/Laraib1806-Ahmad/ToDo-List-',
    demoUrl: '#',
    hasVideo: true,
    videoUrl:
      'https://drive.google.com/file/d/18JWdJnxbibEbv43MCC3EX1tw0Rr7xkbG/view?usp=sharing',
    highlight: true,
  },
  {
    title: 'Weather Forecasting App',
    description:
      'Integrated Weather API to fetch and display live weather data. Provides forecasts based on city name input. Simple and user-friendly interface for quick weather updates.',
    techStack: ['JavaScript', 'HTML5', 'CSS3', 'Weather API'],
    githubUrl: 'https://github.com/Laraib1806-Ahmad/weather-app',
    demoUrl: '#',
    hasVideo: true,
    videoUrl:
      'https://drive.google.com/file/d/1EV_O9HdBHVp-1-gw3pO3Vpg3tZXBPgnq/view?usp=sharing',
    highlight: true,
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="projects" className="section-container bg-dark-bg" ref={ref}>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        My <span className="text-primary">Projects</span>
      </motion.h2>
      
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`card card-hover relative overflow-hidden ${project.highlight ? 'ring-2 ring-primary' : ''}`}
            variants={cardVariants}
            whileHover={{ 
              y: -10,
              scale: 1.02,
              borderColor: 'rgba(56, 189, 248, 0.5)',
            }}
          >
            {project.highlight && (
              <motion.div
                className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 + index * 0.2 }}
              >
                Featured Project
              </motion.div>
            )}
            
            <h3 className="text-2xl font-bold text-dark-text mb-3">{project.title}</h3>
            
            <p className="text-dark-textMuted mb-4 leading-relaxed">{project.description}</p>
            
            <div className="mb-4">
              <p className="text-sm font-semibold text-dark-text mb-2">Tech Stack:</p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="bg-dark-bg text-primary text-xs px-3 py-1 rounded-full border border-primary/30"
                    whileHover={{ scale: 1.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 mt-6">
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-dark-textMuted hover:text-primary transition-colors font-medium"
                whileHover={{ x: 5 }}
              >
                <Github size={18} />
                Code
              </motion.a>
              {project.demoUrl !== '#' && (
                <motion.a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-dark-textMuted hover:text-primary transition-colors font-medium"
                  whileHover={{ x: 5 }}
                >
                  <ExternalLink size={18} />
                  Live Demo
                </motion.a>
              )}
            
                <motion.a
  href={project.videoUrl || '#'}
  target="_blank"
  rel="noopener noreferrer"
  className={`flex items-center gap-2 font-medium transition-colors
    ${
      project.videoUrl
        ? 'text-primary hover:text-primary/80'
        : 'text-dark-textMuted cursor-not-allowed opacity-50'
    }`}
  whileHover={project.videoUrl ? { x: 5 } : {}}
  onClick={(e) => {
    if (!project.videoUrl) e.preventDefault()
  }}
>
  <Video size={18} />
  Watch Demo
</motion.a>

              
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <p className="text-dark-textMuted mb-4 flex items-center justify-center gap-2">
          <FaLightbulb className="text-primary" size={20} />
          <strong className="text-primary">Tip:</strong> Screen-recorded demo videos are available for featured projects.
        </p>
        <motion.a
          href="https://github.com/Laraib1806-Ahmad"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Github size={20} />
          View All on GitHub
        </motion.a>
      </motion.div>
    </section>
  )
}

export default Projects
