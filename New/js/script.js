var fotos = ["http://lorempixel.com/100/100/cats", "http://lorempixel.com/100/100/cats","http://lorempixel.com/100/100/cats","http://lorempixel.com/100/100/cats","http://lorempixel.com/100/100/cats","http://lorempixel.com/100/100/cats","http://lorempixel.com/100/100/cats","http://lorempixel.com/100/100/cats","http://lorempixel.com/100/100/cats","http://lorempixel.com/100/100/cats",]


for (i=0 ; i<fotos.length; i++){
var ale = Math.floor(Math.random()*10);
console.log(ale);
var selected = fotos[ale];
 }


console.log(selected);