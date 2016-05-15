    var seq =1; 
var x=0;
var i;
var a=-1;
var pontos=0;
var bambus =["#bambu", "#bambu2", "#bambu3"];
var sequencia= new Array();
var sequencia_click= new Array();
$(document).ready(function (){
    inicio();
});

      function inicio(){
          i=0;
       var intervalo =  setInterval(
            function(){
                if(i<4){
                x=parseInt(Math.random() * 3);
                console.log(x);
    $(bambus[x]).animate({opacity: "1"});   
    $(bambus[x]).animate({opacity: "0"});
   sequencia[i]=x;
console.log("seq: " + sequencia[i]);
                    i++;
            }
                    else{
                        
                         clearInterval(intervalo);
    $("#bambu").animate({opacity: "1"});  
    $("#bambu2").animate({opacity: "1"});  
    $("#bambu3").animate({opacity: "1"});  
                       $("#texto").text("Agora é a tua vez!")
                    jogo();
                    }

            },1000);
    
      
      
   /* setTimeout(
        function(){
$("#bambu").animate({opacity: "1"});  
$("#bambu2").animate({opacity: "1"});  
$("#bambu3").animate({opacity: "1"});  
            $("#texto").text("Agora é a tua vez!")
            jogo();
        },5000);*/
    
  }
    
  function jogo(){
      
      $(".bambu").on("click", function(){
    $(this).animate({opacity: "0"}); 
    $(this).animate({opacity: "1"}); 
          a++;
           console.log("a" + a);
          
        });
      
      
        $("#bambu").on("click", function(){
  sequencia_click[a]=0; 
            if(a==3){
              verifica();
          }
 console.log("sequencia click" +sequencia_click[a]);
        });
        $("#bambu2").on("click", function(){
  sequencia_click[a]=1; 
            if(a==3){
              verifica();
          }
            
 console.log("sequencia click" +sequencia_click[a]);
        });
        $("#bambu3").on("click", function(){
  sequencia_click[a]=2; 
            if(a==3){
              verifica();
          }
            
 console.log("sequencia click" +sequencia_click[a]);
        });
      
     function verifica(){
         
          for(var i=0; i<4; i++){
               console.log("sequencia click" +sequencia_click[i]+"sequencia" +sequencia[i]);
              if(sequencia_click[i]==sequencia[i]){
                  pontos++;
                  if(pontos==4){
                      $("#texto").text("Ganhaste!");
                      $(this).load("nivel_desasseis.html");
    window.open("nivel_desasseis.html","_self");
                  }
              }
          else{
           $("#texto").text("Tenta outra vez!");
              repetir();
               
   
          }}
      } 
      }
function repetir(){
      for(var i=0; i<4; i++){
               $(bambus[i]).css({opacity: "0"}); 
   
          }
     for(var i=0; i<4; i++){
     $(bambus[sequencia[i]]).animate({opacity: "1"});   
    $(bambus[sequencia[i]]).animate({opacity: "0"});
    
}}
      