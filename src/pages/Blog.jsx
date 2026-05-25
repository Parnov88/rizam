import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

const posts = [
  { slug: 'preparar-terreno-construcao', titulo: 'Como preparar um terreno para construção: guia completo', categoria: 'Terraplanagem', data: 'Maio 2025', excerpt: 'Antes de qualquer obra, a preparação do terreno é essencial. Neste guia, explicamos as etapas de limpeza, nivelamento e compactação para garantir uma base sólida e segura para sua construção.', img: '/images/service-terraplanagem.jpg.png' },
  { slug: 'quando-usar-carregadeira', titulo: 'New Holland W12D: quando usar uma carregadeira de rodas?', categoria: 'Locação', data: 'Abr 2025', excerpt: 'A carregadeira de rodas é versátil e eficiente. Descubra em quais situações ela é a melhor escolha para sua obra e como a W12D se destaca no mercado.', img: '/images/equip-carregadeira.jpg.png' },
  { slug: 'jcb-4cx-eco-diferenciais', titulo: 'JCB 4CX ECO: o que torna essa retroescavadeira diferente?', categoria: 'Equipamentos', data: 'Mar 2025', excerpt: 'A JCB 4CX ECO combina versatilidade com economia de combustível. Entenda por que ela é uma das retroescavadeiras mais procuradas para locação em Mato Grosso.', img: '/images/equip-retroescavadeira.jpg.png' },
  { slug: 'erros-terraplanagem', titulo: '5 erros em terraplanagem que encarecem sua obra', categoria: 'Dicas', data: 'Fev 2025', excerpt: 'Evite prejuízos! Conheça os erros mais comuns na etapa de terraplanagem que geram retrabalho, atrasos e custos extras nas obras.', img: '/images/service-nivelamento.jpg.png' },
  { slug: 'locar-ou-comprar-maquina', titulo: 'Locar ou comprar máquina? Quando cada opção compensa', categoria: 'Gestão', data: 'Jan 2025', excerpt: 'Antes de investir em equipamento próprio, veja a análise completa dos custos de locação versus compra de máquinas pesadas para sua empresa ou obra.', img: '/images/service-escavacao.jpg.png' },
  { slug: 'miniescavadeira-espacos-reduzidos', titulo: 'Miniescavadeira: a solução para obras em espaços reduzidos', categoria: 'Equipamentos', data: 'Dez 2024', excerpt: 'Em áreas urbanas e espaços confinados, a miniescavadeira é indispensável. Veja quando ela é a melhor opção e como otimizar seu uso em obra.', img: '/images/equip-miniescavadeira.jpg.png' },
]

const categorias = ['Todos', 'Terraplanagem', 'Locação', 'Equipamentos', 'Dicas', 'Gestão']

export default function Blog() {
  return (
    <main>
      {/* Header */}
      <div style={{ background: '#111', padding: '56px 40px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--yellow)', fontFamily: 'var(--font-display)', fontWeight: 600, marginBottom: 12 }}>BLOG</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(28px, 4vw, 52px)', color: '#fff', marginBottom: 14 }}>Conteúdo e dicas</h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', fontWeight: 300 }}>Tudo sobre terraplanagem, locação de máquinas e gestão de obras em MT.</p>
        </div>
      </div>

      {/* Categorias */}
      <div style={{ background: '#fff', borderBottom: '1px solid var(--border)', padding: '0 40px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', gap: 0, overflowX: 'auto' }}>
          {categorias.map((c, i) => (
            <button key={i} style={{ padding: '16px 20px', background: 'none', border: 'none', borderBottom: i === 0 ? '3px solid var(--yellow)' : '3px solid transparent', fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: i === 0 ? 700 : 500, color: i === 0 ? '#111' : 'var(--muted)', cursor: 'pointer', whiteSpace: 'nowrap' }}>
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Posts */}
      <div style={{ background: 'var(--gray)', padding: '56px 40px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 24 }}>
          {posts.map((post, i) => (
            <motion.article key={post.slug}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{ background: '#fff', border: '1px solid var(--border)', overflow: 'hidden', transition: 'box-shadow 0.2s, transform 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 6px 30px rgba(0,0,0,0.08)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)' }}>
              <div style={{ height: 200, overflow: 'hidden', position: 'relative' }}>
                <img src={post.img} alt={post.titulo} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
                <span style={{ position: 'absolute', bottom: 12, left: 12, background: 'var(--yellow)', color: '#111', fontSize: 10, fontWeight: 700, fontFamily: 'var(--font-display)', padding: '3px 8px', borderRadius: 2 }}>{post.categoria}</span>
              </div>
              <div style={{ padding: '20px 22px' }}>
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 16, color: '#111', lineHeight: 1.35, marginBottom: 10 }}>{post.titulo}</h2>
                <p style={{ fontSize: 13.5, color: 'var(--muted)', lineHeight: 1.7, fontWeight: 300, marginBottom: 16 }}>{post.excerpt}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 12, color: 'var(--muted)' }}>{post.data}</span>
                  <Link to={`/blog/${post.slug}`} style={{ fontSize: 13, color: '#111', textDecoration: 'underline', textDecorationColor: 'var(--yellow)', textUnderlineOffset: 3 }}>Leia mais →</Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          main > div:first-child { padding: 40px 20px 32px !important; }
          main > div:nth-child(3) { padding: 32px 20px !important; }
        }
      `}</style>
    </main>
  )
}
