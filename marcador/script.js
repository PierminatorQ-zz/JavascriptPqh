var playerOne = 0;
var playerTwo = 0;
var probe = document.querySelector(".prueba").value;


// Actualiza el jugando hasta 
setInterval (function(){ verify()},500);

function verify() {
var probe = document.querySelector(".prueba");
var stop = document.querySelector(".limited");
    stop.innerHTML = probe.value;
    
   }
  

// botones de players


   var btn1 = document.querySelector("#btply1");
   var btn2 = document.querySelector("#btply2");
   var scorer1 = document.querySelector("#plyOne");
   var scorer2 = document.querySelector("#plyTwo");
   
  
  
  btn1.addEventListener("click", function( ){aplica1("1")},false);
  btn2.addEventListener("click", function( ) {aplica1("2")},false);
  
  function aplica1(elem){
    var check = document.querySelector(".prueba");
     // console.log(playerOne);
    // presentar la cuenta de clicks realizados sobre el elemento con id "prueba"
    if( elem ==1 )
    {
      if (playerOne < check.value){
      playerOne+= 1 ;
      scorer1.innerHTML =playerOne;
         if (playerOne == check.value) {
  scorer1.classList.add("warning");}
 
  
} 
    
    } else {
      if (playerTwo < check.value){
       playerTwo+= 1;
      scorer2.innerHTML=playerTwo;
      if (playerTwo == check.value) {
  scorer2.classList.add("warning");
      }
 
  
} 
    }
  }
  
  
  
  

  // reset 
  
   document.querySelector("#reset").addEventListener("click", function(){ reseti()},false);
   
   function reseti (){
     playerTwo = 0;
     playerOne = 0;
     
    // console.log(playerOne);
    // presentar la cuenta de clicks realizados sobre el elemento con id "prueba"
    scorer1.innerHTML =  playerOne;
    scorer2.innerHTML =  playerTwo;
    scorer1.classList.remove("warning");
   scorer2.classList.remove("warning");
    
    
   }

 

    
     
   
  // });

