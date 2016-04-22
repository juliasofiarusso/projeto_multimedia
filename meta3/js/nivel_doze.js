$(document).ready(function(){
    animateDiv();
    
});


var timer = setInterval(
    function() {
       var newq = makeNewPosition();
    $('#bambu').animate({ top: newq[0], left: newq[1] });
    }, 800
);

        
       


function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() -300;
    var w = $(window).width() - 75;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

/*function animateDiv(){
    var newq = makeNewPosition();
    $('#bambu').animate({ top: newq[0], left: newq[1] }, function(){
      animateDiv();        
    });
    
};*/

$("#bambu").on("click", function(){
    console.log("clicked");
    $(this).load("nivel_treze.html");
    window.open("nivel_treze.html","_self");
});
