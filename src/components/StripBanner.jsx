import { openWhatsApp } from '../helpers/whatsapp'

export default function StripBanner() {
  return (
    <div className="strip-banner" style={{ background: 'var(--yellow)', padding: '14px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
      <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, color: '#111' }}>
        Locação disponível com ou sem operador
        <span style={{ opacity: 0.7 }}> · Cuiabá, Várzea Grande e todo MT</span>
      </p>
      <button onClick={() => openWhatsApp()} style={{ background: '#111', color: '#fff', border: 'none', borderRadius: 2, padding: '8px 16px', fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap' }}>
        💬 Falar no WhatsApp
      </button>
    </div>
  )
}
