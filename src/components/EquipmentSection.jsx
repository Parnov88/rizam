import { motion } from 'motion/react'
import { useInView } from 'motion/react'
import { useRef } from 'react'
import { openWhatsApp, messages } from '../helpers/whatsapp'

const equipamentos = [
  {
    marca: 'New Holland',
    modelo: 'Carregadeira de Rodas',
    nome: 'Carregadeira',
    nomeCompleto: 'New Holland W12D',
    img: '/images/equip-carregadeira.jpg.png',
    descricao: 'Eficiência e economia para movimentação, mistura de materiais e carga. Atende loteamentos, construção civil, agro e obras de infraestrutura.',
    specs: [{ val: 'W12D', label: 'Modelo' }, { val: 'Rodas', label: 'Tipo' }, { val: 'MT', label: 'Região' }],
    msg: messages.w12d,
    disponivel: true,
  },
  {
    marca: 'JCB',
    modelo: 'Retroescavadeira',
    nome: 'Retroescavadeira',
    nomeCompleto: 'JCB 4CX ECO',
    img: '/images/equip-retroescavadeira.jpg.png',
    descricao: 'Versatilidade, alta economia e robustez. Disponível na configuração que seu projeto precisa — escavação, carga e nivelamento.',
    specs: [{ val: '4CX', label: 'Modelo' }, { val: 'ECO', label: 'Versão' }, { val: 'MT', label: 'Região' }],
    msg: messages.jcb4cx,
    disponivel: true,
  },
  {
    marca: null,
    modelo: 'Miniescavadeira',
    nome: 'Miniescavadeira',
    nomeCompleto: 'Consulte disponibilidade',
    img: '/images/equip-miniescavadeira.jpg.png',
    descricao: 'Ideal para espaços reduzidos, valas, fundações e trabalhos de precisão onde máquinas maiores não conseguem acessar.',
    specs: [{ val: 'Mini', label: 'Porte' }, { val: 'Compacta', label: 'Tipo' }, { val: 'MT', label: 'Região' }],
    msg: messages.mini,
    disponivel: false,
  },
]

function EquipCard({ equip, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ border: '1px solid var(--border)', background: '#fff', cursor: 'default', transition: 'box-shadow 0.2s, transform 0.2s', position: 'relative' }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 40px rgba(0,0,0,0.1)'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.zIndex = 2 }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.zIndex = 1 }}
    >
      {/* Thumbnail */}
      <div style={{ height: 240, background: '#f0ede6', position: 'relative', overflow: 'hidden' }}>
        <img src={equip.img} alt={equip.nomeCompleto} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        {/* Badges sobre a imagem */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '12px 14px', background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, transparent 40%, rgba(0,0,0,0.45) 100%)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <span style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: 1.5, color: '#fff', textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>{equip.modelo}</span>
            {equip.marca && (
              <span style={{ background: 'var(--yellow)', color: '#111', fontSize: 10, fontWeight: 700, fontFamily: 'var(--font-display)', padding: '3px 8px', borderRadius: 2 }}>{equip.marca}</span>
            )}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <span style={{ background: '#111', color: '#fff', fontSize: 9, fontWeight: 700, fontFamily: 'var(--font-display)', padding: '4px 8px', letterSpacing: 1, textTransform: 'uppercase' }}>
              {equip.disponivel ? 'LOCAÇÃO DISPONÍVEL' : 'CONSULTAR'}
            </span>
            <span style={{ fontSize: 11, color: '#fff', fontWeight: 600, textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>{equip.nomeCompleto}</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: '22px 24px' }}>
        <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 2, color: 'var(--muted)', marginBottom: 4 }}>{equip.modelo}</div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 20, color: '#111', marginBottom: 2 }}>{equip.nome}</h3>
        <div style={{ fontSize: 13, color: 'var(--orange)', fontWeight: 600, marginBottom: 12 }}>{equip.nomeCompleto}</div>
        <p style={{ fontSize: 13.5, color: 'var(--muted)', lineHeight: 1.7, fontWeight: 300, marginBottom: 16 }}>{equip.descricao}</p>

        {/* Specs */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', marginBottom: 16 }}>
          {equip.specs.map((s, i) => (
            <div key={i} style={{ padding: '10px 12px', borderRight: i < 2 ? '1px solid var(--border)' : 'none', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 16, color: '#111' }}>{s.val}</div>
              <div style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: 1, color: 'var(--muted)' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={() => openWhatsApp(equip.msg + ' Gostaria de mais detalhes.')} style={{ flex: 1, background: 'transparent', border: '1.5px solid var(--border)', borderRadius: 3, padding: '9px 12px', fontFamily: 'var(--font-body)', fontSize: 13, cursor: 'pointer', color: '#111' }}>
            ver detalhes
          </button>
          <button onClick={() => openWhatsApp(equip.msg)} style={{ flex: 1, background: 'var(--yellow)', border: 'none', borderRadius: 3, padding: '9px 12px', fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700, cursor: 'pointer', color: '#111' }}>
            + orçamento
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default function EquipmentSection() {
  return (
    <section id="locacao" className="equip-section" style={{ background: 'var(--gray)', padding: '80px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <div style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--orange)', fontFamily: 'var(--font-display)', fontWeight: 600, marginBottom: 10 }}>LOCAÇÃO DISPONÍVEL</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(26px, 3vw, 40px)', color: '#111', marginBottom: 10 }}>Portfólio de Equipamentos</h2>
            <p style={{ fontSize: 15, color: 'var(--muted)', fontWeight: 300 }}>Máquinas revisadas, prontas para operar com ou sem operador.</p>
          </div>
          <button onClick={() => openWhatsApp()} style={{ background: 'none', border: 'none', fontFamily: 'var(--font-body)', fontSize: 14, color: '#111', cursor: 'pointer', textDecoration: 'underline', textDecorationColor: 'var(--yellow)', textUnderlineOffset: 4 }}>
            Fazer orçamento →
          </button>
        </div>

        {/* Grid */}
        <div className="equip-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 0 }}>
          {equipamentos.map((eq, i) => <EquipCard key={i} equip={eq} index={i} />)}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #locacao { padding: 56px 20px !important; }
        }
      `}</style>
    </section>
  )
}
