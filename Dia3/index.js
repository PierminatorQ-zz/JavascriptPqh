
function setDate() {

var d = new Date();

var hora= d.getHours();
var min= d.getMinutes();
var seg= d.getSeconds();
var segDegree = ((seg / 60)* 360);
var minDegree = (( min / 60) * 360);
var horaDegree = (( hora / 12) * 360);
$('.second-hand').css('transform', 'rotate('+segDegree+'deg)');
$('.min-hand').css('transform', 'rotate('+minDegree+'deg)');
$('.hour-hand').css('transform', 'rotate('+horaDegree+'deg)');    
    console.log(segDegree + ' ' + horaDegree);

}

setInterval(setDate,1000);

