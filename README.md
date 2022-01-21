Test:
Code:
Expected Return Value:

Describe: beebBoop()

Test: "It should return an error message if input value is 0 or less"
Code: beepBoop('-1')
Expected Return Value: ["Please input a valid number."]

Test: "It should return an error message if input is not a valid positive integer"
Code: beepBoop('123.1')
Expected Return Value: ["Please input a valid number."]

Test: "It should always return an array with a length that is equal to the value inputted plus one, and
       containing values from 0 to our inputted value."
Code: beepBoop(5)
Expected Return Value: [0, 1, 2, 3, 4, 5]

Test: "If as we iterate an insert value contains 3 then insert the phrase
       'Won't you be my neighbor?' into the array at that spot."
Code: beepBoop(5)
Expected Return Value: [0, 1, 2, 'Won't you be my neighbor?', 4, 5]

Test: "If as we iterate an insert value contains 2 and does not contain 3 then insert the
       phrase 'Boop!' into the array at that spot."
Code: beepBoop(5)
Expected Return Value: [0, 1, 'Boop!', 'Won't you be my neighbor?', 4, 5]

Test: "If as we iterate an insert value contains 1 and does not contain 2 or 3 then insert
       the phrase 'Beep!' into the array at that spot."
Code: beepBoop(5)
Expected Return Value: [0, 'Beep!', 'Boop!', 'Won't you be my neighbor?', 4, 5]
