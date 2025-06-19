import PageHero from '../../../components/ui/page-hero'
import contactHeroContent from '../../../content/Contact/hero.json'

const ContactHeroSection: React.FC = () => {
  return (
    <PageHero 
      title={contactHeroContent.title}
      subtitle={contactHeroContent.subtitle}
      backgroundImage={contactHeroContent.backgroundImage}
      backgroundImageAlt={contactHeroContent.backgroundImageAlt}
      tag={contactHeroContent.tag}
      tagColor={contactHeroContent.tagColor as 'pink' | 'yellow' | 'blue' | 'green'}
    />
  )
}

export default ContactHeroSection 