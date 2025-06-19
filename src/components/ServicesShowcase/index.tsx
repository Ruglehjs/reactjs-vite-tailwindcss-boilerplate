import { motion } from 'framer-motion'
import { ArrowRight, Zap, Target, Megaphone } from 'lucide-react'
import servicesContent from '../../content/Home/services.json'

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
    <section id="services" className="py-16 bg-white font-montserrat">
      <div className="container mx-auto px-4">
        {/* Simplified Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-secondary-500 font-montserrat">
            {servicesContent.title}
          </h2>
          
          <div className="bg-gray-50 rounded-2xl p-4 border-2 border-gray-200 shadow-lg inline-block">
            <p className="text-lg text-gray-700 font-medium max-w-2xl font-montserrat">
              {servicesContent.description}
            </p>
          </div>
        </motion.div>

        {/* Simplified Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {servicesContent.categories.map((service, index) => (
            <motion.div
              key={service.id}
              variants={serviceVariants}
              className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              {/* Service Icon */}
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-secondary-500 rounded-xl flex items-center justify-center shadow-lg">
                  <div className="text-white">
                    {getIcon(service.icon)}
                  </div>
                </div>
                
                <h3 className="text-xl font-black text-secondary-500 mb-3 font-montserrat">
                  {service.name}
                </h3>
                
                <p className="text-gray-700 font-medium font-montserrat">
                  {service.description}
                </p>
              </div>

              {/* Simplified Features - Only first 4 */}
              <div className="mb-6">
                <ul className="space-y-2">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <li 
                      key={featureIndex} 
                      className="flex items-start text-sm font-medium text-gray-600 font-montserrat"
                    >
                      <span className="text-secondary-500 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Simple CTA Button */}
              <motion.a
                href={service.cta.link}
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-secondary-500 text-white font-bold rounded-xl shadow-lg hover:bg-secondary-600 transition-colors duration-300 font-montserrat"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Cotizar
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* Simplified Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-secondary-500 rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-black mb-4 font-montserrat">
              ¿Listo para potenciar tu marca?
            </h3>
            <p className="text-lg font-medium mb-6 opacity-90 font-montserrat">
              Conversemos sobre tu proyecto y encontremos la solución perfecta.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-white text-secondary-500 font-bold text-lg rounded-xl shadow-lg hover:bg-gray-50 transition-colors duration-300 font-montserrat"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Cotizar Ahora
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesShowcase 