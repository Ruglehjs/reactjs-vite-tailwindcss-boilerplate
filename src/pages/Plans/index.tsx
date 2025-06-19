import { motion } from 'framer-motion'
import { ArrowRight, Zap, Target, Megaphone, CheckCircle } from 'lucide-react'
import PageHero from '../../components/ui/page-hero'
import plansContent from '../../content/Plans/plans.json'

const Plans: React.FC = () => {
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

  const formatPrice = (price: string) => {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0
    }).format(parseInt(price))
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

  const cardVariants = {
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
    <div className="min-h-screen bg-gradient-to-br from-brand-yellow via-primary-400 to-primary-500 font-montserrat">
      {/* New Standardized Hero Section */}
      <PageHero 
        title={plansContent.hero.title}
        subtitle={plansContent.hero.subtitle}
        backgroundImage={plansContent.hero.backgroundImage}
        backgroundImageAlt={plansContent.hero.backgroundImageAlt}
        tag={plansContent.hero.tag}
        tagColor={plansContent.hero.tagColor as 'pink' | 'yellow' | 'blue' | 'green'}
      />

      {/* Clean Plans Sections */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="space-y-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {plansContent.categories.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                variants={cardVariants}
                className="relative"
                id={category.id}
              >
                {/* Clean Category Header */}
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary-500 mb-6 shadow-lg">
                    <div className="text-white">
                      {getIcon(category.icon)}
                    </div>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-black mb-4 text-secondary-500 font-montserrat">
                    {category.name}
                  </h2>
                  
                  <div className="bg-gray-50 rounded-2xl p-4 border-2 border-gray-200 shadow-lg inline-block">
                    <p className="text-base text-gray-600 font-medium max-w-xl font-montserrat">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Clean Plans Grid - Max 4 per row, Always Centered */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center max-w-7xl mx-auto">
                  {category.plans.map((plan, planIndex) => (
                    <motion.div
                      key={planIndex}
                      className="relative group w-full max-w-sm"
                      variants={cardVariants}
                      whileHover={{ 
                        scale: 1.02,
                        transition: { duration: 0.3 }
                      }}
                    >
                      {/* Clean Card */}
                      <div className={`bg-white rounded-2xl p-6 border-2 ${
                        plan.popular ? 'border-secondary-500' : 'border-gray-200'
                      } ${plan.popular ? 'shadow-xl' : 'shadow-lg'} hover:shadow-xl transition-shadow duration-300 h-full flex flex-col`}>
                        
                        {/* Popular Badge */}
                        {plan.popular && (
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-secondary-500 text-white text-xs font-bold rounded-full shadow-lg border-2 border-white">
                            ⭐ MÁS POPULAR ⭐
                          </div>
                        )}

                        {/* Plan Header */}
                        <div className="text-center mb-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-3 font-montserrat">
                            {plan.name}
                          </h3>
                          <div className="mb-3">
                            <span className="text-2xl md:text-3xl font-black text-secondary-500">
                              {formatPrice(plan.price)}
                            </span>
                            <span className="text-gray-600 font-medium ml-1 text-sm">
                              /{plan.period}
                            </span>
                          </div>
                          {'duration' in plan && (
                            <div className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full mb-2">
                              ⏰ {(plan as any).duration}
                            </div>
                          )}
                          <p className="text-gray-600 font-medium text-sm">
                            {plan.description}
                          </p>
                        </div>

                        {/* Simplified Features - Only first 4 */}
                        <div className="mb-6 flex-grow">
                          <ul className="space-y-3">
                            {plan.features.slice(0, 4).map((feature, featureIndex) => (
                              <li 
                                key={featureIndex} 
                                className="flex items-start"
                              >
                                <div className="w-5 h-5 rounded-full bg-secondary-500 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0 shadow-sm">
                                  <CheckCircle className="w-3 h-3 text-white" />
                                </div>
                                <span className="text-gray-700 font-medium text-sm font-montserrat">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* CTA Button - All "Cotizar" */}
                        <motion.a
                          href="#contact"
                          className="w-full py-3 px-4 bg-secondary-500 text-white font-bold text-base rounded-xl shadow-lg hover:bg-secondary-600 transition-colors duration-300 text-center font-montserrat"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Cotizar
                        </motion.a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Simplified CTA Section */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-secondary-500 rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl md:text-3xl font-black mb-4 font-montserrat">
                ¿Listo para Empezar?
              </h3>
              <p className="text-lg mb-6 font-medium font-montserrat opacity-90">
                Conversemos sobre tu proyecto y encontremos el plan perfecto para tu negocio.
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
    </div>
  )
}

export default Plans 