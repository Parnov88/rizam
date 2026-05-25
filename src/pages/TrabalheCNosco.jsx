import { useState } from 'react'
import { motion } from 'motion/react'
import CTABanner from '../components/CTABanner'

const vagas = [
  { cargo: 'Operador de Máquinas Pesadas', tipo: 'CLT', local: 'Cuiabá – MT', descricao: 'Operação de carregadeira e retroescavadeira em obras de terraplanagem. Experiência mínima de 2 anos. CNH AB obrigatória.' },
  { cargo: 'Auxiliar de Obras', tipo: 'CLT', local: 'Cuiabá – MT', descricao: 'Apoio nas frentes de obra, organização de canteiro e auxílio ao operador. Disponibilidade de horário e vontade de aprender.' },
  { cargo: 'Mecânico de Máquinas Pesadas', tipo: 'CLT', local: 'Cuiabá – MT', descricao: 'Manutenção preventiva e corretiva de equipamentos New Holland e JCB. Experiência com hidráulica e sistemas diesel.' },
  { cargo: 'Consultor Comercial', tipo: 'PJ / Comissão', local: 'Cuiabá – MT', descricao: 'Prospecção e atendimento de clientes no segmento de construção civil e agro. Boa comunicação e rede de contatos em MT.' },
]

const beneficios = ['Vale transporte', 'Vale alimentação', 'Plano de saúde', 'EPI completo', 'Treinamento contínuo', 'Ambiente de crescimento']

