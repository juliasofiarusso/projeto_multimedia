
$(document).ready(function(){
  var $moveable = $('#circle');
    var $preto =$("overlay");
  $(document).mousemove(function(e){
      $moveable.css({'top': e.pageY-100,'left': e.pageX-100});
  });
  $(document).mousemove(function(e){
      $preto.css({"background": "-webkit-radial-gradient(transparent 100px, rgba(0,0,0,1) 20px);" });
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
