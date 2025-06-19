import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import contactFormContent from '../../../content/Contact/form.json'
import type { ContactForm } from '../../../types/contact'

const typedContent = contactFormContent as ContactForm

const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 bg-white relative overflow-hidden font-montserrat" id="contact-form">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl md:text-4xl font-black text-secondary-500 mb-4 font-montserrat">
              Envíanos un Mensaje
            </h2>
            <div className="bg-gray-50 rounded-2xl p-4 border-2 border-gray-200 shadow-lg inline-block">
              <p className="text-lg text-gray-700 font-medium max-w-2xl font-montserrat">
                Completa el formulario y nos pondremos en contacto contigo lo antes posible.
              </p>
            </div>
          </motion.div>

          {/* Simple Form */}
          <motion.div variants={itemVariants}>
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2 font-montserrat">
                      Nombre completo <span className="text-secondary-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Tu nombre completo"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-secondary-500 focus:outline-none transition-colors duration-300 font-montserrat"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2 font-montserrat">
                      Email <span className="text-secondary-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="tu@email.com"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-secondary-500 focus:outline-none transition-colors duration-300 font-montserrat"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2 font-montserrat">
                    Teléfono <span className="text-secondary-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+56 9 1234 5678"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-secondary-500 focus:outline-none transition-colors duration-300 font-montserrat"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2 font-montserrat">
                    Mensaje <span className="text-secondary-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Cuéntanos sobre tu proyecto..."
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-secondary-500 focus:outline-none transition-colors duration-300 resize-none font-montserrat"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-8 bg-secondary-500 text-white font-black text-lg rounded-xl shadow-lg hover:bg-secondary-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-montserrat"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  <div className="flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Mensaje
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </div>
                </motion.button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center p-4 bg-green-50 border-2 border-green-200 rounded-xl"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-green-700 font-bold font-montserrat">
                      ¡Mensaje enviado exitosamente! Te contactaremos pronto.
                    </span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center p-4 bg-red-50 border-2 border-red-200 rounded-xl"
                  >
                    <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                    <span className="text-red-700 font-bold font-montserrat">
                      Error al enviar el mensaje. Por favor intenta nuevamente.
                    </span>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactFormSection 