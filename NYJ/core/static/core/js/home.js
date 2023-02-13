
/* FUNCION PARA CAMBIAR DE COLOR LA BARRA DE NAVEGACION AL REALIZAR SCROLL - HOVER*/
$(document).ready(function () {

    var nav = document.getElementById('navbar');

    window.addEventListener('scroll',function(){
        if(this.window.pageYOffset > 150){
            nav.classList.add('bg-primary','shadow');
            $("p").css({ color: "beige" });
        }else{
            $("p").css({ color: "#141515" }); 
            nav.classList.remove('bg-primary','shadow');
        }
    });
//------------------------------------------------------------------------
    $('p').hover(function() {
        $(this).css({ background: "#4195de" });
        $(this).css({ color: "beige" });
    }, function() {
        $(this).css({ background: "#11ffee00" }); 
        $(this).css({ color: "#141515" });
        
    });
/*
    hover para imagenes 
    $('.portada').hover(function(){
        $(this).css({ webkitfilter: 'grayscale(0%)'});
        $(this).css({ filter: 'grayscale(0%)'});
    },function(){
        $(this).css({ webkitfilter: 'grayscale(100%)'});
        $(this).css({ filter: 'grayscale(100%)'});
    });
   */ 

});
