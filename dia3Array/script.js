


var arrai = [];

while (resp != "quit"){
var resp = prompt ("Qué deseas hacer?");
    
    if (resp == "new"){
      var insert = prompt("Cual tarea deseas añadir?");
      arrai.push(insert);
      
    } else if ( resp == "list"){
    	console.log("***********");
      	   	arrai.forEach(function (este, i){
       		console.log(i + ": " + este);
       		console.log("***********");	
    	});
      
    } else if ( resp == "delete"){
    	console.log("***********");
    		arrai.forEach(function (este, i){
       		console.log(i + ": " + este);
       		console.log("***********");	
    	});
      
       var indice = prompt("qué eñemento desea borrar?");
       arrai.splice(indice , 1);
       console.log("Borrado con Exito");


    }
      
    
} 

console.log("cerrandose...");
