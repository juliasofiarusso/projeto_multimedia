    var seq =1; 

$(document).ready(function (){
    
    inicio();
});
  function inicio(){
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
            jogo();
        },5000);
    
  }
    
  function jogo(){
          console.log("funcao");
          $("#bambu2").on("click", function(){
    $(this).animate({opacity: "0"}); 
    $(this).animate({opacity: "1"}); 
              if(seq==1){
        seq=2;
              }
            else{
     $("#texto").text("Tenta outra vez!")  
     inicio();
            }
            }); 
      
            $("#bambu").on("click", function(){
    $(this).animate({opacity: "0"}); 
    $(this).animate({opacity: "1"}); 
              if(seq==2){
        seq=3;
              }
           else if(seq==4){
      $("#texto").text("Ganhaste!")
              }
            else{
     $("#texto").text("Tenta outra vez!")  
      inicio();
            }
        }); 
      $("#bambu3").on("click", function(){
$(this).animate({opacity: "0"}); 
$(this).animate({opacity: "1"}); 
          if(seq==3){
seq=4;
          }
        else{
 $("#texto").text("Tenta outra vez!")  
  inicio();
        }
    
    });

  }

//}}
