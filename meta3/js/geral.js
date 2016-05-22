var clicks=sessionStorage.getItem("click");
$("body").on("click", function(){
    clicks++;
    $("#contador").text('Clicks: ' + clicks);
     sessionStorage.setItem ("click", clicks);
    // console.log("clicks: " + clicks);
});

var seconds=sessionStorage.getItem("seg");
var timer = setInterval(
    function() {
        seconds++;
        sessionStorage.setItem("seg", seconds);
    //    console.log(seconds);
    }, 1000
);
