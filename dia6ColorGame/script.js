
var colorlarg = [ ["rojo", "rojito"], ["verde","verdecito"],["amarillo","amarillito"], ["azul","azulito"],["cafe","cafecito"],["blanco","blanquito"],["purpura","purpurita"],["negro","negrito"],["cian","ciancito"],["rosa","rosita"], ]

var colorcort = [0,1,2,3,4,5,6,7,8,9];
var colores = colorlarg ;

function arrayst (colores){  
var num = colores //[0,1,2,3,4,5,6,7,8,9];
var indice = Math.floor(Math.random()*num.length);
var number = num[indice];
num.splice(indice, 0);                     
 console.log(number);
}