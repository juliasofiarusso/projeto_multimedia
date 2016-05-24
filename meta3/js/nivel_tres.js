var inc=15;
var inc2=10;
$(document).ready(function(){
    
$("#panda").on("click", function(){
      inc+=4;
    inc2-=4;
    
if(inc==55){
    $(this).load("nivel_quatro.html");
    window.open("nivel_quatro.html","_self");
}
     console.log("TOP:" +inc);
   $('#bambu').animate({ marginTop: inc+"vh" });
    $('#contador').animate({ marginTop: inc2+"vh" });
    });

});
