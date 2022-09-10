import togglePower from "./togglePower.js";
import handleChangeValue from "./handleChangeValue.js";
import handleDecimal from "./handleDecimal.js"
import handleOperation from "./handleOperation.js";
import { clearAll, recallMemory, memPlus } from "./memoryFunctions.js";
import { STATE } from "./state.js";

// Create global STATE object:

// Power button
const powerButton = document.querySelector(".fn-power");
powerButton.addEventListener("click", togglePower);

// Numerical buttons
const numericalButtons = document.querySelectorAll("[class*=num]");
numericalButtons.forEach(button => {
  button.addEventListener('click', handleChangeValue)
})

// Decimal Button
const decimalButton = document.querySelector(".decimal");
decimalButton.addEventListener("click", handleDecimal);

// Operators
const operatorButtons = document.querySelectorAll("[class*=op]")
operatorButtons.forEach(button => {
  const operand = button.textContent;

  button.addEventListener("click", handleOperation)
})

// Handle Display

// Clear Button
const clearButton = document.querySelector('.fn-clear');
clearButton.addEventListener('click', clearAll);


// Memory Clear
const memClearButton = document.querySelector('.fn-memClear');
memClearButton.addEventListener("click", memClear)

function memClear() {
  STATE.memoryTotal = 0;
}

// Memory Recall
const memRecallButton = document.querySelector(".fn-memRecall");
memRecallButton.addEventListener('click', recallMemory)

// Memory Plus
const memPlusButton = document.querySelector('.fn-memPlus');
memPlusButton.addEventListener('click', memPlus);

