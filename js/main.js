// UTILITY LOGIC

// This works for most of what we care about.
// An edge case though is if the val has a trailing .
function isNotNumber(val) {
  return !(/^\d+$/.test(val))
}

// BUSINESS LOGIC

// Return an array constructed using the following constraints that our
// UI logic can iterate over to display messages to our user.
//
// Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
// Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
// Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"
function beepBoop(userInput) {
  // XXX '2.5' -> 2, Is this the desired behavior when given a float?
  let num = parseInt(userInput);
  let outputArray = [];

  if (num <= 0 || isNotNumber(userInput)) {
    return ["Please input a valid number."];
  }

  // Always loop num+1 to correctly size our output
  for (i = 0; i < num+1; i++) {
    outputArray.push(i);
  }
  
  return outputArray;
}

// UI LOGIC
$(document).ready(function() {
  // Do something
});
