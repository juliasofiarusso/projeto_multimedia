var clicks=0;
var seconds=0;
var segundos=0;
sessionStorage.setItem ("click", clicks);
sessionStorage.setItem ("seg", seconds);



$("#bambu").on( "mousedown", function() {
    var timer = setInterval(
    function() {
        segundos++;
        console.log(segundos);
        $("#contador2").text(segundos + 'segundos');
    }, 1000
);
  
  });
$("#bambu").on( "mouseup", function() {
      $(this).load("nivel_quinze.html");
    window.open("nivel_quinze.html","_self");
}
);