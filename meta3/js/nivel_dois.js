var clicks=0;
$("body").on("click", function(){
    clicks++;
    $("#contador").text('clicks:' + clicks);
});
$("#bambu2").on("click", function(){
    $(this).load("nivel_tres.html");
    window.open("nivel_tres.html","_self");
});


        