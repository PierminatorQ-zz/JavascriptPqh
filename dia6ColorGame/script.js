

var easyHard= true;
reset()
var newarray = [];
var pick6 ;
var pick3 ;
 // true para hard, false para easy


// botones asignaciones

var btn = document.querySelector(".btnhard");
btn.addEventListener("click", function(){
hardflow();
reset();
desverifica();
resetMensaje();


});

var btn = document.querySelector(".btneasy");
btn.addEventListener("click", function(){
easyflow();
reset();
desverifica();
resetMensaje();


});

var btn = document.querySelector(".newcol");
btn.addEventListener("click", function(){
reset();
desverifica();
resetMensaje();

});


// toogle easy a hard

function easyflow (){
	document.querySelector(".c4").classList.add("fade");
	document.querySelector(".c5").classList.add("fade");
	document.querySelector(".c6").classList.add("fade");
	easyHard = false;
}

function hardflow (){
	document.querySelector(".c4").classList.remove("fade");
	document.querySelector(".c5").classList.remove("fade");
	document.querySelector(".c6").classList.remove("fade");
	easyHard = true;
}


// aletoriedad tarjetas

function reset(){

var colorlarg = ["rgb(35, 244, 220)","rgb(89, 17, 60)","rgb(98, 121, 125)","rgb(163, 121, 215)","rgb(231, 127, 192)","rgb(129, 50, 230)","rgb(34, 64, 191)","rgb(67, 46, 36)","rgb(97, 147, 112)","rgb(251, 228, 43)", "rgb(236, 216, 226)", "rgb(211, 177, 119)", "rgb(41, 16, 127)", "rgb(134, 233, 158)", "rgb(232, 180, 143)", "rgb(117, 99, 116)", "rgb(74, 94, 63)", "rgb(222, 80, 84)", "rgb(49, 173, 222)", "rgb(205, 235, 7)"];
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

// escribe el color elegido
var wintitle = document.querySelector("h1");


if ( easyHard === true) {
var elige = newarray;
var choo = Math.floor(Math.random()*elige.length);
var nomber = elige[choo];
elige.splice(choo, 0);                     
wintitle.innerHTML =nomber;
pick6 = nomber;  
console.log(newarray);
console.log(elige3);



//return nomber


} 

else if ( easyHard === false){
var elige3 = newarray.splice(0,3);
var choo3 = Math.floor(Math.random()*elige3.length);
var nomber3 = elige3[choo3];
elige3.splice(choo3, 0);  
wintitle.innerHTML =nomber3; 
console.log(elige3);
pick3 = nomber3;                
return nomber3

}



};  //reset

var elegido;


function desverifica(e){
var bord=document.getElementsByClassName("cards");
for ( i=0;i< bord.length ; i++){
bord[i].classList.remove("elemal");
}; //for
}; // desverifica


function verifica(e){
var elegido = e.target;
var claseP = elegido.style.background;
var mensaje = document.querySelector(".msj");


// if verificador
var fondo = document.querySelector(".conth1");
var verdad= false;
 if (pick6 == claseP){
fondo.style.background= claseP;
mensaje.innerHTML = "GANASTE !!!"
colorganador();
verdad = true;

 } else if (pick3 == claseP){
fondo.style.background= claseP;
mensaje.innerHTML = "GANASTE !!!"
colorganador();
verdad = true;

 } else { 
			elegido.classList.add('elemal');
			mensaje.innerHTML = "Intentalo de nuevo"
  
 }//if cierre


function colorganador(e){
var bord1=document.getElementsByClassName("cards");
for ( i=0;i< bord1.length ; i++){
bord1[i].style.background= claseP;
}; //for
};


}; // verifica


function resetMensaje(){
var msj2 = document.querySelector("p");
msj2.innerHTML = "Elige un Color"	

var fondo3 = document.querySelector("#tap");
fondo3.style.background= "cyan";

}
