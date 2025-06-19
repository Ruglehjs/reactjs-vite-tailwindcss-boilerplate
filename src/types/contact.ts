export interface ContactMethod {
  type: 'phone' | 'email' | 'address'
  label: string
  value: string
  link: string
}

export interface ContactHero {
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
  contactMethods: ContactMethod[]
  responseTime: string
  availability: string
}

export interface FormField {
  name: string
  label: string
  type: 'text' | 'email' | 'tel' | 'select' | 'textarea'
  placeholder?: string
  options?: string[]
  required: boolean
}

export interface FormBenefit {
  title: string
  description: string
  icon: string
}

export interface ContactForm {
  title: string
  description: string
  form: {
    fields: FormField[]
    submitButton: {
      text: string
      loadingText: string
    }
    privacy: string
    successMessage: string
    errorMessage: string
  }
  benefits: FormBenefit[]
}

export interface SocialPlatform {
  name: string
  url: string
  followers: string
  description: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface ContactInfo {
  officeInfo: {
    title: string
    description: string
    address: {
      street: string
      city: string
      country: string
      zipCode: string
    }
    workingHours: {
      weekdays: string
      weekends: string
    }
    map: {
      embedUrl: string
      linkUrl: string
    }
  }
  socialMedia: {
    title: string
    description: string
    platforms: SocialPlatform[]
  }
  faq: {
    title: string
    items: FAQItem[]
  }
} 