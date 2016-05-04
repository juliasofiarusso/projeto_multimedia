  var jogo=0; // "pontos"
    var seq=1; 
    var jogar=0; //comecar o jogo
$(document).ready(function(){
  
    
    setTimeout(
        function(){
$("#bambu2").animate({opacity: "1"});         
        },1000);
    setTimeout(
        function(){
$("#bambu2").animate({opacity: "0"});         
        },1000); 
    
    setTimeout(
        function(){
$("#bambu").animate({opacity: "1"});         
        },2000);
    setTimeout(
        function(){
$("#bambu").animate({opacity: "0"});         
        },2000);
    
    setTimeout(
        function(){
$("#bambu3").animate({opacity: "1"});         
        },3000);
    setTimeout(
        function(){
$("#bambu3").animate({opacity: "0"});         
        },3000);
          setTimeout(
        function(){
$("#bambu").animate({opacity: "1"});         
        },4000);
    setTimeout(
        function(){
$("#bambu").animate({opacity: "0"});         
        },4000);
    setTimeout(
        function(){
$("#bambu").animate({opacity: "1"});  
$("#bambu2").animate({opacity: "1"});  
$("#bambu3").animate({opacity: "1"});  
            $("#texto").text("Agora é a tua vez!")
            jogar=1;
            console.log("jogar" + jogar);
        },5000);
    
setTimeout(
if(jogar==1){
$("#bambu2").on("click", function(){
    if(seq==1){
     jogo++;
    seq=2;
    }
  
});
    
    
},6000);  
    
      
} );