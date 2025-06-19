import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Crown, Rocket, Star } from 'lucide-react'
import heroContent from '../../../content/Home/hero.json'
import type { HeroContent } from 'types/hero'

const content = heroContent as HeroContent

export function HeroSection() {
  // Optimized animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
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
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  }

  const floatAnimation = {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  }

  return (
    <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-brand-yellow via-primary-400 to-primary-500 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={content.images.background}
          alt={content.images.backgroundAlt}
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/85 via-primary-400/75 to-primary-500/85"></div>
      </div>

      {/* Modern Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-secondary-500/20 rounded-full blur-xl"
          animate={floatAnimation}
        />
        <motion.div
          className="absolute top-1/4 right-20 w-24 h-24 bg-white/15 rounded-full blur-lg"
          animate={{
            ...floatAnimation,
            transition: { ...floatAnimation.transition, delay: 1 }
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-40 h-40 bg-secondary-500/10 rounded-full blur-2xl"
          animate={{
            ...floatAnimation,
            transition: { ...floatAnimation.transition, delay: 2 }
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Content */}
            <div className="text-left lg:text-left">
              {/* Announcement Badge */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center px-4 py-2 rounded-full bg-secondary-500 text-white font-semibold text-sm shadow-lg border-2 border-white mb-6 transform rotate-1"
              >
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mr-2"
                >
                  ✨
                </motion.span>
                {content.announcement.text}
                <motion.span
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="ml-2"
                >
                  🚀
                </motion.span>
              </motion.div>

              {/* Main Title - Smaller and More Refined */}
              <motion.h1
                variants={itemVariants}
                className="text-3xl md:text-3xl lg:text-5xl xl:text-6xl font-black mb-6 leading-tight font-montserrat"
                style={{
            
                  color: 'transparent',
                  WebkitTextFillColor: '#FF1493'
                }}
              >
                {content.title}
              </motion.h1>

              {/* Description */}
              <motion.div
                variants={itemVariants}
                className="mb-8"
              >
                <p className="text-lg md:text-xl text-gray-800 font-semibold leading-relaxed max-w-2xl bg-white/90 backdrop-blur-sm rounded-2xl p-6 border-2 border-white shadow-lg">
                  {content.description}
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 mb-8"
              >
                <motion.a
                  href={content.cta.primary.link}
                  className="group inline-flex items-center justify-center px-8 py-4 bg-secondary-500 text-white font-bold text-lg rounded-full border-3 border-white shadow-lg transform -rotate-1"
                  whileHover={{ 
                    scale: 1.05,
                    rotate: 1,
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {content.cta.primary.text} 💫
                </motion.a>
                
                <motion.a
                  href={content.cta.secondary.link}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-secondary-500 font-bold text-lg rounded-full border-3 border-secondary-500 shadow-lg hover:shadow-xl transition-shadow duration-300 transform rotate-1"
                  whileHover={{ 
                    scale: 1.05,
                    rotate: -1,
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {content.cta.secondary.text}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.a>
              </motion.div>
            </div>

            {/* Right Column - Clients Showcase */}
            <motion.div
              className="lg:text-center"
            >
              <div className=" backdrop-blur-sm rounded-3xl p-8 border-white transform rotate-1 xs:relative lg:absolute lg:bottom-[-50px]">
                  <img src={content.coverImage} alt="woman" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut" as const
        }}
      >
        <div className="w-5 h-8 border-2 border-white rounded-full flex justify-center opacity-80">
          <div className="w-0.5 h-2 bg-white rounded-full mt-1.5"></div>
        </div>
      </motion.div>
    </section>
  )
}

