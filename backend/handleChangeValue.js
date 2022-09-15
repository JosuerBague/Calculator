import { STATE } from "./state.js";
import handleDisplay from "./handleDisplay.js";

function handleChangeValue(e) {
  const mainDisplay = document.querySelector('.display-main');

  const currDisplay = mainDisplay.textContent.replace(/\W+/g, '');

  if (currDisplay.length >= 16) {
    STATE.lastKeyAnOperator = false;
    STATE.overwrite = false;
    STATE.postOperation = false;
    console.log("not updating")
    return;
  }

  // Check if the number clicked is zero.
  +e.target.textContent === 0 ? handleZero() : handleNonZero(e.target.textContent);
  STATE.lastKeyAnOperator = false;
  STATE.overwrite = false;
  STATE.postOperation = false;
  handleDisplay();
  console.log(STATE)
}

function handleNonZero(val) {
  // Check if the number input happens right after invoking a memory function.
  // In such a case the input should overwrite the current value stored.
  if (STATE.overwrite) {
    STATE.valueTwo = val;
    STATE.overwrite = false;
    return
  }

  // If there is an operation stored in memory, if true then change valueTwo.
  // Else change valueOne
  if (STATE.operation) {
    STATE.valueTwo = STATE.valueTwo !== "0" ? STATE.valueTwo + val : val;

  } else {
    STATE.valueOne = STATE.valueOne !== "0" ? STATE.valueOne + val : val;
  }
}

function handleZero() {
  // If there is an operation stored in memory, if true then change valueTwo.
  // Else change valueOne
  if (STATE.operation) {
    STATE.valueTwo = STATE.valueTwo === 0 ? 0 : `${STATE.valueTwo + 0}`;
  }
  else {
    STATE.valueOne = STATE.valueOne === 0 ? 0 : `${STATE.valueOne + 0}`;
  }
}

export default handleChangeValue;