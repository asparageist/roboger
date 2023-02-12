function hideError() {
  document.getElementById("error-message").setAttribute("class", "hidden");
}

window.onload = function() {
  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    hideError();
    const displayArray = [];
    const inputNumber = parseInt(document.querySelector("input#inputNumber").value);
    const BEEP = "BEEP";
    const BOOP = "BOOP";
    const WONT = "WON'T YOU BE MY NEIGHBOR";
    if (isNaN(inputNumber)) {
      document.getElementById("error-message").removeAttribute("class");
    } else {
      for (i = 0; i <= inputNumber; i++) {
        displayArray.push(i);
      };
      for (i = 0; i < displayArray.length; i++) {
        const testNumber = (i);
        const testNumberString = testNumber.toString();
        const testNumberArray = testNumberString.split('');
        console.log(testNumberArray);
        // for (dAi = 0; dAi < testNumberArray.length; dAi++) {
          // let arrayInt = parseInt(dAi);
          // if (arrayInt === 1) {
          // }
        // }
      }
      
    };
  }
}