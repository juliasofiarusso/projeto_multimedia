var clicks=0;
var seconds=0;
sessionStorage.setItem ("click", clicks);
sessionStorage.setItem ("seg", seconds);



$("#bambu").on("click", function(){
  $( this ).css( "margin-left", "+=20" );
    
});

