import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Equipamentos from './pages/Equipamentos'
import EquipamentoDetalhe from './pages/EquipamentoDetalhe'
import Servicos from './pages/Servicos'
import Blog from './pages/Blog'
import Contato from './pages/Contato'

export default function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/equipamentos" element={<Equipamentos />} />
        <Route path="/equipamentos/:slug" element={<EquipamentoDetalhe />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  )
}
