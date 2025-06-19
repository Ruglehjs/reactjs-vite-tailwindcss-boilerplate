import { motion } from 'framer-motion'
import { HeroSection } from './HeroSection'
import ServicesSection from './ServicesSection'
import PricingSection from './PricingSection'
import servicesContent from 'content/Home/services.json'
import { ServicesContent } from 'types/services'

function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-brand-yellow via-primary-400 to-primary-500"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <HeroSection />
      <ServicesSection content={servicesContent as unknown as ServicesContent} />
      <PricingSection />
    </motion.div>
  )
}

export default Home 