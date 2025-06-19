import React from 'react'
import ServicesSection from './index'
import servicesContent from '../../../content/Home/services.json'
import type { ServicesContent } from '../../../types/services'

const ServicesExample: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <ServicesSection content={servicesContent as unknown as ServicesContent} />
    </div>
  )
}

export default ServicesExample 