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

  console.log(STATE)
}

function recallMemory() {
  const mainDisplay = document.querySelector(".display-main");
  mainDisplay.textContent = STATE.memoryTotal;

  // If there is an operation stored in memory, modify valueTwo,
  // else modify valueOne
  if (STATE.operation) {
    STATE.valueTwo = STATE.memoryTotal;
  }
  else {
    STATE.valueOne = STATE.memoryTotal;
  }

  STATE.lastKeyAnOperator = false;
  console.log(STATE)
}

function memPlus() {
  const mainDisplay = document.querySelector('.display-main');

  STATE.memoryTotal = +STATE.memoryTotal + +mainDisplay.textContent

  STATE.overwrite = true;
  STATE.lastKeyAnOperator = false;

  console.log(STATE)
}

function memSubtract() {
  const mainDisplay = document.querySelector('.display-main');

  STATE.memoryTotal = +STATE.memoryTotal - +mainDisplay.textContent;

  STATE.overwrite = true;
  STATE.lastKeyAnOperator = false;

  console.log(STATE);
}

export { clearAll, recallMemory, memPlus, memSubtract }