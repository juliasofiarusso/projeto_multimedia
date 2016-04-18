var clicks=sessionStorage.getItem("c");
$("body").on("click", function(){
    clicks++;
    $("#contador").text('Clicks: ' + clicks);
     console.log("clicks: " + clicks);
});

var seconds=sessionStorage . getItem (" seg ");
var timer = setInterval(
    function() {
        seconds++;
        sessionStorage . setItem (" seg ", seconds);
        console.log(seconds);
    }, 1000
);

sessionStorage . removeItem (" seg ");
sessionStorage . clear ();