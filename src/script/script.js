/* Usaremos jQuery para a função de movimento do icone fa-bars*/
$(doument).ready(function(){
    $('#mobile_btn').on('click', function(){
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x')
    });
});