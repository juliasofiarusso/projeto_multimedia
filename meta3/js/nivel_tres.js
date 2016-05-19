var clicks=0;
var seconds=0;
var inc=15;
sessionStorage.setItem ("click", clicks);
sessionStorage.setItem ("seg", seconds);

$(document).ready(function(){
    
$("#panda").on("click", function(){
      inc+=4;
    
if(inc==55){
    $(this).load("nivel_quatro.html");
    window.open("nivel_quatro.html","_self");
}
     console.log("TOP:" +inc);
    $('#bambu').animate({ marginTop: inc+"vh" });
    });

});
