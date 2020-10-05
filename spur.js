/*!
 * spur-template - An admin template based on Bootstrap 4
 * Version v1.1.0
 * Copyright 2016 - 2019 Alexander Rechsteiner
 * https://hackerthemes.com
 */

const mobileBreakpoint = window.matchMedia("(max-width: 991px )");

$(document).ready(function(){
    $(".dash-nav-dropdown-toggle").click(function(){
        $(this).closest(".dash-nav-dropdown")
            .toggleClass("show")
            .find(".dash-nav-dropdown")
            .removeClass("show");

        $(this).parent()
            .siblings()
            .removeClass("show");
    });

    $(".menu-toggle").click(function(){
        if (mobileBreakpoint.matches) {
            $(".dash-nav").toggleClass("mobile-show");
        } else {
            $(".dash").toggleClass("dash-compact");
        }
    });
    
    $('.collapse').collapse()

    $('#myCollapsible').on('hidden.bs.collapse', function () {
        // do something…
      })

    $(".searchbox-toggle").click(function(){
        $(".searchbox").toggleClass("show");
    });

    // Dev utilities
    // $("header.dash-toolbar .menu-toggle").click();
    // $(".searchbox-toggle").click();
});


// // var perro = "hazc lick";
// // const PI = 3.1416;

// // alert (PI);
// // document.write(perro)
// // Console.log(perro)

// // esto es la regra en la que va las divisiones
// // * multiplicaciom
// // / dividiendo 
// // % porsiento
// // + resta
// // - suma

// // esto es la regla de menor y mayor 
// // < mayor
// // > menor
// // == igual
// // <= menor o igual 
// // >= mayor o igual
// // != diferentes o igual

// // forma de expresar en js 
// // && = y 
// // || = o 
// // ! = negacion 



// // document.write(uno==dos ? "Es igual" : "no Es igual");

// // if(uno==dos){
// //     "ES IGUAL"
// // }else{
// //     "no es igual"
// // }

// // var uno = 2;
// // var dos;


// // switch(uno){
// //     case 0: dos="cero" ;break;
// //     case 1: dos="uno" ;break;
// //     case 2: dos="do loren ss" ;break;
// //     case 3: dos="tres" ;break;
// //     case 4: dos="cualto" ;break;
// //     default: dos="NO ES NIGUNO" ;break;
// // }
// // document.write(dos);


// // if(uno==dos){
// //     document.write("Es Igual 4");
// // }else if(uno==dos){
// //     document.write("Es Igual 5");
// // }else if(uno<=dos){
// //     document.write("ESta No Es");
// // }else if(uno==1){
// //     document.write("No Es Igual");
// // }else {document.write("NO ES IGUAL A NINGUNO")
// // };



// // if
// // if-else
// // if-else-if-else
// // switch

// function uno() {
//     var saludo = document.write("buenas a todos")
//     return saludo;
// };

// function lista(a, b, c,){
//     var imfomacion = document.write("este soy☝☝:" + a + "<br>este eres:👈👈"+ b + "<br> y ustedes:" + c );
// };

// function tres(nombre=""){
//     var responder = nombre;
//     return document.write(responder);
// };
// // tres('lovesander');
//  function cuatro(nombre, apellido){
//     if(nombre !=null && apellido !=null){ repuesta = document.write(nombre, apellido);
//     }else{ repuesta = document.write("no puso sus datos")};    
//  };

// //  cuatro("lovesonder   ","alcius");

// function cinco(...meses){
//     for(let uno of meses){
//     document.write(uno);
//     }
// };
// // cinco(" monmic", " monmic", " monmic", " monmic ", " lobvyudfb");
// function seis(nombre, precio, peso){
//     return "nombre: "+ nombre+"<br>precio: " + precio+"<br>peso: "+peso;
// };
// // var primero = ["soldado", 25, 2];

// // document.write ( seis (...primero))

// var siete = function(){
//     repuesta = "hola a todos";
//     return repuesta;
// };

// // document.write( siete())

// var a = function(nombre, uno){var e=nombre; uno(e); }; 
// var b = function(i){document.write(i); };

// a('lovessnder', b);
