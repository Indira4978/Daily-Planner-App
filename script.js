//display date top of the page
var currentDay = $("#currentDay");
currentDay.append(dayjs().format("dddd, D MMMM YYYY"));

//run when ready
$(document).ready(function () {
  // create time blocks
  var timeSlots = [
    "8.00",
    "9.00",
    "10.00",
    "11.00",
    "12.00",
    "13.00",
    "14.00",
    "15.00",
    "16.00",
    "17.00",
    "18.00",
  ];

  //time slots containers
  var container = $(".container");

  //need for each loop to create blocks and input field

  //save to local storage

  //
});
