function hideError() {
  document.getElementById("error-message").setAttribute("class", "hidden");
}

window.onload = function() {
  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    hideError();
    const displayArray = [];
    const inputNumber = parseInt(document.querySelector("input#inputNumber").value);
    if (inputNumber != Number) {
      document.getElementById("error-message").removeAttribute("class");
    } else {
      for (i = 0; i < inputNumber.length; i++) {
        console.log(i);
        let arrayNum = inputNumber(i);
        displayArray.push(arrayNum);
        console.log(arrayNum);
      };
    };
  console.log(displayArray);
  }
}