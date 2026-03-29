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
          {/* DS & ML — Main Focus */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-dark-textMuted leading-relaxed mb-6"
          >
            I am a passionate{" "}
            <strong className="text-primary">AI/ML & Data Science Developer</strong>{" "}
            currently pursuing my{" "}
            <strong className="text-primary">BS Data Science</strong> at Khwaja
            Fareed UEIT. My primary focus is on building intelligent systems —
            from classical machine learning models to deep learning architectures.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-dark-textMuted leading-relaxed mb-6"
          >
            I have hands-on experience with{" "}
            <strong className="text-primary">supervised learning</strong>,{" "}
            <strong className="text-primary">classification models</strong>, and{" "}
            <strong className="text-primary">deep learning (CNN, VGG16)</strong>{" "}
            using TensorFlow and Keras. My data science work covers end-to-end
            pipelines — data cleaning, exploratory data analysis, feature
            engineering, model training, and evaluation using Scikit-learn,
            Pandas, NumPy, Matplotlib, and Seaborn.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-dark-textMuted leading-relaxed mb-6"
          >
            I have worked on real-world projects including{" "}
            <strong className="text-primary">student result prediction</strong>,{" "}
            <strong className="text-primary">rice image classification</strong>,{" "}
            <strong className="text-primary">rock vs mine detection</strong>, and{" "}
            <strong className="text-primary">solar power data analysis</strong> —
            applying both ML and DL techniques to solve practical problems.
            I also have experience with Big Data tools like{" "}
            <strong className="text-primary">PySpark</strong> and databases like{" "}
            <strong className="text-primary">SQL & MySQL</strong>.
          </motion.p>

          {/* MERN — Secondary */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-dark-textMuted leading-relaxed"
          >
            Alongside my Data Science work, I also have experience in{" "}
            <strong className="text-primary">MERN Stack development</strong> —
            building full-stack web applications with React.js, Node.js,
            Express.js, and MongoDB, including REST APIs and JWT authentication.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;