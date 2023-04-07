// Including the Day.js Advanced Format plugin
dayjs.extend(window.dayjs_plugin_advancedFormat);

// Global variable declaring an empty object used to save the Users Time-Block text into local storage
var userStorage = {};

$(function () {
  
  // Checking local storage to see if there are already any previously saved values
  userStorage = JSON.parse(localStorage.getItem("Calendar"));

  // if the local storage is empty, it will assign it an empty object. Else it will take the ID of the parent and the previously filled textarea using a key and place the value in the Time Blocks
  if (userStorage == null)
  {
    userStorage = {};
  }
  else
  {
    Object.keys(userStorage).forEach(function (key) {

      $("#" + key).children("textarea").val(userStorage[key]);
    });
  }

  // Click event for the Save Buttons.
  $(".saveBtn").on("click", function() {

    // Assigning variables with the ID of the parent element and saving the user's text from <textarea> into local storage.
    let selectedButton = $(this).parent().attr("id");
    let descriptionText = $(this).parent().children("textarea").val();

    // Assigning the textarea value to the correct time block by going through the local storage's array by parent element ID (Time Block unique ids)
    userStorage[selectedButton] = descriptionText;
    localStorage.setItem("Calendar", JSON.stringify(userStorage));
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // TODO: Displays current date in the header using Day, Month Year format. (ex. Monday, April, 1st) This is done using Dayjs Advanced Format
  $("#currentDay").text(dayjs().format("dddd, MMMM, Do"));
});
