import { STATE } from "./state.js";
import handleDisplay from "./handleDisplay.js";

export default function handleDecimal() {
  // If there is an operation store in memory, if true then change valueTwo.
  // Else change valueOne
  if (STATE.operation) {
    STATE.valueTwo = STATE.valueTwo.includes('.') ? STATE.valueTwo : STATE.valueTwo + '.';
  }
  else {
    STATE.valueOne = STATE.valueOne.includes('.') ? STATE.valueOne : STATE.valueOne + '.';
  }
  STATE.postOperation = false;
  STATE.lastKeyAnOperator = false;
  handleDisplay();
}