"use client";

import { motion } from 'framer-motion';

// Variants for the main container to orchestrate animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

// Variants for individual floating elements
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const HeroHologramAnimation = () => {
  return (
    <div className="relative h-80 w-full flex items-center justify-center">
      {/* Background Glow */}
      <div className="absolute w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative w-full h-full flex items-center justify-center"
      >
        {/* Professional Silhouette */}
        <motion.div variants={itemVariants} className="absolute left-10 bottom-0">
          <svg width="120" height="180" viewBox="0 0 120 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M60 60C82.0914 60 100 46.5685 100 27.5C100 8.43146 82.0914 0 60 0C37.9086 0 20 8.43146 20 27.5C20 46.5685 37.9086 60 60 60Z" fill="currentColor" className="text-light-foreground/20 dark:text-dark-foreground/20"/>
            <path d="M120 180H0V130C0 91.3401 31.3401 60 70 60H50C88.6599 60 120 91.3401 120 130V180Z" fill="currentColor" className="text-light-foreground/20 dark:text-dark-foreground/20"/>
          </svg>
        </motion.div>

        {/* Hologram Base */}
        <motion.div
          variants={itemVariants}
          className="absolute w-48 h-1 bottom-10 bg-primary/50 rounded-full"
          style={{ filter: 'blur(4px)' }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        ></motion.div>

        {/* Floating UI Elements */}
        <div className="absolute right-0 top-0 w-64 h-64">
          {/* Chart Element */}
          <motion.div
            variants={itemVariants}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-8 right-16 w-32 p-2 rounded-lg bg-light-card/50 dark:bg-dark-card/50 backdrop-blur-sm border border-primary/30 text-left"
          >
            <p className="text-xs text-primary mb-1">Performance</p>
            <svg width="100%" height="40" viewBox="0 0 100 40" fill="none">
              <motion.path
                d="M 0 30 Q 20 5, 40 20 T 80 15 L 100 10"
                stroke="currentColor"
                className="text-accent"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </svg>
          </motion.div>

          {/* Leads Element */}
          <motion.div
            variants={itemVariants}
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-12 right-8 w-40 p-2 rounded-lg bg-light-card/50 dark:bg-dark-card/50 backdrop-blur-sm border border-primary/30"
          >
            <p className="text-xs text-primary">Novos Leads (Hoje)</p>
            <p className="text-xl font-bold text-light-foreground dark:text-dark-foreground">73</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroHologramAnimation;
