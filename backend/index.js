import togglePower from "./togglePower.js";
import handleNumeralClick from "./handleNumeralClick.js";
import handleZero from "./handleZero.js";
import handleDecimal from "./handleDecimal.js"
import { handleOperation } from "./handleOperation.js";
import handleEquals from "./handleEquals.js";
import { clearAll, clearMemory, recallMemory, memPlus, memSubtract } from "./memoryFunctions.js";
import handleDelete from "./handleDelete.js";

// Create global STATE object:

// Power button
const powerButton = document.querySelector(".fn-power");
powerButton.addEventListener("click", togglePower);

// Numerical buttons
const numericalButtons = document.querySelectorAll("[class*=num]");
numericalButtons.forEach(button => {
  button.addEventListener('click', handleNumeralClick)
})

// Zero button
const zeroButton = document.querySelector(".zero");
zeroButton.addEventListener('click', handleZero);

// Decimal Button
const decimalButton = document.querySelector(".decimal");
decimalButton.addEventListener("click", handleDecimal);

// Operators
const operatorButtons = document.querySelectorAll("[class*=op]")
operatorButtons.forEach(button => {

  button.addEventListener("click", handleOperation)
})

// Handle Display

// Clear Button
const clearButton = document.querySelector('.fn-clear');
clearButton.addEventListener('click', clearAll);


// Memory Clear
const memClearButton = document.querySelector('.fn-memClear');
memClearButton.addEventListener("click", clearMemory)

// Memory Recall
const memRecallButton = document.querySelector(".fn-memRecall");
memRecallButton.addEventListener('click', recallMemory)

// Memory Plus
const memPlusButton = document.querySelector('.fn-memPlus');
memPlusButton.addEventListener('click', memPlus);


// Memory Subtract
const memSubtractButton = document.querySelector(".fn-memSubtract");
memSubtractButton.addEventListener('click', memSubtract);

// Equals Button
const equalsButton = document.querySelector('.equals');
equalsButton.addEventListener('click', handleEquals);

// Delete Button
const deleteButton = document.querySelector('.fn-delete');
deleteButton.addEventListener('click', handleDelete)
