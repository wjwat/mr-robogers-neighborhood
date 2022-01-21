// UTILITY LOGIC

// This works for most of what we care about.
// An edge case though is if the val has a trailing .
// ex: isNotNumber('123.') -> true
function isNotNumber(val) {
  return !(/^\d+$/.test(val))
}

function prettyNumber(value) {
  return `<li>${value}</li>`
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
    if (i.toString().indexOf('3') > -1) {
      outputArray.push("Won't you be my neighbor?");
    } else if (i.toString().indexOf('2') > -1) {
      outputArray.push('Boop!');
    } else if (i.toString().indexOf('1') > -1) {
      outputArray.push('Beep!');
    } else {
      outputArray.push(i);
    }
  }
  
  return outputArray;
}

// UI LOGIC
$(document).ready(function() {
  // Assign display selector to a variable because we're going to use
  // it in multiple places and what we're selecting may change
  // as we refactor.
  display = $('#output');
  input = $('#input');

  // Iterates over each item in array and appends it to our output
  function displayNumbers(numArr) {
    $(input).toggle();
    $(display).toggle();
    $(display).children('ol').empty();

    numArr.forEach(i => {
      $(display).children('ol').append(prettyNumber(i));
    })
    $(display).show();
  }

  $('form').on('submit', function(e) {
    e.preventDefault();
    userInput = $('#user-input').val();
    displayNumbers(beepBoop(userInput));
  })
  //$('')
});
