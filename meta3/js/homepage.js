$("#homepage").click(function() {
    $('html,body').animate({
        scrollTop: $("#second").offset().top},
        'slow');
});