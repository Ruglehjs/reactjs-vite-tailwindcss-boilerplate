export interface PricingFeature {
  name: string
  description: string
}

export interface PricingPlan {
  name: string
  price: string
  currency: string
  period: string
  popular: boolean
  description: string
  features: PricingFeature[]
  cta: {
    text: string
    variant: 'default' | 'outline' | 'secondary' | 'ghost' | 'link'
  }
}

export interface PricingCategory {
  id: string
  title: string
  description: string
  plans: PricingPlan[]
}

export interface PricingContent {
  title: string
  subtitle: string
  description: string
  badge: string
  features: {
    popular: string
    recommended: string
    contact: string
    startNow: string
    choosePlan: string
    bookMeeting: string
  }
  categories: PricingCategory[]
  bottomCta: {
    title: string
    description: string
    buttonText: string
    buttonLink: string
  }
} 