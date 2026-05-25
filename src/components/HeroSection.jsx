import { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import { openWhatsApp } from '../helpers/whatsapp'

function VideoBackground({ videoUrl }) {
  const videoRef = useRef(null)

  useEffect(() => {
    if (!videoUrl || !videoRef.current) return
    if (videoUrl.includes('.m3u8')) {
      import('hls.js').then(({ default: Hls }) => {
        if (Hls.isSupported()) {
          const hls = new Hls({ autoStartLoad: true })
          hls.loadSource(videoUrl)
          hls.attachMedia(videoRef.current)
          hls.on(Hls.Events.MANIFEST_PARSED, () => {
            videoRef.current?.play().catch(() => {})
          })
          return () => hls.destroy()
        } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
          videoRef.current.src = videoUrl
          videoRef.current.play().catch(() => {})
        }
      })
    }
  }, [videoUrl])

  if (!videoUrl) return null

  return (
    <video
      ref={videoRef}
      muted
      loop
      playsInline
      autoPlay
      style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        objectFit: 'cover', transform: 'scale(1.1)', pointerEvents: 'none',
      }}
    />
  )
}

export default function HeroSection({ videoUrl }) {
  return (
    <section style={{ position: 'relative', background: 'var(--dark)', minHeight: 560, overflow: 'hidden' }}>
      {/* Video */}
      <VideoBackground videoUrl={videoUrl} />

      {/* Grid overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '56px 56px',
      }} />

      {/* Dark overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.3) 100%)', pointerEvents: 'none' }} />

      {/* Barra amarela esquerda */}
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 6, background: 'var(--yellow)' }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', padding: '80px 40px', display: 'grid', gridTemplateColumns: '1fr 400px', gap: 80, alignItems: 'center', minHeight: 560 }}>

        {/* Coluna esquerda */}
        <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
          {/* Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', border: '1px solid var(--yellow)', borderRadius: 2, padding: '4px 10px', marginBottom: 24 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--yellow)', fontWeight: 600 }}>
              Cuiabá · Mato Grosso · Desde 2019
            </span>
          </div>

          {/* Título */}
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(32px, 4vw, 54px)', letterSpacing: -1, color: '#fff', lineHeight: 1.1, marginBottom: 24 }}>
            Terraplanagem e<br />
            <span style={{ color: 'var(--yellow)' }}>Locação</span> de<br />
            Máquinas Pesadas
          </h1>

          {/* Descrição */}
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, fontWeight: 300, marginBottom: 36, maxWidth: 480 }}>
            Equipamento próprio, equipe especializada e comprometimento com o prazo. New Holland W12D e JCB 4CX ECO — prontos para sua obra em Mato Grosso.
          </p>

          {/* Botões */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button onClick={() => openWhatsApp()} style={{ background: 'var(--yellow)', color: '#111', border: 'none', borderRadius: 3, padding: '13px 28px', fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 800, cursor: 'pointer', transition: 'background 0.2s, transform 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--yellow2)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--yellow)'; e.currentTarget.style.transform = 'translateY(0)' }}>
              Solicitar Orçamento
            </button>
            <a href="#locacao" style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.75)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 3, padding: '13px 28px', fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              Ver Equipamentos →
            </a>
          </div>
        </motion.div>

        {/* Coluna direita — painel stats */}
        <motion.div initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }}
          className="hero-panel"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: 4, overflow: 'hidden' }}>

          {/* Header painel */}
          <div style={{ background: 'var(--yellow)', padding: '14px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 12, textTransform: 'uppercase', color: '#111', letterSpacing: 1 }}>
              DISPONIBILIDADE IMEDIATA
            </span>
            <span style={{ fontSize: 10, background: 'rgba(0,0,0,0.15)', color: '#111', padding: '3px 8px', borderRadius: 2, fontWeight: 700 }}>● ONLINE</span>
          </div>

          {/* Stats */}
          {[
            { num: '10+', label: 'Equipamentos disponíveis para locação' },
            { num: '5+', label: 'Anos de experiência em Mato Grosso' },
            { num: '24h', label: 'Atendimento e suporte para sua operação' },
          ].map((stat, i) => (
            <div key={i} style={{ padding: '20px 24px', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 32, color: '#fff', lineHeight: 1 }}>{stat.num}</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', fontWeight: 300, marginTop: 4 }}>{stat.label}</div>
            </div>
          ))}

          {/* Footer painel */}
          <div style={{ padding: '16px 20px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
            <button onClick={() => openWhatsApp()} style={{ width: '100%', background: 'var(--yellow)', color: '#111', border: 'none', borderRadius: 3, padding: '12px', fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 800, cursor: 'pointer' }}>
              Falar com consultor →
            </button>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-panel { display: none !important; }
          section > div[style*="grid"] { grid-template-columns: 1fr !important; padding: 56px 20px !important; }
        }
      `}</style>
    </section>
  )
}
