    var seq =1; 
    var jogar =0; //comecar o jogo
$(document).ready(function(){
  if(jogar==0){
    
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
  }
    
//if(jogar==1){
  //  console.log("jogarcheck");
    //if(seq==1){
      //   console.log("seqcheck");
$("#bambu2").on("click", function(){
$(this).animate({opacity: "0"}); 
$(this).animate({opacity: "1"}); 
    if(jogar==1){
          if(seq==1){
    seq=2;
          }
        else{
 $("#texto").text("Tenta outra vez!")  
 jogar=0;
        }
    }
    });  
    
    $("#bambu").on("click", function(){
$(this).animate({opacity: "0"}); 
$(this).animate({opacity: "1"}); 
    if(jogar==1){
          if(seq==2){
    seq=3;
          }
        else{
 $("#texto").text("Tenta outra vez!")  
 jogar=0;
        }
    }
    }); 
        $("#bambu3").on("click", function(){
$(this).animate({opacity: "0"}); 
$(this).animate({opacity: "1"}); 
    if(jogar==1){
          if(seq==3){
         $("#texto").text("Ganhaste!")
          }
        else{
 $("#texto").text("Tenta outra vez!")  
 jogar=0;
        }
    }
    });
    
   
//}}
});