var clicks=0;
$("body").on("click", function(){
    clicks++;
    $("#contador").text('Clicks: ' + clicks);
     sessionStorage . setItem (" c ", clicks);
    console.log("clicks: " + clicks);
});

var seconds=0;
var timer = setInterval(
    function() {
        seconds++;
        sessionStorage . setItem (" seg ", seconds);
        console.log(seconds);
    }, 1000
);

sessionStorage . removeItem (" seg ");
sessionStorage . removeItem (" c");
sessionStorage . clear ();