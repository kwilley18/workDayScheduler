var currentDay = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
var today = moment();
var hour = moment().format("h"); 
console.log(
  /*"Today's date is: " + 
  today.format('YYYY-MM-DD')*/ 
  hour
);
$("#currentDay").html(currentDay);


//document.getElementById("date").innerHTML = today; 
document.getElementById("currentDay").innerHTML = currentDay;

$(document).ready(function(){
 $(".saveBtn").on("click", function(){
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");

  // Save text in local storage
  localStorage.setItem(time, text);
 })
   
 function timeTracker() {
  //get current number of hours.
  var currentTime = moment().hour();

  // loop over time blocks
  $(".time-block").each(function () {
      var timeBlockTime = parseInt($(this).attr("id").split("hour")[1]);

      // To check the time and add the classes for background indicators
      if (timeBlockTime < currentTime) {
          $(this).removeClass("future");
          $(this).removeClass("present");
          $(this).addClass("past");
      }
      else if (timeBlockTime === currentTime) {
          $(this).removeClass("past");
          $(this).removeClass("future");
          $(this).addClass("present");
      }
      else {
          $(this).removeClass("present");
          $(this).removeClass("past");
          $(this).addClass("future");

      }
  })
}

// Get item from local storage if any
$("#9AM.description").val(localStorage.getItem("9AM"));
$("#10AM .description").val(localStorage.getItem("10AM"));
$("#11AM .description").val(localStorage.getItem("11AM"));
$("#12PM .description").val(localStorage.getItem("12PM"));
$("#1PM .description").val(localStorage.getItem("1PM"));
$("#2PM .description").val(localStorage.getItem("2PM"));
$("#3PM .description").val(localStorage.getItem("3PM"));
$("#4PM .description").val(localStorage.getItem("4PM"));
$("#5PM .description").val(localStorage.getItem("5PM"));

timeTracker();

})