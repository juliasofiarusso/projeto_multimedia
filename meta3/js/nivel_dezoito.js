
$(".draggableEscuro").draggable({
	stack: ".draggableEscuro",
	revert: 'invalid' 
});


$(".draggableClaro").draggable({
	stack: ".draggableClaro",
	revert: 'invalid' 
});


$("#allBambu").droppable();

$("#draggableEscuro").droppable({
	accept: ".draggableEscuro",
	activeClass: "ok",
});

$("#draggableClaro").droppable({
	accept: ".draggableClaro",
	activeClass: "ok",
});

/*
$(function() {
    $( "#allBambu" ).draggable();
    $( "#bambuTarget" ).droppable({
    accept: "#bambuTarget",
        
         $( "#allBambu" ).draggable();
    $( "#bambu_Target" ).droppable({
    accept: "#bambuTarget",
        
      
    $(this).load("nivel_dezasste.html");
    window.open("nivel_dezassete.html","_self");
});
*/

console.clear();

$(".draggableEscuro").draggable({
	stack: ".draggableEscuro",
	revert: 'invalid' 
});

$(".draggableClaro").draggable({
	stack: ".draggableClaro",
	revert: 'invalid' 
});


$("#allBambu").droppable();

$("#bambuEscuroTarget").droppable({
	accept: ".draggableEscuro",
	hoverClass: "ok",
	//activeClass: "ok",
	
});

$("#bambuClaroTarget").droppable({
	accept: ".draggableClaro",
	//hoverClass: "ok",
	activeClass: "ok",
	
});