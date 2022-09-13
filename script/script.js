const swiper = new Swiper('.swiper', {
  // Slide por visualização
  slidesPerView: 1,

  // Espaçamento entre Slides
  spaceBetween: 30,

  // Looping do slide
  loop: true,

  // Setas de Navegação
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Bolinhas de paginação clicáveis
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  // Mover slide através do Scroll
  mousewheel: {
    invert: true,
  },
});