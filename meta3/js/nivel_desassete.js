var c=0;


$("#bambu").on("click", function(){
  $( this ).css( "margin-left", "+=30" );
    c++;
    if(c==40){
           $(this).load("nivel_dezoito.html");
    window.open("nivel_dezoito.html","_self");
    }
});

