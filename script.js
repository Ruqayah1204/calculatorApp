const displayContainer = document.querySelector("#display");
const displayValue = document.getElementById("display-value");
const displayResult = document.getElementById("display-result");
const buttons = document.querySelectorAll("button");
// con;

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id === "clear") {
      displayValue.innerText = " ";
      displayResult.innerText = " ";
      //   displayContainer.innerText = " ";
    } else if (item.id === "delete") {
      let string = displayValue.innerText.toString();
      displayValue.innerText = string.slice(0, -1);
    } else if (displayValue.innerText != "" && item.id === "equal") {
      displayResult.style.display = "flex";
      displayResult.innerText = eval(displayValue.innerText);
    } else if (displayValue.innerText == "" && item.id === "equal") {
      displayValue.innerText = "Empty!";
      setTimeout(() => (displayValue.innerText = " "), 2000);
    } else {
      displayValue.innerText += item.id;
    }
  };
});
// con;

buttons.forEach((item) => {
  const handleCalculationLogic = () => {
    if (item.id === "clear") {
      displayValue.innerText = " ";
      displayResult.innerText = " ";
      displayResult.style.display = "none";
      displayResult.style.opacity = "0";
      displayValue.style.fontSize = "24px";
    } else if (item.id === "delete") {
      let string = displayValue.innerText.toString();
      displayValue.innerText = string.slice(0, -1);
    } else if (displayValue.innerText != "" && item.id === "equal") {
      let expression = displayValue.innerText.replace(/%/g, "/100");
      displayResult.style.display = "flex";
      displayResult.innerText = eval(expression);
      setTimeout(() => {
        displayValue.style.transform = "translateY(-5px)";
        displayValue.style.fontSize = "18px";
        displayResult.style.opacity = "1";
      }, 10);
    } else if (displayValue.innerText == "" && item.id === "equal") {
      displayValue.innerText = "Empty!";
      setTimeout(() => (displayValue.innerText = " "), 2000);
    } else {
      displayValue.innerText += item.id;
    }
  };

  item.onclick = () => {
    handleCalculationLogic();
  };

  //   For Keyboard event listener
  window.addEventListener("keydown", (e) => {
    if (
      e.key === item.id ||
      (item.id === "equal" && e.key === "Enter") ||
      (item.id === "clear" && e.key === "Delete") ||
      (item.id === "delete" && e.key === "Backspace")
    ) {
      handleCalculationLogic();
    }
  });
});

const calculator = document.querySelector(".calculator");
const Buttons = document.querySelector(".buttons");
const toggleBtn = document.querySelector(".toggle-theme");
let isDarkTheme = true;
toggleBtn.onclick = () => {
  calculator.classList.toggle("dark-theme");
  toggleBtn.classList.toggle("active");
  Buttons.classList.toggle("dark");
  isDarkTheme = !true;
};
