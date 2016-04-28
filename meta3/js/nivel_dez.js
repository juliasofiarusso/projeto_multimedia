var clicks=0;
var seconds=0;
sessionStorage.setItem ("click", clicks);
sessionStorage.setItem ("seg", seconds);

$("#bambu_invertido").on("click", function(){
    $(this).load("nivel_onze.html");
    window.open("nivel_onze.html","_self");
});

