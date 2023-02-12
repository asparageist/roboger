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
        for (dAi = 0; dAi < testNumberArray.length; dAi++) {
          let arrayInt = parseInt(testNumberArray[dAi]);
          if (arrayInt === 1) {
            displayArray.push("BEEP");
          } else if (arrayInt === 2) {
            displayArray.push("BOOP");
          } else if (arrayInt === 3) {
            displayArray.push("WON'T YOU BE MY NEIGHBOR");
          } else {
            displayArray.push(arrayInt);
          }
        }
      }
      console.log(displayArray);
    }
  }
}