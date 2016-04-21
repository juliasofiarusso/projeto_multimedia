var clicks=0;
var seconds=0;
sessionStorage.setItem ("click", clicks);
sessionStorage.setItem ("seg", seconds);

$("#bambu").on("click", function(){
    $(this).load("nivel_dois.html");
    window.open("nivel_dois.html","_self");
});

