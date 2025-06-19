import { motion } from 'framer-motion'
import servicesHeroContent from 'content/Services/services-hero.json'

interface ServicesHeroProps {
  title?: string
  subtitle?: string
  description?: string
  showStats?: boolean
}

const ServicesHero: React.FC<ServicesHeroProps> = ({
  title = servicesHeroContent.title,
  subtitle = servicesHeroContent.subtitle,
  description = servicesHeroContent.description,
  showStats = true
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.8,
        type: "spring" as const,
        stiffness: 100
      }
    }
  }

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-brand-yellow via-primary-400 to-primary-500 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Creative team working on marketing strategies"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/80 via-primary-400/70 to-primary-500/80"></div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating circles */}
        <motion.div
          className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-secondary-500/20 to-secondary-600/30 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-gradient-to-tl from-white/20 to-white/10 rounded-full blur-2xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 20, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Scattered dots pattern */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-secondary-500/40 rounded-full"
              style={{
                left: `${10 + (i * 7)}%`,
                top: `${15 + (i * 5)}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 2 + (i * 0.2),
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Playful subtitle badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-6 py-3 rounded-full bg-secondary-500 text-white font-bold text-lg shadow-neon-pink border-4 border-white mb-8"
          >
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mr-2 text-2xl"
            >
              ✨
            </motion.span>
            {subtitle}
            <motion.span
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="ml-2 text-2xl"
            >
              🚀
            </motion.span>
          </motion.div>

          {/* Main Title with 3D effect */}
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-tight"
            style={{
              textShadow: `
                4px 4px 0px #FF1493,
                8px 8px 0px #FF1493,
                12px 12px 20px rgba(255, 20, 147, 0.3),
                0px 0px 40px rgba(255, 20, 147, 0.5)
              `,
              WebkitTextStroke: '3px white',
              color: 'transparent',
              WebkitTextFillColor: '#FF1493'
            }}
          >
            {title}
          </motion.h1>

          {/* Description with playful styling */}
          <motion.div
            variants={itemVariants}
            className="relative inline-block mb-12"
          >
            <div className="absolute inset-0 bg-white rounded-3xl transform rotate-1 shadow-lg"></div>
            <div className="relative bg-white rounded-3xl p-8 border-4 border-secondary-500 shadow-neon-pink">
              <p className="text-xl md:text-2xl text-gray-800 font-semibold leading-relaxed max-w-4xl">
                {description}
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons with fun animations */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <motion.a
              href={servicesHeroContent.cta.primary.link}
              className="group relative inline-flex items-center justify-center px-10 py-5 bg-secondary-500 text-white font-bold text-xl rounded-full border-4 border-white shadow-neon-pink overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                rotate: -2,
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-secondary-400 to-secondary-600"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10">
                {servicesHeroContent.cta.primary.text} 💫
              </span>
            </motion.a>
            
            <motion.a
              href={servicesHeroContent.cta.secondary.link}
              className="group inline-flex items-center justify-center px-10 py-5 bg-white text-secondary-500 font-bold text-xl rounded-full border-4 border-secondary-500 shadow-lg hover:shadow-neon-pink"
              whileHover={{ 
                scale: 1.05,
                rotate: 2,
                backgroundColor: '#FF1493',
                color: '#FFFFFF'
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {servicesHeroContent.cta.secondary.text} 👀
            </motion.a>
          </motion.div>

          {/* Stats with bouncy animation */}
          {showStats && (
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            >
              {servicesHeroContent.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  variants={floatingVariants}
                  animate="float"
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="absolute inset-0 bg-white rounded-2xl transform rotate-3 shadow-lg"></div>
                  <motion.div
                    className="relative bg-white rounded-2xl p-6 border-4 border-secondary-500 text-center shadow-neon-pink"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 0,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className="text-4xl md:text-5xl font-black text-secondary-500 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-700 font-bold text-sm uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ 
          y: [0, 15, 0],
          opacity: [1, 0.5, 1]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
  
      </motion.div>
    </section>
  )
}

export default ServicesHero 