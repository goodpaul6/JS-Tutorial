"use strict";

function calculate(str) {
    // TODO: Actually write this function
    return 0;
}

$(document).ready(function() {
    $("#submit").click(function(e) {
        var str = $("#str").val();
        $("#result").text("Result: " + calculate(str).toString());        
    });
});