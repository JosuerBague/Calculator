import { STATE } from "./state.js";
import handleDisplay from "./handleDisplay.js";

function clearAll() {
  const text = "Reset";
  STATE._total = "0";
  STATE._memoryTotal = "0";
  STATE._valueOne = "0";
  STATE._valueTwo = "0";
  STATE._operation = null;
  STATE._lastKey = 'clear all';

  const mainDisplay = document.querySelector('.display-main');
  const memoryIndicator = document.querySelector('.display-memory');
  const calcButtons = document.querySelectorAll('.calculator-button');
  calcButtons.forEach(btn => btn.style.pointerEvents = "none");


  mainDisplay.textContent = text;
  setTimeout(() => {
    mainDisplay.textContent = "0";
    memoryIndicator.style.opacity = 0;
    calcButtons.forEach(btn => btn.style.pointerEvents = "auto");
  }, 750);
}

function clearMemory() {
  STATE._memoryTotal = "0";
  STATE._lastKey = 'memory clear';
  const memoryIndicator = document.querySelector('.display-memory');
  memoryIndicator.style.opacity = 0;
}

function recallMemory() {
  // If there is an operation stored in memory, modify valueTwo,
  // else modify valueOne
  const name = STATE._operation ? "_valueTwo" : "_valueOne"
  STATE[name] = STATE._memoryTotal;
  handleDisplay("_memoryTotal")

  STATE._lastKey = 'memory recall';
}

function memPlus() {
  if (STATE._error) return;

  const mainDisplay = document.querySelector('.display-main');
  const memoryIndicator = document.querySelector('.display-memory');
  memoryIndicator.style.opacity = 1;

  STATE._memoryTotal = (parseFloat(STATE._memoryTotal) + parseFloat(mainDisplay.textContent)).toString();

  STATE.overwrite = true;
  STATE._lastKey = 'memory plus';
}

function memSubtract() {
  const mainDisplay = document.querySelector('.display-main');
  const memoryIndicator = document.querySelector('.display-memory');
  memoryIndicator.style.opacity = "1";

  STATE.memoryTotal = (parseFloat(STATE.memoryTotal) - parseFloat(mainDisplay.textContent)).toString();

  STATE.overwrite = true;
  STATE._lastKey = 'memory subtract';
}

export { clearAll, recallMemory, memPlus, memSubtract, clearMemory }