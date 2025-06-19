import PageHero from '../../../components/ui/page-hero'
import aboutHeroContent from '../../../content/About/hero.json'

const AboutHeroSection: React.FC = () => {
  return (
    <PageHero 
      title={aboutHeroContent.title}
      subtitle={aboutHeroContent.subtitle}
      backgroundImage={aboutHeroContent.backgroundImage}
      backgroundImageAlt={aboutHeroContent.backgroundImageAlt}
      tag={aboutHeroContent.tag}
      tagColor={aboutHeroContent.tagColor as 'pink' | 'yellow' | 'blue' | 'green'}
    />
  )
}

export default AboutHeroSection 