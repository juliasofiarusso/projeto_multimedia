var clicks=sessionStorage.getItem("click");
 $("#contador").text('Clicks: ' + clicks);
$("body").on("click", function(){
    clicks++;
    $("#contador").text('Clicks: ' + clicks);
     sessionStorage.setItem ("click", clicks);
     console.log("clicks: " + clicks);
});

var seconds=sessionStorage.getItem("seg");
var timer = setInterval(
    function() {
        seconds++;
        sessionStorage.setItem("seg", seconds);
        console.log(seconds);
    }, 1000
);

$("#desistir").on("click",function(){
          console.log("desitir");
            $(this).load("final1.html");
    window.open("final1.html","_self");
          
          });
