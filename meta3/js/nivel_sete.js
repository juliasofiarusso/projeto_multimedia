var clicks=0;
$("body").on("click", function(){
    clicks++;
    $("#contador").text('clicks:' + clicks);
});

var clicks_bambu=0;
$("#bambu").on("click", function(){
    clicks_bambu++;
    console.log(clicks_bambu);
    if (clicks_bambu==15){
    $(this).load("nivel_oito.html");
    window.open("nivel_oito.html");
}
});


