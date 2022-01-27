// This works for most of what we care about.
// An edge case though is if the val has a trailing .
// ex: isNotNumber('123.') -> true
function isNotNumber(val) {
  return !(/^\d+$/.test(val));
}

function listNumber(value, index) {
  return `<li title="${index}">${value}</li>`;
}

function beepBoop(userInput) {
  let num = parseInt(userInput);
  let outputArray = [];

  if (num <= 0 || isNotNumber(userInput)) {
    return ["Please input a valid number."];
  }

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