export default function TrabalheCNosco() {
  const [form, setForm] = useState({ nome: '', whatsapp: '', email: '', cargo: '', linkedin: '', mensagem: '' })

  const handleSubmit = e => {
    e.preventDefault()
    const msg = `*CANDIDATURA — RIZAM LOCAÇÕES*%0A%0A*Nome:* ${form.nome}%0A*WhatsApp:* ${form.whatsapp}%0A*E-mail:* ${form.email}%0A*Vaga de interesse:* ${form.cargo}%0A*LinkedIn:* ${form.linkedin || 'Não informado'}%0A*Mensagem:* ${form.mensagem}`
    window.open(`https://wa.me/5565993392002?text=${msg}`, '_blank')
  }

  const inputStyle = { width: '100%', border: '1.5px solid var(--border)', borderRadius: 3, padding: '11px 14px', fontFamily: 'var(--font-body)', fontSize: 14, outline: 'none', background: '#fff', color: '#111', transition: 'border-color 0.2s' }
  const focus = e => e.target.style.borderColor = 'var(--yellow)'
  const blur = e => e.target.style.borderColor = 'var(--border)'

  return (
    <main>
      {/* Header */}
      <div style={{ background: '#111', padding: '56px 40px 48px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/equip-carregadeira.jpg.png)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.1)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--yellow)', fontFamily: 'var(--font-display)', fontWeight: 600, marginBottom: 12 }}>FAÇA PARTE DO TIME</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(28px, 4vw, 52px)', color: '#fff', marginBottom: 14 }}>Trabalhe Conosco</h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', fontWeight: 300, maxWidth: 560, margin: '0 auto' }}>Faça parte de uma equipe que move Mato Grosso. Buscamos profissionais comprometidos e apaixonados pelo que fazem.</p>
        </div>
      </div>

      {/* Benefícios */}
      <div style={{ background: 'var(--yellow)', padding: '32px 40px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
            {beneficios.map((b, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(0,0,0,0.08)', borderRadius: 20, padding: '6px 14px' }}>
                <span style={{ color: '#111', fontSize: 11, fontWeight: 600, fontFamily: 'var(--font-display)' }}>✓ {b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ background: 'var(--gray)', padding: '56px 40px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }} className="trabalhe-grid">

          {/* Vagas */}
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 24, color: '#111', marginBottom: 24 }}>Vagas abertas</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {vagas.map((v, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  style={{ background: '#fff', border: '1px solid var(--border)', borderLeft: '3px solid var(--yellow)', padding: '18px 20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6, flexWrap: 'wrap', gap: 8 }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 15, color: '#111' }}>{v.cargo}</h3>
                    <span style={{ background: '#111', color: '#fff', fontSize: 10, fontWeight: 700, fontFamily: 'var(--font-display)', padding: '3px 8px', borderRadius: 2 }}>{v.tipo}</span>
                  </div>
                  <div style={{ fontSize: 11, color: 'var(--orange)', fontWeight: 600, marginBottom: 8 }}>📍 {v.local}</div>
                  <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6, fontWeight: 300 }}>{v.descricao}</p>
                </motion.div>
              ))}
              <div style={{ background: '#fff', border: '1px dashed var(--border)', padding: '16px 20px', textAlign: 'center' }}>
                <p style={{ fontSize: 13, color: 'var(--muted)', fontWeight: 300 }}>Não achou sua vaga? Envie seu currículo assim mesmo — guardamos para futuras oportunidades.</p>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 3, padding: 28 }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 20, color: '#111', marginBottom: 4 }}>Candidate-se agora</h2>
            <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 20 }}>Preencha e envie pelo WhatsApp.</p>

            <div style={{ marginBottom: 12 }}>
              <label style={{ fontSize: 11, fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: 1, display: 'block', marginBottom: 5 }}>Nome *</label>
              <input required placeholder="Seu nome completo" value={form.nome} onChange={e => setForm({ ...form, nome: e.target.value })} style={inputStyle} onFocus={focus} onBlur={blur} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
              <div>
                <label style={{ fontSize: 11, fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: 1, display: 'block', marginBottom: 5 }}>WhatsApp *</label>
                <input required placeholder="(65) 00000-0000" value={form.whatsapp} onChange={e => setForm({ ...form, whatsapp: e.target.value })} style={inputStyle} onFocus={focus} onBlur={blur} />
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: 1, display: 'block', marginBottom: 5 }}>E-mail</label>
                <input placeholder="seu@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} style={inputStyle} onFocus={focus} onBlur={blur} />
              </div>
            </div>
            <div style={{ marginBottom: 12 }}>
              <label style={{ fontSize: 11, fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: 1, display: 'block', marginBottom: 5 }}>Vaga de interesse *</label>
              <select required value={form.cargo} onChange={e => setForm({ ...form, cargo: e.target.value })} style={inputStyle} onFocus={focus} onBlur={blur}>
                <option value="">Selecione</option>
                {vagas.map(v => <option key={v.cargo}>{v.cargo}</option>)}
                <option>Banco de talentos (outra área)</option>
              </select>
            </div>
            <div style={{ marginBottom: 12 }}>
              <label style={{ fontSize: 11, fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: 1, display: 'block', marginBottom: 5 }}>LinkedIn ou portfólio</label>
              <input placeholder="linkedin.com/in/seuperfil" value={form.linkedin} onChange={e => setForm({ ...form, linkedin: e.target.value })} style={inputStyle} onFocus={focus} onBlur={blur} />
            </div>
            <div style={{ marginBottom: 20 }}>
              <label style={{ fontSize: 11, fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: 1, display: 'block', marginBottom: 5 }}>Fale sobre você *</label>
              <textarea required rows={4} placeholder="Experiência, habilidades, por que quer trabalhar na Rizam..." value={form.mensagem} onChange={e => setForm({ ...form, mensagem: e.target.value })} style={{ ...inputStyle, resize: 'vertical' }} onFocus={focus} onBlur={blur} />
            </div>
            <button type="submit" style={{ width: '100%', background: '#111', color: '#fff', border: 'none', borderRadius: 3, padding: '14px', fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 800, cursor: 'pointer' }}>
              Enviar candidatura →
            </button>
          </motion.form>
        </div>
      </div>

      <CTABanner titulo="Junte-se à equipe que move Mato Grosso. Buscamos profissionais comprometidos com resultado." />

      <style>{`
        @media (max-width: 768px) {
          .trabalhe-grid { grid-template-columns: 1fr !important; }
          main > div:first-child { padding: 48px 20px 32px !important; }
          main > div:nth-child(3) { padding: 32px 20px !important; }
        }
      `}</style>
    </main>
  )
}
