// jquery

$("ul li a"); // a is inside li, li is inside ul
$("h1").css("color", "green"); // use css to change attribute, same as h1{color: green}
$("h1").css("width", "100px");
$("h1").css("background", "lightgreen");
$("h1").css({"color" : "brown", "text-transform" : "uppercase"}); // multiple css change
console.log("hi");

$("#list-1").before("<li>list element 0</li>"); // add element before #list-1

console.log($("ol").text()); // will return only text
console.log($("ol").html()); // will return all html (including <li></li>

let listText = $("li:lt(3)").text(); // :lt selects all elements from 0th to nth
$("li:eq(3)").text(listText); // :eq selects only 3rd element

$("#list-3").after("<li>list element 4</li>"); // add after list-3
$("li:last").html("<li>this is the real list element 4</li>"); // change html of last list item


let object = { // create object with property
    color : "blue",
};

$("#object-text").css(object); // pass object as param into css

$("#image1").attr("border", "5px black"); // add attribute
$("#image2").css("border", "5px black"); // this doesnt work

$(document).ready( // will only call function if document is fully loaded, good practice to have
    function (){
        $("button").click(function(){ // if button is clicked
            alert("value: " + $("#text-input").val()) // create alert and display value from text-input
        });
    });



$("button").click(function(){ // if button is clicked
    $("#object-text").addClass("text-class"); // add text-class to object-text
}); // removeClass() toggleClass()

$("#image2").click(function(){ // when image is clicked
    $(this).hide(); // hide currently selected
}); // show() toggle()

$("#keypress").on("keypress", function(){ // on keypress, execute function
    $("#image1").hide();
});

$("#fade").on("mouseover", function () { // on mouse hover, fade this
    $(this).fadeOut("slow");
    $(this).fadeIn(5000);
});

$("#slide").on("click", function () { // on click, slide up and down
    $(this).slideUp("slow");
    $(this).slideDown(5000);
});

$(function() {
    $("#drag").draggable();
    $("#drop").droppable({ // allow action if element is dropped here
        drop: function (){ // when element is dropped here
            alert("i been dropped"); // alert
        }
    });
});

$("#date-picker").datepicker(); // attach a date picker

function sum(n){

    if (n > 0){
        return sum(n-1) + n
    }

    return 0;
}

console.log(sum(6))

