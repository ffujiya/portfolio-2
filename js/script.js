const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

  const burgerMenu = document.querySelector('.icon-menu');
  const menuBody = document.querySelector('.menu__body');
  const menuLinks = document.querySelectorAll('.menu__link');
  const body = document.querySelector('body');

  burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    menuBody.classList.toggle('active');
    body.classList.toggle('locked');
  })

  menuLinks.forEach(item => item.addEventListener('click', () => {
    if(burgerMenu.classList.contains('active')) burgerMenu.classList.remove('active');
    if(menuBody.classList.contains('active')) menuBody.classList.remove('active');
    if(body.classList.contains('locked')) body.classList.remove('locked');
  }))

  