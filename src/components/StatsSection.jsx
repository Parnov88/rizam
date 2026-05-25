import { useRef } from 'react'
import { motion } from 'motion/react'
import { useInView } from 'motion/react'

const stats = [
  { num: '10+', label: 'Máquinas e equipamentos' },
  { num: '5+', label: 'Anos de experiência' },
  { num: '100+', label: 'Obras executadas em MT' },
  { num: '24h', label: 'Atendimento e suporte' },
  { num: '2', label: 'Marcas premium na frota' },
]

const marcas = ['New Holland', 'JCB']

export default function StatsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="stats-section" style={{ background: '#111', padding: '72px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Título */}
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(26px, 3.5vw, 44px)', color: '#fff', textAlign: 'center', marginBottom: 56 }}>
          Referência em locação de máquinas<br />
          <span style={{ color: 'var(--yellow)' }}>pesadas em Mato Grosso</span>
        </h2>

        {/* Stats */}
        <div ref={ref} style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0, borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)', marginBottom: 56 }} className="stats-grid">
          {stats.map((s, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ padding: '40px 24px', textAlign: 'center', borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(32px, 3vw, 52px)', color: 'var(--yellow)', lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginTop: 8, lineHeight: 1.4, fontWeight: 300 }}>{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Marcas */}
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 28, fontFamily: 'var(--font-display)' }}>MARCAS NA NOSSA FROTA</div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 48, flexWrap: 'wrap', alignItems: 'center' }}>
            {marcas.map((marca, i) => (
              <span key={i} style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 28, color: 'rgba(255,255,255,0.15)', letterSpacing: -0.5, transition: 'color 0.2s', cursor: 'default' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.15)'}>
                {marca}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .stats-grid > div { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.08); }
        }
      `}</style>
    </section>
  )
}
