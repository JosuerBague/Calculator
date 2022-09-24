import { STATE } from "./state.js";
import handleDisplay from "./handleDisplay.js";

export default function handleDecimal() {
  if (STATE._error) return;

  // If there is an operation store in memory, if true then change valueTwo.
  // Else change valueOne
  const name = STATE._operation ? "_valueTwo" : "_valueOne";

  if (STATE[name].includes('.')) return;
  STATE[name] = STATE[name] + '.';

  STATE._postOperation = false;
  STATE._lastKey = "numeral";
  handleDisplay(name);
}