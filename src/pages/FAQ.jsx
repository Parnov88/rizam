import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import { openWhatsApp } from '../helpers/whatsapp'
import CTABanner from '../components/CTABanner'

const faqs = [
  {
    categoria: 'Locação',
    perguntas: [
      { p: 'Vocês alugam com ou sem operador?', r: 'Sim, disponibilizamos locação com operador incluso ou apenas o equipamento, conforme a necessidade da sua obra. Ambas as opções estão disponíveis para carregadeira New Holland W12D, retroescavadeira JCB 4CX ECO e miniescavadeira.' },
      { p: 'Qual é o prazo mínimo de locação?', r: 'O prazo mínimo é diário, mas também trabalhamos com contratos semanais, mensais e por obra. Entre em contato para discutirmos a melhor modalidade para seu projeto.' },
      { p: 'Atendem em quais regiões?', r: 'Atendemos Cuiabá, Várzea Grande e toda a região metropolitana. Para o interior do estado, consulte disponibilidade e logística — atendemos conforme a demanda.' },
      { p: 'Os equipamentos são revisados regularmente?', r: 'Sim. Toda a nossa frota passa por manutenção preventiva periódica. Trabalhamos apenas com equipamentos em perfeitas condições operacionais para garantir segurança e produtividade na sua obra.' },
    ],
  },
  {
    categoria: 'Orçamento e Pagamento',
    perguntas: [
      { p: 'Como funciona o orçamento?', r: 'O orçamento é gratuito e sem compromisso. Você nos envia os detalhes da obra e retornamos com uma proposta personalizada em até 2 horas úteis, via WhatsApp ou e-mail.' },
      { p: 'Quais são as formas de pagamento?', r: 'Aceitamos PIX, transferência bancária e boleto. Para contratos de longo prazo, trabalhamos com condições especiais. Consulte nossa equipe comercial.' },
      { p: 'O preço inclui combustível?', r: 'Depende da modalidade contratada. Em geral, o combustível fica por conta do cliente quando a locação é sem operador. Com operador, consulte as condições do contrato.' },
    ],
  },
  {
    categoria: 'Serviços',
    perguntas: [
      { p: 'Qual a diferença entre terraplanagem e nivelamento?', r: 'A terraplanagem envolve corte, aterro e compactação do solo — é uma etapa mais ampla de preparação do terreno. O nivelamento é a regularização da superfície para atingir uma cota específica, geralmente feito após a terraplanagem.' },
      { p: 'Atendem obras residenciais menores?', r: 'Sim! Atendemos desde pequenas obras residenciais até grandes projetos de infraestrutura. A miniescavadeira é ideal para espaços reduzidos em obras menores.' },
      { p: 'Vocês emitem nota fiscal?', r: 'Sim, emitimos nota fiscal para pessoa física e jurídica. Trabalhamos dentro da legalidade e com toda a documentação necessária.' },
    ],
  },
]

function Item({ item }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid var(--border)' }}>
      <button onClick={() => setOpen(!open)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 16 }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15, color: '#111' }}>{item.p}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} style={{ flexShrink: 0 }}>
          <ChevronDown size={18} color="var(--muted)" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} style={{ overflow: 'hidden' }}>
            <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.75, fontWeight: 300, paddingBottom: 18 }}>{item.r}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  return (
    <main>
      <div style={{ background: '#111', padding: '56px 40px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--yellow)', fontFamily: 'var(--font-display)', fontWeight: 600, marginBottom: 12 }}>DÚVIDAS FREQUENTES</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(28px, 4vw, 52px)', color: '#fff', marginBottom: 14 }}>Perguntas Frequentes</h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', fontWeight: 300 }}>Tudo que você precisa saber antes de contratar.</p>
        </div>
      </div>

      <div style={{ background: 'var(--gray)', padding: '56px 40px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          {faqs.map((grupo, i) => (
            <div key={i} style={{ marginBottom: 48 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
                <div style={{ width: 4, height: 20, background: 'var(--yellow)', borderRadius: 2 }} />
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18, color: '#111' }}>{grupo.categoria}</h2>
              </div>
              <div style={{ background: '#fff', border: '1px solid var(--border)', padding: '0 24px' }}>
                {grupo.perguntas.map((item, j) => <Item key={j} item={item} />)}
              </div>
            </div>
          ))}

          {/* Não encontrou */}
          <div style={{ textAlign: 'center', background: '#fff', border: '1px solid var(--border)', padding: '32px 24px', borderTop: '3px solid var(--yellow)' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18, color: '#111', marginBottom: 8 }}>Não encontrou sua dúvida?</h3>
            <p style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 20 }}>Fale diretamente com nossa equipe pelo WhatsApp.</p>
            <button onClick={() => openWhatsApp('Olá! Tenho uma dúvida sobre os serviços da Rizam Locações.')} style={{ background: '#111', color: '#fff', border: 'none', borderRadius: 3, padding: '12px 28px', fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700, cursor: 'pointer' }}>
              Falar no WhatsApp
            </button>
          </div>
        </div>
      </div>

      <CTABanner titulo="Ainda com dúvidas? Nossa equipe está pronta para atender e montar o orçamento ideal para sua obra." />

      <style>{`
        @media (max-width: 768px) {
          main > div:first-child { padding: 40px 20px 32px !important; }
          main > div:nth-child(2) { padding: 32px 20px !important; }
        }
      `}</style>
    </main>
  )
}
