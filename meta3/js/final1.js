
var c= sessionStorage.getItem("click");
var t= sessionStorage.getItem("seg");
var resto= t%60;
 console.log("tempo: "+ t + "clicks: " + c);
$("#frase").text("Fizeste "+ c +" clicks em "+ parseInt(t/60)+ " minutos e " + resto+ " segundos" );

$("#bambu").on("click", function(){
    $(this).load("final2.html");
    window.open("final2.html","_self");
});

       
