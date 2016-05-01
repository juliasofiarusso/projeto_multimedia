var clicks=0;
var seconds=0;
sessionStorage.setItem ("click", clicks);
sessionStorage.setItem ("seg", seconds);

var t= seconds.toString();
var c= clicks.toString();
document.write("Perdeste " + t + " segundos a fazer "+ c +" clicks");

       
