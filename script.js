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
    var saveButton = $("<button>").addClass("saveBtn").text("Save");

    //add all elements
    timeBlock.append(hourSlot, toDoInput, saveButton);

    //create box
    container.append(timeBlock);

    // Check time and add correct color
    function checkTime(timeBlock) {
      // Compare current time with time block time
      var currentTime = dayjs();
      var timeBlockTime = dayjs(timeBlock.find(".hour").text(), "HH.mm");

      //if time hh is before day.js --- green
      if (currentTime.isBefore(timeBlockTime, "hour")) {
        timeBlock.addClass("future");
      }

      if (currentTime.isAfter(timeBlockTime, "hour")) {
        timeBlock.addClass("past");
      }

      var oneHourLater = timeBlockTime.add(1, "hour");
      if (currentTime.isBetween(timeBlockTime, oneHourLater)) {
        timeBlock.addClass("present");
      }
    }
    // checkTime();

    // Retrieve data from local storage
    var savedTodo = localStorage.getItem(time);
    if (savedTodo) {
      toDoInput.val(savedTodo);
    }

    //save input to local storage
    saveButton.on("click", function () {
      var time = hourSlot.text();
      var todoText = toDoInput.val();

      // Save data to local storage
      localStorage.setItem(time, todoText);
    });
  });
});
