
var c= sessionStorage.getItem("click");
var t= sessionStorage.getItem("seg");
var music = document.getElementById("musica");
var k=0; 
var resto= t%60;

$("#frase").text("Fizeste "+ c +" clicks em "+ parseInt(t/60)+ " minutos e " + resto+ " segundos" );

$("#bambu").on("click", function(){
    k++;
    if(k==1){
     
$("#frase").text("Com apenas 2 clicks podes ajudar outros pandas a encontrar o seu bambu" );   
    }
if(k==2){
$("#bambua").attr("href", "http://www.care2.com/click-to-donate/animal-rescue/");
}
});



 $("#semsom").on("click", function(){
     
   console.log("sem som");
     music.pause();
$(this).animate({opacity: "0"}); 
     $("#comsom").animate({opacity: "1"}); 
      });

 $("#comsom").on("click", function(){
     music.play();
$("#semsom").animate({opacity: "1"}); 
     $("#comsom").animate({opacity: "0"}); 
    
    
       
 });

     


         
