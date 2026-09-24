const menu = document.querySelector('.menu'); const links = document.querySelector('.links');
if (menu && links) { menu.addEventListener('click', () => { const open = links.classList.toggle('open'); menu.setAttribute('aria-expanded', open); }); links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open'))) }
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('show'); io.unobserve(e.target) } }), { threshold: .12 }); document.querySelectorAll('.reveal').forEach(el => io.observe(el));
document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => { const t = document.querySelector(a.getAttribute('href')); if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }) } }));

const formContato = document.getElementById('form-contato');
const modalSucesso = document.getElementById('modal-sucesso');
const closeModal = modalSucesso?.querySelector('.modal-close');

if (modalSucesso) {
  const abrirModal = () => {
    modalSucesso.classList.add('show');
    modalSucesso.setAttribute('aria-hidden', 'false');
  };

  const fecharModal = () => {
    modalSucesso.classList.remove('show');
    modalSucesso.setAttribute('aria-hidden', 'true');
  };

  closeModal?.addEventListener('click', fecharModal);
  modalSucesso.addEventListener('click', (event) => {
    if (event.target === modalSucesso) fecharModal();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modalSucesso.classList.contains('show')) {
      fecharModal();
    }
  });

  if (formContato) {
    formContato.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!formContato.checkValidity()) {
        formContato.reportValidity();
        return;
      }

      const nome = document.getElementById('nome').value.trim();
      const empresa = document.getElementById('empresa').value.trim();
      const email = document.getElementById('email').value.trim();
      const mensagem = document.getElementById('mensagem').value.trim();

      const whatsappNumber = '5561992084834';
      const whatsappMessage = encodeURIComponent(
        `Olá, time da KINGDOM!

Meu nome é ${nome}.
Empresa: ${empresa}
E-mail: ${email}

Meu problema atualmente é:
${mensagem}`
      );

      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      abrirModal();
    });
  }
}
