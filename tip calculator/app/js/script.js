
//custom function
function calculateTip () {
    //store data of uinputs
    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var numPeople = document.getElementById("totalPeople").value;
    
    //validacion rapida
    
    if(billAmount === "" || serviceQuality == 0) {
       window.alert ("Por favor ingresa valores válidos ");
       return; // previene haecr la funcion continuamente
       }
    
    //check validacion de each
    if (numPeople === "" || numPeople <= 1){
        numPeople = 1;
        document.getElementById("each").style.display="none";
        } else {
            document.getElementById("each").style.display="block";
        }
    
    // calculo
    var total =( billAmount * serviceQuality) /numPeople;
    total = Math.round(total  * 100) / 100;
    total = total.toFixed(2);
    
    
    //mostrar tip
  document.getElementById("totalTip").style.display ="block";
    document.getElementById("tip").innerHTML = total;
    return false;
}

// esconder el tip amount
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//click boton crear funcion call
document.getElementById("calculate").onclick = function() { calculateTip (); };

