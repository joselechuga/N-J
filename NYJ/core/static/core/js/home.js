



/* FUNCION PARA CAMBIAR DE COLOR LA BARRA DE NAVEGACION AL REALIZAR SCROLL - HOVER*/
$(document).ready(function () {


    $('.imgservi').hide();

    var nav = document.getElementById('navbar');

    window.addEventListener('scroll',function(){
        if(this.window.pageYOffset > 190){
            nav.classList.add('shadow');
            $(".menu").css({'background-color': ' #0f6ec1'});
            $('a').css({'-webkit-text-stroke': '0px black'});
            $('a').css({'color': '#f1eeee'});
        }else{ 
            nav.classList.remove('shadow');
            $(".menu").css({'background-color': ' #5555d600'});
            $('a').css({'-webkit-text-stroke': '0.5px black'});
            $('a').css({'color': '#010101'});
        }

        if(this.window.pageYOffset >= 600){
            $('.imgservi').fadeIn();

        }else{
            $('.imgservi').fadeOut();
        }

});
//------------------------------------------------------------------------


});

