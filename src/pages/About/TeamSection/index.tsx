import { motion } from 'framer-motion'
import { Award, Briefcase, Quote, Linkedin, Instagram, Twitter, Star, Target, Users, Zap } from 'lucide-react'
import teamContent from '../../../content/About/team.json'
import type { TeamContent } from '../../../types/about'

const typedContent = teamContent as TeamContent

const TeamSection: React.FC = () => {
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

  const getValueIcon = (iconName: string) => {
    switch (iconName) {
      case '✨':
        return <Zap className="w-6 h-6" />
      case '📊':
        return <Target className="w-6 h-6" />
      case '🤝':
        return <Users className="w-6 h-6" />
      case '🚀':
        return <Star className="w-6 h-6" />
      default:
        return <Star className="w-6 h-6" />
    }
  }

  return (
    <section className="py-20 bg-white relative overflow-hidden font-montserrat">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl md:text-4xl font-black text-secondary-500 mb-4 font-montserrat">
              {typedContent.sectionTitle}
            </h2>
            <div className="bg-gray-50 rounded-2xl p-4 border-2 border-gray-200 shadow-lg inline-block">
              <p className="text-lg text-gray-700 font-medium max-w-2xl font-montserrat">
                {typedContent.sectionDescription}
              </p>
            </div>
          </motion.div>

          {/* Leader Profile */}
          <motion.div variants={itemVariants} className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Leader Image */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-xl">
                <img 
                  src={typedContent.leader.image}
                  alt={`${typedContent.leader.name} - ${typedContent.leader.title}`}
                  className="w-full h-96 object-cover rounded-xl"
                />
                
                {/* Quote */}
                <div className="mt-4 bg-gray-50 rounded-xl p-4 border-2 border-gray-200">
                  <Quote className="w-6 h-6 text-secondary-500 mb-2" />
                  <p className="text-gray-700 font-medium text-sm font-montserrat">
                    {typedContent.leader.quote}
                  </p>
                </div>
              </div>
            </div>

            {/* Leader Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl md:text-4xl font-black text-secondary-500 mb-2 font-montserrat">
                  {typedContent.leader.name}
                </h3>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary-500 text-white font-bold text-sm shadow-lg border-2 border-white mb-4">
                  <Briefcase className="w-4 h-4 mr-2" />
                  {typedContent.leader.title}
                </div>
                <p className="text-lg text-gray-700 font-medium leading-relaxed font-montserrat">
                  {typedContent.leader.description}
                </p>
              </div>

              {/* Achievements */}
              <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg">
                <h4 className="text-xl font-bold text-secondary-500 mb-4 flex items-center font-montserrat">
                  <Award className="w-5 h-5 mr-2" />
                  Logros Destacados
                </h4>
                <ul className="space-y-3">
                  {typedContent.leader.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-secondary-500 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0 shadow-sm">
                        <Star className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium font-montserrat">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Education */}
              {typedContent.leader.education && (
                <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg">
                  <h4 className="text-xl font-bold text-secondary-500 mb-4 flex items-center font-montserrat">
                    <Award className="w-5 h-5 mr-2" />
                    Formación Académica
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-secondary-500 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0 shadow-sm">
                        <Star className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium font-montserrat">{typedContent.leader.education.degree}</span>
                    </div>
                    {typedContent.leader.education.specializations.map((specialization, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-secondary-500 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0 shadow-sm">
                          <Star className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700 font-medium font-montserrat">{specialization}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Social Media */}
              <div className="flex gap-4">
                <motion.a
                  href={typedContent.leader.socialMedia.linkedin}
                  className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href={typedContent.leader.socialMedia.instagram}
                  className="flex items-center justify-center w-12 h-12 bg-secondary-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Instagram className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href={typedContent.leader.socialMedia.twitter}
                  className="flex items-center justify-center w-12 h-12 bg-sky-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Twitter className="w-6 h-6" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Experience Timeline - Simplified without gradients */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-black text-secondary-500 mb-4 font-montserrat">
                Experiencia Profesional
              </h3>
            </div>

            <div className="space-y-6">
              {typedContent.leader.experience.map((exp, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-secondary-500 rounded-xl flex items-center justify-center shadow-lg">
                        <Briefcase className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h4 className="text-xl font-bold text-secondary-500 font-montserrat">{exp.role}</h4>
                        <span className="text-sm font-medium text-white bg-secondary-500 px-3 py-1 rounded-full">
                          {exp.period}
                        </span>
                      </div>
                      <h5 className="text-lg font-semibold text-gray-800 mb-2 font-montserrat">{exp.company}</h5>
                      <p className="text-gray-600 font-medium font-montserrat">{exp.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Values Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-black text-secondary-500 mb-4 font-montserrat">
                {typedContent.values.title}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {typedContent.values.items.map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-secondary-500 rounded-xl flex items-center justify-center shadow-lg">
                    <div className="text-white">
                      {getValueIcon(value.icon)}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-secondary-500 mb-3 font-montserrat">
                    {value.name}
                  </h4>
                  <p className="text-gray-600 font-medium text-sm font-montserrat">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default TeamSection 