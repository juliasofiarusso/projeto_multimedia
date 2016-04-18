var clicks=0;
$("body").on("click", function(){
    clicks++;
    $("#contador").text('clicks:' + clicks);
});

$("#bambu").on("click", function(){
    $(this).load("nivel_nove.html");
    window.open("nivel_nove.html");
});
