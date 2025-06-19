export interface ServicePlan {
  name: string
  price: string
  currency: string
  period: string
  duration?: string
  popular: boolean
  description: string
  features: string[]
  cta: {
    text: string
    link: string
  }
}

export interface ServiceCategory {
  id: string
  name: string
  description: string
  icon: string
  color: string
  image?: string
  imageAlt?: string
  features: string[]
  benefits?: string[]
  cta: {
    text: string
    link: string
  }
}

export interface ServicesContent {
  title: string
  subtitle: string
  description: string
  categories: ServiceCategory[]
  additionalServices?: {
    title: string
    description: string
    items: {
      name: string
      description: string
      icon: string
    }[]
  }
  cta: {
    title: string
    description: string
    primaryButton: {
      text: string
      link: string
    }
    secondaryButton: {
      text: string
      link: string
    }
  }
  images: {
    contentCreation: string
    contentCreationAlt: string
    strategicMarketing: string
    strategicMarketingAlt: string
    btlMarketing: string
    btlMarketingAlt: string
  }
  colors: {
    primary: string
    secondary: string
    accent: string
  }
}

export interface ServiceHero {
  title: string
  subtitle: string
  description: string
  backgroundImage: string
  backgroundImageAlt: string
}

export interface ServiceFeature {
  category: string
  title: string
  description: string
  items: string[]
  image: string
  imageAlt: string
}

export interface ProcessStep {
  number: string
  title: string
  description: string
  duration: string
}

export interface ServiceProcess {
  title: string
  description: string
  steps: ProcessStep[]
}

export interface ServiceMetric {
  number: string
  label: string
  description: string
}

export interface ServiceResults {
  title: string
  description: string
  metrics: ServiceMetric[]
}

export interface PortfolioItem {
  client: string
  result: string
  image: string
}

export interface ServicePortfolio {
  title: string
  items: PortfolioItem[]
}

export interface DetailedService {
  id: string
  name: string
  tagline: string
  description: string
  icon: string
  color: 'pink' | 'yellow' | 'blue'
  hero: ServiceHero
  detailedFeatures: ServiceFeature[]
  process: ServiceProcess
  results: ServiceResults
  portfolio: ServicePortfolio
}

export interface AdditionalServiceItem {
  name: string
  description: string
  icon: string
  features: string[]
}

export interface AdditionalServices {
  title: string
  description: string
  items: AdditionalServiceItem[]
}

export interface ServiceCTA {
  title: string
  description: string
  primaryButton: {
    text: string
    link: string
  }
  secondaryButton: {
    text: string
    link: string
  }
}

export interface ServicesDetailedContent {
  title: string
  subtitle: string
  description: string
  services: DetailedService[]
  additionalServices: AdditionalServices
  cta: ServiceCTA
} 