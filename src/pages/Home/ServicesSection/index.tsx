import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Star } from 'lucide-react'
import type { ServicesContent, ServiceCategory } from '../../../types/services'
import { getColorClasses } from '../../../utils/formatters'

// Icon components
const ContentIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
  </svg>
)

const StrategyIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
  </svg>
)

const EventIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
  </svg>
)

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

const getIcon = (iconName: string, className?: string) => {
  switch (iconName) {
    case 'content':
      return <ContentIcon className={className} />
    case 'strategy':
      return <StrategyIcon className={className} />
    case 'event':
      return <EventIcon className={className} />
    default:
      return <ContentIcon className={className} />
  }
}

interface ServiceCardProps {
  category: ServiceCategory
}

const ServiceCard: React.FC<ServiceCardProps> = ({ category }) => {
  const colors = getColorClasses(category.color)
  
  return (
    <motion.div 
      className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group font-montserrat h-full"
      whileHover={{ y: -5 }}
    >
      {/* Image Header */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={category.image || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=entropy&auto=format&q=75'} 
          alt={category.imageAlt || category.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className={`absolute inset-0 ${colors.bgGradient} opacity-20`}></div>
        <div className="absolute top-4 left-4">
          <div className={`p-3 rounded-full ${colors.bgGradient} shadow-lg`}>
            {getIcon(category.icon, 'h-6 w-6 text-white')}
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 h-full flex flex-col">
        {/* Title & Description */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2 font-montserrat">{category.name}</h3>
          <p className="text-gray-600 text-base leading-relaxed font-montserrat">{category.description}</p>
        </div>
        
        {/* Features */}
        <div className="mb-6 flex-grow">
          <ul className="space-y-2">
            {category.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <CheckIcon className={`h-4 w-4 ${colors.text} mt-0.5 mr-2 flex-shrink-0`} />
                <span className="text-gray-700 text-sm font-montserrat">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* CTA */}
        <div className="mt-auto">
          <a
            href={category.cta.link}
            className={`
              w-full block text-center py-3 px-4 rounded-xl font-bold text-base transition-all duration-300 transform hover:scale-105 shadow-lg font-montserrat
              ${colors.bgGradient} ${category.color === 'green' ? 'text-black' : 'text-white'} shadow-lg
            `}
          >
            {category.cta.text}
          </a>
        </div>
      </div>
    </motion.div>
  )
}

interface ServicesSectionProps {
  content: ServicesContent
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ content }) => {
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
      transition: { duration: 0.5 }
    }
  }
  
  return (
    <section className="py-16 bg-gradient-to-br from-primary-50 via-white to-secondary-50 relative overflow-hidden font-montserrat">
      {/* Clean background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-secondary-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Clean Header */}
        <motion.div
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 rounded-full bg-secondary-500 text-white font-bold text-sm shadow-lg border-2 border-white mb-6 transform rotate-1"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            {content.subtitle}
            <Star className="w-4 h-4 ml-2" />
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight text-secondary-500 font-montserrat"
          >
            {content.title}
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="relative inline-block"
          >
            <div className="bg-white rounded-2xl p-4 border-2 border-secondary-500 shadow-lg">
              <p className="text-lg text-gray-700 max-w-2xl font-medium leading-relaxed font-montserrat">
                {content.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Clean Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {content.categories.map((category) => (
            <motion.div key={category.id} variants={itemVariants}>
              <ServiceCard category={category} />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Clean CTA Section */}
        <motion.div 
          className="text-center mt-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl md:text-3xl font-black text-gray-900 mb-4 font-montserrat"
          >
            {content.cta.title}
          </motion.h3>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto font-montserrat"
          >
            {content.cta.description}
          </motion.p>
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href={content.cta.primaryButton.link}
              className="inline-flex items-center px-8 py-3 bg-secondary-500 text-white font-bold text-lg rounded-xl border-2 border-white shadow-lg hover:shadow-xl transition-shadow duration-300 font-montserrat"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {content.cta.primaryButton.text} ✨
            </motion.a>
            <motion.a
              href={content.cta.secondaryButton.link}
              className="inline-flex items-center px-8 py-3 bg-white text-secondary-500 font-bold text-lg rounded-xl border-2 border-secondary-500 shadow-lg hover:shadow-xl transition-shadow duration-300 font-montserrat"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {content.cta.secondaryButton.text}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection 