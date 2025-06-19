export interface HeroContent {
  title: string
  subtitle: string
  description: string
  coverImage: string
  announcement: {
    text: string
    link: string
  }
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
    heroLight: string
    heroLightAlt: string
    background: string
    backgroundAlt: string
  }
  navigation: {
    logo: string
    menuItems: Array<{
      name: string
      href: string
    }>
    buttons: {
      login: string
      signup: string
      getStarted: string
    }
  }
  clients: {
    title: string
    logos: Array<{
      name: string
      src: string
      alt: string
      height: string
    }>
  }
  colors: {
    primary: string
    secondary: string
    accent: string
  }
}

export interface NavigationProps {
  content: HeroContent['navigation']
}

export interface ClientLogosProps {
  content: HeroContent['clients']
}
