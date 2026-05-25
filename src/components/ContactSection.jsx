import { useState } from 'react'
import { motion } from 'motion/react'
import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react'
import { openWhatsApp } from '../helpers/whatsapp'

const contatos = [
  { icon: MessageCircle, label: 'WhatsApp', valor: '(65) 99339-2002', href: 'https://wa.me/5565993392002', target: '_blank' },
  { icon: Phone, label: 'Telefone', valor: '(65) 99339-2002', href: 'tel:+5565993392002', target: '_self' },
  { icon: Mail, label: 'E-mail', valor: 'comercial@rizam.com.br', href: 'mailto:comercial@rizam.com.br', target: '_self' },
  { icon: MapPin, label: 'Localização', valor: 'Cuiabá – Mato Grosso', href: null },
]

export default function ContactSection() {
  const [form, setForm] = useState({ nome: '', whatsapp: '', email: '', cidade: '', servico: '', detalhes: '' })

  const handleSubmit = e => {
    e.preventDefault()
    const msg = `Olá! Meu nome é ${form.nome}.%0AWhatsApp: ${form.whatsapp}%0AE-mail: ${form.email}%0ACidade/Obra: ${form.cidade}%0AServiço: ${form.servico}%0ADetalhes: ${form.detalhes}`
    window.open(`https://wa.me/5565993392002?text=${msg}`, '_blank')
  }

  const inputStyle = { width: '100%', border: '1.5px solid var(--border)', borderRadius: 3, padding: '10px 12px', fontFamily: 'var(--font-body)', fontSize: 14, outline: 'none', background: '#fff', color: '#111', transition: 'border-color 0.2s' }

  return (
    <section id="contato" className="contact-section" style={{ background: 'var(--gray)', borderTop: '1px solid var(--border)', padding: '80px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 60, alignItems: 'start' }} className="contact-grid">

        {/* Esquerda */}
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--orange)', fontFamily: 'var(--font-display)', fontWeight: 600, marginBottom: 10 }}>FALE CONOSCO</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(24px, 3vw, 38px)', color: '#111', marginBottom: 10 }}>Solicite um Orçamento</h2>
          <p style={{ fontSize: 14, color: 'var(--muted)', fontWeight: 300, marginBottom: 28 }}>Atendemos Cuiabá, Várzea Grande e todo MT. Resposta rápida.</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {contatos.map((c, i) => {
              const Wrapper = c.href ? 'a' : 'div'
              return (
                <Wrapper key={i} href={c.href} target={c.target} rel="noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: 14, background: '#fff', border: '1px solid var(--border)', borderRadius: 3, padding: '14px 16px', textDecoration: 'none', color: 'inherit', transition: 'border-color 0.2s' }}
                  onMouseEnter={e => c.href && (e.currentTarget.style.borderColor = 'var(--yellow)')}
                  onMouseLeave={e => c.href && (e.currentTarget.style.borderColor = 'var(--border)')}>
                  <div style={{ width: 42, height: 42, background: '#fffbeb', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <c.icon size={18} color="var(--orange)" />
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 2 }}>{c.label}</div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: '#111' }}>{c.valor}</div>
                  </div>
                </Wrapper>
              )
            })}
          </div>
        </motion.div>

        {/* Formulário */}
        <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 3, padding: 30 }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 20, color: '#111', marginBottom: 4 }}>Envie sua mensagem</h3>
          <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 20 }}>Retornamos em até 2 horas úteis.</p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
            <input placeholder="Nome" value={form.nome} onChange={e => setForm({ ...form, nome: e.target.value })} style={inputStyle}
              onFocus={e => e.target.style.borderColor = 'var(--yellow)'}
              onBlur={e => e.target.style.borderColor = 'var(--border)'} />
            <input placeholder="WhatsApp" value={form.whatsapp} onChange={e => setForm({ ...form, whatsapp: e.target.value })} style={inputStyle}
              onFocus={e => e.target.style.borderColor = 'var(--yellow)'}
              onBlur={e => e.target.style.borderColor = 'var(--border)'} />
          </div>
          <input placeholder="E-mail" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} style={{ ...inputStyle, marginBottom: 12 }}
            onFocus={e => e.target.style.borderColor = 'var(--yellow)'}
            onBlur={e => e.target.style.borderColor = 'var(--border)'} />
          <input placeholder="Cidade / Local da obra" value={form.cidade} onChange={e => setForm({ ...form, cidade: e.target.value })} style={{ ...inputStyle, marginBottom: 12 }}
            onFocus={e => e.target.style.borderColor = 'var(--yellow)'}
            onBlur={e => e.target.style.borderColor = 'var(--border)'} />
          <select value={form.servico} onChange={e => setForm({ ...form, servico: e.target.value })} style={{ ...inputStyle, marginBottom: 12 }}
            onFocus={e => e.target.style.borderColor = 'var(--yellow)'}
            onBlur={e => e.target.style.borderColor = 'var(--border)'}>
            <option value="">Tipo de serviço</option>
            <option>Terraplanagem</option>
            <option>Carregadeira New Holland W12D</option>
            <option>Retroescavadeira JCB 4CX ECO</option>
            <option>Miniescavadeira</option>
            <option>Outros</option>
          </select>
          <textarea placeholder="Detalhes da obra" rows={3} value={form.detalhes} onChange={e => setForm({ ...form, detalhes: e.target.value })} style={{ ...inputStyle, marginBottom: 16, resize: 'vertical' }}
            onFocus={e => e.target.style.borderColor = 'var(--yellow)'}
            onBlur={e => e.target.style.borderColor = 'var(--border)'} />
          <button type="submit" style={{ width: '100%', background: '#111', color: '#fff', border: 'none', borderRadius: 3, padding: '13px', fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 800, cursor: 'pointer', transition: 'background 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.background = '#333'}
            onMouseLeave={e => e.currentTarget.style.background = '#111'}>
            Enviar via WhatsApp →
          </button>
        </motion.form>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contato { padding: 56px 20px !important; }
          .contact-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  )
}
