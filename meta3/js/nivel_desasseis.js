var clicks=0;
var seconds=0;
var clicks_botao1=0;
var clicks_botao2=0;

sessionStorage.setItem ("click", clicks);
sessionStorage.setItem ("seg", seconds);

$("#botao1").on("click", function(){
    clicks_botao1++;
    if(clicks_botao1==1){
    $("#sombra4").attr("src", "imagens/bambu.png");
}
if(clicks_botao1==2){
    $("#sombra2").attr("src", "imagens/bambu.png");
}
if(clicks_botao1==3){
   $("#sombra1").attr("src", "imagens/bambu.png");
}
});

$("#botao2").on("click", function(){
    clicks_botao2++;
    if(clicks_botao2==1){
    $("#sombra5").attr("src", "imagens/bambu.png");
}
if(clicks_botao2==2){
    $("#sombra3").attr("src", "imagens/bambu.png");
}

});


