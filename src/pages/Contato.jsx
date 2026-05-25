import ContactSection from '../components/ContactSection'
import StatsSection from '../components/StatsSection'

export default function Contato() {
  return (
    <main>
      <div style={{ background: '#111', padding: '56px 40px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--yellow)', fontFamily: 'var(--font-display)', fontWeight: 600, marginBottom: 12 }}>ATENDIMENTO</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(28px, 4vw, 52px)', color: '#fff', marginBottom: 14 }}>Fale com a Rizam</h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', fontWeight: 300 }}>Atendemos Cuiabá, Várzea Grande e todo Mato Grosso. Resposta rápida.</p>
        </div>
      </div>
      <ContactSection />
      <StatsSection />
    </main>
  )
}
