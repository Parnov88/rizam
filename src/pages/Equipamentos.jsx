import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { openWhatsApp, messages } from '../helpers/whatsapp'

const equipamentos = [
  {
    slug: 'carregadeira',
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
    slug: 'retroescavadeira',
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
    slug: 'miniescavadeira',
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

export default function Equipamentos() {
  return (
    <main style={{ background: 'var(--gray)', minHeight: '80vh' }}>
      {/* Page header */}
      <div style={{ background: '#111', padding: '56px 40px 40px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--yellow)', fontFamily: 'var(--font-display)', fontWeight: 600, marginBottom: 10 }}>LOCAÇÃO DISPONÍVEL</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(28px, 4vw, 48px)', color: '#fff', marginBottom: 10 }}>Portfólio de Equipamentos</h1>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', fontWeight: 300 }}>Máquinas revisadas, prontas para operar com ou sem operador em Mato Grosso.</p>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '56px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 24 }}>
          {equipamentos.map((eq, i) => (
            <motion.div key={eq.slug}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ background: '#fff', border: '1px solid var(--border)', overflow: 'hidden', transition: 'box-shadow 0.2s, transform 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 40px rgba(0,0,0,0.1)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)' }}>
              {/* Imagem */}
              <div style={{ height: 260, overflow: 'hidden', position: 'relative' }}>
                <img src={eq.img} alt={eq.nomeCompleto} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.5))', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '14px 16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    {eq.marca && <span style={{ background: 'var(--yellow)', color: '#111', fontSize: 10, fontWeight: 700, fontFamily: 'var(--font-display)', padding: '3px 8px', borderRadius: 2 }}>{eq.marca}</span>}
                    <span style={{ background: eq.disponivel ? '#111' : '#555', color: '#fff', fontSize: 9, fontWeight: 700, fontFamily: 'var(--font-display)', padding: '4px 8px', letterSpacing: 1, textTransform: 'uppercase', marginLeft: 'auto' }}>
                      {eq.disponivel ? 'LOCAÇÃO DISPONÍVEL' : 'CONSULTAR'}
                    </span>
                  </div>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 22, color: '#fff' }}>{eq.nomeCompleto}</span>
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: '20px 24px' }}>
                <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 2, color: 'var(--muted)', marginBottom: 4 }}>{eq.modelo}</div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 22, color: '#111', marginBottom: 10 }}>{eq.nome}</h2>
                <p style={{ fontSize: 13.5, color: 'var(--muted)', lineHeight: 1.7, fontWeight: 300, marginBottom: 16 }}>{eq.descricao}</p>

                {/* Specs */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', marginBottom: 16 }}>
                  {eq.specs.map((s, j) => (
                    <div key={j} style={{ padding: '10px 12px', borderRight: j < 2 ? '1px solid var(--border)' : 'none', textAlign: 'center' }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 16, color: '#111' }}>{s.val}</div>
                      <div style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: 1, color: 'var(--muted)' }}>{s.label}</div>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: 8 }}>
                  <Link to={`/equipamentos/${eq.slug}`} style={{ flex: 1, background: 'transparent', border: '1.5px solid var(--border)', borderRadius: 3, padding: '9px 12px', fontFamily: 'var(--font-body)', fontSize: 13, textDecoration: 'none', color: '#111', textAlign: 'center', display: 'block' }}>
                    Ver detalhes
                  </Link>
                  <button onClick={() => openWhatsApp(eq.msg)} style={{ flex: 1, background: 'var(--yellow)', border: 'none', borderRadius: 3, padding: '9px 12px', fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700, cursor: 'pointer', color: '#111' }}>
                    + orçamento
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          main > div:first-child { padding: 40px 20px 28px !important; }
          main > div:last-child { padding: 32px 20px !important; }
        }
      `}</style>
    </main>
  )
}
