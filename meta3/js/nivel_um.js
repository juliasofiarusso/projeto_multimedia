var clicks=0;
var seconds=0;
sessionStorage.setItem ("click", clicks);
sessionStorage.setItem ("seg", seconds);

$("#bambu").on("click", function(){
    $(this).load("nivel_dois.html");
    window.open("nivel_dois.html","_self");
});

 $("#contador").text('Clicks: ' + clicks);
$("body").on("click", function(){
    clicks++;
    $("#contador").text('Clicks: ' + clicks);
     sessionStorage.setItem ("click", clicks);
     console.log("clicks: " + clicks);
});

var timer = setInterval(
    function() {
        seconds++;
        sessionStorage.setItem("seg", seconds);
        console.log(seconds);
    }, 1000
);


$("#desistir").on("click",function(){
            $(this).load("final1.html");
    window.open("final1.html","_self");
          
          });
