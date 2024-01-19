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

  //time slots container
  var container = $(".container");

  //need for each loop to create blocks and input field
  timeSlots.forEach(function (time) {
    var timeBlock = $("<div>").addClass("time-block");
    var hourSlot = $("<div>").addClass("hour").text(time);
    var toDoInput = $("<textarea>").addClass("description");
    var saveButton = $("<button>").addClass("saveBtn");

    //add all elements
    timeBlock.append(hourSlot, toDoInput, saveButton);

    //create box
    container.append(timeBlock);
  });

  //save to local storage

  //
});
