import { Link } from 'react-router-dom'

export default function Footer() {
  const linkStyle = { color: 'rgba(255,255,255,0.4)', fontSize: 13, textDecoration: 'none', display: 'block', marginBottom: 8, fontWeight: 300, transition: 'color 0.2s' }
  const onHover = e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'
  const offHover = e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'

  const empresa = [
    { label: 'Quem somos', to: '/sobre' },
    { label: 'Serviços', to: '/servicos' },
    { label: 'Segmentos', to: '/segmentos' },
    { label: 'Galeria de obras', to: '/galeria' },
    { label: 'Blog', to: '/blog' },
    { label: 'Perguntas frequentes', to: '/faq' },
    { label: 'Trabalhe conosco', to: '/trabalhe-conosco' },
  ]

  const equipamentos = [
    { label: 'Carregadeira New Holland W12D', to: '/equipamentos/carregadeira' },
    { label: 'Retroescavadeira JCB 4CX ECO', to: '/equipamentos/retroescavadeira' },
    { label: 'Miniescavadeira', to: '/equipamentos/miniescavadeira' },
    { label: 'Ver todos os equipamentos', to: '/equipamentos' },
  ]

  return (
    <footer style={{ background: '#111111', padding: '56px 40px 28px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: 40, paddingBottom: 32, borderBottom: '1px solid rgba(255,255,255,0.07)', marginBottom: 24 }} className="footer-grid">

          {/* Col 1 — Marca */}
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12, textDecoration: 'none' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 20, color: '#fff' }}>Rizam</span>
              <span style={{ fontSize: 10, letterSpacing: 2.5, color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-display)' }}>LOCAÇÕES</span>
            </Link>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', lineHeight: 1.7, fontWeight: 300, marginBottom: 20 }}>
              Especialistas em terraplanagem e locação de máquinas pesadas em Mato Grosso desde 2019.
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
            {empresa.map(l => (
              <Link key={l.to} to={l.to} style={linkStyle} onMouseEnter={onHover} onMouseLeave={offHover}>{l.label}</Link>
            ))}
          </div>

          {/* Col 3 — Equipamentos */}
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 12, color: 'rgba(255,255,255,0.6)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 16 }}>Equipamentos</div>
            {equipamentos.map(l => (
              <Link key={l.to} to={l.to} style={linkStyle} onMouseEnter={onHover} onMouseLeave={offHover}>{l.label}</Link>
            ))}
          </div>

          {/* Col 4 — Contato */}
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 12, color: 'rgba(255,255,255,0.6)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 16 }}>Contato</div>
            <a href="tel:+5565993392002" style={linkStyle} onMouseEnter={onHover} onMouseLeave={offHover}>(65) 99339-2002</a>
            <a href="mailto:comercial@rizam.com.br" style={linkStyle} onMouseEnter={onHover} onMouseLeave={offHover}>comercial@rizam.com.br</a>
            <a href="https://wa.me/5565993392002" target="_blank" rel="noreferrer" style={linkStyle} onMouseEnter={onHover} onMouseLeave={offHover}>WhatsApp</a>
            <Link to="/orcamento" style={{ ...linkStyle, color: 'var(--yellow)', fontWeight: 600 }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'var(--yellow)'}>Solicitar orçamento →</Link>
          </div>
        </div>

        {/* Links legais */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)' }}>© 2025 Rizam Locações · Cuiabá – MT</span>
          <div style={{ display: 'flex', gap: 20 }}>
            <Link to="/faq" style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', textDecoration: 'none' }} onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.25)'}>FAQ</Link>
            <Link to="/trabalhe-conosco" style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', textDecoration: 'none' }} onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.25)'}>Trabalhe Conosco</Link>
          </div>
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
