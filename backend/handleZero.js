import handleDisplay from "./handleDisplay.js";
import { STATE } from "./state.js";

export default function handleZero() {
  console.log('clicked')
  if (!STATE._operation) {

    if (STATE._valueOne.replace('.', '').length === 16) return;
    STATE._valueOne = STATE._valueOne === '0' ? '0' : STATE._valueOne + '0';
  }
  else {

    if (STATE._valueTwo.replace('.', '').length === 16) return;
    STATE._valueTwo = STATE._valueTwo === '0' ? '0' : STATE._valueTwo + '0';
  }

  STATE._lastKeyAnOperator = false;
  STATE._overwrite = false;
  STATE._postOperation = false;
  handleDisplay();
}