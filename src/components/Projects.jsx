import { ExternalLink, Github, Video } from 'lucide-react'
import { FaLightbulb, FaBrain, FaCode } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const mernProjects = [
    {
      title: 'AI Chatbot System',
      description:
        'Built full-stack AI chatbot using MERN stack with multi-AI integrations. Implemented context-aware conversations, persistent chat history, and real-time responses with search functionality.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'OpenAI API'],
      githubUrl: '#',
      demoUrl: '#',
      hasVideo: true,
      videoUrl: '#',
    },
    {
      title: 'IELTS Online Test Platform',
      description:
        'Developed full-stack e-learning platform with authentication, course management, and online test system. Integrated admin dashboard and secure user access with JWT.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
      githubUrl: '#',
      demoUrl: '#',
      hasVideo: true,
      videoUrl: '#',
    },
    {
      title: 'Weather Forecasting App',
      description:
        'Built weather application using external API to fetch real-time weather data based on user input with clean and responsive UI.',
      techStack: ['JavaScript', 'HTML', 'CSS', 'Weather API'],
      githubUrl: '#',
      demoUrl: '#',
      hasVideo: true,
      videoUrl: '#',
    },
  ]

  const mlProjects = [
    {
      title: 'Student Result Predictor',
      description:
        'Built machine learning model to predict student performance using academic data. Applied preprocessing, feature engineering, and classification algorithms.',
      techStack: ['Python', 'Pandas', 'Scikit-learn'],
      githubUrl: '#',
      demoUrl: '#',
      hasVideo: false,
      videoUrl: '',
    },
    {
      title: 'Rice Image Classification',
      description:
        'Developed deep learning model for multi-class rice classification using CNN and VGG16 feature extraction. Compared ML and DL performance.',
      techStack: ['Python', 'TensorFlow', 'CNN', 'VGG16'],
      githubUrl: '#',
      demoUrl: '#',
      hasVideo: false,
      videoUrl: '',
    },
    {
      title: 'Titanic Survival Prediction',
      description:
        'Performed data preprocessing and built classification models to predict survival outcomes. Applied feature engineering and model evaluation.',
      techStack: ['Python', 'Pandas', 'Scikit-learn'],
      githubUrl: '#',
      demoUrl: '#',
      hasVideo: false,
      videoUrl: '',
    },
    {
      title: 'Rock vs Mine Detection',
      description:
        'Built classification model using sonar dataset to identify objects. Applied preprocessing, encoding, and multiple model comparisons.',
      techStack: ['Python', 'Scikit-learn'],
      githubUrl: '#',
      demoUrl: '#',
      hasVideo: false,
      videoUrl: '',
    },
    {
      title: 'Solar Power Data Analysis',
      description:
        'Analyzed solar energy datasets to identify production trends and patterns. Used visualization techniques for insights.',
      techStack: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
      githubUrl: '#',
      demoUrl: '#',
      hasVideo: false,
      videoUrl: '',
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

  const renderCard = (project, index) => (
    <motion.div
      key={index}
      className="card card-hover relative overflow-hidden"
      variants={cardVariants}
      whileHover={{
        y: -10,
        scale: 1.02,
        borderColor: 'rgba(56, 189, 248, 0.5)',
      }}
    >
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
  )

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

      {/* Data Science & ML Projects */}
      <motion.h3
        className="text-xl font-semibold text-dark-text mb-6 flex items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <FaBrain className="text-primary" size={20} />
        Data Science & ML <span className="text-primary">Projects</span>
      </motion.h3>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {mlProjects.map((project, index) => renderCard(project, index))}
      </motion.div>

      {/* MERN Stack Projects */}
      <motion.h3
        className="text-xl font-semibold text-dark-text mb-6 flex items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <FaCode className="text-primary" size={20} />
        MERN Stack <span className="text-primary">Projects</span>
      </motion.h3>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {mernProjects.map((project, index) => renderCard(project, index))}
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