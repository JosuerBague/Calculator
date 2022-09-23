import handleDisplay from "./handleDisplay.js";
import { STATE } from "./state.js";

export default function handleZero() {
  const name = STATE._operation ? "_valueTwo" : "_valueOne"

  STATE[name] = STATE[name] === '0' ? '0' : STATE[name] + '0';

  STATE._lastKey = 'numeral';
  STATE._overwrite = false;
  STATE._postOperation = false;
  handleDisplay(name);
}