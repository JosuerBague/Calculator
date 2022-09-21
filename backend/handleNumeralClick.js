import { STATE } from "./state.js";
import handleDisplay from "./handleDisplay.js";

function handleNumeralClick(e) {
  // If the click happens post memory plus or minus (overwrite === true),
  // change valueTwo:
  if (STATE._overwrite) {
    changeValue('_valueTwo', e.target.textContent);
    STATE._lastKeyAnOperator = false;
    STATE._overwrite = false;
    STATE._postOperation = false;
    handleDisplay();
    return;
  }

  // If there is no stored operation change valueOne:
  if (!STATE._operation) {

    if (STATE._valueOne.replace('.', '').length === 16) return;
    changeValue('_valueOne', e.target.textContent);
  }
  else {
    if (STATE._valueTwo.replace('.', '').length === 16) return;
    changeValue('_valueTwo', e.target.textContent);
  }
  console.log(STATE)

  STATE._lastKeyAnOperator = false;
  STATE._overwrite = false;
  STATE._postOperation = false;
  handleDisplay();
}

function changeValue(name, input) {
  STATE[name] = STATE[name] === '0' ? input : STATE[name] + input;
}

export default handleNumeralClick;