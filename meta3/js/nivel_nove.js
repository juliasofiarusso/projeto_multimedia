var b=parseInt(Math.random()*5 +1);
console.log(b);
$("#bambu"+b).on("click", function(){
    $(this).load("nivel_dez.html");
    window.open("nivel_dez.html","_self");
});

