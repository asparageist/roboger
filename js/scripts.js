function hideError() {
  document.getElementById("error-message").setAttribute("class", "hidden");
}

window.onload = function() {
  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    hideError();
    const displayArray = [];
    const inputNumber = parseInt(document.querySelector("input#inputNumber").value);
    if (isNaN(inputNumber)) {
      document.getElementById("error-message").removeAttribute("class");
    } else {
      for (i = 0; i <= inputNumber; i++) {
        displayArray.push(i);
      };
      
    };
  }
}