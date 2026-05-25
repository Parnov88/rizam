import { motion } from 'motion/react'
import StatsSection from '../components/StatsSection'
import CTABanner from '../components/CTABanner'
import { openWhatsApp } from '../helpers/whatsapp'

const timeline = [
  { ano: '2019', titulo: 'Fundação', texto: 'A Rizam Locações nasce em Cuiabá com foco em terraplanagem e locação de máquinas pesadas para obras em Mato Grosso.' },
  { ano: '2020', titulo: 'Primeira frota própria', texto: 'Aquisição da primeira máquina própria, marcando o início da operação com frota exclusiva e atendimento diferenciado.' },
  { ano: '2022', titulo: 'Expansão do portfólio', texto: 'Incorporação da retroescavadeira JCB 4CX ECO e da carregadeira New Holland W12D, ampliando os serviços oferecidos.' },
  { ano: '2024', titulo: 'Crescimento em MT', texto: 'Mais de 100 obras executadas com excelência. Presença consolidada em Cuiabá, Várzea Grande e interior do estado.' },
  { ano: '2025', titulo: 'Expansão contínua', texto: 'Ampliação da frota para mais de 10 equipamentos pesados, mantendo o padrão de qualidade e atendimento 24h.' },
]

const valores = [
  { titulo: 'Equipamento próprio', texto: 'Sem terceiros na operação. Maior controle, qualidade e responsabilidade em cada obra.' },
  { titulo: 'Comprometimento', texto: 'Cumprimos prazos. Sua obra não para por falta de máquina ou suporte técnico.' },
  { titulo: 'Transparência', texto: 'Orçamento claro, sem surpresas. Você sabe exatamente o que está contratando.' },
  { titulo: 'Atendimento 24h', texto: 'Suporte técnico disponível. Problemas operacionais resolvidos com rapidez.' },
]

export default function Sobre() {
  return (
    <main>
      {/* Hero */}
      <div style={{ background: '#111', padding: '72px 40px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/equip-carregadeira.jpg.png)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.12)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }} className="sobre-hero">
          <div>
            <div style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--yellow)', fontFamily: 'var(--font-display)', fontWeight: 600, marginBottom: 16 }}>QUEM SOMOS</div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(28px, 4vw, 52px)', color: '#fff', lineHeight: 1.1, marginBottom: 20 }}>
              Especialistas em<br /><span style={{ color: 'var(--yellow)' }}>Máquinas Pesadas</span><br />em Mato Grosso
            </h1>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, fontWeight: 300, marginBottom: 28 }}>
              Desde 2019 em Cuiabá, a Rizam Locações oferece serviços de terraplanagem e locação de máquinas pesadas com frota própria, equipe especializada e comprometimento com resultado.
            </p>
            <button onClick={() => openWhatsApp()} style={{ background: 'var(--yellow)', color: '#111', border: 'none', borderRadius: 3, padding: '13px 28px', fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 800, cursor: 'pointer' }}>
              Fale com um consultor
            </button>
          </div>
          {/* Valores */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {valores.map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderLeft: '3px solid var(--yellow)', padding: '20px 16px' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, color: '#fff', marginBottom: 6 }}>{v.titulo}</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.5, fontWeight: 300 }}>{v.texto}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div style={{ background: 'var(--gray)', padding: '72px 40px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--orange)', fontFamily: 'var(--font-display)', fontWeight: 600, marginBottom: 10 }}>TRAJETÓRIA</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(24px, 3vw, 38px)', color: '#111' }}>Nossa história</h2>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: 60, top: 0, bottom: 0, width: 2, background: 'var(--border)' }} />
            {timeline.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 24, marginBottom: 32, position: 'relative' }}>
                <div style={{ textAlign: 'right', paddingRight: 24 }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 20, color: 'var(--yellow)' }}>{item.ano}</div>
                </div>
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', left: -33, top: 4, width: 12, height: 12, background: 'var(--yellow)', borderRadius: '50%', border: '3px solid var(--gray)' }} />
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: '#111', marginBottom: 6 }}>{item.titulo}</div>
                  <div style={{ fontSize: 13.5, color: 'var(--muted)', lineHeight: 1.7, fontWeight: 300 }}>{item.texto}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <StatsSection />
      <CTABanner titulo="Conheça a Rizam pessoalmente. Fale com nossa equipe e veja como podemos ajudar sua obra!" />

      <style>{`
        @media (max-width: 768px) {
          .sobre-hero { grid-template-columns: 1fr !important; gap: 32px !important; }
          main > div:first-child { padding: 48px 20px !important; }
          main > div:nth-child(2) { padding: 48px 20px !important; }
        }
      `}</style>
    </main>
  )
}
