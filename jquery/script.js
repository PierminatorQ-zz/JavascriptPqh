$(function() {
    $('button').hover(function(){
                 $('#box').text('esto es otra caja');  
                    }, function(){ 
     $('#box').text("esto ya no es una caja");
    });
  });

