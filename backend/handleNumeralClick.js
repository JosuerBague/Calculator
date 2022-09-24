import { STATE } from "./state.js";
import handleDisplay from "./handleDisplay.js";

function handleNumeralClick(e) {
  // If the click happens post memory plus or minus (overwrite === true) &&
  // there is no saved operator in memory, change valueOne:
  if (STATE._overwrite) {
    let name = STATE._operation ? "_valueTwo" : "_valueOne";

    changeValue(name, e.target.textContent);
    handleDisplay(name);
    STATE._lastKey = 'numeral';
    STATE._overwrite = false;
    STATE._postOperation = false;
    return;
  }

  // If there is no stored operation change valueOne:
  if (!STATE._operation) {

    if (STATE._valueOne.replace('.', '').length === 16) return;
    changeValue('_valueOne', e.target.textContent);
    handleDisplay('_valueOne');
  }
  else {
    if (STATE._valueTwo.replace('.', '').length === 16) return;
    changeValue('_valueTwo', e.target.textContent);
    handleDisplay('_valueTwo');
  }

  STATE._lastKey = 'numeral';
  STATE._overwrite = false;
  STATE._postOperation = false;
}

function changeValue(name, input) {
  if (STATE._overwrite) {
    STATE[name] = input;
    return;
  }

  STATE[name] = STATE[name] === '0' ? input : STATE[name] + input;
}

export default handleNumeralClick;