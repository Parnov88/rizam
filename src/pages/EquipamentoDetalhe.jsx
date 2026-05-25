import { useParams, Link } from 'react-router-dom'
import { openWhatsApp, messages } from '../helpers/whatsapp'
import CTABanner from '../components/CTABanner'

const dados = {
  carregadeira: {
    marca: 'New Holland', nomeCompleto: 'New Holland W12D', modelo: 'Carregadeira de Rodas',
    img: '/images/equip-carregadeira.jpg.png', msg: messages.w12d,
    descricao: 'A New Holland W12D é uma carregadeira de rodas robusta e eficiente, ideal para movimentação de materiais em loteamentos, construção civil, agro e obras de infraestrutura em Mato Grosso.',
    specs: [
      { val: 'W12D', label: 'Modelo' }, { val: 'Rodas', label: 'Tipo' },
      { val: 'Mato Grosso', label: 'Disponível em' }, { val: 'Com/Sem', label: 'Operador' },
      { val: 'Imediata', label: 'Disponibilidade' }, { val: '24h', label: 'Suporte' },
    ],
    usos: ['Movimentação de materiais', 'Mistura e carga em obras', 'Loteamentos e condomínios', 'Obras de infraestrutura', 'Agropecuária e fazendas', 'Construção civil em geral'],
  },
  retroescavadeira: {
    marca: 'JCB', nomeCompleto: 'JCB 4CX ECO', modelo: 'Retroescavadeira',
    img: '/images/equip-retroescavadeira.jpg.png', msg: messages.jcb4cx,
    descricao: 'A JCB 4CX ECO combina versatilidade, economia de combustível e robustez em uma única máquina. Ideal para escavação, carga e nivelamento com precisão em qualquer tipo de terreno.',
    specs: [
      { val: '4CX', label: 'Modelo' }, { val: 'ECO', label: 'Versão' },
      { val: 'Mato Grosso', label: 'Disponível em' }, { val: 'Com/Sem', label: 'Operador' },
      { val: 'Imediata', label: 'Disponibilidade' }, { val: '24h', label: 'Suporte' },
    ],
    usos: ['Escavação de fundações e valas', 'Carga e deslocamento de material', 'Nivelamento de terrenos', 'Drenagem e saneamento', 'Piscinas e lagos artificiais', 'Obras em espaços variados'],
  },
  miniescavadeira: {
    marca: null, nomeCompleto: 'Miniescavadeira Compacta', modelo: 'Miniescavadeira',
    img: '/images/equip-miniescavadeira.jpg.png', msg: messages.mini,
    descricao: 'A miniescavadeira é a solução ideal para trabalhos em espaços reduzidos onde máquinas maiores não conseguem operar. Perfeita para valas, fundações e trabalhos de precisão.',
    specs: [
      { val: 'Mini', label: 'Porte' }, { val: 'Compacta', label: 'Tipo' },
      { val: 'Mato Grosso', label: 'Disponível em' }, { val: 'Com/Sem', label: 'Operador' },
      { val: 'Consultar', label: 'Disponibilidade' }, { val: '24h', label: 'Suporte' },
    ],
    usos: ['Espaços reduzidos e confinados', 'Valas para tubulações', 'Fundações residenciais', 'Jardins e paisagismo', 'Obras em áreas urbanas', 'Trabalhos de precisão'],
  },
}

export default function EquipamentoDetalhe() {
  const { slug } = useParams()
  const eq = dados[slug]
  if (!eq) return <div style={{ padding: 80, textAlign: 'center' }}>Equipamento não encontrado. <Link to="/equipamentos">Voltar</Link></div>

  return (
    <main>
      {/* Hero */}
      <div style={{ background: '#111', padding: '48px 40px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 12 }}>
            <Link to="/" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Início</Link>
            {' / '}
            <Link to="/equipamentos" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Equipamentos</Link>
            {' / '}
            <span style={{ color: 'var(--yellow)' }}>{eq.nomeCompleto}</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'end', paddingBottom: 0 }} className="detalhe-hero">
            <div style={{ paddingBottom: 48 }}>
              {eq.marca && <div style={{ display: 'inline-block', background: 'var(--yellow)', color: '#111', fontSize: 11, fontWeight: 700, fontFamily: 'var(--font-display)', padding: '4px 10px', borderRadius: 2, marginBottom: 16 }}>{eq.marca}</div>}
              <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 2, color: 'rgba(255,255,255,0.4)', marginBottom: 8 }}>{eq.modelo}</div>
              <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(28px, 4vw, 52px)', color: '#fff', lineHeight: 1.1, marginBottom: 20 }}>{eq.nomeCompleto}</h1>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, fontWeight: 300, marginBottom: 28 }}>{eq.descricao}</p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <button onClick={() => openWhatsApp(eq.msg)} style={{ background: 'var(--yellow)', color: '#111', border: 'none', borderRadius: 3, padding: '13px 28px', fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 800, cursor: 'pointer' }}>
                  Solicitar Orçamento
                </button>
                <Link to="/equipamentos" style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 3, padding: '13px 24px', fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
                  ← Ver todos
                </Link>
              </div>
            </div>
            <div style={{ height: 380, overflow: 'hidden', borderRadius: '4px 4px 0 0' }}>
              <img src={eq.img} alt={eq.nomeCompleto} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Specs + Usos */}
      <div style={{ background: 'var(--gray)', padding: '56px 40px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }} className="detalhe-specs">
          {/* Specs */}
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 22, color: '#111', marginBottom: 20 }}>Especificações</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, border: '1px solid var(--border)', background: '#fff' }}>
              {eq.specs.map((s, i) => (
                <div key={i} style={{ padding: '16px 20px', borderRight: i % 2 === 0 ? '1px solid var(--border)' : 'none', borderBottom: i < eq.specs.length - 2 ? '1px solid var(--border)' : 'none' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18, color: '#111' }}>{s.val}</div>
                  <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 1, color: 'var(--muted)', marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Usos */}
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 22, color: '#111', marginBottom: 20 }}>Aplicações</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0, border: '1px solid var(--border)', background: '#fff' }}>
              {eq.usos.map((uso, i) => (
                <div key={i} style={{ padding: '14px 20px', borderBottom: i < eq.usos.length - 1 ? '1px solid var(--border)' : 'none', display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 6, height: 6, background: 'var(--yellow)', borderRadius: '50%', flexShrink: 0 }} />
                  <span style={{ fontSize: 14, color: '#111', fontWeight: 500 }}>{uso}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <CTABanner titulo="Equipamento disponível para locação imediata em Cuiabá e todo Mato Grosso. Fale agora com um consultor!" />

      <style>{`
        @media (max-width: 768px) {
          .detalhe-hero, .detalhe-specs { grid-template-columns: 1fr !important; gap: 24px !important; }
          main > div:first-child { padding: 32px 20px 0 !important; }
          main > div:nth-child(2) { padding: 32px 20px !important; }
        }
      `}</style>
    </main>
  )
}
