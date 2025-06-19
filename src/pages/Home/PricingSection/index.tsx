import React from 'react'
import { motion } from 'framer-motion'
import { Check, ArrowRight, Instagram, Heart } from 'lucide-react'

// Utils and types
import { formatPrice } from '../../../utils/formatters'
import type { PricingContent } from '../../../types/pricing'

// Content
import pricingContent from '../../../content/Home/pricing.json'



interface PricingSectionProps {
  content?: PricingContent
}

const PricingSection: React.FC<PricingSectionProps> = ({ 
  content = pricingContent as PricingContent 
}) => {
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

  const cardVariants = {
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

  return (
    <section className="py-16 bg-white relative overflow-hidden font-montserrat">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-secondary-500 text-white font-bold text-sm shadow-lg border-2 border-white mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Instagram className="w-4 h-4 mr-2" />
            {content.badge}
            <Heart className="w-4 h-4 ml-2" />
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight text-secondary-500 font-montserrat">
            {content.title}
          </h2>
          
          <div className="relative inline-block">
            <div className="bg-gray-50 rounded-2xl p-4 border-2 border-gray-200 shadow-lg">
              <p className="text-lg text-gray-700 font-medium leading-relaxed max-w-xl font-montserrat">
                {content.description}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {content.categories.map((category) => (
            <div key={category.id} className="w-full">
         

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.plans.map((plan, index) => (
                  <motion.div
                    key={plan.name}
                    className="relative group"
                    variants={cardVariants}
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {/* Clean Card */}
                    <div className={`bg-white rounded-2xl p-6 border-2 ${
                      plan.popular ? 'border-secondary-500 shadow-xl' : 'border-gray-200 shadow-lg'
                    } transition-all duration-300 h-full flex flex-col`}>
                      
                      {/* Popular Badge */}
                      {plan.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-secondary-500 text-white text-xs font-bold rounded-full shadow-lg border-2 border-white">
                          ⭐ MÁS POPULAR ⭐
                        </div>
                      )}

                      {/* Plan Header */}
                      <div className="text-center mb-6">
                        <h4 className="text-lg font-black text-gray-900 mb-3 font-montserrat">
                          {plan.name}
                        </h4>
                        <div className="mb-3">
                          <span className={`text-2xl md:text-3xl font-black font-montserrat ${
                            plan.popular ? 'text-secondary-500' : 'text-gray-700'
                          }`}>
                            {formatPrice(plan.price, plan.currency)}
                          </span>
                          <span className="text-gray-600 font-bold ml-1 text-sm font-montserrat">
                            /{plan.period}
                          </span>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-sm font-montserrat">
                          {plan.description}
                        </p>
                      </div>

                      {/* Simplified Features List - Only first 4 features */}
                      <div className="flex-grow mb-6">
                        <ul className="space-y-3">
                          {plan.features.slice(0, 4).map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <Check className="w-4 h-4 text-secondary-500 mt-0.5 mr-3 flex-shrink-0" />
                              <span className="text-gray-800 font-medium text-sm font-montserrat">
                                {typeof feature === 'string' ? feature : feature.name}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA Button */}
                      <div className="mt-auto">
                        <motion.button
                          className={`w-full py-3 px-4 rounded-xl font-bold text-sm transition-all duration-300 transform shadow-lg font-montserrat ${
                            plan.popular
                              ? 'bg-secondary-500 text-white hover:bg-secondary-600'
                              : 'bg-gray-900 text-white hover:bg-gray-800'
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => {
                            window.location.href = '#contact'
                          }}
                        >
                          Cotizar
                          <ArrowRight className="w-4 h-4 ml-2 inline" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Simplified CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-secondary-500 rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl md:text-3xl font-black mb-4 font-montserrat">
              ¿Listo para empezar?
            </h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto opacity-90 font-montserrat">
              Conversemos sobre tu proyecto y encontremos el plan perfecto para tu negocio.
            </p>
            <motion.button
              className="bg-white text-secondary-500 px-8 py-3 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg font-montserrat"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '#contact'}
            >
              Cotizar Ahora
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PricingSection 