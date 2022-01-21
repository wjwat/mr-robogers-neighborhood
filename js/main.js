// BUSINESS LOGIC

// Return an array constructed using the following constraints that our
// UI logic can iterate over to display messages to our user.
//
// Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
// Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
// Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"
function beepBoop(userInput) {
  // XXX '2.5' -> 2, Is this the desired behavior when given a float?
  let num = parseInt(userInput)

  if (num <= 0) {
    return ["Please input a valid number."]
  }
}

// UI LOGIC
$(document).ready(function() {
  // Do something
});
