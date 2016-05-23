var clicks_botao1=0;
var clicks_botao2=0;


$("#botao1").on("click", function(){
    clicks_botao1++;
    if(clicks_botao1==1){
    $("#sombra4").attr("src", "imagens/flatbambu-04.png");
        
}
if(clicks_botao1==2){
    $("#sombra2").attr("src", "imagens/flatbambu-04.png");
}
if(clicks_botao1==3){
   $("#sombra1").attr("src", "imagens/flatbambu-04.png");
    nextLevel();
}
});

$("#botao2").on("click", function(){
    clicks_botao2++;
    if(clicks_botao2==1){
    $("#sombra5").attr("src", "imagens/flatbambu-04.png");
}
if(clicks_botao2==2){
    $("#sombra3").attr("src", "imagens/flatbambu-04.png");
    nextLevel();
}

});
function nextLevel(){
if(clicks_botao1==3 && clicks_botao2==2){
    $(this).load("nivel_desassete.html");
    window.open("nivel_desassete.html","_self");    
}
}


