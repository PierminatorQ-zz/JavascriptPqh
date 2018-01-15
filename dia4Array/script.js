

// SOLUCIONES A PROBLEMAS DE ARRAYS


//reversa todos los elementos de un array
/*
function isReverse(colores)  {
var reca = colores.reverse();

reca.forEach(function(paka) {
  
  console.log(paka);
});
}

isReverse([1,2,3,4,5]);
*/




 /*
 // verifica que todos sean iguales
 
 function isUniform(numbers){
  
var iguales = numbers.every(function(e) {
    return e == numbers[0];
});
console.log(iguales); 
 }
 
 
 isUniform(["u", "u", "u", "u"]);
 
 */

 
 

// suma todos los elementos de un Array

function sumArray(sum){
var resu= 0;

sum.forEach(function(value){
  resu += value;
  
})
/*
for (i=0; i <sum.length;i++ ){
  resu += sum[i];
 
}
*/
 console.log(resu);
}

sumArray([10,3,10,4]);




/*
//encuentra el valor maximo

function max(a){
     var mayor = Math.max.apply(null,a);
     console.log(mayor);
}

max([6,2,76,9]);
*/

