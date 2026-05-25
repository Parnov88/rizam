import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { Phone, Menu, X } from 'lucide-react'
import { openWhatsApp } from '../helpers/whatsapp'

const links = [
  { label: 'A Rizam', href: '/sobre' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Equipamentos', href: '/equipamentos' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contato', href: '/contato' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      style={{ position: 'sticky', top: 0, zIndex: 100, background: '#fff', borderBottom: '1px solid var(--border)', boxShadow: '0 1px 8px rgba(0,0,0,0.06)' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, color: '#111', letterSpacing: -0.5 }}>Rizam</span>
          <div style={{ width: 1, height: 18, background: '#ccc' }} />
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 11, letterSpacing: 2, color: 'var(--muted)', fontWeight: 500 }}>LOCAÇÕES</span>
        </Link>

        {/* Links desktop */}
        <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {links.map(link => {
            const active = location.pathname === link.href
            return (
              <Link key={link.href} to={link.href}
                style={{ fontSize: 13.5, fontWeight: 500, color: active ? '#111' : 'var(--muted)', textDecoration: 'none', fontFamily: 'var(--font-body)', paddingBottom: 2, borderBottom: active ? '3px solid var(--yellow)' : '3px solid transparent', transition: 'color 0.2s, border-color 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#111'; e.currentTarget.style.borderBottomColor = 'var(--yellow)' }}
                onMouseLeave={e => { if (!active) { e.currentTarget.style.color = 'var(--muted)'; e.currentTarget.style.borderBottomColor = 'transparent' } }}>
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* CTAs desktop */}
        <div className="nav-ctas" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <button onClick={() => window.location.href = 'tel:+5565993392002'} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'transparent', border: '1.5px solid var(--border)', borderRadius: 3, padding: '7px 14px', fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 500, cursor: 'pointer', color: '#111' }}>
            <Phone size={13} /> Ligar
          </button>
          <button onClick={() => openWhatsApp()} style={{ background: '#111', color: '#fff', border: 'none', borderRadius: 3, padding: '8px 16px', fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700, cursor: 'pointer', transition: 'background 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.background = '#333'}
            onMouseLeave={e => e.currentTarget.style.background = '#111'}>
            Solicitar Orçamento
          </button>
        </div>

        {/* Hamburger mobile */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: '#111' }}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            style={{ overflow: 'hidden', borderTop: '1px solid var(--border)', background: '#fff' }}>
            <div style={{ padding: '16px 24px', display: 'flex', flexDirection: 'column' }}>
              {links.map(link => (
                <Link key={link.href} to={link.href} onClick={() => setMenuOpen(false)}
                  style={{ padding: '12px 0', fontSize: 15, fontWeight: 500, color: '#111', textDecoration: 'none', borderBottom: '1px solid var(--border)', fontFamily: 'var(--font-body)' }}>
                  {link.label}
                </Link>
              ))}
              <button onClick={() => { openWhatsApp(); setMenuOpen(false) }}
                style={{ marginTop: 16, background: '#111', color: '#fff', border: 'none', borderRadius: 3, padding: '12px', fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700, cursor: 'pointer', width: '100%' }}>
                Solicitar Orçamento
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-links, .nav-ctas { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </motion.nav>
  )
}
