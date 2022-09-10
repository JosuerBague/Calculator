import { STATE } from "./state.js";

export default function handleDisplay() {
  const mainDisplay = document.querySelector(".display-main");

  // 1) Check if there is a saved operator:
  // 2) If there is no saved operator then show the value of val1
  // 3) If there is a saved operator and the last key pressed was an operator show val1
  // 4) If there is a save operator and the last key pressed was not an operator show val2

  if (!STATE.operation) { // If there is no saved operator
    mainDisplay.textContent = STATE.valueOne;
  }
  else if (STATE.operation && STATE.lastKeyAnOperator) {
    mainDisplay.textContent = STATE.valueOne;
  }
  else if (STATE.operation && !STATE.lastKeyAnOperator) {
    mainDisplay.textContent = STATE.valueTwo;
  }
}
