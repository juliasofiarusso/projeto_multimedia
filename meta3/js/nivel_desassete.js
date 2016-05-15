var y=0;
var x=Math.random() * $(window).width();
var h= $(window).width();
var clickx;
/*
var timer = setInterval(
    function() {
        console.log("x: "+x);
    $('#bambu').animate({ top: y, left: x, opacity: 1 });
        y+=30;
        console.log("y: " +y);
        if(y==h){
         $('#bambu').animate({ opacity: 0 });
        }
        
    }, 800
);
*/
$(document).ready(function () {
  
$("body").on("click", function(e){

    clickx= e.pageX;
    console.log("x do rato: "+ clickx);
    movePanda();
});




function movePanda(){
    $('#panda').css({ left: clickx });
}
    
    
});