import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Planes', href: '/planes' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Contacto', href: '/contacto' }
  ]

  const isActive = (href: string) => {
    return location.pathname === href
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b-3 border-secondary-500 shadow-lg font-montserrat">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <motion.div 
              className="flex items-center justify-center w-10 h-10 bg-secondary-500 rounded-xl shadow-lg border-2 border-white transform rotate-2"
              whileHover={{ 
                scale: 1.1,
                rotate: -2,
              }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-white font-black text-lg">V</span>
            </motion.div>
            <span className="text-xl font-black text-secondary-500 transform -rotate-1 font-montserrat">
              Viraleate
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <motion.div key={item.name} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to={item.href}
                  className={`relative px-4 py-2 text-base font-bold transition-all duration-300 rounded-full font-montserrat ${
                    isActive(item.href)
                      ? 'text-white bg-secondary-500 shadow-lg border-2 border-white transform rotate-1'
                      : 'text-secondary-600 hover:text-white hover:bg-secondary-500 hover:shadow-lg border-2 border-transparent hover:border-white hover:rotate-1'
                  }`}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <motion.div
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full"
                      layoutId="activeNavDot"
                      initial={false}
                      animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [1, 0.7, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.a
              href="#contact"
              className="inline-flex items-center px-5 py-2.5 bg-primary-500 text-black text-base font-bold rounded-full shadow-lg border-2 border-white overflow-hidden relative transform -rotate-1 font-montserrat"
              whileHover={{ 
                scale: 1.05,
                rotate: 1,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">
                Cotizar 🚀
              </span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-secondary-600 hover:text-secondary-500 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-gray-100 py-4"
            >
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 text-base font-bold rounded-xl transition-all duration-300 font-montserrat ${
                      isActive(item.href)
                        ? 'text-white bg-secondary-500 shadow-lg'
                        : 'text-secondary-600 hover:text-white hover:bg-secondary-500 hover:shadow-lg'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 mt-4 border-t-2 border-secondary-500">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-primary-500 text-black text-base font-bold rounded-full shadow-lg border-2 border-white font-montserrat"
                  >
                    Cotizar Proyecto 🚀
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navigation 