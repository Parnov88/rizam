import { higgsfield, config } from '@higgsfield/client/v2'
import fs from 'fs'
import path from 'path'
import https from 'https'
import http from 'http'

config({
  credentials: 'f2350b03-6db4-407e-b6f7-12a5fb28d56e:69a0986772dd96c2d6c9bbb4c9eba64e544142049e52785e8c59395c3880b953'
})

const OUTPUT_DIR = './public/images'

const images = [
  // Equipamentos — thumbnail 16:9
  {
    filename: 'equip-carregadeira.jpg',
    aspect_ratio: '16:9',
    prompt: 'Professional product photo of a New Holland wheel loader on a construction site, yellow machine, dramatic lighting, photorealistic, high quality commercial photography, no text'
  },
  {
    filename: 'equip-retroescavadeira.jpg',
    aspect_ratio: '16:9',
    prompt: 'Professional product photo of a JCB 4CX backhoe loader on a construction site, yellow machine, dramatic lighting, photorealistic, high quality commercial photography, no text'
  },
  {
    filename: 'equip-miniescavadeira.jpg',
    aspect_ratio: '16:9',
    prompt: 'Professional product photo of a compact mini excavator on a construction site, orange machine, dramatic lighting, photorealistic, high quality commercial photography, no text'
  },
  // Serviços — ícone quadrado 1:1
  {
    filename: 'service-terraplanagem.jpg',
    aspect_ratio: '1:1',
    prompt: 'Earthmoving and grading construction site, bulldozer leveling terrain, aerial view, professional photography, construction industry, golden hour light'
  },
  {
    filename: 'service-limpeza.jpg',
    aspect_ratio: '1:1',
    prompt: 'Land clearing vegetation removal construction site, machinery clearing trees and brush, professional photography, green field transformation'
  },
  {
    filename: 'service-escavacao.jpg',
    aspect_ratio: '1:1',
    prompt: 'Deep excavation work at construction site, excavator digging foundation, professional photography, construction industry, dramatic lighting'
  },
  {
    filename: 'service-nivelamento.jpg',
    aspect_ratio: '1:1',
    prompt: 'Surface leveling and grading work, motor grader smoothing terrain, professional photography, construction site, dust and dirt, golden light'
  },
  {
    filename: 'service-transporte.jpg',
    aspect_ratio: '1:1',
    prompt: 'Construction material loading and transport, dump truck being loaded by excavator at construction site, professional photography, dynamic scene'
  },
  {
    filename: 'service-drenagem.jpg',
    aspect_ratio: '1:1',
    prompt: 'Drainage pipe installation at construction site, workers placing large concrete pipes in trench, professional photography, infrastructure project'
  },
]

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http
    const file = fs.createWriteStream(filepath)
    protocol.get(url, (response) => {
      response.pipe(file)
      file.on('finish', () => { file.close(); resolve() })
    }).on('error', reject)
  })
}

async function run() {
  console.log(`\n🎨 Gerando ${images.length} imagens com Higgsfield AI...\n`)

  for (const img of images) {
    try {
      process.stdout.write(`→ ${img.filename} ... `)

      const jobSet = await higgsfield.subscribe(
        'flux-pro/kontext/max/text-to-image',
        {
          input: {
            aspect_ratio: img.aspect_ratio,
            prompt: img.prompt,
            safety_tolerance: 2
          },
          withPolling: true
        }
      )

      if (jobSet.isCompleted) {
        const imageUrl = jobSet.jobs[0].results?.raw?.url
        if (imageUrl) {
          const filepath = path.join(OUTPUT_DIR, img.filename)
          await downloadImage(imageUrl, filepath)
          console.log(`✓ salvo`)
        } else {
          console.log(`✗ sem URL no resultado`)
        }
      } else {
        console.log(`✗ job não concluído`, JSON.stringify(jobSet, null, 2))
      }
    } catch (err) {
      console.log(`✗ erro: ${err.message}`)
    }
  }

  console.log('\n✅ Pronto! Imagens em public/images/')
}

run()
