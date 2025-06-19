import { motion } from 'framer-motion'
import { MapPin, Clock, Instagram, Linkedin, Youtube, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import contactInfoContent from '../../../content/Contact/info.json'
import type { ContactInfo } from '../../../types/contact'

const typedContent = contactInfoContent as ContactInfo

const ContactInfoSection: React.FC = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)

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

  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'instagram':
        return <Instagram className="w-6 h-6" />
      case 'linkedin':
        return <Linkedin className="w-6 h-6" />
      case 'youtube':
        return <Youtube className="w-6 h-6" />
      case 'tiktok':
        return <div className="w-6 h-6 text-white font-bold text-sm flex items-center justify-center">T</div>
      default:
        return <Instagram className="w-6 h-6" />
    }
  }

  const getSocialColors = (name: string) => {
    switch (name.toLowerCase()) {
      case 'instagram':
        return 'bg-gradient-to-r from-purple-500 to-pink-500'
      case 'linkedin':
        return 'bg-blue-600'
      case 'youtube':
        return 'bg-red-600'
      case 'tiktok':
        return 'bg-black'
      default:
        return 'bg-gray-500'
    }
  }

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-secondary-50 via-white to-primary-50 relative overflow-hidden font-montserrat">
      {/* Clean background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary-500/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-secondary-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Office Info & Social Media Row */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Office Info */}
            <motion.div variants={itemVariants}>
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-xl">
                <h3 className="text-2xl font-black text-secondary-500 mb-6 flex items-center font-montserrat">
                  <MapPin className="w-6 h-6 mr-2" />
                  {typedContent.officeInfo.title}
                </h3>
                
                <p className="text-gray-700 font-medium mb-6 leading-relaxed font-montserrat">
                  {typedContent.officeInfo.description}
                </p>

                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-4 border-2 border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-2 font-montserrat">Dirección</h4>
                    <p className="text-gray-600 font-medium font-montserrat">
                      {typedContent.officeInfo.address.street}, {typedContent.officeInfo.address.city}
                      <br />
                      {typedContent.officeInfo.address.country}
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4 border-2 border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center font-montserrat">
                      <Clock className="w-4 h-4 mr-2" />
                      Horarios de Atención
                    </h4>
                    <p className="text-gray-600 font-medium font-montserrat">
                      {typedContent.officeInfo.workingHours.weekdays}
                    </p>
                    <p className="text-gray-600 font-medium font-montserrat">
                      {typedContent.officeInfo.workingHours.weekends}
                    </p>
                  </div>

                  <motion.a
                    href={typedContent.officeInfo.map.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 px-6 bg-gradient-to-r from-secondary-500 to-primary-500 text-white font-bold text-center rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 font-montserrat"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Ver en Google Maps 📍
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div variants={itemVariants}>
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-xl">
                <h3 className="text-2xl font-black text-secondary-500 mb-6 font-montserrat">
                  {typedContent.socialMedia.title}
                </h3>
                
                <p className="text-gray-700 font-medium mb-6 leading-relaxed font-montserrat">
                  {typedContent.socialMedia.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {typedContent.socialMedia.platforms.map((platform, index) => (
                    <motion.a
                      key={index}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 bg-gray-50 rounded-xl border-2 border-gray-200 hover:shadow-lg transition-all duration-300 group"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className={`w-12 h-12 ${getSocialColors(platform.name)} rounded-xl flex items-center justify-center shadow-lg mr-4`}>
                        {getSocialIcon(platform.name)}
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-bold text-gray-900 font-montserrat group-hover:text-secondary-500">
                          {platform.name}
                        </h4>
                        <p className="text-sm text-gray-600 font-medium font-montserrat">
                          {platform.followers} seguidores
                        </p>
                        <p className="text-xs text-gray-500 font-medium font-montserrat">
                          {platform.description}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-black text-secondary-500 mb-4 font-montserrat">
                {typedContent.faq.title}
              </h3>
              <div className="relative inline-block">
                <div className="bg-white rounded-2xl p-4 border-2 border-gray-200 shadow-lg">
                  <p className="text-lg text-gray-700 font-medium font-montserrat">
                    Las respuestas a las dudas más frecuentes
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {typedContent.faq.items.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg overflow-hidden"
                  variants={itemVariants}
                >
                  <motion.button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                    whileHover={{ backgroundColor: 'rgb(249 250 251)' }}
                  >
                    <h4 className="font-bold text-gray-900 font-montserrat">
                      {item.question}
                    </h4>
                    <motion.div
                      animate={{ rotate: expandedFAQ === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    </motion.div>
                  </motion.button>
                  
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedFAQ === index ? 'auto' : 0,
                      opacity: expandedFAQ === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 border-t border-gray-200">
                      <p className="text-gray-700 font-medium leading-relaxed pt-4 font-montserrat">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactInfoSection 