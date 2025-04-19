/* Usaremos jQuery para a função de movimento do icone fa-bars*/
$(document).ready(() =>{
    $('#mobile_btn').on('click', () => {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
        
    });

    const img = document.querySelector('.img-profile');

img.addEventListener('click', () => {
    // Se já está com zoom, não reaplica
    if (!img.classList.contains('img-zoom')) {
        img.classList.add('img-zoom');
        setTimeout(() => {
            img.classList.remove('img-zoom');
        }, 2000); // 2 segundos
    }
});
});

const swiper = new Swiper('.swiper', {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });



