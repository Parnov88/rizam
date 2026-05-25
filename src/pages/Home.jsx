import HeroSection from '../components/HeroSection'
import StripBanner from '../components/StripBanner'
import AboutSection from '../components/AboutSection'
import StatsSection from '../components/StatsSection'
import CTABanner from '../components/CTABanner'

const VIDEO_URL = 'https://cdn.converteai.net/91783df2-d643-49c6-9e32-2e0ae77e8d82/6a149f53e5f223389716c041/main.m3u8'

export default function Home() {
  return (
    <>
      <HeroSection videoUrl={VIDEO_URL} />
      <StripBanner />
      <AboutSection />
      <StatsSection />
      <CTABanner titulo="Nossa excelência em manutenção permite que os equipamentos rodem com eficiência e segurança pelo máximo de tempo possível. Sua operação nunca para!" />
    </>
  )
}
