import { STATE } from "./state.js";
import handleDisplay from "./handleDisplay.js";

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
  }, 750);
  console.log(STATE);
}

function recallMemory() {
  // If there is an operation stored in memory, modify valueTwo,
  // else modify valueOne
  const name = STATE._operation ? "_valueTwo" : "_valueOne"
  STATE[name] = STATE._memoryTotal;
  handleDisplay("_memoryTotal")

  STATE.lastKeyAnOperator = false;
  console.log(STATE);
}

function memPlus() {
  if (STATE._error) return;

  const mainDisplay = document.querySelector('.display-main');

  STATE._memoryTotal = (parseFloat(STATE._memoryTotal) + parseFloat(mainDisplay.textContent)).toString();

  STATE.overwrite = true;
  STATE.lastKeyAnOperator = false;
  console.log(STATE);
}

function memSubtract() {
  const mainDisplay = document.querySelector('.display-main');

  STATE.memoryTotal = (parseFloat(STATE.memoryTotal) - parseFloat(mainDisplay.textContent)).toString();

  STATE.overwrite = true;
  STATE.lastKeyAnOperator = false;
  console.log(STATE);
}

export { clearAll, recallMemory, memPlus, memSubtract }