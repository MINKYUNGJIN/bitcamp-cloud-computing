"use strict"

$(document).ready(function() {
    $("#gListTable td").on("click", function() {
    if( $(this).html() != "" ) {
        alert("다른곳에놔라");
        return;
    } else {
        $(this).html("O");    
            setTimeout(function() {computer(), 1000});
        }
    });
    
    
});

function computer() {
    
    var play = false;
    
    $.each( $("#gListTable tr td"), function(index, item) {
    if( $(item).html() == "" ) {
        play = true;
    }
});

while(play) {
    var ran = Math.ceil(Math.random()*9-1);
    var value = $($("#gListTable tr td")[ran]);
    if( value.html() == "" ) {
        value.html("X");
            play = false; 
        }
    }
}

function refresh() {
     $.each( $("#gListTable tr td"), function(index, item) {
    $(item).html("");
    });
}
