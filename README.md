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
