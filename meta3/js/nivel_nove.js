var clicks=0;
var seconds=0;
sessionStorage.setItem ("click", clicks);
sessionStorage.setItem ("seg", seconds);

$("#bambu4").on("click", function(){
    $(this).load("nivel_dez.html");
    window.open("nivel_dez.html","_self");
});

