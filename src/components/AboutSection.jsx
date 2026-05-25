import { useRef } from 'react'
import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { openWhatsApp } from '../helpers/whatsapp'

const numeros = [
  { num: '5+', label: 'Anos de experiência no setor' },
  { num: '2+', label: 'Equipamentos pesados próprios' },
  { num: '100+', label: 'Obras executadas em MT' },
  { num: '24h', label: 'Atendimento e suporte' },
]

export default function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="sobre" style={{ background: 'var(--dark)', padding: '80px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="about-grid">
        {/* Esquerda */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }}>
          <div style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--yellow)', fontFamily: 'var(--font-display)', fontWeight: 600, marginBottom: 12 }}>QUEM SOMOS</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(26px, 3vw, 42px)', color: '#fff', lineHeight: 1.15, marginBottom: 20 }}>
            Equipamento <span style={{ color: 'var(--yellow)' }}>próprio</span>,<br />entrega garantida
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, fontWeight: 300, marginBottom: 32 }}>
            A Rizam Locações é especialista em terraplanagem e locação de máquinas pesadas em Mato Grosso. Com frota própria — New Holland W12D e JCB 4CX ECO — entregamos cada obra com agilidade, segurança e comprometimento.
          </p>
          <button onClick={() => openWhatsApp()} style={{ background: 'var(--yellow)', color: '#111', border: 'none', borderRadius: 3, padding: '13px 28px', fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 800, cursor: 'pointer' }}>
            Conheça mais sobre a Rizam →
          </button>
        </motion.div>

        {/* Direita — grid 2x2 */}
        <div ref={ref} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {numeros.map((n, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ background: 'rgba(255,255,255,0.04)', padding: '28px 24px', borderLeft: '3px solid var(--yellow)' }}
            >
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 42, color: '#fff', lineHeight: 1 }}>{n.num}</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 6, lineHeight: 1.4 }}>{n.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #sobre { padding: 56px 20px !important; }
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}
