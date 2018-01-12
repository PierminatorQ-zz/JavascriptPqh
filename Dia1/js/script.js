
/*document.addEventListener('keydown', (event) => {
	const keyname = event.keyCode;
	console.log('presionaste la tecla ' + keyname)
})
*/
/*
document.addEventListener('keydown', function(press){
	var keyname = press.keyCode;
	console.log('keyname')


	var obtener = document.getElementsByClassName('keynote').data-key ;
})
*/

document.addEventListener('keydown', function(press){
	var keyname = press.keyCode;
	console.log(keyname);
})

var x = document.getElementsByClassName('keyname'); 

function playAudio (){
    x.play();
   
}