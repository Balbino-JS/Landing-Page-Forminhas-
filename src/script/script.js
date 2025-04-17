/* Usaremos jQuery para a função de movimento do icone fa-bars*/
$(document).ready(() =>{
    $('#mobile_btn').on('click', () => {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
        
    });
});

