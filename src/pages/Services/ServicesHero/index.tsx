import PageHero from '../../../components/ui/page-hero'
import servicesHeroContent from '../../../content/Services/services-hero.json'

const ServicesHero: React.FC = () => {
  return (
    <PageHero 
      title={servicesHeroContent.title}
      subtitle={servicesHeroContent.subtitle}
      backgroundImage={servicesHeroContent.backgroundImage}
      backgroundImageAlt={servicesHeroContent.backgroundImageAlt}
      tag={servicesHeroContent.tag}
      tagColor={servicesHeroContent.tagColor as 'pink' | 'yellow' | 'blue' | 'green'}
    />
  )
}

export default ServicesHero 