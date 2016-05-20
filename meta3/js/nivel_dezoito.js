var total=0;
var clicks=0;
var seconds=0;

sessionStorage.setItem ("click", clicks);
sessionStorage.setItem ("seg", seconds);

   
$(".draggableEscuro").draggable({
	stack: ".draggableEscuro",
	revert: 'invalid' 
});

$(".draggableClaro").draggable({
	stack: ".draggableClaro",
	revert: 'invalid' 
});


    });

$("#allBambu").droppable();

$("#bambuEscuroTarget").droppable({
    
	accept: ".draggableEscuro",
	hoverClass: "ok",
    drop: function() {
       total++;
        verifica();
    }
});
$("#bambuClaroTarget").droppable({
	accept: ".draggableClaro",
	//hoverClass: "ok",
	activeClass: "ok",
     drop: function() {
       total++;
        verifica();
    }
   

 
   



function verifica(){
    console.log("verifica");
    if(total==10){
          $(this).load("final1.html");
    window.open("final1.html","_self");
    }
}