var clicks=0;
var seconds=0;
var segundos=0;
sessionStorage.setItem ("click", clicks);
sessionStorage.setItem ("seg", seconds);



$("#bambu")
    .on( "mousedown", function() {
    var timer = setInterval(
    function() {
        segundos++;
        console.log(segundos);
    }, 1000
);
    $("#contador2").text(segundos + 'segundos');
  });
