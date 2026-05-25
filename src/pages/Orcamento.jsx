import { useState } from 'react'
import { motion } from 'motion/react'
import { CheckCircle, Clock, Shield, Headphones } from 'lucide-react'

const beneficios = [
  { icon: Clock, titulo: 'Resposta em até 2h', texto: 'Retorno rápido em dias úteis' },
  { icon: Shield, titulo: 'Sem compromisso', texto: 'Orçamento gratuito e sem burocracia' },
  { icon: CheckCircle, titulo: 'Equipamento próprio', texto: 'Sem terceiros, mais controle' },
  { icon: Headphones, titulo: 'Suporte 24h', texto: 'Equipe técnica sempre disponível' },
]

export default function Orcamento() {
  const [form, setForm] = useState({ nome: '', empresa: '', whatsapp: '', email: '', cidade: '', regiao: '', servico: '', equipamento: '', prazo: '', detalhes: '' })
  const [enviado, setEnviado] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    const msg = `*SOLICITAÇÃO DE ORÇAMENTO — RIZAM*%0A%0A*Nome:* ${form.nome}%0A*Empresa:* ${form.empresa || 'Não informado'}%0A*WhatsApp:* ${form.whatsapp}%0A*E-mail:* ${form.email}%0A*Cidade:* ${form.cidade}%0A*Região da obra:* ${form.regiao}%0A*Serviço:* ${form.servico}%0A*Equipamento:* ${form.equipamento}%0A*Prazo:* ${form.prazo}%0A*Detalhes:* ${form.detalhes}`
    window.open(`https://wa.me/5565993392002?text=${msg}`, '_blank')
    setEnviado(true)
  }

  const inputStyle = {
    width: '100%', border: '1.5px solid var(--border)', borderRadius: 3,
    padding: '11px 14px', fontFamily: 'var(--font-body)', fontSize: 14,
    outline: 'none', background: '#fff', color: '#111', transition: 'border-color 0.2s',
  }
  const focus = e => e.target.style.borderColor = 'var(--yellow)'
  const blur = e => e.target.style.borderColor = 'var(--border)'

  return (
    <main>
      {/* Header */}
      <div style={{ background: '#111', padding: '56px 40px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--yellow)', fontFamily: 'var(--font-display)', fontWeight: 600, marginBottom: 12 }}>ORÇAMENTO GRATUITO</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(28px, 4vw, 52px)', color: '#fff', marginBottom: 14 }}>Solicite seu orçamento</h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', fontWeight: 300, maxWidth: 560 }}>Preencha o formulário e receba uma proposta personalizada. Atendemos Cuiabá, Várzea Grande e todo Mato Grosso.</p>
        </div>
      </div>

      <div style={{ background: 'var(--gray)', padding: '56px 40px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 48, alignItems: 'start' }} className="orc-grid">

          {/* Benefícios */}
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 22, color: '#111', marginBottom: 24 }}>Por que escolher a Rizam?</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 36 }}>
              {beneficios.map((b, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  style={{ display: 'flex', gap: 16, alignItems: 'flex-start', background: '#fff', border: '1px solid var(--border)', borderLeft: '3px solid var(--yellow)', padding: '16px 18px' }}>
                  <b.icon size={20} color="var(--orange)" style={{ flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, color: '#111', marginBottom: 2 }}>{b.titulo}</div>
                    <div style={{ fontSize: 13, color: 'var(--muted)', fontWeight: 300 }}>{b.texto}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Info contato */}
            <div style={{ background: '#111', padding: '24px', borderRadius: 3 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, color: 'var(--yellow)', marginBottom: 12, textTransform: 'uppercase', letterSpacing: 1 }}>Prefere falar diretamente?</div>
              <a href="https://wa.me/5565993392002" target="_blank" rel="noreferrer" style={{ display: 'block', color: '#fff', textDecoration: 'none', fontSize: 15, fontWeight: 600, marginBottom: 6 }}>📱 (65) 99339-2002</a>
              <a href="mailto:comercial@rizam.com.br" style={{ display: 'block', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: 13, fontWeight: 300 }}>comercial@rizam.com.br</a>
            </div>
          </div>

          {/* Formulário */}
          {enviado ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 3, padding: 40, textAlign: 'center' }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 24, color: '#111', marginBottom: 10 }}>Solicitação enviada!</h2>
              <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7 }}>Seu orçamento foi enviado via WhatsApp. Nossa equipe retornará em até 2 horas úteis.</p>
            </motion.div>
          ) : (
            <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 3, padding: 32 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 20, color: '#111', marginBottom: 4 }}>Dados do orçamento</h2>
              <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 24 }}>Quanto mais detalhes, melhor nossa proposta.</p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
                <div>
                  <label style={{ fontSize: 11, fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: 1, display: 'block', marginBottom: 5 }}>Nome *</label>
                  <input required placeholder="Seu nome" value={form.nome} onChange={e => setForm({ ...form, nome: e.target.value })} style={inputStyle} onFocus={focus} onBlur={blur} />
                </div>
                <div>
                  <label style={{ fontSize: 11, fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: 1, display: 'block', marginBottom: 5 }}>Empresa</label>
                  <input placeholder="Nome da empresa" value={form.empresa} onChange={e => setForm({ ...form, empresa: e.target.value })} style={inputStyle} onFocus={focus} onBlur={blur} />
                </div>
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
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
                <div>
                  <label style={{ fontSize: 11, fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: 1, display: 'block', marginBottom: 5 }}>Cidade *</label>
                  <input required placeholder="Cuiabá" value={form.cidade} onChange={e => setForm({ ...form, cidade: e.target.value })} style={inputStyle} onFocus={focus} onBlur={blur} />
                </div>
                <div>
                  <label style={{ fontSize: 11, fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: 1, display: 'block', marginBottom: 5 }}>Região da obra</label>
                  <input placeholder="Bairro, km, referência" value={form.regiao} onChange={e => setForm({ ...form, regiao: e.target.value })} style={inputStyle} onFocus={focus} onBlur={blur} />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
                <div>
                  <label style={{ fontSize: 11, fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: 1, display: 'block', marginBottom: 5 }}>Tipo de serviço *</label>
                  <select required value={form.servico} onChange={e => setForm({ ...form, servico: e.target.value })} style={inputStyle} onFocus={focus} onBlur={blur}>
                    <option value="">Selecione</option>
                    <option>Terraplanagem</option>
                    <option>Limpeza de terreno</option>
                    <option>Escavação</option>
                    <option>Nivelamento</option>
                    <option>Carga e transporte</option>
                    <option>Drenagem</option>
                    <option>Locação de equipamento</option>
                    <option>Outros</option>
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: 11, fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: 1, display: 'block', marginBottom: 5 }}>Equipamento</label>
                  <select value={form.equipamento} onChange={e => setForm({ ...form, equipamento: e.target.value })} style={inputStyle} onFocus={focus} onBlur={blur}>
                    <option value="">Indiferente</option>
                    <option>Carregadeira New Holland W12D</option>
                    <option>Retroescavadeira JCB 4CX ECO</option>
                    <option>Miniescavadeira</option>
                  </select>
                </div>
              </div>
              <div style={{ marginBottom: 12 }}>
                <label style={{ fontSize: 11, fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: 1, display: 'block', marginBottom: 5 }}>Prazo desejado</label>
                <input placeholder="Ex: urgente, próxima semana, mês que vem..." value={form.prazo} onChange={e => setForm({ ...form, prazo: e.target.value })} style={inputStyle} onFocus={focus} onBlur={blur} />
              </div>
              <div style={{ marginBottom: 20 }}>
                <label style={{ fontSize: 11, fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: 1, display: 'block', marginBottom: 5 }}>Detalhes da obra *</label>
                <textarea required rows={4} placeholder="Descreva a obra, área aproximada, tipo de solo, necessidades específicas..." value={form.detalhes} onChange={e => setForm({ ...form, detalhes: e.target.value })} style={{ ...inputStyle, resize: 'vertical' }} onFocus={focus} onBlur={blur} />
              </div>
              <button type="submit" style={{ width: '100%', background: 'var(--yellow)', color: '#111', border: 'none', borderRadius: 3, padding: '14px', fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 800, cursor: 'pointer' }}>
                Enviar orçamento via WhatsApp →
              </button>
            </motion.form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .orc-grid { grid-template-columns: 1fr !important; }
          main > div:first-child { padding: 40px 20px 32px !important; }
          main > div:last-child { padding: 32px 20px !important; }
        }
      `}</style>
    </main>
  )
}
