import { STATE } from "./state";

function handleChangeValue(e) {
  // Check if the number clicked is zero.
  +e.target.textContent === 0 ? handleZero() : handleNonZero(e.target.textContent);
  STATE.lastKeyAnOperator = false;
  STATE.overwrite = false;
  handleDisplay();
  console.log(STATE)
}

function handleNonZero(val) {
  // If there is an operation stored in memory, if true then change valueTwo.
  // Else change valueOne
  if (STATE.operation) {

    // Check if number click happens post memory function click:
    if (STATE.overwrite) {
      STATE.valueTwo = val;
      STATE.overwrite = false;
      return
    }

    STATE.valueTwo = STATE.valueTwo ? STATE.valueTwo + val : val;

  } else {

    if (STATE.overwrite) {
      STATE.valueOne = val;
      STATE.overwrite = false;
      return;
    }

    STATE.valueOne = STATE.valueOne ? STATE.valueOne + val : val;
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