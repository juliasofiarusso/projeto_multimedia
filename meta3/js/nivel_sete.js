var clicks=0;
var seconds=0;
sessionStorage.setItem ("click", clicks);
sessionStorage.setItem ("seg", seconds);


var clicks_bambu=0;
$("#bambu").on("click", function(){
    clicks_bambu++;
    console.log(clicks_bambu);
    if(clicks_bambu==10){
        $("p").text("Ainda acreditas no que te digo?");
       
    }
    if (clicks_bambu==11){
    $(this).load("nivel_oito.html");
    window.open("nivel_oito.html","_self");
}
});


