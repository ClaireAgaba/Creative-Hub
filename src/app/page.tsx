import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import CTASection from '@/components/CTASection'
import SocialFeeds from '@/components/SocialFeeds';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <SocialFeeds />
      <CTASection />
    </main>
  )
}