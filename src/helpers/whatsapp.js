const phone = '5565993392002'

export const messages = {
  general: 'Olá! Gostaria de solicitar um orçamento da Rizam Locações.',
  w12d: 'Olá! Tenho interesse em locar a Carregadeira New Holland W12D.',
  jcb4cx: 'Olá! Tenho interesse em locar a Retroescavadeira JCB 4CX ECO.',
  mini: 'Olá! Tenho interesse em locar uma Miniescavadeira.',
  terraplanagem: 'Olá! Preciso de um serviço de terraplanagem. Podem me ajudar?',
}

export const openWhatsApp = (message = messages.general) => {
  const text = encodeURIComponent(message)
  window.open(`https://wa.me/${phone}?text=${text}`, '_blank')
}
