var clicks=0;
var seconds=0;
var clicks_bambu=0;

sessionStorage.setItem ("click", clicks);
sessionStorage.setItem ("seg", seconds);

  

$("#bambu").on("click", function(){
    clicks_bambu++;
    if(clicks_bambu==1){
    this.src = 'imagens/bambu_sem1.png';
}
if(clicks_bambu==2){
    this.src = 'imagens/bambu_sem2.png';
}
if(clicks_bambu==3){
    this.src = 'imagens/bambu_sem3.png';
}
if(clicks_bambu==4){
    $(this).load("nivel_cinco.html");
    window.open("nivel_cinco.html","_self");
}
});






