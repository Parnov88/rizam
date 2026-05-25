import { openWhatsApp } from '../helpers/whatsapp'

export default function CTABanner({ titulo, subtitulo }) {
  return (
    <section className="cta-banner" style={{ position: 'relative', overflow: 'hidden', background: '#0d0d0d', padding: '72px 40px', textAlign: 'center' }}>
      {/* bg imagem escurecida */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/equip-retroescavadeira.jpg.png)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.18)' }} />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 860, margin: '0 auto' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(24px, 4vw, 46px)', color: '#fff', lineHeight: 1.2, marginBottom: 36 }}>
          {titulo || 'Nossa excelência em manutenção permite que os equipamentos rodem com eficiência e segurança pelo máximo de tempo possível. Sua operação nunca para!'}
        </h2>
        <div className="cta-btns" style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => openWhatsApp()} style={{ background: 'var(--yellow)', color: '#111', border: 'none', borderRadius: 4, padding: '14px 32px', fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 800, cursor: 'pointer' }}>
            Faça um orçamento
          </button>
          <button onClick={() => window.location.href = 'tel:+5565993392002'} style={{ background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.4)', borderRadius: 4, padding: '14px 32px', fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 700, cursor: 'pointer' }}>
            Ligamos pra você
          </button>
        </div>
      </div>
    </section>
  )
}
