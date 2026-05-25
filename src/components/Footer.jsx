export default function Footer() {
  const linkStyle = { color: 'rgba(255,255,255,0.4)', fontSize: 13, textDecoration: 'none', display: 'block', marginBottom: 8, fontWeight: 300, transition: 'color 0.2s' }
  const onHover = e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'
  const offHover = e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'

  return (
    <footer style={{ background: '#111111', padding: '56px 40px 28px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Grid superior */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: 40, paddingBottom: 32, borderBottom: '1px solid rgba(255,255,255,0.07)', marginBottom: 24 }} className="footer-grid">

          {/* Col 1 — Marca */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 20, color: '#fff' }}>Rizam</span>
              <span style={{ fontSize: 10, letterSpacing: 2.5, color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-display)' }}>LOCAÇÕES</span>
            </div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', lineHeight: 1.7, fontWeight: 300, marginBottom: 20 }}>
              Especialistas em terraplanagem e locação de máquinas pesadas em Mato Grosso.
            </p>
            <div style={{ display: 'flex', gap: 8 }}>
              {[
                { label: 'YT', href: 'https://youtube.com/@Rizam065' },
                { label: 'WA', href: 'https://wa.me/5565993392002' },
                { label: '@', href: 'mailto:comercial@rizam.com.br' },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noreferrer"
                  style={{ width: 32, height: 32, background: 'rgba(255,255,255,0.07)', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.5)', fontSize: 11, fontWeight: 700, textDecoration: 'none', transition: 'background 0.2s, color 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--yellow)'; e.currentTarget.style.color = '#111' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)' }}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — A Empresa */}
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 12, color: 'rgba(255,255,255,0.6)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 16 }}>A Empresa</div>
            {['Quem somos', 'Serviços', 'Equipamentos', 'Blog', 'Contato'].map(l => (
              <a key={l} href={`#${l.toLowerCase().replace(' ', '')}`} style={linkStyle} onMouseEnter={onHover} onMouseLeave={offHover}>{l}</a>
            ))}
          </div>

          {/* Col 3 — Equipamentos */}
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 12, color: 'rgba(255,255,255,0.6)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 16 }}>Equipamentos</div>
            {['Carregadeira New Holland W12D', 'Retroescavadeira JCB 4CX ECO', 'Miniescavadeira'].map(l => (
              <a key={l} href="#locacao" style={linkStyle} onMouseEnter={onHover} onMouseLeave={offHover}>{l}</a>
            ))}
          </div>

          {/* Col 4 — Contato */}
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 12, color: 'rgba(255,255,255,0.6)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 16 }}>Contato</div>
            {[
              { label: '(65) 99339-2002', href: 'tel:+5565993392002' },
              { label: 'comercial@rizam.com.br', href: 'mailto:comercial@rizam.com.br' },
              { label: 'WhatsApp', href: 'https://wa.me/5565993392002' },
              { label: 'Solicitar orçamento', href: '#contato' },
            ].map(l => (
              <a key={l.label} href={l.href} target={l.href.startsWith('http') ? '_blank' : '_self'} rel="noreferrer" style={linkStyle} onMouseEnter={onHover} onMouseLeave={offHover}>{l.label}</a>
            ))}
          </div>
        </div>

        {/* Rodapé */}
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>© 2025 Rizam Locações · Cuiabá – MT</span>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>(65) 99339-2002 · comercial@rizam.com.br</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer { padding: 40px 20px 24px !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 28px !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
