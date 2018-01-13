$(document).ready(function() {
    $(document).keydown(function(event){
            var $codigo= event.which;
            var $vid = document.getElementById($codigo);
            var key = document.querySelector(`div[class="${event.which}"]`);
            $vid.currentTime = 0 ;
            $vid.play();
            $(key).addClass("play");
               setTimeout(function () { 
               $(key).removeClass("play");
               }, 100);
            
           
        
    });
   /* $(document).keyup(function(){
       
           $("div.65").removeClass("play");
           
    });*/
});