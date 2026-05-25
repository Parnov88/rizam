import { motion } from 'motion/react'

const featured = {
  titulo: 'Como preparar um terreno para construção: guia completo',
  excerpt: 'Antes de qualquer obra, a preparação do terreno é essencial. Neste guia, explicamos as etapas de limpeza, nivelamento e compactação para garantir uma base sólida.',
  categoria: 'Terraplanagem',
  data: 'Maio 2025',
}

const laterais = [
  { titulo: 'New Holland W12D: quando usar uma carregadeira de rodas?', categoria: 'Locação', data: 'Abr 2025' },
  { titulo: 'JCB 4CX ECO: o que torna essa retroescavadeira diferente?', categoria: 'Equipamentos', data: 'Mar 2025' },
  { titulo: '5 erros em terraplanagem que encarecem sua obra', categoria: 'Dicas', data: 'Fev 2025' },
  { titulo: 'Locar ou comprar máquina? Quando cada opção compensa', categoria: 'Gestão', data: 'Jan 2025' },
]

export default function BlogSection() {
  return (
    <section id="blog" style={{ background: '#fff', padding: '80px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, flexWrap: 'wrap', gap: 12 }}>
          <div>
            <div style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--orange)', fontFamily: 'var(--font-display)', fontWeight: 600, marginBottom: 8 }}>BLOG</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(22px, 3vw, 36px)', color: '#111' }}>Conteúdo e dicas</h2>
          </div>
          <a href="#blog" style={{ fontSize: 14, color: '#111', textDecoration: 'underline', textDecorationColor: 'var(--yellow)', textUnderlineOffset: 3 }}>
            Ver todas as postagens →
          </a>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr', gap: 28 }} className="blog-grid">
          {/* Card principal */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ border: '1px solid var(--border)', overflow: 'hidden', cursor: 'pointer' }}>
            <div style={{ height: 260, background: 'linear-gradient(135deg, #1a1a1a, #2d2d2d)', position: 'relative', display: 'flex', alignItems: 'flex-end', padding: 16 }}>
              <span style={{ background: 'var(--yellow)', color: '#111', fontSize: 11, fontWeight: 700, fontFamily: 'var(--font-display)', padding: '4px 10px', borderRadius: 2 }}>{featured.categoria}</span>
            </div>
            <div style={{ padding: 24 }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20, color: '#111', lineHeight: 1.3, marginBottom: 10 }}>{featured.titulo}</h3>
              <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7, fontWeight: 300, marginBottom: 16 }}>{featured.excerpt}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 12, color: 'var(--muted)' }}>{featured.data}</span>
                <a href="#" style={{ fontSize: 13, color: '#111', textDecoration: 'underline', textDecorationColor: 'var(--yellow)', textUnderlineOffset: 3 }}>Leia mais</a>
              </div>
            </div>
          </motion.div>

          {/* Lista lateral */}
          <div style={{ border: '1px solid var(--border)' }}>
            {laterais.map((post, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                style={{ display: 'grid', gridTemplateColumns: '80px 1fr', borderBottom: i < laterais.length - 1 ? '1px solid var(--border)' : 'none', cursor: 'pointer', transition: 'background 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--gray)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                <div style={{ background: '#1a1a1a', minHeight: 80 }} />
                <div style={{ padding: '14px 16px' }}>
                  <div style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: 1.5, color: 'var(--orange)', fontWeight: 600, marginBottom: 4 }}>{post.categoria}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13, color: '#111', lineHeight: 1.35, marginBottom: 6 }}>{post.titulo}</div>
                  <div style={{ fontSize: 11, color: 'var(--muted)' }}>{post.data}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #blog { padding: 56px 20px !important; }
          .blog-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
