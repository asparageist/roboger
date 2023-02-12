function hideError() {
  document.getElementById("error-message").setAttribute("class", "hidden");
}

window.onload = function() {
  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    hideError();
    const inputArray = [];
    const displayArray = [];
    const inputNumber = parseInt(document.querySelector("input#inputNumber").value);
    if (isNaN(inputNumber)) {
      document.getElementById("error-message").removeAttribute("class");
    } else {
      for (i = 0; i <= inputNumber; i++) {
        inputArray.push(i);
      };
      for (i = 0; i < inputArray.length; i++) {
        const testNumber = (i);
        const testNumberString = testNumber.toString();
        const testNumberArray = testNumberString.split('');
        let BEEP = false;
        let BOOP = false;
        let WONT = false;
        for (dAi = 0; dAi < testNumberArray.length; dAi++) {
          let arrayInt = parseInt(testNumberArray[dAi]);
          if (arrayInt === 1) {
            BEEP = true;
          } else if (arrayInt === 2) {
            BOOP = true;
          } else if (arrayInt === 3) {
            WONT = true;
          }        
        }
        if (BEEP === true && BOOP === false && WONT === false) {
          displayArray.push("BEEP");
        } else if (BOOP === true && WONT === false) {
          displayArray.push("BOOP");
        } else if (WONT === true) {
          displayArray.push("WON'T YOU BE MY NEIGHBOR");
        } else {
          displayArray.push(testNumber);
        }
      }

      console.log(displayArray);
    }
  }
}