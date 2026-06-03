import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

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
          animate={isInView ? "visible" : "hidden"}
        >
          
          <motion.p
  variants={itemVariants}
  className="text-lg text-dark-textMuted leading-relaxed mb-6"
>
  I am currently pursuing a <strong className="text-primary">BS in Data Science</strong> at
  Khwaja Fareed University of Engineering & Information Technology (KFUEIT).
  My interests lie at the intersection of <strong className="text-primary">Data Science</strong>,
  <strong className="text-primary"> Machine Learning</strong>, and
  <strong className="text-primary"> Full-Stack Development</strong>, where I enjoy
  building practical solutions driven by both data and technology.
</motion.p>

<motion.p
  variants={itemVariants}
  className="text-lg text-dark-textMuted leading-relaxed mb-6"
>
  I have hands-on experience in <strong className="text-primary">MERN Stack development</strong>,
  building full-stack web applications using React.js, Node.js, Express.js,
  and MongoDB. My work includes frontend development, backend integration,
  database management, authentication systems, and responsive user interfaces.
</motion.p>

<motion.p
  variants={itemVariants}
  className="text-lg text-dark-textMuted leading-relaxed mb-6"
>
  Alongside web development, I have completed
  <strong className="text-primary"> 6+ Machine Learning and Deep Learning projects</strong>,
  applying data preprocessing, exploratory data analysis, predictive modeling,
  and computer vision techniques using Python, TensorFlow, Scikit-learn,
  Pandas, and NumPy.
</motion.p>

<motion.p
  variants={itemVariants}
  className="text-lg text-dark-textMuted leading-relaxed"
>
  My notable projects include an <strong className="text-primary">AI Chatbot Platform</strong>,
  <strong className="text-primary"> E-Learning Platform</strong>,
  <strong className="text-primary"> Rice Image Classification System</strong>,
  and <strong className="text-primary"> Titanic Survival Predictor</strong>,
  reflecting my passion for creating scalable applications and data-driven solutions.
</motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;