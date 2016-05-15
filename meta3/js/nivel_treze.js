var total=0;
var click=new Array();

$(".bambu").on("click", function(){
    console.log(".bambu");
        total++;
    $(this).attr('class', 'bambuclicked');
        console.log("total: "+total);
        if(total==33){
     $(this).load("nivel_catorze.html");
    window.open(" nivel_catorze.html","_self");
}

 });
    
