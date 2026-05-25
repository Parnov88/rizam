import { Phone, Mail, MapPin } from 'lucide-react'

export default function TopBar() {
  return (
    <div className="topbar" style={{ background: '#0a0a0a', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 36 }}>
        {/* Esquerda */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <a href="tel:+5565993392002" style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'rgba(255,255,255,0.55)', fontSize: 12, textDecoration: 'none', fontFamily: 'var(--font-body)' }}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}>
            <Phone size={11} /> (65) 99339-2002
          </a>
          <div style={{ width: 1, height: 14, background: 'rgba(255,255,255,0.15)' }} />
          <a href="mailto:comercial@rizam.com.br" style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'rgba(255,255,255,0.55)', fontSize: 12, textDecoration: 'none' }}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}>
            <Mail size={11} /> comercial@rizam.com.br
          </a>
          <div style={{ width: 1, height: 14, background: 'rgba(255,255,255,0.15)' }} />
          <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'rgba(255,255,255,0.55)', fontSize: 12 }}>
            <MapPin size={11} /> Cuiabá – MT
          </span>
        </div>
        {/* Direita */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <a href="#locacao" style={{ color: 'rgba(255,255,255,0.55)', fontSize: 12, textDecoration: 'none' }}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}>
            Locação de máquinas
          </a>
          <div style={{ width: 1, height: 14, background: 'rgba(255,255,255,0.15)' }} />
          <a href="#contato" style={{ color: 'rgba(255,255,255,0.55)', fontSize: 12, textDecoration: 'none' }}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}>
            Solicitar orçamento
          </a>
          <div style={{ width: 1, height: 14, background: 'rgba(255,255,255,0.15)' }} />
          <a href="https://wa.me/5565993392002" target="_blank" rel="noreferrer" style={{ color: 'rgba(255,255,255,0.55)', fontSize: 12, textDecoration: 'none' }}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}>
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
