import { useRef } from 'react'
import { motion } from 'motion/react'
import { useInView } from 'motion/react'

const servicos = [
  { img: '/images/service-terraplanagem.jpg.png', nome: 'Terraplanagem', texto: 'Corte, aterro e compactação de terrenos para construção civil, loteamentos e obras de infraestrutura.' },
  { img: '/images/service-limpeza.jpg.png', nome: 'Limpeza de Terreno', texto: 'Destocamento, retirada de vegetação e preparação do terreno com rapidez e eficiência.' },
  { img: '/images/service-escavacao.jpg.png', nome: 'Escavação', texto: 'Escavações para fundações, piscinas, lagos, valas e drenagem com precisão.' },
  { img: '/images/service-nivelamento.jpg.png', nome: 'Nivelamento', texto: 'Regularização de superfícies para pavimentação, quadras e áreas industriais.' },
  { img: '/images/service-transporte.jpg.png', nome: 'Carga e Transporte', texto: 'Carregamento e movimentação de materiais, entulhos e resíduos.' },
  { img: '/images/service-drenagem.jpg.png', nome: 'Drenagem', texto: 'Implantação de drenagem pluvial e controle de erosão para proteção do terreno.' },
]

function ServiceItem({ servico, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [hovered, setHovered] = useRef ? [false, () => {}] : [false, () => {}]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      style={{ cursor: 'default', transition: 'background 0.2s', borderLeft: '3px solid transparent', overflow: 'hidden' }}
      onMouseEnter={e => { e.currentTarget.style.background = 'var(--gray)'; e.currentTarget.style.borderLeftColor = 'var(--yellow)' }}
      onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderLeftColor = 'transparent' }}
    >
      {/* Imagem */}
      <div style={{ height: 180, overflow: 'hidden' }}>
        <img src={servico.img} alt={servico.nome} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s' }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
      </div>
      <div style={{ padding: '20px 24px' }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: '#111', marginBottom: 8 }}>{servico.nome}</h3>
        <p style={{ fontSize: 13.5, color: 'var(--muted)', lineHeight: 1.7, fontWeight: 300 }}>{servico.texto}</p>
      </div>
    </motion.div>
  )
}

export default function ServicesSection() {
  return (
    <section id="servicos" className="services-section" style={{ background: '#fff', padding: '80px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--orange)', fontFamily: 'var(--font-display)', fontWeight: 600, marginBottom: 10 }}>PORTFÓLIO DE SERVIÇOS</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(26px, 3vw, 40px)', color: '#111', marginBottom: 12 }}>O que executamos</h2>
          <p style={{ fontSize: 15, color: 'var(--muted)', fontWeight: 300 }}>Serviços completos com equipamento próprio — mais agilidade, menos custo.</p>
        </div>

        {/* Grid */}
        <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', border: '1px solid var(--border)' }}>
          {servicos.map((s, i) => (
            <div key={i} style={{ borderRight: (i + 1) % 3 !== 0 ? '1px solid var(--border)' : 'none', borderBottom: i < 3 ? '1px solid var(--border)' : 'none' }}>
              <ServiceItem servico={s} index={i} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #servicos { padding: 56px 20px !important; }
          #servicos > div > div:last-child { grid-template-columns: 1fr !important; }
          #servicos > div > div:last-child > div { border-right: none !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          #servicos > div > div:last-child { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
