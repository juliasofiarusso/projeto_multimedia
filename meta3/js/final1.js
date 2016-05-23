
var c= sessionStorage.getItem("click");
var t= sessionStorage.getItem("seg");
 console.log("tempo: "+ t + "clicks: " + c);
$("#frase").text("Fizeste "+ c +" clicks em"+ t+ "segundos");

$("#bambu").on("click", function(){
    $(this).load("final2.html");
    window.open("final2.html","_self");
});

       
