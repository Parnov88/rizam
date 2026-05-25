import { motion } from 'motion/react'
import { openWhatsApp, messages } from '../helpers/whatsapp'
import CTABanner from '../components/CTABanner'

const servicos = [
  { img: '/images/service-terraplanagem.jpg.png', nome: 'Terraplanagem', msg: messages.terraplanagem, descricao: 'Corte, aterro e compactação de terrenos para construção civil, loteamentos e obras de infraestrutura. Utilizamos equipamentos de última geração para garantir precisão e rapidez.', detalhe: ['Corte e aterro', 'Compactação de solo', 'Regularização de nível', 'Loteamentos e condomínios', 'Obras viárias'] },
  { img: '/images/service-limpeza.jpg.png', nome: 'Limpeza de Terreno', msg: messages.general, descricao: 'Destocamento, retirada de vegetação e preparação do terreno com rapidez e eficiência. O primeiro passo para qualquer obra bem executada.', detalhe: ['Destocamento', 'Retirada de vegetação', 'Limpeza de entulho', 'Preparação para construção'] },
  { img: '/images/service-escavacao.jpg.png', nome: 'Escavação', msg: messages.jcb4cx, descricao: 'Escavações para fundações, piscinas, lagos, valas e drenagem com precisão. Nossa retroescavadeira JCB 4CX ECO garante o resultado que sua obra precisa.', detalhe: ['Fundações residenciais e comerciais', 'Piscinas e lagos', 'Valas para tubulações', 'Drenagem pluvial'] },
  { img: '/images/service-nivelamento.jpg.png', nome: 'Nivelamento', msg: messages.general, descricao: 'Regularização de superfícies para pavimentação, quadras, pátios industriais e áreas comerciais. Nivelamento preciso com equipamento próprio.', detalhe: ['Áreas industriais e comerciais', 'Quadras esportivas', 'Pátios e estacionamentos', 'Pavimentação'] },
  { img: '/images/service-transporte.jpg.png', nome: 'Carga e Transporte', msg: messages.w12d, descricao: 'Carregamento e movimentação de materiais, entulhos e resíduos com agilidade. Nossa carregadeira New Holland W12D é ideal para esse serviço.', detalhe: ['Carregamento de caçambas', 'Movimentação de materiais', 'Retirada de entulho', 'Obras de grande volume'] },
  { img: '/images/service-drenagem.jpg.png', nome: 'Drenagem', msg: messages.general, descricao: 'Implantação de drenagem pluvial e controle de erosão para proteção do terreno. Evite prejuízos com um sistema de drenagem bem executado.', detalhe: ['Drenagem pluvial', 'Controle de erosão', 'Canais e sarjetas', 'Proteção de taludes'] },
]

export default function Servicos() {
  return (
    <main>
      {/* Header */}
      <div style={{ background: '#111', padding: '56px 40px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--yellow)', fontFamily: 'var(--font-display)', fontWeight: 600, marginBottom: 12 }}>PORTFÓLIO</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(28px, 4vw, 52px)', color: '#fff', marginBottom: 14 }}>O que executamos</h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', fontWeight: 300, maxWidth: 600, margin: '0 auto' }}>Serviços completos com equipamento próprio — mais agilidade, controle e menor custo para sua obra.</p>
        </div>
      </div>

      {/* Cards */}
      <div style={{ background: 'var(--gray)', padding: '56px 40px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 24 }}>
          {servicos.map((s, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{ background: '#fff', border: '1px solid var(--border)', overflow: 'hidden' }}>
              <div style={{ height: 220, overflow: 'hidden' }}>
                <img src={s.img} alt={s.nome} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
              </div>
              <div style={{ padding: '24px 24px' }}>
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 20, color: '#111', marginBottom: 10 }}>{s.nome}</h2>
                <p style={{ fontSize: 13.5, color: 'var(--muted)', lineHeight: 1.7, fontWeight: 300, marginBottom: 16 }}>{s.descricao}</p>
                <div style={{ marginBottom: 20 }}>
                  {s.detalhe.map((d, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 0', borderBottom: j < s.detalhe.length - 1 ? '1px solid var(--border)' : 'none' }}>
                      <div style={{ width: 5, height: 5, background: 'var(--yellow)', borderRadius: '50%', flexShrink: 0 }} />
                      <span style={{ fontSize: 13, color: '#111' }}>{d}</span>
                    </div>
                  ))}
                </div>
                <button onClick={() => openWhatsApp(s.msg)} style={{ width: '100%', background: 'var(--yellow)', border: 'none', borderRadius: 3, padding: '11px', fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 800, cursor: 'pointer', color: '#111' }}>
                  Solicitar orçamento →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <CTABanner titulo="Equipamento próprio, equipe especializada e comprometimento com o prazo. Sua operação nunca para!" />

      <style>{`
        @media (max-width: 768px) {
          main > div:first-child { padding: 40px 20px 32px !important; }
          main > div:nth-child(2) { padding: 32px 20px !important; }
        }
      `}</style>
    </main>
  )
}
