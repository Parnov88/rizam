import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import CTABanner from '../components/CTABanner'

const segmentos = [
  {
    icon: '🏗️', nome: 'Construção Civil', cor: '#E8600A',
    descricao: 'Fundações, estruturas, loteamentos e condomínios. Nossas máquinas atuam desde a terraplanagem inicial até os acabamentos de movimentação de terra.',
    servicos: ['Terraplanagem', 'Escavação de fundações', 'Nivelamento de laje', 'Carga e remoção de entulho'],
    img: '/images/service-escavacao.jpg.png',
  },
  {
    icon: '🌾', nome: 'Agropecuária', cor: '#16a34a',
    descricao: 'Preparação de áreas para plantio, construção de açudes, estradas vicinais e infraestrutura rural. Atendemos fazendas em todo Mato Grosso.',
    servicos: ['Abertura de estradas', 'Construção de açudes', 'Terraplanagem de pátios', 'Limpeza de pastagens'],
    img: '/images/service-terraplanagem.jpg.png',
  },
  {
    icon: '🏭', nome: 'Indústria e Logística', cor: '#2563eb',
    descricao: 'Preparação de pátios industriais, galpões e áreas de movimentação de cargas. Nivelamento preciso para operações com empilhadeiras e veículos pesados.',
    servicos: ['Nivelamento de pátios', 'Preparação de galpões', 'Drenagem industrial', 'Compactação de solo'],
    img: '/images/service-nivelamento.jpg.png',
  },
  {
    icon: '🏘️', nome: 'Loteamentos', cor: '#7c3aed',
    descricao: 'Abertura e regularização de loteamentos residenciais e comerciais. Executamos desde a topografia até a infraestrutura completa de vias e drenagem.',
    servicos: ['Terraplanagem geral', 'Abertura de vias', 'Drenagem pluvial', 'Compactação e acabamento'],
    img: '/images/service-limpeza.jpg.png',
  },
  {
    icon: '🛣️', nome: 'Infraestrutura Viária', cor: '#d97706',
    descricao: 'Obras de pavimentação, estradas rurais e rodovias municipais. Trabalhamos em parceria com prefeituras e construtoras de infraestrutura.',
    servicos: ['Terraplanagem viária', 'Corte e aterro', 'Compactação de sub-base', 'Drenagem de estradas'],
    img: '/images/service-drenagem.jpg.png',
  },
  {
    icon: '🏠', nome: 'Obras Residenciais', cor: '#0891b2',
    descricao: 'Para quem vai construir a casa própria. Preparação do terreno, fundações e movimentação de terra com equipamentos de porte adequado a cada situação.',
    servicos: ['Limpeza de terreno', 'Escavação residencial', 'Nivelamento', 'Miniescavadeira para espaços reduzidos'],
    img: '/images/equip-miniescavadeira.jpg.png',
  },
]

export default function Segmentos() {
  return (
    <main>
      <div style={{ background: '#111', padding: '56px 40px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--yellow)', fontFamily: 'var(--font-display)', fontWeight: 600, marginBottom: 12 }}>MERCADOS</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(28px, 4vw, 52px)', color: '#fff', marginBottom: 14 }}>Segmentos que atendemos</h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', fontWeight: 300, maxWidth: 600, margin: '0 auto' }}>De obras residenciais a grandes projetos de infraestrutura — temos a máquina certa para cada segmento.</p>
        </div>
      </div>

      <div style={{ background: 'var(--gray)', padding: '56px 40px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: 24 }}>
          {segmentos.map((seg, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{ background: '#fff', border: '1px solid var(--border)', overflow: 'hidden', transition: 'box-shadow 0.2s, transform 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 40px rgba(0,0,0,0.08)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)' }}>
              <div style={{ height: 180, overflow: 'hidden', position: 'relative' }}>
                <img src={seg.img} alt={seg.nome} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 40, marginBottom: 8 }}>{seg.icon}</div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 20, color: '#fff' }}>{seg.nome}</div>
                  </div>
                </div>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: seg.cor }} />
              </div>
              <div style={{ padding: '20px 22px' }}>
                <p style={{ fontSize: 13.5, color: 'var(--muted)', lineHeight: 1.7, fontWeight: 300, marginBottom: 16 }}>{seg.descricao}</p>
                <div style={{ marginBottom: 18 }}>
                  {seg.servicos.map((s, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '5px 0', borderBottom: j < seg.servicos.length - 1 ? '1px solid var(--border)' : 'none' }}>
                      <div style={{ width: 5, height: 5, background: seg.cor, borderRadius: '50%', flexShrink: 0 }} />
                      <span style={{ fontSize: 13, color: '#111' }}>{s}</span>
                    </div>
                  ))}
                </div>
                <Link to="/orcamento" style={{ display: 'block', textAlign: 'center', background: 'var(--yellow)', color: '#111', borderRadius: 3, padding: '10px', fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 800, textDecoration: 'none' }}>
                  Solicitar orçamento →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <CTABanner titulo="Independente do segmento, a Rizam tem o equipamento e a equipe certa para sua obra em Mato Grosso." />

      <style>{`
        @media (max-width: 768px) {
          main > div:first-child { padding: 40px 20px 32px !important; }
          main > div:nth-child(2) { padding: 32px 20px !important; }
        }
      `}</style>
    </main>
  )
}
