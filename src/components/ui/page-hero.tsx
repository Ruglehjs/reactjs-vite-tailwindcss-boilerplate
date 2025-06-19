import { motion } from 'framer-motion'
import React from 'react'

interface PageHeroProps {
  title: string
  subtitle?: string
  backgroundImage: string
  backgroundImageAlt: string
  tag: {
    text: string
    icon: string
    emoji?: string
  }
  tagColor?: 'pink' | 'yellow' | 'blue' | 'green'
}

const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  backgroundImageAlt,
  tag,
  tagColor = 'pink'
}) => {
  // Clean animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5
      }
    }
  }

  const tagColorClasses = {
    pink: 'bg-secondary-500 border-white text-white',
    yellow: 'bg-brand-yellow border-secondary-500 text-gray-900',
    blue: 'bg-blue-500 border-white text-white',
    green: 'bg-green-500 border-white text-white'
  }

  return (
    <section className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden font-montserrat">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={backgroundImage}
          alt={backgroundImageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/90 via-primary-400/85 to-primary-500/90"></div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4 md:space-y-6"
        >
          {/* Clean tag badge */}
          <motion.div
            variants={itemVariants}
            className={`inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full ${tagColorClasses[tagColor]} font-bold text-xs md:text-sm shadow-lg border-2 transform rotate-1`}
          >
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mr-1 md:mr-2"
            >
              {tag.emoji || tag.icon}
            </motion.span>
            {tag.text}
            <motion.span
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="ml-1 md:ml-2"
            >
              {tag.emoji || tag.icon}
            </motion.span>
          </motion.div>

          {/* Clean main title */}
          <motion.h1
            variants={itemVariants}
            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black leading-tight text-secondary-500 font-montserrat px-2"
          >
            {title}
          </motion.h1>

          {/* Clean subtitle */}
          {subtitle && (
            <motion.div
              variants={itemVariants}
              className="relative inline-block max-w-full"
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-4 border-2 border-white/50 shadow-lg mx-2">
                <p className="text-sm md:text-base lg:text-lg text-gray-800 font-medium leading-relaxed font-montserrat max-w-2xl">
                  {subtitle}
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default PageHero 