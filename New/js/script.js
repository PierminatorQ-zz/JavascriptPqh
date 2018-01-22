var fotos = ["http://lorempixel.com/100/100/cats/1", "http://lorempixel.com/100/100/cats/2","http://lorempixel.com/100/100/cats/3","http://lorempixel.com/100/100/cats/4","http://lorempixel.com/100/100/cats/5","http://lorempixel.com/100/100/cats/6"]
 //var fotos =[1,2,3,4,5,6]


var carts = document.querySelectorAll(".cards");

for (i=0 ; i<6; i++){
var t = fotos[i];
console.log(t);
var tras = carts[i].innerHTML= "<img src='"  + t + "' alt= />";

 }
