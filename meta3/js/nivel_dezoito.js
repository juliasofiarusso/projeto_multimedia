var total=0;
var clicks;
var c=1;
$(".draggableEscuro").draggable({
	stack: ".draggableEscuro",
    revert: function(valid) {
        if(valid) {
       
        }
        else {
           click();
        }
        return !valid;
    }
   
});

    

$(".draggableClaro").draggable({
	stack: ".draggableClaro",
	    revert: function(valid) {
        if(valid) {
       
        }
        else {
           click();
        }
        return !valid;
    }
});


$("#allBambu").droppable();

$("#bambuEscuroTarget").droppable({
    
	accept: ".draggableEscuro",
	hoverClass: "ok",
    drop: function() {   
       total++;
        verifica();
        click();
    }
});


$("#bambuClaroTarget").droppable({
	accept: ".draggableClaro",
	//hoverClass: "ok",
	activeClass: "ok",
     drop: function() {
       total++;
        verifica();
         click();
    }
   
    
});


function verifica(){
   
    console.log("verifica");
    if(total==10){
          $(this).load("final1.html");
    window.open("final1.html","_self");
    }
       
}

function click(){
     clicks=sessionStorage.getItem("click");
         clicks++;  
     sessionStorage.setItem ("click", clicks);
      $("#contador").text('Clicks: ' + clicks);
    c=1;
}