var clicks=0;
var seconds=0;
sessionStorage.setItem ("click", clicks);
sessionStorage.setItem ("seg", seconds);

$("#bambu").on("click", function(){
    $(this).load("nivel_nove.html");
    window.open("nivel_nove.html","_self");
});

