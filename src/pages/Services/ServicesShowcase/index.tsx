import { motion } from 'framer-motion'
import { ArrowRight, Zap, Target, Megaphone, Star, Crown, CheckCircle, Sparkles, Clock, TrendingUp, Users, Award, Camera, Pen, Palette, BarChart3, Search, Lightbulb, Calendar, PlayCircle } from 'lucide-react'
import servicesDetailedContent from '../../../content/Services/services-detailed.json'

const ServicesShowcase: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'content':
        return <Zap className="w-8 h-8" />
      case 'strategy':
        return <Target className="w-8 h-8" />
      case 'event':
        return <Megaphone className="w-8 h-8" />
      default:
        return <Zap className="w-8 h-8" />
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'diseño gráfico':
        return <Palette className="w-6 h-6" />
      case 'fotografía y video':
        return <Camera className="w-6 h-6" />
      case 'copywriting':
        return <Pen className="w-6 h-6" />
      case 'análisis de mercado':
        return <BarChart3 className="w-6 h-6" />
      case 'estrategia de posicionamiento':
        return <Target className="w-6 h-6" />
      case 'optimización de conversiones':
        return <TrendingUp className="w-6 h-6" />
      case 'activaciones de marca':
        return <Users className="w-6 h-6" />
      case 'eventos corporativos':
        return <Calendar className="w-6 h-6" />
      case 'sampling y degustaciones':
        return <Star className="w-6 h-6" />
      default:
        return <Lightbulb className="w-6 h-6" />
    }
  }

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'pink':
        return {
          bg: 'bg-secondary-500',
          bgGradient: 'bg-gradient-to-r from-secondary-500 to-secondary-600',
          bgLight: 'bg-secondary-50',
          border: 'border-secondary-500',
          text: 'text-secondary-500',
          iconBg: 'bg-secondary-100',
          bgPattern: 'bg-gradient-to-br from-secondary-50 via-white to-secondary-100'
        }
      case 'yellow':
        return {
          bg: 'bg-primary-500',
          bgGradient: 'bg-gradient-to-r from-primary-500 to-primary-600',
          bgLight: 'bg-primary-50',
          border: 'border-primary-500',
          text: 'text-primary-500',
          iconBg: 'bg-primary-100',
          bgPattern: 'bg-gradient-to-br from-primary-50 via-white to-primary-100'
        }
      case 'blue':
        return {
          bg: 'bg-blue-500',
          bgGradient: 'bg-gradient-to-r from-blue-500 to-blue-600',
          bgLight: 'bg-blue-50',
          border: 'border-blue-500',
          text: 'text-blue-500',
          iconBg: 'bg-blue-100',
          bgPattern: 'bg-gradient-to-br from-blue-50 via-white to-blue-100'
        }
      default:
        return {
          bg: 'bg-secondary-500',
          bgGradient: 'bg-gradient-to-r from-secondary-500 to-secondary-600',
          bgLight: 'bg-secondary-50',
          border: 'border-secondary-500',
          text: 'text-secondary-500',
          iconBg: 'bg-secondary-100',
          bgPattern: 'bg-gradient-to-br from-secondary-50 via-white to-secondary-100'
        }
    }
  }

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

  const serviceVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6
      }
    }
  }

  const cleanFloatAnimation = {
    y: [0, -8, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  }

  return (
    <div className="font-montserrat">
      {/* Main Header */}
  

      {/* Detailed Service Sections */}
      {servicesDetailedContent.services.map((service, serviceIndex) => {
        const colors = getColorClasses(service.color)
        const isEven = serviceIndex % 2 === 0
        
        return (
          <section key={service.id} className={`py-20 ${colors.bgPattern} relative overflow-hidden`}>
            {/* Background Decoration */}
            <div className="absolute inset-0 overflow-hidden">
              <div className={`absolute ${isEven ? 'top-10 right-10' : 'bottom-10 left-10'} w-64 h-64 ${colors.bg}/5 rounded-full blur-3xl`}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              
              {/* Service Hero */}
              <motion.div
                className={`grid lg:grid-cols-2 gap-16 items-center mb-20 ${isEven ? '' : 'lg:grid-flow-col-dense'}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className={`space-y-8 ${isEven ? '' : 'lg:col-start-2'}`}>
                  <div className="space-y-6">
                    <motion.div
                      className={`inline-flex items-center px-4 py-2 rounded-full ${colors.bg} text-white font-bold text-sm shadow-lg`}
                      animate={cleanFloatAnimation}
                    >
                      {getIcon(service.icon)}
                      <span className="ml-2">{service.name}</span>
                    </motion.div>
                    
                    <h2 className={`text-3xl md:text-5xl font-black ${colors.text} leading-tight`}>
                      {service.hero.title}
                    </h2>
                    
                    <p className="text-xl text-gray-600 font-medium leading-relaxed">
                      {service.tagline}
                    </p>
                    
                    <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg">
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {service.hero.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.button
                      className={`px-8 py-4 ${colors.bgGradient} text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Consulta Gratuita ✨
                    </motion.button>
                    <motion.button
                      className={`px-8 py-4 bg-white ${colors.text} font-bold text-lg rounded-xl border-2 ${colors.border} shadow-lg hover:shadow-xl transition-shadow duration-300`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Ver Ejemplos
                    </motion.button>
                  </div>
                </div>

                <div className={`relative ${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                  <motion.div
                    className="relative"
                    animate={cleanFloatAnimation}
                    transition={{ delay: 0.2 }}
                  >
                    <img 
                      src={service.hero.backgroundImage}
                      alt={service.hero.backgroundImageAlt}
                      className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
                    />
                    <div className={`absolute inset-0 ${colors.bgGradient}/20 rounded-2xl`}></div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Detailed Features */}
              <motion.div
                className="mb-20"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="text-center mb-16">
                  <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                    ¿Qué Incluye Nuestro Servicio?
                  </h3>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Conoce en detalle todos los componentes de nuestro servicio especializado
                  </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                  {service.detailedFeatures.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
                      whileHover={{ y: -8 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Feature Image */}
                      <div className="relative mb-6 -mx-8 -mt-8">
                        <img 
                          src={feature.image}
                          alt={feature.imageAlt}
                          className="w-full h-48 object-cover rounded-t-2xl"
                        />
                        <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-xl ${colors.bgGradient} shadow-lg flex items-center justify-center`}>
                          <div className="text-white">
                            {getCategoryIcon(feature.category)}
                          </div>
                        </div>
                      </div>

                      {/* Feature Content */}
                      <div className="space-y-4">
                        <div className={`text-sm font-bold ${colors.text} uppercase tracking-wide`}>
                          {feature.category}
                        </div>
                        
                        <h4 className="text-xl font-black text-gray-900">
                          {feature.title}
                        </h4>
                        
                        <p className="text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>

                        {/* Feature Items */}
                        <div className="space-y-2">
                          {feature.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-start">
                              <CheckCircle className={`h-4 w-4 ${colors.text} mt-1 mr-3 flex-shrink-0`} />
                              <span className="text-sm text-gray-700">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

          

            </div>
          </section>
        )
      })}

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              {servicesDetailedContent.additionalServices.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {servicesDetailedContent.additionalServices.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesDetailedContent.additionalServices.items.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="space-y-2">
                  {item.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-secondary-500 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-secondary-500 via-secondary-600 to-secondary-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-primary-500/20 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              {servicesDetailedContent.cta.title}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {servicesDetailedContent.cta.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={servicesDetailedContent.cta.primaryButton.link}
                className="inline-flex items-center px-8 py-4 bg-white text-secondary-500 font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {servicesDetailedContent.cta.primaryButton.text} ✨
              </motion.a>
              <motion.a
                href={servicesDetailedContent.cta.secondaryButton.link}
                className="inline-flex items-center px-8 py-4 bg-transparent text-white font-bold text-lg rounded-xl border-2 border-white shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {servicesDetailedContent.cta.secondaryButton.text}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ServicesShowcase 