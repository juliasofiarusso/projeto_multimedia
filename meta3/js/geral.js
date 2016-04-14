var clicks=0;
$("body").on("click", function(){
    clicks++;
    $("#contador").text('Clicks: ' + clicks);
});
