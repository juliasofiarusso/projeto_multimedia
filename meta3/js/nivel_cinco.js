
$(document).ready(function(){
  var $moveable = $('#circle');
    var $preto =$("#overlay");


    $preto.css("background-size",$(window).width()*2+"px "+$(window).width()*2+"px "); //mesma largura que altura (igual ao dobro da largura da janela)

    //alterar pos para centrar
    $preto.css("background-position-x",(-$(window).width()/2)+"px");
    $preto.css("background-position-y",(-$(window).width()/2)+"px");


  $(document).mousemove(function(e){
      //$moveable.css({'top': e.pageY-100,'left': e.pageX-100});
      console.log("tes"+e.pageY);
      //$preto.css("background","-webkit-radial-gradient(transparent 200px, rgba(0,0,0,1) 150px)");


      $preto.css("background-size",$(window).width()*2+"px "+$(window).width()*2+"px ");

      //mudar a pos consoante o rato
      $preto.css("background-position-x",(e.pageX-$(window).width()/2-$(window).width()/2)+"px");
      $preto.css("background-position-y",(e.pageY-$(window).width()/2-$(window).width()/2)+"px");

  });
});




/*
var visible = true;
setInterval(function () {
    document.querySelector('#circle').style.opacity = visible ? 0 : 1;
    visible = !visible;
}, 550);
*/



$("#bambu").on("click", function(){
    console.log("clicked");
    $(this).load("nivel_seis.html");
    window.open("nivel_seis.html","_self");
});
