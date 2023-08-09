const OPEN = "1";
const CLOSED = "0";

$(function(){
    $("#burger-button").click(function() {
        const isOpen = $("#navbar").data("open") === OPEN;
        if(isOpen){
            $("#navbar").data("open", CLOSED);
            $("#first-layer").removeClass("rotate-45");
            $("#first-layer").addClass("-translate-y-1.5");
            
            $("#second-layer").removeClass("opacity-0");

            $("#third-layer").removeClass("-rotate-45");
            $("#third-layer").addClass("translate-y-1.5");
        } else {
            $("#navbar").data("open", OPEN);
            $("#first-layer").addClass("rotate-45");
            $("#first-layer").removeClass("-translate-y-1.5");
            
            $("#second-layer").addClass("opacity-0");

            $("#third-layer").addClass("-rotate-45");
            $("#third-layer").removeClass("translate-y-1.5");
        }
    })
});