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



