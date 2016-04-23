var total=0;
    $(".bambu").on("click", function(){
  $(this).animate({opacity: "0"});  
        total++;
        console.log(total);
        if(total===33){
     $(this).load("nivel_catorze.html");
    window.open("nivel_catorze.html");
}

 });
    
