import { STATE } from "./state.js";
import { operate } from "./handleOperation.js";
import handleDisplay from "./handleDisplay.js";

export default function handleEquals() {
  if (STATE._error) {
    return
  }

  // No operator stored in memory:
  if (!STATE._operation) {
    STATE._total = STATE._valueOne;
    STATE._overwrite = true;
    STATE._lastKey = 'equals';
    handleDisplay("_total");
    return;
  }

  // There is only a valueOne but no valueTwo:
  if (STATE._lastKey === 'operator') {
    const mainDisplay = document.querySelector('.display-main');
    STATE._lastStoredValue = mainDisplay.textContent.replace(",", '');

    operate(STATE._operation, STATE._valueOne, STATE._lastStoredValue);
    handleDisplay("_total");
    STATE._lastKey = 'equals';

    return;
  }

  // if (STATE._lastKey === 'numeral') {
  if (['numeral', 'memory plus', 'memory minus'].includes(STATE._lastKey)) {
    STATE._lastStoredValue = STATE._valueTwo;
    STATE._lastKey = 'equals';
    operate(STATE._operation, STATE._valueOne, STATE._valueTwo);
    handleDisplay("_total");

    return;
  }

  if (STATE._lastKey === 'memory recall') {
    const name = STATE._operation ? "_valueTwo" : "_valueOne";
    operate(STATE._operation, STATE[name], STATE._lastStoredValue);
    handleDisplay("_total");
    STATE._lastKey = 'equals';
    return;
  }

  if (STATE._lastKey === 'equals') {
    operate(STATE._operation, STATE._valueOne, STATE._lastStoredValue);
    handleDisplay("_total");

    return;
  }
}