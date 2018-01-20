$(document).ready( function(){

 $("i").on("click", function(){
$(this).parents("li").remove(); });


$(".list-group-item").mouseenter(function() {
  $(this).find("i").toggleClass('borra');
  $(this).css("padding", "0px 0px");
});

$(".list-group-item").mouseleave(function() {
  $(this).find("i").toggleClass('borra');
  $(this).css("padding", "0px 45px");
});

 $(".texto").on("click", function(){
$(this).toggleClass('tachado');

});

$( "#plus" ).click(function() {
  $( "li:first" ).slideToggle( "fast", "linear");
});



$("input").keypress(function(event) {
if(event.which === 13){
	var textito = $('input').val();
	
	$( ".list-group" ).append( "<li></li>");
	$("li:last").addClass("list-group-item");
	$(".list-group-item:last").prepend("<i></i>" );
	$("i:last").attr("id", "ta").addClass("fa fa-trash-o borra");
	$("li:last").append("<span></span>" );
	$("span:last").addClass("texto");
	$("span:last").prepend(textito);
	$('input').val(" ");

	$("i:last").on("click", function(){
$(this).parents("li").remove(); });
    
$(".list-group-item:last").mouseenter(function() {
  $(this).find("i").toggleClass('borra');
  $(this).css("padding", "0px 0px");
});

$(".list-group-item:last").mouseleave(function() {
  $(this).find("i").toggleClass('borra');
  $(this).css("padding", "0px 45px");
});

$("span:last").on("click", function(){
$(this).toggleClass('tachado');

});

                            };

});



});