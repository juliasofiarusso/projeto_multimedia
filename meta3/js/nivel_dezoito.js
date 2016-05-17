console.clear();

$(".bambuNormal").draggable({
	stack: ".bambuNormal",
	revert: 'invalid' 
});

$(".bambuCor").draggable({
	stack: ".bambuCor",
	revert: 'invalid' 
});


$("#allBambu").droppable();

$("#bambuTarget").droppable({
	accept: ".bambuNormal",
	activeClass: "ok",
});

$("#bambu_Target").droppable({
	accept: ".bambuCor",
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
