var clicks=0;
var seconds=0;
var top=15;
sessionStorage.setItem ("click", clicks);
sessionStorage.setItem ("seg", seconds);

$(document).ready(function(){
    
$("#panda").click(function(){
    $(init);
    
    function init() {
    $("#bambu").css({"top": top++});
    console.log("panda");
    
  /*  $("#bambu").animate({top: top++});
    console.log("panda");*/
});     
    
});


$("#bambu").on("click", function(){
    $(this).load("nivel_quatro.html");
    window.open("nivel_quatro.html","_self");
});
