import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import StripBanner from './components/StripBanner'
import EquipmentSection from './components/EquipmentSection'
import ServicesSection from './components/ServicesSection'
import AboutSection from './components/AboutSection'
import BlogSection from './components/BlogSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

const VIDEO_URL = 'https://cdn.converteai.net/91783df2-d643-49c6-9e32-2e0ae77e8d82/6a149f53e5f223389716c041/main.m3u8'

function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <HeroSection videoUrl={VIDEO_URL} />
      <StripBanner />
      <EquipmentSection />
      <ServicesSection />
      <AboutSection />
      <BlogSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
