# :robot: Mr. Roboger's Neighborhood

#### By [Will W.](https://wjwat.com/)

#### _Epicodus Independent Project Week 3_ -- It's time to give Mr. Roboger what he wants: NUMBERS!

## :computer: Technologies Used

* HTML & CSS
* Javascript
  - [YACCK](https://sphars.github.io/yacck/)
  - [JQuery](https://jquery.com/)
* A steady hand and a steely gaze

## :memo: Description

Mr. Roboger is hungry for numbers and wants you to give him some. Give him a number and see what he says about it. Some of them he likes more than others!

## :gear: Setup/Installation & Usage Instructions

- Go to https://wjwat.github.io/mr-robogers-neighborhood/ in any modern browser.

*or*

- [Clone this repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) to your device
- Using the [file manager](https://www.lifewire.com/what-is-a-file-manager-4589189) on your system browse to where you've cloned the repo
- Open `index.html` using your file manager and a browser of your choice

*then*

- Submit a number to Mr. Roboger.
- Click the `Submit` button to have Mr. Roboger read back to you all the numbers up to the one you gave him.
- If you'd like to reset all your answers before you `Submit` hit the `Reset` button
- If you'd you like you can feed Mr. Roboger a number again by hitting the `GIVE ME MORE NUMBERS` button

## :clipboard: Specifications

### beepBoop()

| Test | Code | Expected Return Value |
| ---- | ---- | --------------------- |
| It should return an error message if input value is 0 or less                                                                                    | beebBoop('-1')    | ["Please input a valid number."] |
| It should return an error message if input is not a valid positive integer                                                                       | beepBoop('123.1') | ["Please input a valid number."] |
| Always return an array with a length that is equal to the value inputted plus one, and containing values from 0 to our inputted value. | beepBoop(5)       | [0, 1, 2, 3, 4, 5] |
| If any iterated value contains 3 then insert the phrase 'Won't you be my neighbor?' into the array at that spot.                      | beepBoop(5)       | [0, 1, 2, 'Won't you be my neighbor?', 4, 5] |
| If any iterated value contains 2 and does not contain 3 then insert the phrase 'Boop!' into the array at that spot.                   | beepBoop(5)       | [0, 1, 'Boop!', 'Won't you be my neighbor?', 4, 5] |
| If any iterated value contains 1 and does not contain 2 or 3 then insert the phrase 'Beep!' into the array at that spot.              | beepBoop(5)       | [0, 'Beep!', 'Boop!', 'Won't you be my neighbor?', 4, 5] |

## :lady_beetle: Known Bugs

* No known issues, but if any are found please feel free to open an issue or email me at wjwat at onionslice dot org

## :warning: License

MIT License

Copyright (c) 2022 William Watkins  [ -c°▥°]-c
