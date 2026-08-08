console.log("arquivo carregado");
/*ANNIMAÇÃO ONDAS EFEITO PARALAX*/
/* PRIMEIRA DIVISÃO DE ONDAS */
var onda1 = document.getElementById("onda1");
var onda2 = document.getElementById("onda2");
var onda3 = document.getElementById("onda3");
var onda4 = document.getElementById("onda4");

/* SEGUNDA DIVISÃO DE ONDAS */
var onda5 = document.getElementById("onda5");
var onda6 = document.getElementById("onda6");
var onda7 = document.getElementById("onda7");
var onda8 = document.getElementById("onda8");

document.body.addEventListener("scroll", function () {
  /*pegando a posição quando o usuario rola a pagina, para diferentes navegadores colocamos todos os que sao usados neles para que a função não falhe*/
  var rolagemPosition = window.scrollY || document.documentElement.scrollTop ||document.body.scrollTop; 
  /*aqui multiplicamos a rolagem da posição por 4 (que e relativo)e depois transformamos esse valor em px*/
  /*PRIMEIRA ONDA*/
  onda1.style.backgroundPositionX = 400 + rolagemPosition * 4 + "px"; 
  onda2.style.backgroundPositionX = 300 + rolagemPosition * -4 + "px"; 
  onda3.style.backgroundPositionX = 200 + rolagemPosition * 2 + "px"; 
  onda4.style.backgroundPositionX = 100 + rolagemPosition * -2 + "px"; 
  
  /*SEGUNDA ONDA*/
  onda5.style.backgroundPositionX = 400 + rolagemPosition * 4 + "px"; 
  onda6.style.backgroundPositionX = 300 + rolagemPosition * -4 + "px"; 
  onda7.style.backgroundPositionX = 200 + rolagemPosition * 2 + "px"; 
  onda8.style.backgroundPositionX = 100 + rolagemPosition * -2 + "px"; 

});

// console.log("window:", window.scrollY);
// console.log("html:", document.documentElement.scrollTop);
// console.log("body:", document.body.scrollTop);
