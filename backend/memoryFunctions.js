import { STATE } from "./state.js";

function clearAll() {
  STATE.total = 0;
  STATE.memoryTotal = 0;
  STATE.valueOne = 0;
  STATE.valueTwo = 0;
  STATE.operation = null;
  STATE.lastKeyAnOperator = false;
  STATE.isPowered = true;

  const mainDisplay = document.querySelector('.display-main');

  mainDisplay.textContent = "CLEAR";
  setTimeout(() => {
    mainDisplay.textContent = 0;
  }, 750)
}

function recallMemory() {
  const mainDisplay = document.querySelector(".display-main");
  mainDisplay.textContent = STATE.memoryTotal;
}

function memPlus() {
  const mainDisplay = document.querySelector('.display-main');

  STATE.memoryTotal = +STATE.memoryTotal + +mainDisplay.textContent

  if (STATE.operation && STATE.lastKeyAnOperator) {
    STATE.valueTwo = 0;
  } else {
    STATE.valueOne = 0;
  }

}
export { clearAll, recallMemory, memPlus }