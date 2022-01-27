// UTILITY LOGIC

// This works for most of what we care about.
// An edge case though is if the val has a trailing .
// ex: isNotNumber('123.') -> true
function isNotNumber(val) {
  return !(/^\d+$/.test(val));
}

function listNumber(value, index) {
  return `<li title="${index}">${value}</li>`;
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
  for (let i = 0; i < num+1; i++) {
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
  let display = $('#output');
  let input = $('#input');
  let ordering = '';

  function toggleDisplays() {
    $(input).toggle();
    $(display).toggle();
    $('#lilguy').toggle();
  }

  function displayNumbers(numArr) {
    toggleDisplays();
    $(display).find('#mrroboger-says').empty();

    numArr.forEach((e, i) => {
      $(display).find('#mrroboger-says').append(listNumber(e, i));
    });
    $(display).show();
  }

  // Determine which was button was used to submit
  $('button[type=submit').on('click', function(e) {
    ordering = this.name;
  });

  $('form').on('submit', function(e) {
    e.preventDefault();
    let userInput = $('#user-input').val();

    if (ordering === 'reverse') {
      displayNumbers(beepBoop(userInput).reverse());
    } else {
      displayNumbers(beepBoop(userInput));
    }
  });

  // Clear any previously inputted values, and take us back
  // to the default page state.
  $('#reset-form').on('click', function() {
    $('form').trigger('reset');
    toggleDisplays();
  });
});
