export interface AboutHero {
  title: string
  subtitle: string
  description: string
  coverImage: string
  cta: {
    primary: {
      text: string
      link: string
    }
    secondary: {
      text: string
      link: string
    }
  }
  images: {
    hero: string
    heroAlt: string
  }
}

export interface Experience {
  company: string
  role: string
  period: string
  description: string
}

export interface Leader {
  name: string
  title: string
  description: string
  image: string
  achievements: string[]
  experience: Experience[]
  quote: string
  socialMedia: {
    linkedin: string
    instagram: string
    twitter: string
  }
  education?: {
    degree: string
    specializations: string[]
  }
}

export interface Value {
  name: string
  description: string
  icon: string
}

export interface TeamContent {
  sectionTitle: string
  sectionDescription: string
  leader: Leader
  values: {
    title: string
    items: Value[]
  }
}

export interface AboutCTA {
  title: string
  description: string
  features: string[]
  cta: {
    primary: {
      text: string
      link: string
    }
    secondary: {
      text: string
      link: string
    }
  }
  guarantee: string
  urgency: string
  socialProof: {
    text: string
    logos: string[]
  }
} 