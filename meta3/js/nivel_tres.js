var inc=15;
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
