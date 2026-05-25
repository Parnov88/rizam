import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X } from 'lucide-react'

const fotos = [
  { img: '/images/equip-carregadeira.jpg.png', titulo: 'Carregadeira New Holland W12D', categoria: 'Equipamentos' },
  { img: '/images/equip-retroescavadeira.jpg.png', titulo: 'Retroescavadeira JCB 4CX ECO', categoria: 'Equipamentos' },
  { img: '/images/equip-miniescavadeira.jpg.png', titulo: 'Miniescavadeira compacta', categoria: 'Equipamentos' },
  { img: '/images/service-terraplanagem.jpg.png', titulo: 'Terraplanagem em loteamento', categoria: 'Obras' },
  { img: '/images/service-escavacao.jpg.png', titulo: 'Escavação de fundação', categoria: 'Obras' },
  { img: '/images/service-limpeza.jpg.png', titulo: 'Limpeza e destocamento', categoria: 'Obras' },
  { img: '/images/service-nivelamento.jpg.png', titulo: 'Nivelamento de terreno', categoria: 'Obras' },
  { img: '/images/service-transporte.jpg.png', titulo: 'Carga e movimentação', categoria: 'Obras' },
  { img: '/images/service-drenagem.jpg.png', titulo: 'Drenagem pluvial', categoria: 'Obras' },
]

const categorias = ['Todos', 'Equipamentos', 'Obras']

export default function Galeria() {
  const [filtro, setFiltro] = useState('Todos')
  const [lightbox, setLightbox] = useState(null)

  const filtradas = filtro === 'Todos' ? fotos : fotos.filter(f => f.categoria === filtro)

  return (
    <main>
      {/* Header */}
      <div style={{ background: '#111', padding: '56px 40px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--yellow)', fontFamily: 'var(--font-display)', fontWeight: 600, marginBottom: 12 }}>PORTFÓLIO VISUAL</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(28px, 4vw, 52px)', color: '#fff', marginBottom: 14 }}>Galeria de Obras</h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', fontWeight: 300 }}>Equipamentos em ação e obras executadas em Mato Grosso.</p>
        </div>
      </div>

      {/* Filtros */}
      <div style={{ background: '#fff', borderBottom: '1px solid var(--border)', padding: '0 40px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', gap: 0 }}>
          {categorias.map((c, i) => (
            <button key={i} onClick={() => setFiltro(c)}
              style={{ padding: '16px 24px', background: 'none', border: 'none', borderBottom: filtro === c ? '3px solid var(--yellow)' : '3px solid transparent', fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: filtro === c ? 700 : 500, color: filtro === c ? '#111' : 'var(--muted)', cursor: 'pointer', transition: 'all 0.2s' }}>
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div style={{ background: 'var(--gray)', padding: '48px 40px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }} className="galeria-grid">
          <AnimatePresence>
            {filtradas.map((foto, i) => (
              <motion.div key={foto.img} layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3, delay: i * 0.05 }}
                onClick={() => setLightbox(foto)}
                style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer', aspectRatio: '4/3' }}>
                <img src={foto.img} alt={foto.titulo} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)', opacity: 0, transition: 'opacity 0.3s' }}
                  onMouseEnter={e => e.currentTarget.style.opacity = 1}
                  onMouseLeave={e => e.currentTarget.style.opacity = 0}>
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px' }}>
                    <div style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: 1.5, color: 'var(--yellow)', marginBottom: 4 }}>{foto.categoria}</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, color: '#fff' }}>{foto.titulo}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.92)', zIndex: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
            <button onClick={() => setLightbox(null)} style={{ position: 'absolute', top: 20, right: 20, background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff' }}>
              <X size={20} />
            </button>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} onClick={e => e.stopPropagation()} style={{ maxWidth: '90vw', maxHeight: '85vh' }}>
              <img src={lightbox.img} alt={lightbox.titulo} style={{ maxWidth: '100%', maxHeight: '80vh', objectFit: 'contain', display: 'block' }} />
              <div style={{ textAlign: 'center', marginTop: 12 }}>
                <span style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: 1.5, color: 'var(--yellow)' }}>{lightbox.categoria}</span>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: '#fff', marginTop: 4 }}>{lightbox.titulo}</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .galeria-grid { grid-template-columns: repeat(2, 1fr) !important; }
          main > div:first-child { padding: 40px 20px 32px !important; }
          main > div:last-child { padding: 32px 20px !important; }
        }
        @media (max-width: 480px) {
          .galeria-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  )
}
