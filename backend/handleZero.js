import handleDisplay from "./handleDisplay.js";
import { STATE } from "./state.js";

export default function handleZero() {
  console.log('clicked')
  if (STATE.operation) {
    STATE.valueTwo = STATE.valueTwo === '0' ? '0' : STATE.valueTwo + '0';
  }
  else {
    STATE.valueOne = STATE.valueOne === '0' ? '0' : STATE.valueOne + '0';
  }

  STATE._lastKeyAnOperator = false;
  STATE._overwrite = false;
  STATE._postOperation = false;
  handleDisplay();
}