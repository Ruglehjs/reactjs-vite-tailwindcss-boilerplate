import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Shield, Users } from 'lucide-react'
import ctaContent from '../../../content/About/cta.json'
import type { AboutCTA } from '../../../types/about'

const typedContent = ctaContent as AboutCTA

const AboutCTASection: React.FC = () => {
  // Clean animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1
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

  return (
    <section className="py-20 bg-secondary-500 relative overflow-hidden font-montserrat">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Main Title */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-black mb-6 leading-tight text-white font-montserrat"
          >
            {typedContent.title}
          </motion.h2>

          {/* Description */}
          <motion.div
            variants={itemVariants}
            className="mb-12"
          >
            <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-2xl max-w-4xl mx-auto">
              <p className="text-xl text-gray-800 font-medium leading-relaxed font-montserrat">
                {typedContent.description}
              </p>
            </div>
          </motion.div>

          {/* Simplified Features Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {typedContent.features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/30 shadow-lg"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <CheckCircle className="w-6 h-6 text-secondary-500" />
                </div>
                <p className="text-white font-bold text-sm font-montserrat">
                  {feature}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-8"
          >
            <motion.a
              href={typedContent.cta.primary.link}
              className="inline-flex items-center justify-center px-12 py-4 bg-white text-secondary-500 font-black text-xl rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 font-montserrat"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              {typedContent.cta.primary.text}
              <ArrowRight className="w-6 h-6 ml-3" />
            </motion.a>
            
            <motion.a
              href={typedContent.cta.secondary.link}
              className="inline-flex items-center justify-center px-12 py-4 bg-transparent text-white font-black text-xl rounded-2xl border-4 border-white shadow-2xl hover:bg-white hover:text-secondary-500 transition-all duration-300 font-montserrat"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              {typedContent.cta.secondary.text}
            </motion.a>
          </motion.div>

          {/* Social Proof & Guarantee */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center justify-center gap-8 text-white/90"
          >
            <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-3 border-2 border-white/30">
              <Shield className="w-5 h-5 mr-2 text-white" />
              <span className="font-bold font-montserrat">{typedContent.guarantee}</span>
            </div>
            
            <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-3 border-2 border-white/30">
              <Users className="w-5 h-5 mr-2 text-white" />
              <span className="font-bold font-montserrat">{typedContent.socialProof.text}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutCTASection 