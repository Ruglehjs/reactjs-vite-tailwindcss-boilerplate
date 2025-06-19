import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary-500 text-white font-montserrat">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-black text-brand-yellow">
              Viraleate.cl
            </h3>
            <p className="text-white/90 font-medium">
              Agencia de marketing digital especializada en hacer crecer tu marca con estrategias efectivas y contenido viral.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://instagram.com/viraleate"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/company/viraleate"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://facebook.com/viraleate"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-brand-yellow">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-white/90 hover:text-brand-yellow transition-colors font-medium">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/servicios" className="text-white/90 hover:text-brand-yellow transition-colors font-medium">
                  Servicios
                </a>
              </li>
              <li>
                <a href="/planes" className="text-white/90 hover:text-brand-yellow transition-colors font-medium">
                  Planes
                </a>
              </li>
              <li>
                <a href="/nosotros" className="text-white/90 hover:text-brand-yellow transition-colors font-medium">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="/contacto" className="text-white/90 hover:text-brand-yellow transition-colors font-medium">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-brand-yellow">
              Contacto
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-yellow" />
                <span className="text-white/90 font-medium">hola@viraleate.cl</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-yellow" />
                <span className="text-white/90 font-medium">+56 9 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-brand-yellow" />
                <span className="text-white/90 font-medium">Santiago, Chile</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80 font-medium">
              © {currentYear} Viraleate.cl - Todos los derechos reservados
            </p>
            <p className="text-white/80 font-medium mt-2 md:mt-0">
              Diseñado con ❤️ en Chile
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 