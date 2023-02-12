# _ROBOGER_

# https://github.com/asparageist/roboger

#### By Joseph Murray

#### A strange application rendering a response to user input data.

## Technologies Used

* JavaScript
* HTML
* CSS
* Markdown
* Bootstrap

## Description

This application will take a number from the user and count up to it from zero, replacing all numbers containing the intiger 1 with BEEP, 2 with BOOP and 3 with WON'T YOU BE MY NEIGHBOR. It can be used multiple times without refreshing.

## Setup/Installation Requirements

* Download my repository to your Desktop
* Open index.html

## Known Bugs

* None forthcoming

## License

* Any questions, comments, concerns or contributions, contact the author at josephwmurray@gmail.com

Copyright (c) 2/11/2023 Joseph Murray

## Project TDD follows:
 
Describe: ROBOGER()

Test: "it should recognize if the input is a number"
Code: "hello"
Expected Output: "HEY!! Follow the directions!!!"

Test: "it should return numbers from 0 to inputNumber"
Code: ROBOGER(5);
Expected Output: [0,1,2,3,4,5]

Test: "it should split double digit numbers into arrays"
Code: ROBOGER(15);
Expected Output [0], [1], ... , [1,5]

Test: "it should identify numbers containing the intiger 1, replacing them with BEEP"
Code: ROBOGER(5);
Expected Output: [0,BEEP,2,3,4,5]

Test: "it should identify numbers containing the intiger 2, replacing them with BOOP"
Code: ROBOGER(5);
Expected Output: [0,BEEP,BOOP,3,4,5]

Test: "it should identify numbers containing the intiger 3, replacing them with WON'T YOU BE MY NEIGHBOR"
Code: ROBOGER(5);
Expected Output: [0,BEEP,BOOP,WONT YOU BE MY NEIGHBOR,4,5]

Test: "it should fully replace double digit numbers"
Code: ROBOGER(15);
Expected Output: [1,2,...,9,BEEP,BOOP,WON'T YOU BE MY NEIGHBOR,BEEP,BEEP]