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
