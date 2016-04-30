$(document).ready(function(){
  var $moveable = $('#circle');
  $(document).mousemove(function(e){
      $moveable.css({'top': e.pageY-100,'left': e.pageX-100});
  });
});



$("#bambu").on("click", function(){
    console.log("clicked");
    $(this).load("nivel_seis.html");
    window.open("nivel_seis.html","_self");
});
