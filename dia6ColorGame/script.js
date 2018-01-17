

reset()

var btn = document.querySelector(".btnhard");
btn.addEventListener("click", function(){


});

var btn = document.querySelector(".newcol");
btn.addEventListener("click", function(){
reset();

});


function reset(){

var colorlarg = ["rgb(35, 244, 220)","rgb(89, 17, 60)","rgb(98, 121, 125)","rgb(163, 121, 215)","rgb(231, 127, 192)","rgb(129, 50, 230)","rgb(183, 219, 75)","rgb(67, 46, 36)","rgb(97, 147, 112)","rgb(251, 228, 43)", "rgb(236, 216, 226)", "rgb(211, 177, 119)", "rgb(41, 16, 127)", "rgb(134, 233, 158)", "rgb(232, 180, 143)", "rgb(117, 99, 116)", "rgb(74, 94, 63)", "rgb(222, 80, 84)", "rgb(49, 173, 222)", "rgb(205, 235, 7)"];
var colores = colorlarg ;


function arrayst(colores){  
var num = colores //[0,1,2,3,4,5,6,7,8,9];
var indice = Math.floor(Math.random()*num.length);
var number = num[indice];
num.splice(indice, 1);                     
return number
}

//nuevo array

var newarray = [];
for (i=0;i<=5;i++){
newarray.push(arrayst(colores)); 
};





//asignacion cuadrados
var card1 = document.querySelector(".c1");
var card2 = document.querySelector(".c2");
var card3 = document.querySelector(".c3");
var card4 = document.querySelector(".c4");
var card5 = document.querySelector(".c5");
var card6 = document.querySelector(".c6");
//si presiona easy solo 3 si presiona hard solo 6 
card1.style.background = newarray[0];
card2.style.background = newarray[1];
card3.style.background = newarray[2];
card4.style.background = newarray[3];
card5.style.background = newarray[4];
card6.style.background = newarray[5];



};