
var clicks_bambu=0;

$("#bambu").on("click", function(){
   // $("#bambu").css({"margin-left": "43.8vw"});
    clicks_bambu++;
    if(clicks_bambu==1){
    this.src = 'imagens/bambu_sem1-05.png';
}
if(clicks_bambu==2){
    this.src = 'imagens/bambu_sem2-06.png';
}
if(clicks_bambu==3){
    this.src = 'imagens/bambu_sem3-07.png';
}
if(clicks_bambu==4){
    $(this).load("nivel_cinco.html");
    window.open("nivel_cinco.html","_self");
}
});






