// moment.js implemented for day of the week, month and day of the month
var currentDay = moment().format('dddd MMM Do');
$("#currentDay").text(currentDay);

// 
$( function() {
    $( "#workhours" ).selectable();
  } );

  $(document).ready(function(){
    $("input").focus(function(){
      $(this).css("background-color", "green");
    });
    $("input").blur(function(){
      $(this).css("background-color", "gray");
    });
  });

// var addButton = document.querySelector("#saveBtn");

var description = localStorage.getItem("description");

saveBtn.addEventListener("description", () => {
    // When local storage changes, dump the list to
    // the console.
    console.log(JSON.parse(window.localStorage.getItem("description")));
    localStorage.setItem("description")
  });
  
  