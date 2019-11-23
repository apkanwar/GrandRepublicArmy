$( document ).ready(function() {
    $(".icons .fa").each( function() {
        var randLeft = Math.floor(Math.random() * 90) + 1;
        var randFontSize = Math.floor(Math.random() * 3) + 8;
        var randRotation = Math.floor(Math.random() * 360) + 1;
        var randDuration = Math.floor(Math.random() * 10) + 5;

        $(this).css({"left": randLeft + "vw",
                     "font-size": randFontSize + "vw",
                     "transform" : "rotate(" + randRotation + "deg",
                     "animation-duration" : randDuration + "s"});
    });
});